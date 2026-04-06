import { createClient } from 'contentful-management';

const accessToken = process.env.CONTENTFUL_MANAGEMENT_API!;

export const contentfulManagementClient = createClient({
  accessToken,
});

export const getEnvironment = async () => {
  const space = await contentfulManagementClient.getSpace(process.env.CONTENTFUL_SPACE_ID!);

  return space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT!);
};
