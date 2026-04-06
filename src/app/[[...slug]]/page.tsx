/* eslint-disable no-console */
'use cache';

import { notFound, redirect } from 'next/navigation';

import { contentfulClient } from '@/lib/graphql/contentfulClient';
import { redirectCheck } from '@/lib/redirects';
import renderMetadata from '@/lib/seo/renderMetadata';
import componentGenerator from '@/components/componentGenerator';

import type { Metadata } from 'next';

export const generateStaticParams = async () => [{ slug: ['_'] }];

export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
  const { slug } = await params;
  const slugPath = slug?.join('/') ?? '';
  const pathname = slugPath || '/';

  try {
    const client = await contentfulClient();
    const { templatePageCollection } = await client.PageSeoByPathname({ pathname });
    const page = templatePageCollection?.items?.[0];

    if (!page) {
      return renderMetadata(pathname, {
        pageTitle: 'Page not found - contentful-test',
        noIndex: true,
        noFollow: true,
      });
    }

    return renderMetadata(pathname, page.seo);
  } catch (error) {
    console.error('Failed to fetch metadata:', error);

    return renderMetadata(pathname, {
      pageTitle: 'contentful-test',
      noIndex: true,
      noFollow: true,
    });
  }
};

const Page = async ({ params }: Params) => {
  const { slug } = await params;
  const slugPath = slug?.join('/') ?? '';
  const pathname = slugPath || '/';
  const redirectPathnameCheck = `/${slugPath}`;

  try {
    const redirectEntry = await redirectCheck(redirectPathnameCheck);
    if (redirectEntry) {
      redirect(redirectEntry.destination);
    }
  } catch (error) {
    console.error('Redirect check failed:', error);
  }

  try {
    const client = await contentfulClient();

    console.time(`[PageByPathname Query] ${pathname}`);
    const { templatePageCollection } = await client.PageByPathname({ pathname });
    console.timeEnd(`[PageByPathname Query] ${pathname}`);
    const page = templatePageCollection?.items?.[0];

    if (!page) {
      notFound();
    }

    const sections = page.sectionsCollection?.items;

    return <componentGenerator sections={sections} />;
  } catch (error) {
    console.error('Failed to fetch page:', error);
    notFound();
  }
};

export default Page;
