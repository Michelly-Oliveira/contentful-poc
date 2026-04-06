import type { Metadata } from 'next';

export interface SEO {
  pageTitle?: string | null;
  pageDescription?: string | null;
  noFollow?: boolean | null;
  noIndex?: boolean | null;
  openGraphImage?: {
    url?: string | null;
    title?: string | null;
    description?: string | null;
    width?: number | null;
    height?: number | null;
  } | null;
}

const renderMetadata = (slug?: string | null, seo?: SEO | null): Metadata => {
  const noIndexEnv = process.env.NEXT_PUBLIC_NO_INDEX === 'true';

  const title = seo?.pageTitle || 'contentful-test';
  const description = seo?.pageDescription || '';
  const image = seo?.openGraphImage?.url || '';
  const site = 'https://www.contentful-test.com';
  const url = slug === '/' ? site : `${site}/${slug}`;
  const index = !noIndexEnv && !seo?.noIndex;
  const follow = !noIndexEnv && !seo?.noFollow;

  return {
    title,
    description,
    openGraph: {
      images: image ? [image] : [],
      title,
      description,
      url,
      siteName: 'contentful-test',
    },
    robots: {
      index,
      follow,
    },
    alternates: {
      canonical: url,
    },
  };
};

export default renderMetadata;
