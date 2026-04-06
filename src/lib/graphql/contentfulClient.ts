import { GraphQLClient } from 'graphql-request';
import { draftMode } from 'next/headers';

import { getSdk } from '@/lib/graphql/sdk';

const space = process.env.CONTENTFUL_SPACE_ID;
const environment = process.env.CONTENTFUL_ENVIRONMENT;
const accessToken = process.env.CONTENTFUL_API;
const previewAccessToken = process.env.CONTENTFUL_PREVIEW_API;

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${space}/environments/${environment}`;

export const contentfulClient = async (preview = false) => {
  const { isEnabled } = await draftMode();
  const token = preview || isEnabled ? previewAccessToken : accessToken;

  const client = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return getSdk(client);
};
