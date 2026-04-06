import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const AssetFragmentDoc = gql`
  fragment Asset on Asset {
    url
    title
    description
    width
    height
  }
`;
export const SeoFragmentDoc = gql`
  fragment Seo on MetaSeo {
    internalName
    pageTitle
    pageDescription
    openGraphImage {
      ...Asset
    }
    noIndex
    noFollow
  }
  ${AssetFragmentDoc}
`;
export const ButtonFragmentDoc = gql`
  fragment Button on MoleculeButton {
    sys {
      id
    }
    internalName
    buttonText
    link
    endIcon
    variant
  }
`;
export const AccordionFragmentDoc = gql`
  fragment Accordion on ComponentAccordion {
    sys {
      id
    }
    internalTitle
    sectionId
    variant
    eyebrow
    heading
    headingLevel
    body {
      json
    }
    accordionItemsCollection {
      items {
        sys {
          id
        }
        label
        content {
          json
        }
      }
    }
    sectionPadding
    layout
    buttonsCollection {
      items {
        ...Button
      }
    }
  }
  ${ButtonFragmentDoc}
`;
export const HeadingFragmentDoc = gql`
  fragment Heading on SectionHeadingBlock {
    sys {
      id
    }
    internalTitle
    sectionId
    sectionPadding
    variant
    eyebrow
    headingLevel
    heading
    body {
      json
    }
    buttonsCollection {
      items {
        ...Button
      }
    }
    layout
  }
  ${ButtonFragmentDoc}
`;
export const HeroFragmentDoc = gql`
  fragment Hero on SectionHero {
    sys {
      id
    }
    internalTitle
    sectionId
    sectionPadding
    variant
    eyebrow
    headingLevel
    heading
    body {
      json
    }
    buttonsCollection {
      items {
        ...Button
      }
    }
    asset {
      url
      title
      description
      width
      height
    }
    assetPosition
  }
  ${ButtonFragmentDoc}
`;
export const ImageBlockFragmentDoc = gql`
  fragment ImageBlock on SectionImageBlock {
    sys {
      id
    }
    internalTitle
    sectionId
    sectionPadding
    image {
      url
      title
      description
      width
      height
    }
    caption {
      json
    }
  }
`;
export const GetGlobalFooterDocument = gql`
  query GetGlobalFooter {
    globalFooterCollection(limit: 1) {
      items {
        __typename
        title
        sys {
          id
        }
        logo {
          ...Asset
        }
      }
    }
  }
  ${AssetFragmentDoc}
`;
export const GetGlobalNavigationDocument = gql`
  query GetGlobalNavigation {
    globalNavigationCollection(limit: 1) {
      items {
        __typename
        title
        sys {
          id
        }
        logo {
          ...Asset
        }
      }
    }
  }
  ${AssetFragmentDoc}
`;
export const GetAllRedirectsDocument = gql`
  query GetAllRedirects($limit: Int = 100, $skip: Int = 0) {
    redirectCollection(limit: $limit, skip: $skip) {
      total
      items {
        sys {
          id
        }
        source
        destination
        permanent
      }
    }
  }
`;
export const PageSeoByPathnameDocument = gql`
  query PageSeoByPathname($pathname: String!, $preview: Boolean = false) {
    templatePageCollection(where: { pathname: $pathname }, preview: $preview, limit: 1) {
      items {
        sys {
          id
        }
        seo {
          ...Seo
        }
      }
    }
  }
  ${SeoFragmentDoc}
`;
export const PageByPathnameDocument = gql`
  query PageByPathname($pathname: String!, $preview: Boolean = false) {
    templatePageCollection(where: { pathname: $pathname }, preview: $preview, limit: 1) {
      items {
        sys {
          id
        }
        title
        pathname
        sectionsCollection {
          items {
            __typename
            ...Accordion
            ...Heading
            ...Hero
            ...ImageBlock
          }
        }
      }
    }
  }
  ${AccordionFragmentDoc}
  ${HeadingFragmentDoc}
  ${HeroFragmentDoc}
  ${ImageBlockFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetGlobalFooter(
      variables?: GetGlobalFooterQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
      signal?: RequestInit['signal'],
    ): Promise<GetGlobalFooterQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<GetGlobalFooterQuery>({
            document: GetGlobalFooterDocument,
            variables,
            requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
            signal,
          }),
        'GetGlobalFooter',
        'query',
        variables,
      );
    },
    GetGlobalNavigation(
      variables?: GetGlobalNavigationQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
      signal?: RequestInit['signal'],
    ): Promise<GetGlobalNavigationQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<GetGlobalNavigationQuery>({
            document: GetGlobalNavigationDocument,
            variables,
            requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
            signal,
          }),
        'GetGlobalNavigation',
        'query',
        variables,
      );
    },
    GetAllRedirects(
      variables?: GetAllRedirectsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
      signal?: RequestInit['signal'],
    ): Promise<GetAllRedirectsQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<GetAllRedirectsQuery>({
            document: GetAllRedirectsDocument,
            variables,
            requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
            signal,
          }),
        'GetAllRedirects',
        'query',
        variables,
      );
    },
    PageSeoByPathname(
      variables: PageSeoByPathnameQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
      signal?: RequestInit['signal'],
    ): Promise<PageSeoByPathnameQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<PageSeoByPathnameQuery>({
            document: PageSeoByPathnameDocument,
            variables,
            requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
            signal,
          }),
        'PageSeoByPathname',
        'query',
        variables,
      );
    },
    PageByPathname(
      variables: PageByPathnameQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
      signal?: RequestInit['signal'],
    ): Promise<PageByPathnameQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<PageByPathnameQuery>({
            document: PageByPathnameDocument,
            variables,
            requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
            signal,
          }),
        'PageByPathname',
        'query',
        variables,
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
