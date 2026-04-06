'use cache';

import Image from 'next/image';

import { contentfulClient } from '@/lib/graphql/contentfulClient';

import type { FC } from 'react';

export const Footer: FC = async () => {
  try {
    const data = await (await contentfulClient()).GetGlobalFooter();
    const logo = data.globalFooterCollection?.items[0]?.logo;

    return <footer>{logo?.url && <Image src={logo.url} alt={logo.title ?? 'Logo'} width={150} height={70} />}</footer>;
  } catch (error) {
    console.error('Failed to fetch footer:', error);

    return <footer />;
  }
};
