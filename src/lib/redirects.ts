/* eslint-disable no-console */
'use cache';

import { contentfulClient } from '@/lib/graphql/contentfulClient';

import staticRedirects from '../../public/redirects.json';

interface RedirectEntry {
  source: string;
  destination: string;
  permanent?: boolean;
}

interface StaticRedirect {
  url: string;
  mappedUrl: string;
}

const normalizeUrl = (url: string) => {
  let normalized = url.toLowerCase();
  if (normalized.endsWith('/') && normalized.length > 1) {
    normalized = normalized.slice(0, -1);
  }

  return normalized;
};

const fetchContentfulRedirects = async (): Promise<RedirectEntry[]> => {
  const client = await contentfulClient();
  const redirects: RedirectEntry[] = [];
  let skip = 0;
  const limit = 100;
  let total = 0;

  do {
    const data = await client.GetAllRedirects({ limit, skip });
    const collection = data.redirectCollection;

    if (!collection) break;

    total = collection.total;

    for (const item of collection.items) {
      if (item?.source && item?.destination) {
        redirects.push({
          source: item.source,
          destination: item.destination,
          permanent: item.permanent ?? false,
        });
      }
    }

    skip += limit;
  } while (skip < total);

  return redirects;
};

export const getRedirectMap = async (): Promise<Map<string, RedirectEntry>> => {
  const redirectMap = new Map<string, RedirectEntry>();

  for (const redirect of (staticRedirects as { redirects: StaticRedirect[] }).redirects) {
    const normalizedUrl = normalizeUrl(redirect.url);
    redirectMap.set(normalizedUrl, {
      source: redirect.url,
      destination: redirect.mappedUrl,
      permanent: true,
    });
  }

  const contentfulRedirects = await fetchContentfulRedirects();
  for (const redirect of contentfulRedirects) {
    const normalizedUrl = normalizeUrl(redirect.source);
    redirectMap.set(normalizedUrl, redirect);
  }

  return redirectMap;
};

export const redirectCheck = async (pathname: string): Promise<RedirectEntry | null> => {
  console.time(`[Redirect Check] ${pathname}`);
  const redirectMap = await getRedirectMap();
  console.timeEnd(`[Redirect Check] ${pathname}`);
  const normalizedPathname = normalizeUrl(pathname);

  return redirectMap.get(normalizedPathname) ?? null;
};
