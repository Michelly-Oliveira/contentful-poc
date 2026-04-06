'use cache';

import Image from 'next/image';

import { contentfulClient } from '@/lib/graphql/contentfulClient';

import type { FC } from 'react';

export const Navigation: FC = async () => {
  try {
    const data = await (await contentfulClient()).GetGlobalNavigation();
    const logo = data.globalNavigationCollection?.items[0]?.logo;

    return <nav>{logo?.url && <Image src={logo.url} alt={logo.title ?? 'Logo'} width={129} height={60} />}</nav>;
  } catch (error) {
    console.error('Failed to fetch navigation:', error);

    return <nav />;
  }
};
