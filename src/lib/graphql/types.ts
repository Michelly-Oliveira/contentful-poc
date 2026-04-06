export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  Dimension: { input: any; output: any };
  HexColor: { input: any; output: any };
  JSON: { input: any; output: any };
  Quality: { input: any; output: any };
}

export interface Asset {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
}

export interface AssetContentTypeArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface AssetDescriptionArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface AssetFileNameArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface AssetHeightArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface AssetLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface AssetSizeArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface AssetTitleArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface AssetUrlArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface AssetWidthArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface AssetCollection {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export interface AssetFilter {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
}

export interface AssetLinkingCollections {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  globalFooterCollection?: Maybe<GlobalFooterCollection>;
  globalNavigationCollection?: Maybe<GlobalNavigationCollection>;
  metaSeoCollection?: Maybe<MetaSeoCollection>;
  sectionHeroCollection?: Maybe<SectionHeroCollection>;
  sectionImageBlockCollection?: Maybe<SectionImageBlockCollection>;
}

export interface AssetLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface AssetLinkingCollectionsGlobalFooterCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface AssetLinkingCollectionsGlobalNavigationCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface AssetLinkingCollectionsMetaSeoCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface AssetLinkingCollectionsSectionHeroCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface AssetLinkingCollectionsSectionImageBlockCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

export interface ComponentAccordion extends Entry, _Node {
  __typename?: 'ComponentAccordion';
  _id: Scalars['ID']['output'];
  accordionItemsCollection?: Maybe<ComponentAccordionAccordionItemsCollection>;
  body?: Maybe<ComponentAccordionBody>;
  buttonsCollection?: Maybe<ComponentAccordionButtonsCollection>;
  contentfulMetadata: ContentfulMetadata;
  eyebrow?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  headingLevel?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  layout?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentAccordionLinkingCollections>;
  sectionId?: Maybe<Scalars['String']['output']>;
  sectionPadding?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  variant?: Maybe<Scalars['String']['output']>;
}

export interface ComponentAccordionAccordionItemsCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentAccordionAccordionItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OrganismExpandableItemFilter>;
}

export interface ComponentAccordionBodyArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface ComponentAccordionButtonsCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentAccordionButtonsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MoleculeButtonFilter>;
}

export interface ComponentAccordionEyebrowArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface ComponentAccordionHeadingArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface ComponentAccordionHeadingLevelArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface ComponentAccordionInternalTitleArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface ComponentAccordionLayoutArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface ComponentAccordionLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface ComponentAccordionSectionIdArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface ComponentAccordionSectionPaddingArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface ComponentAccordionVariantArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface ComponentAccordionAccordionItemsCollection {
  __typename?: 'ComponentAccordionAccordionItemsCollection';
  items: Array<Maybe<OrganismExpandableItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export enum ComponentAccordionAccordionItemsCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface ComponentAccordionBody {
  __typename?: 'ComponentAccordionBody';
  json: Scalars['JSON']['output'];
  links: ComponentAccordionBodyLinks;
}

export interface ComponentAccordionBodyAssets {
  __typename?: 'ComponentAccordionBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
}

export interface ComponentAccordionBodyEntries {
  __typename?: 'ComponentAccordionBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
}

export interface ComponentAccordionBodyLinks {
  __typename?: 'ComponentAccordionBodyLinks';
  assets: ComponentAccordionBodyAssets;
  entries: ComponentAccordionBodyEntries;
  resources: ComponentAccordionBodyResources;
}

export interface ComponentAccordionBodyResources {
  __typename?: 'ComponentAccordionBodyResources';
  block: Array<ComponentAccordionBodyResourcesBlock>;
  hyperlink: Array<ComponentAccordionBodyResourcesHyperlink>;
  inline: Array<ComponentAccordionBodyResourcesInline>;
}

export interface ComponentAccordionBodyResourcesBlock extends ResourceLink {
  __typename?: 'ComponentAccordionBodyResourcesBlock';
  sys: ResourceSys;
}

export interface ComponentAccordionBodyResourcesHyperlink extends ResourceLink {
  __typename?: 'ComponentAccordionBodyResourcesHyperlink';
  sys: ResourceSys;
}

export interface ComponentAccordionBodyResourcesInline extends ResourceLink {
  __typename?: 'ComponentAccordionBodyResourcesInline';
  sys: ResourceSys;
}

export interface ComponentAccordionButtonsCollection {
  __typename?: 'ComponentAccordionButtonsCollection';
  items: Array<Maybe<MoleculeButton>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export enum ComponentAccordionButtonsCollectionOrder {
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  EndIconAsc = 'endIcon_ASC',
  EndIconDesc = 'endIcon_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC',
}

export interface ComponentAccordionCollection {
  __typename?: 'ComponentAccordionCollection';
  items: Array<Maybe<ComponentAccordion>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export interface ComponentAccordionFilter {
  AND?: InputMaybe<Array<InputMaybe<ComponentAccordionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentAccordionFilter>>>;
  accordionItems?: InputMaybe<CfOrganismExpandableItemNestedFilter>;
  accordionItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttons?: InputMaybe<CfMoleculeButtonNestedFilter>;
  buttonsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  eyebrow?: InputMaybe<Scalars['String']['input']>;
  eyebrow_contains?: InputMaybe<Scalars['String']['input']>;
  eyebrow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  eyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  eyebrow_not?: InputMaybe<Scalars['String']['input']>;
  eyebrow_not_contains?: InputMaybe<Scalars['String']['input']>;
  eyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  headingLevel?: InputMaybe<Scalars['String']['input']>;
  headingLevel_contains?: InputMaybe<Scalars['String']['input']>;
  headingLevel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingLevel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingLevel_not?: InputMaybe<Scalars['String']['input']>;
  headingLevel_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingLevel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  layout?: InputMaybe<Scalars['String']['input']>;
  layout_contains?: InputMaybe<Scalars['String']['input']>;
  layout_exists?: InputMaybe<Scalars['Boolean']['input']>;
  layout_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  layout_not?: InputMaybe<Scalars['String']['input']>;
  layout_not_contains?: InputMaybe<Scalars['String']['input']>;
  layout_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Scalars['String']['input']>;
  sectionId_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId_not?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionPadding?: InputMaybe<Scalars['String']['input']>;
  sectionPadding_contains?: InputMaybe<Scalars['String']['input']>;
  sectionPadding_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionPadding_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionPadding_not?: InputMaybe<Scalars['String']['input']>;
  sectionPadding_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionPadding_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface ComponentAccordionLinkingCollections {
  __typename?: 'ComponentAccordionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  templatePageCollection?: Maybe<TemplatePageCollection>;
}

export interface ComponentAccordionLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface ComponentAccordionLinkingCollectionsTemplatePageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentAccordionLinkingCollectionsTemplatePageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export enum ComponentAccordionLinkingCollectionsTemplatePageCollectionOrder {
  PathnameAsc = 'pathname_ASC',
  PathnameDesc = 'pathname_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum ComponentAccordionOrder {
  EyebrowAsc = 'eyebrow_ASC',
  EyebrowDesc = 'eyebrow_DESC',
  HeadingLevelAsc = 'headingLevel_ASC',
  HeadingLevelDesc = 'headingLevel_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SectionPaddingAsc = 'sectionPadding_ASC',
  SectionPaddingDesc = 'sectionPadding_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC',
}

export interface ContentfulMetadata {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
}

export interface ContentfulMetadataConceptsDescendantsFilter {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface ContentfulMetadataConceptsFilter {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface ContentfulMetadataFilter {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface ContentfulMetadataTagsFilter {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface ContentfulTag {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
}

export interface Entry {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
}

export interface EntryCollection {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export interface EntryFilter {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
}

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface GlobalFooter extends Entry, _Node {
  __typename?: 'GlobalFooter';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<GlobalFooterLinkingCollections>;
  logo?: Maybe<Asset>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
}

export interface GlobalFooterLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface GlobalFooterLogoArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface GlobalFooterTitleArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface GlobalFooterCollection {
  __typename?: 'GlobalFooterCollection';
  items: Array<Maybe<GlobalFooter>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export interface GlobalFooterFilter {
  AND?: InputMaybe<Array<InputMaybe<GlobalFooterFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GlobalFooterFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface GlobalFooterLinkingCollections {
  __typename?: 'GlobalFooterLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
}

export interface GlobalFooterLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export enum GlobalFooterOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export interface GlobalNavigation extends Entry, _Node {
  __typename?: 'GlobalNavigation';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<GlobalNavigationLinkingCollections>;
  logo?: Maybe<Asset>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
}

export interface GlobalNavigationLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface GlobalNavigationLogoArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface GlobalNavigationTitleArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface GlobalNavigationCollection {
  __typename?: 'GlobalNavigationCollection';
  items: Array<Maybe<GlobalNavigation>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export interface GlobalNavigationFilter {
  AND?: InputMaybe<Array<InputMaybe<GlobalNavigationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GlobalNavigationFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface GlobalNavigationLinkingCollections {
  __typename?: 'GlobalNavigationLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
}

export interface GlobalNavigationLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export enum GlobalNavigationOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum ImageFormat {
  Avif = 'AVIF',
  Jpg = 'JPG',
  JpgProgressive = 'JPG_PROGRESSIVE',
  Png = 'PNG',
  Png8 = 'PNG8',
  Webp = 'WEBP',
}

export enum ImageResizeFocus {
  Bottom = 'BOTTOM',
  BottomLeft = 'BOTTOM_LEFT',
  BottomRight = 'BOTTOM_RIGHT',
  Center = 'CENTER',
  Face = 'FACE',
  Faces = 'FACES',
  Left = 'LEFT',
  Right = 'RIGHT',
  Top = 'TOP',
  TopLeft = 'TOP_LEFT',
  TopRight = 'TOP_RIGHT',
}

export enum ImageResizeStrategy {
  Crop = 'CROP',
  Fill = 'FILL',
  Fit = 'FIT',
  Pad = 'PAD',
  Scale = 'SCALE',
  Thumb = 'THUMB',
}

export interface ImageTransformOptions {
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<ImageFormat>;
  height?: InputMaybe<Scalars['Dimension']['input']>;
  quality?: InputMaybe<Scalars['Quality']['input']>;
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  width?: InputMaybe<Scalars['Dimension']['input']>;
}

export interface MetaSeo extends Entry, _Node {
  __typename?: 'MetaSeo';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<MetaSeoLinkingCollections>;
  noFollow?: Maybe<Scalars['Boolean']['output']>;
  noIndex?: Maybe<Scalars['Boolean']['output']>;
  openGraphImage?: Maybe<Asset>;
  pageDescription?: Maybe<Scalars['String']['output']>;
  pageTitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
}

export interface MetaSeoInternalNameArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface MetaSeoLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface MetaSeoNoFollowArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface MetaSeoNoIndexArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface MetaSeoOpenGraphImageArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface MetaSeoPageDescriptionArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface MetaSeoPageTitleArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface MetaSeoCollection {
  __typename?: 'MetaSeoCollection';
  items: Array<Maybe<MetaSeo>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export interface MetaSeoFilter {
  AND?: InputMaybe<Array<InputMaybe<MetaSeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MetaSeoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  noFollow?: InputMaybe<Scalars['Boolean']['input']>;
  noFollow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noFollow_not?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex_not?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  pageDescription_contains?: InputMaybe<Scalars['String']['input']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']['input']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
}

export interface MetaSeoLinkingCollections {
  __typename?: 'MetaSeoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  templatePageCollection?: Maybe<TemplatePageCollection>;
}

export interface MetaSeoLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface MetaSeoLinkingCollectionsTemplatePageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MetaSeoLinkingCollectionsTemplatePageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export enum MetaSeoLinkingCollectionsTemplatePageCollectionOrder {
  PathnameAsc = 'pathname_ASC',
  PathnameDesc = 'pathname_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum MetaSeoOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NoFollowAsc = 'noFollow_ASC',
  NoFollowDesc = 'noFollow_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  PageDescriptionAsc = 'pageDescription_ASC',
  PageDescriptionDesc = 'pageDescription_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface MoleculeButton extends Entry, _Node {
  __typename?: 'MoleculeButton';
  _id: Scalars['ID']['output'];
  buttonText?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  endIcon?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<MoleculeButtonLinkingCollections>;
  sys: Sys;
  variant?: Maybe<Scalars['String']['output']>;
}

export interface MoleculeButtonButtonTextArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface MoleculeButtonEndIconArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface MoleculeButtonInternalNameArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface MoleculeButtonLinkArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface MoleculeButtonLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface MoleculeButtonVariantArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface MoleculeButtonCollection {
  __typename?: 'MoleculeButtonCollection';
  items: Array<Maybe<MoleculeButton>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export interface MoleculeButtonFilter {
  AND?: InputMaybe<Array<InputMaybe<MoleculeButtonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MoleculeButtonFilter>>>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  endIcon?: InputMaybe<Scalars['String']['input']>;
  endIcon_contains?: InputMaybe<Scalars['String']['input']>;
  endIcon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endIcon_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  endIcon_not?: InputMaybe<Scalars['String']['input']>;
  endIcon_not_contains?: InputMaybe<Scalars['String']['input']>;
  endIcon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface MoleculeButtonLinkingCollections {
  __typename?: 'MoleculeButtonLinkingCollections';
  componentAccordionCollection?: Maybe<ComponentAccordionCollection>;
  entryCollection?: Maybe<EntryCollection>;
  sectionHeadingBlockCollection?: Maybe<SectionHeadingBlockCollection>;
  sectionHeroCollection?: Maybe<SectionHeroCollection>;
}

export interface MoleculeButtonLinkingCollectionsComponentAccordionCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MoleculeButtonLinkingCollectionsComponentAccordionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface MoleculeButtonLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface MoleculeButtonLinkingCollectionsSectionHeadingBlockCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MoleculeButtonLinkingCollectionsSectionHeadingBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface MoleculeButtonLinkingCollectionsSectionHeroCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MoleculeButtonLinkingCollectionsSectionHeroCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export enum MoleculeButtonLinkingCollectionsComponentAccordionCollectionOrder {
  EyebrowAsc = 'eyebrow_ASC',
  EyebrowDesc = 'eyebrow_DESC',
  HeadingLevelAsc = 'headingLevel_ASC',
  HeadingLevelDesc = 'headingLevel_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SectionPaddingAsc = 'sectionPadding_ASC',
  SectionPaddingDesc = 'sectionPadding_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC',
}

export enum MoleculeButtonLinkingCollectionsSectionHeadingBlockCollectionOrder {
  EyebrowAsc = 'eyebrow_ASC',
  EyebrowDesc = 'eyebrow_DESC',
  HeadingLevelAsc = 'headingLevel_ASC',
  HeadingLevelDesc = 'headingLevel_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SectionPaddingAsc = 'sectionPadding_ASC',
  SectionPaddingDesc = 'sectionPadding_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC',
}

export enum MoleculeButtonLinkingCollectionsSectionHeroCollectionOrder {
  AssetPositionAsc = 'assetPosition_ASC',
  AssetPositionDesc = 'assetPosition_DESC',
  EyebrowAsc = 'eyebrow_ASC',
  EyebrowDesc = 'eyebrow_DESC',
  HeadingLevelAsc = 'headingLevel_ASC',
  HeadingLevelDesc = 'headingLevel_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SectionPaddingAsc = 'sectionPadding_ASC',
  SectionPaddingDesc = 'sectionPadding_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC',
}

export enum MoleculeButtonOrder {
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  EndIconAsc = 'endIcon_ASC',
  EndIconDesc = 'endIcon_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC',
}

export interface OrganismExpandableItem extends Entry, _Node {
  __typename?: 'OrganismExpandableItem';
  _id: Scalars['ID']['output'];
  content?: Maybe<OrganismExpandableItemContent>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<OrganismExpandableItemLinkingCollections>;
  sys: Sys;
}

export interface OrganismExpandableItemContentArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface OrganismExpandableItemInternalTitleArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface OrganismExpandableItemLabelArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface OrganismExpandableItemLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface OrganismExpandableItemCollection {
  __typename?: 'OrganismExpandableItemCollection';
  items: Array<Maybe<OrganismExpandableItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export interface OrganismExpandableItemContent {
  __typename?: 'OrganismExpandableItemContent';
  json: Scalars['JSON']['output'];
  links: OrganismExpandableItemContentLinks;
}

export interface OrganismExpandableItemContentAssets {
  __typename?: 'OrganismExpandableItemContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
}

export interface OrganismExpandableItemContentEntries {
  __typename?: 'OrganismExpandableItemContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
}

export interface OrganismExpandableItemContentLinks {
  __typename?: 'OrganismExpandableItemContentLinks';
  assets: OrganismExpandableItemContentAssets;
  entries: OrganismExpandableItemContentEntries;
  resources: OrganismExpandableItemContentResources;
}

export interface OrganismExpandableItemContentResources {
  __typename?: 'OrganismExpandableItemContentResources';
  block: Array<OrganismExpandableItemContentResourcesBlock>;
  hyperlink: Array<OrganismExpandableItemContentResourcesHyperlink>;
  inline: Array<OrganismExpandableItemContentResourcesInline>;
}

export interface OrganismExpandableItemContentResourcesBlock extends ResourceLink {
  __typename?: 'OrganismExpandableItemContentResourcesBlock';
  sys: ResourceSys;
}

export interface OrganismExpandableItemContentResourcesHyperlink extends ResourceLink {
  __typename?: 'OrganismExpandableItemContentResourcesHyperlink';
  sys: ResourceSys;
}

export interface OrganismExpandableItemContentResourcesInline extends ResourceLink {
  __typename?: 'OrganismExpandableItemContentResourcesInline';
  sys: ResourceSys;
}

export interface OrganismExpandableItemFilter {
  AND?: InputMaybe<Array<InputMaybe<OrganismExpandableItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<OrganismExpandableItemFilter>>>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
}

export interface OrganismExpandableItemLinkingCollections {
  __typename?: 'OrganismExpandableItemLinkingCollections';
  componentAccordionCollection?: Maybe<ComponentAccordionCollection>;
  entryCollection?: Maybe<EntryCollection>;
}

export interface OrganismExpandableItemLinkingCollectionsComponentAccordionCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<OrganismExpandableItemLinkingCollectionsComponentAccordionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface OrganismExpandableItemLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export enum OrganismExpandableItemLinkingCollectionsComponentAccordionCollectionOrder {
  EyebrowAsc = 'eyebrow_ASC',
  EyebrowDesc = 'eyebrow_DESC',
  HeadingLevelAsc = 'headingLevel_ASC',
  HeadingLevelDesc = 'headingLevel_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SectionPaddingAsc = 'sectionPadding_ASC',
  SectionPaddingDesc = 'sectionPadding_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC',
}

export enum OrganismExpandableItemOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface Query {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  _nodes: Array<Maybe<_Node>>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  componentAccordion?: Maybe<ComponentAccordion>;
  componentAccordionCollection?: Maybe<ComponentAccordionCollection>;
  entryCollection?: Maybe<EntryCollection>;
  globalFooter?: Maybe<GlobalFooter>;
  globalFooterCollection?: Maybe<GlobalFooterCollection>;
  globalNavigation?: Maybe<GlobalNavigation>;
  globalNavigationCollection?: Maybe<GlobalNavigationCollection>;
  metaSeo?: Maybe<MetaSeo>;
  metaSeoCollection?: Maybe<MetaSeoCollection>;
  moleculeButton?: Maybe<MoleculeButton>;
  moleculeButtonCollection?: Maybe<MoleculeButtonCollection>;
  organismExpandableItem?: Maybe<OrganismExpandableItem>;
  organismExpandableItemCollection?: Maybe<OrganismExpandableItemCollection>;
  redirect?: Maybe<Redirect>;
  redirectCollection?: Maybe<RedirectCollection>;
  sectionHeadingBlock?: Maybe<SectionHeadingBlock>;
  sectionHeadingBlockCollection?: Maybe<SectionHeadingBlockCollection>;
  sectionHero?: Maybe<SectionHero>;
  sectionHeroCollection?: Maybe<SectionHeroCollection>;
  sectionImageBlock?: Maybe<SectionImageBlock>;
  sectionImageBlockCollection?: Maybe<SectionImageBlockCollection>;
  templatePage?: Maybe<TemplatePage>;
  templatePageCollection?: Maybe<TemplatePageCollection>;
}

export interface Query_NodeArgs {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface Query_NodesArgs {
  ids: Array<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface QueryAssetArgs {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface QueryAssetCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetFilter>;
}

export interface QueryComponentAccordionArgs {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface QueryComponentAccordionCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentAccordionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentAccordionFilter>;
}

export interface QueryEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EntryFilter>;
}

export interface QueryGlobalFooterArgs {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface QueryGlobalFooterCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<GlobalFooterOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GlobalFooterFilter>;
}

export interface QueryGlobalNavigationArgs {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface QueryGlobalNavigationCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<GlobalNavigationOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GlobalNavigationFilter>;
}

export interface QueryMetaSeoArgs {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface QueryMetaSeoCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MetaSeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MetaSeoFilter>;
}

export interface QueryMoleculeButtonArgs {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface QueryMoleculeButtonCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MoleculeButtonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MoleculeButtonFilter>;
}

export interface QueryOrganismExpandableItemArgs {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface QueryOrganismExpandableItemCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<OrganismExpandableItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OrganismExpandableItemFilter>;
}

export interface QueryRedirectArgs {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface QueryRedirectCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<RedirectOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<RedirectFilter>;
}

export interface QuerySectionHeadingBlockArgs {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface QuerySectionHeadingBlockCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SectionHeadingBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SectionHeadingBlockFilter>;
}

export interface QuerySectionHeroArgs {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface QuerySectionHeroCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SectionHeroOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SectionHeroFilter>;
}

export interface QuerySectionImageBlockArgs {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface QuerySectionImageBlockCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SectionImageBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SectionImageBlockFilter>;
}

export interface QueryTemplatePageArgs {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface QueryTemplatePageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TemplatePageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TemplatePageFilter>;
}

export interface Redirect extends Entry, _Node {
  __typename?: 'Redirect';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  destination?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<RedirectLinkingCollections>;
  permanent?: Maybe<Scalars['Boolean']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  sys: Sys;
}

export interface RedirectDestinationArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface RedirectLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface RedirectPermanentArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface RedirectSourceArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface RedirectCollection {
  __typename?: 'RedirectCollection';
  items: Array<Maybe<Redirect>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export interface RedirectFilter {
  AND?: InputMaybe<Array<InputMaybe<RedirectFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RedirectFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  destination?: InputMaybe<Scalars['String']['input']>;
  destination_contains?: InputMaybe<Scalars['String']['input']>;
  destination_exists?: InputMaybe<Scalars['Boolean']['input']>;
  destination_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  destination_not?: InputMaybe<Scalars['String']['input']>;
  destination_not_contains?: InputMaybe<Scalars['String']['input']>;
  destination_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  permanent?: InputMaybe<Scalars['Boolean']['input']>;
  permanent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  permanent_not?: InputMaybe<Scalars['Boolean']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  source_contains?: InputMaybe<Scalars['String']['input']>;
  source_exists?: InputMaybe<Scalars['Boolean']['input']>;
  source_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  source_not?: InputMaybe<Scalars['String']['input']>;
  source_not_contains?: InputMaybe<Scalars['String']['input']>;
  source_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
}

export interface RedirectLinkingCollections {
  __typename?: 'RedirectLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
}

export interface RedirectLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export enum RedirectOrder {
  DestinationAsc = 'destination_ASC',
  DestinationDesc = 'destination_DESC',
  PermanentAsc = 'permanent_ASC',
  PermanentDesc = 'permanent_DESC',
  SourceAsc = 'source_ASC',
  SourceDesc = 'source_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface ResourceLink {
  sys: ResourceSys;
}

export interface ResourceSys {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
}

export interface SectionHeadingBlock extends Entry, _Node {
  __typename?: 'SectionHeadingBlock';
  _id: Scalars['ID']['output'];
  body?: Maybe<SectionHeadingBlockBody>;
  buttonsCollection?: Maybe<SectionHeadingBlockButtonsCollection>;
  contentfulMetadata: ContentfulMetadata;
  eyebrow?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  headingLevel?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  layout?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<SectionHeadingBlockLinkingCollections>;
  sectionId?: Maybe<Scalars['String']['output']>;
  sectionPadding?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  variant?: Maybe<Scalars['String']['output']>;
}

export interface SectionHeadingBlockBodyArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionHeadingBlockButtonsCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SectionHeadingBlockButtonsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MoleculeButtonFilter>;
}

export interface SectionHeadingBlockEyebrowArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionHeadingBlockHeadingArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionHeadingBlockHeadingLevelArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionHeadingBlockInternalTitleArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionHeadingBlockLayoutArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionHeadingBlockLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface SectionHeadingBlockSectionIdArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionHeadingBlockSectionPaddingArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionHeadingBlockVariantArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionHeadingBlockBody {
  __typename?: 'SectionHeadingBlockBody';
  json: Scalars['JSON']['output'];
  links: SectionHeadingBlockBodyLinks;
}

export interface SectionHeadingBlockBodyAssets {
  __typename?: 'SectionHeadingBlockBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
}

export interface SectionHeadingBlockBodyEntries {
  __typename?: 'SectionHeadingBlockBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
}

export interface SectionHeadingBlockBodyLinks {
  __typename?: 'SectionHeadingBlockBodyLinks';
  assets: SectionHeadingBlockBodyAssets;
  entries: SectionHeadingBlockBodyEntries;
  resources: SectionHeadingBlockBodyResources;
}

export interface SectionHeadingBlockBodyResources {
  __typename?: 'SectionHeadingBlockBodyResources';
  block: Array<SectionHeadingBlockBodyResourcesBlock>;
  hyperlink: Array<SectionHeadingBlockBodyResourcesHyperlink>;
  inline: Array<SectionHeadingBlockBodyResourcesInline>;
}

export interface SectionHeadingBlockBodyResourcesBlock extends ResourceLink {
  __typename?: 'SectionHeadingBlockBodyResourcesBlock';
  sys: ResourceSys;
}

export interface SectionHeadingBlockBodyResourcesHyperlink extends ResourceLink {
  __typename?: 'SectionHeadingBlockBodyResourcesHyperlink';
  sys: ResourceSys;
}

export interface SectionHeadingBlockBodyResourcesInline extends ResourceLink {
  __typename?: 'SectionHeadingBlockBodyResourcesInline';
  sys: ResourceSys;
}

export interface SectionHeadingBlockButtonsCollection {
  __typename?: 'SectionHeadingBlockButtonsCollection';
  items: Array<Maybe<MoleculeButton>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export enum SectionHeadingBlockButtonsCollectionOrder {
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  EndIconAsc = 'endIcon_ASC',
  EndIconDesc = 'endIcon_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC',
}

export interface SectionHeadingBlockCollection {
  __typename?: 'SectionHeadingBlockCollection';
  items: Array<Maybe<SectionHeadingBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export interface SectionHeadingBlockFilter {
  AND?: InputMaybe<Array<InputMaybe<SectionHeadingBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SectionHeadingBlockFilter>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttons?: InputMaybe<CfMoleculeButtonNestedFilter>;
  buttonsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  eyebrow?: InputMaybe<Scalars['String']['input']>;
  eyebrow_contains?: InputMaybe<Scalars['String']['input']>;
  eyebrow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  eyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  eyebrow_not?: InputMaybe<Scalars['String']['input']>;
  eyebrow_not_contains?: InputMaybe<Scalars['String']['input']>;
  eyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  headingLevel?: InputMaybe<Scalars['String']['input']>;
  headingLevel_contains?: InputMaybe<Scalars['String']['input']>;
  headingLevel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingLevel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingLevel_not?: InputMaybe<Scalars['String']['input']>;
  headingLevel_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingLevel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  layout?: InputMaybe<Scalars['String']['input']>;
  layout_contains?: InputMaybe<Scalars['String']['input']>;
  layout_exists?: InputMaybe<Scalars['Boolean']['input']>;
  layout_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  layout_not?: InputMaybe<Scalars['String']['input']>;
  layout_not_contains?: InputMaybe<Scalars['String']['input']>;
  layout_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Scalars['String']['input']>;
  sectionId_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId_not?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionPadding?: InputMaybe<Scalars['String']['input']>;
  sectionPadding_contains?: InputMaybe<Scalars['String']['input']>;
  sectionPadding_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionPadding_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionPadding_not?: InputMaybe<Scalars['String']['input']>;
  sectionPadding_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionPadding_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface SectionHeadingBlockLinkingCollections {
  __typename?: 'SectionHeadingBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  templatePageCollection?: Maybe<TemplatePageCollection>;
}

export interface SectionHeadingBlockLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionHeadingBlockLinkingCollectionsTemplatePageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SectionHeadingBlockLinkingCollectionsTemplatePageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export enum SectionHeadingBlockLinkingCollectionsTemplatePageCollectionOrder {
  PathnameAsc = 'pathname_ASC',
  PathnameDesc = 'pathname_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum SectionHeadingBlockOrder {
  EyebrowAsc = 'eyebrow_ASC',
  EyebrowDesc = 'eyebrow_DESC',
  HeadingLevelAsc = 'headingLevel_ASC',
  HeadingLevelDesc = 'headingLevel_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SectionPaddingAsc = 'sectionPadding_ASC',
  SectionPaddingDesc = 'sectionPadding_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC',
}

export interface SectionHero extends Entry, _Node {
  __typename?: 'SectionHero';
  _id: Scalars['ID']['output'];
  asset?: Maybe<Asset>;
  assetPosition?: Maybe<Scalars['String']['output']>;
  body?: Maybe<SectionHeroBody>;
  buttonsCollection?: Maybe<SectionHeroButtonsCollection>;
  contentfulMetadata: ContentfulMetadata;
  eyebrow?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  headingLevel?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<SectionHeroLinkingCollections>;
  sectionId?: Maybe<Scalars['String']['output']>;
  sectionPadding?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  variant?: Maybe<Scalars['String']['output']>;
}

export interface SectionHeroAssetArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionHeroAssetPositionArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionHeroBodyArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionHeroButtonsCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SectionHeroButtonsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MoleculeButtonFilter>;
}

export interface SectionHeroEyebrowArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionHeroHeadingArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionHeroHeadingLevelArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionHeroInternalTitleArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionHeroLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface SectionHeroSectionIdArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionHeroSectionPaddingArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionHeroVariantArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionHeroBody {
  __typename?: 'SectionHeroBody';
  json: Scalars['JSON']['output'];
  links: SectionHeroBodyLinks;
}

export interface SectionHeroBodyAssets {
  __typename?: 'SectionHeroBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
}

export interface SectionHeroBodyEntries {
  __typename?: 'SectionHeroBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
}

export interface SectionHeroBodyLinks {
  __typename?: 'SectionHeroBodyLinks';
  assets: SectionHeroBodyAssets;
  entries: SectionHeroBodyEntries;
  resources: SectionHeroBodyResources;
}

export interface SectionHeroBodyResources {
  __typename?: 'SectionHeroBodyResources';
  block: Array<SectionHeroBodyResourcesBlock>;
  hyperlink: Array<SectionHeroBodyResourcesHyperlink>;
  inline: Array<SectionHeroBodyResourcesInline>;
}

export interface SectionHeroBodyResourcesBlock extends ResourceLink {
  __typename?: 'SectionHeroBodyResourcesBlock';
  sys: ResourceSys;
}

export interface SectionHeroBodyResourcesHyperlink extends ResourceLink {
  __typename?: 'SectionHeroBodyResourcesHyperlink';
  sys: ResourceSys;
}

export interface SectionHeroBodyResourcesInline extends ResourceLink {
  __typename?: 'SectionHeroBodyResourcesInline';
  sys: ResourceSys;
}

export interface SectionHeroButtonsCollection {
  __typename?: 'SectionHeroButtonsCollection';
  items: Array<Maybe<MoleculeButton>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export enum SectionHeroButtonsCollectionOrder {
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  EndIconAsc = 'endIcon_ASC',
  EndIconDesc = 'endIcon_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC',
}

export interface SectionHeroCollection {
  __typename?: 'SectionHeroCollection';
  items: Array<Maybe<SectionHero>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export interface SectionHeroFilter {
  AND?: InputMaybe<Array<InputMaybe<SectionHeroFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SectionHeroFilter>>>;
  assetPosition?: InputMaybe<Scalars['String']['input']>;
  assetPosition_contains?: InputMaybe<Scalars['String']['input']>;
  assetPosition_exists?: InputMaybe<Scalars['Boolean']['input']>;
  assetPosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetPosition_not?: InputMaybe<Scalars['String']['input']>;
  assetPosition_not_contains?: InputMaybe<Scalars['String']['input']>;
  assetPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  asset_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttons?: InputMaybe<CfMoleculeButtonNestedFilter>;
  buttonsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  eyebrow?: InputMaybe<Scalars['String']['input']>;
  eyebrow_contains?: InputMaybe<Scalars['String']['input']>;
  eyebrow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  eyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  eyebrow_not?: InputMaybe<Scalars['String']['input']>;
  eyebrow_not_contains?: InputMaybe<Scalars['String']['input']>;
  eyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  headingLevel?: InputMaybe<Scalars['String']['input']>;
  headingLevel_contains?: InputMaybe<Scalars['String']['input']>;
  headingLevel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingLevel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingLevel_not?: InputMaybe<Scalars['String']['input']>;
  headingLevel_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingLevel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Scalars['String']['input']>;
  sectionId_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId_not?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionPadding?: InputMaybe<Scalars['String']['input']>;
  sectionPadding_contains?: InputMaybe<Scalars['String']['input']>;
  sectionPadding_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionPadding_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionPadding_not?: InputMaybe<Scalars['String']['input']>;
  sectionPadding_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionPadding_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface SectionHeroLinkingCollections {
  __typename?: 'SectionHeroLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  templatePageCollection?: Maybe<TemplatePageCollection>;
}

export interface SectionHeroLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionHeroLinkingCollectionsTemplatePageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SectionHeroLinkingCollectionsTemplatePageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export enum SectionHeroLinkingCollectionsTemplatePageCollectionOrder {
  PathnameAsc = 'pathname_ASC',
  PathnameDesc = 'pathname_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum SectionHeroOrder {
  AssetPositionAsc = 'assetPosition_ASC',
  AssetPositionDesc = 'assetPosition_DESC',
  EyebrowAsc = 'eyebrow_ASC',
  EyebrowDesc = 'eyebrow_DESC',
  HeadingLevelAsc = 'headingLevel_ASC',
  HeadingLevelDesc = 'headingLevel_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SectionPaddingAsc = 'sectionPadding_ASC',
  SectionPaddingDesc = 'sectionPadding_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC',
}

export interface SectionImageBlock extends Entry, _Node {
  __typename?: 'SectionImageBlock';
  _id: Scalars['ID']['output'];
  caption?: Maybe<SectionImageBlockCaption>;
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<SectionImageBlockLinkingCollections>;
  sectionId?: Maybe<Scalars['String']['output']>;
  sectionPadding?: Maybe<Scalars['String']['output']>;
  sys: Sys;
}

export interface SectionImageBlockCaptionArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionImageBlockImageArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionImageBlockInternalTitleArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionImageBlockLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface SectionImageBlockSectionIdArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionImageBlockSectionPaddingArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionImageBlockCaption {
  __typename?: 'SectionImageBlockCaption';
  json: Scalars['JSON']['output'];
  links: SectionImageBlockCaptionLinks;
}

export interface SectionImageBlockCaptionAssets {
  __typename?: 'SectionImageBlockCaptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
}

export interface SectionImageBlockCaptionEntries {
  __typename?: 'SectionImageBlockCaptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
}

export interface SectionImageBlockCaptionLinks {
  __typename?: 'SectionImageBlockCaptionLinks';
  assets: SectionImageBlockCaptionAssets;
  entries: SectionImageBlockCaptionEntries;
  resources: SectionImageBlockCaptionResources;
}

export interface SectionImageBlockCaptionResources {
  __typename?: 'SectionImageBlockCaptionResources';
  block: Array<SectionImageBlockCaptionResourcesBlock>;
  hyperlink: Array<SectionImageBlockCaptionResourcesHyperlink>;
  inline: Array<SectionImageBlockCaptionResourcesInline>;
}

export interface SectionImageBlockCaptionResourcesBlock extends ResourceLink {
  __typename?: 'SectionImageBlockCaptionResourcesBlock';
  sys: ResourceSys;
}

export interface SectionImageBlockCaptionResourcesHyperlink extends ResourceLink {
  __typename?: 'SectionImageBlockCaptionResourcesHyperlink';
  sys: ResourceSys;
}

export interface SectionImageBlockCaptionResourcesInline extends ResourceLink {
  __typename?: 'SectionImageBlockCaptionResourcesInline';
  sys: ResourceSys;
}

export interface SectionImageBlockCollection {
  __typename?: 'SectionImageBlockCollection';
  items: Array<Maybe<SectionImageBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export interface SectionImageBlockFilter {
  AND?: InputMaybe<Array<InputMaybe<SectionImageBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SectionImageBlockFilter>>>;
  caption_contains?: InputMaybe<Scalars['String']['input']>;
  caption_exists?: InputMaybe<Scalars['Boolean']['input']>;
  caption_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Scalars['String']['input']>;
  sectionId_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId_not?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionPadding?: InputMaybe<Scalars['String']['input']>;
  sectionPadding_contains?: InputMaybe<Scalars['String']['input']>;
  sectionPadding_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionPadding_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionPadding_not?: InputMaybe<Scalars['String']['input']>;
  sectionPadding_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionPadding_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
}

export interface SectionImageBlockLinkingCollections {
  __typename?: 'SectionImageBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  templatePageCollection?: Maybe<TemplatePageCollection>;
}

export interface SectionImageBlockLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SectionImageBlockLinkingCollectionsTemplatePageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SectionImageBlockLinkingCollectionsTemplatePageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export enum SectionImageBlockLinkingCollectionsTemplatePageCollectionOrder {
  PathnameAsc = 'pathname_ASC',
  PathnameDesc = 'pathname_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum SectionImageBlockOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SectionPaddingAsc = 'sectionPadding_ASC',
  SectionPaddingDesc = 'sectionPadding_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface Sys {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
}

export interface SysFilter {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
}

export interface TaxonomyConcept {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
}

export interface TemplatePage extends Entry, _Node {
  __typename?: 'TemplatePage';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TemplatePageLinkingCollections>;
  pathname?: Maybe<Scalars['String']['output']>;
  sectionsCollection?: Maybe<TemplatePageSectionsCollection>;
  seo?: Maybe<MetaSeo>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
}

export interface TemplatePageLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface TemplatePagePathnameArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface TemplatePageSectionsCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TemplatePageSectionsFilter>;
}

export interface TemplatePageSeoArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MetaSeoFilter>;
}

export interface TemplatePageTitleArgs {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface TemplatePageCollection {
  __typename?: 'TemplatePageCollection';
  items: Array<Maybe<TemplatePage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export interface TemplatePageFilter {
  AND?: InputMaybe<Array<InputMaybe<TemplatePageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TemplatePageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  pathname?: InputMaybe<Scalars['String']['input']>;
  pathname_contains?: InputMaybe<Scalars['String']['input']>;
  pathname_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pathname_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pathname_not?: InputMaybe<Scalars['String']['input']>;
  pathname_not_contains?: InputMaybe<Scalars['String']['input']>;
  pathname_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sections?: InputMaybe<CfsectionsMultiTypeNestedFilter>;
  sectionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seo?: InputMaybe<CfMetaSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface TemplatePageLinkingCollections {
  __typename?: 'TemplatePageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
}

export interface TemplatePageLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
}

export enum TemplatePageOrder {
  PathnameAsc = 'pathname_ASC',
  PathnameDesc = 'pathname_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export interface TemplatePageSectionsCollection {
  __typename?: 'TemplatePageSectionsCollection';
  items: Array<Maybe<TemplatePageSectionsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export interface TemplatePageSectionsFilter {
  AND?: InputMaybe<Array<InputMaybe<TemplatePageSectionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TemplatePageSectionsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Scalars['String']['input']>;
  sectionId_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId_not?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionPadding?: InputMaybe<Scalars['String']['input']>;
  sectionPadding_contains?: InputMaybe<Scalars['String']['input']>;
  sectionPadding_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionPadding_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionPadding_not?: InputMaybe<Scalars['String']['input']>;
  sectionPadding_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionPadding_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
}

export type TemplatePageSectionsItem = ComponentAccordion | SectionHeadingBlock | SectionHero | SectionImageBlock;

export interface TimelineFilterInput {
  release_lte?: InputMaybe<Scalars['String']['input']>;
  timestamp_lte?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface _Node {
  _id: Scalars['ID']['output'];
}

export interface CfMetaSeoNestedFilter {
  AND?: InputMaybe<Array<InputMaybe<CfMetaSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfMetaSeoNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  noFollow?: InputMaybe<Scalars['Boolean']['input']>;
  noFollow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noFollow_not?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex_not?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  pageDescription_contains?: InputMaybe<Scalars['String']['input']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']['input']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
}

export interface CfMoleculeButtonNestedFilter {
  AND?: InputMaybe<Array<InputMaybe<CfMoleculeButtonNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfMoleculeButtonNestedFilter>>>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  endIcon?: InputMaybe<Scalars['String']['input']>;
  endIcon_contains?: InputMaybe<Scalars['String']['input']>;
  endIcon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endIcon_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  endIcon_not?: InputMaybe<Scalars['String']['input']>;
  endIcon_not_contains?: InputMaybe<Scalars['String']['input']>;
  endIcon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface CfOrganismExpandableItemNestedFilter {
  AND?: InputMaybe<Array<InputMaybe<CfOrganismExpandableItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfOrganismExpandableItemNestedFilter>>>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
}

export interface CfsectionsMultiTypeNestedFilter {
  AND?: InputMaybe<Array<InputMaybe<CfsectionsMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfsectionsMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Scalars['String']['input']>;
  sectionId_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId_not?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionPadding?: InputMaybe<Scalars['String']['input']>;
  sectionPadding_contains?: InputMaybe<Scalars['String']['input']>;
  sectionPadding_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionPadding_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionPadding_not?: InputMaybe<Scalars['String']['input']>;
  sectionPadding_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionPadding_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
}

declare global {
  export type GetGlobalFooterQueryVariables = Exact<{ [key: string]: never }>;

  export type GetGlobalFooterQuery = {
    __typename?: 'Query';
    globalFooterCollection?: {
      __typename?: 'GlobalFooterCollection';
      items: Array<{
        __typename: 'GlobalFooter';
        title?: string | null;
        sys: { __typename?: 'Sys'; id: string };
        logo?: ({ __typename?: 'Asset' } & AssetFragment) | null;
      } | null>;
    } | null;
  };

  export type GetGlobalNavigationQueryVariables = Exact<{ [key: string]: never }>;

  export type GetGlobalNavigationQuery = {
    __typename?: 'Query';
    globalNavigationCollection?: {
      __typename?: 'GlobalNavigationCollection';
      items: Array<{
        __typename: 'GlobalNavigation';
        title?: string | null;
        sys: { __typename?: 'Sys'; id: string };
        logo?: ({ __typename?: 'Asset' } & AssetFragment) | null;
      } | null>;
    } | null;
  };

  export type AssetFragment = {
    __typename?: 'Asset';
    url?: string | null;
    title?: string | null;
    description?: string | null;
    width?: number | null;
    height?: number | null;
  };

  export type SeoFragment = {
    __typename?: 'MetaSeo';
    internalName?: string | null;
    pageTitle?: string | null;
    pageDescription?: string | null;
    noIndex?: boolean | null;
    noFollow?: boolean | null;
    openGraphImage?: ({ __typename?: 'Asset' } & AssetFragment) | null;
  };

  export type GetAllRedirectsQueryVariables = Exact<{
    limit?: InputMaybe<Scalars['Int']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
  }>;

  export type GetAllRedirectsQuery = {
    __typename?: 'Query';
    redirectCollection?: {
      __typename?: 'RedirectCollection';
      total: number;
      items: Array<{
        __typename?: 'Redirect';
        source?: string | null;
        destination?: string | null;
        permanent?: boolean | null;
        sys: { __typename?: 'Sys'; id: string };
      } | null>;
    } | null;
  };

  export type ButtonFragment = {
    __typename?: 'MoleculeButton';
    internalName?: string | null;
    buttonText?: string | null;
    link?: string | null;
    endIcon?: string | null;
    variant?: string | null;
    sys: { __typename?: 'Sys'; id: string };
  };

  export type AccordionFragment = {
    __typename?: 'ComponentAccordion';
    internalTitle?: string | null;
    sectionId?: string | null;
    variant?: string | null;
    eyebrow?: string | null;
    heading?: string | null;
    headingLevel?: string | null;
    sectionPadding?: string | null;
    layout?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    body?: { __typename?: 'ComponentAccordionBody'; json: any } | null;
    accordionItemsCollection?: {
      __typename?: 'ComponentAccordionAccordionItemsCollection';
      items: Array<{
        __typename?: 'OrganismExpandableItem';
        label?: string | null;
        sys: { __typename?: 'Sys'; id: string };
        content?: { __typename?: 'OrganismExpandableItemContent'; json: any } | null;
      } | null>;
    } | null;
    buttonsCollection?: {
      __typename?: 'ComponentAccordionButtonsCollection';
      items: Array<({ __typename?: 'MoleculeButton' } & ButtonFragment) | null>;
    } | null;
  };

  export type HeadingFragment = {
    __typename?: 'SectionHeadingBlock';
    internalTitle?: string | null;
    sectionId?: string | null;
    sectionPadding?: string | null;
    variant?: string | null;
    eyebrow?: string | null;
    headingLevel?: string | null;
    heading?: string | null;
    layout?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    body?: { __typename?: 'SectionHeadingBlockBody'; json: any } | null;
    buttonsCollection?: {
      __typename?: 'SectionHeadingBlockButtonsCollection';
      items: Array<({ __typename?: 'MoleculeButton' } & ButtonFragment) | null>;
    } | null;
  };

  export type HeroFragment = {
    __typename?: 'SectionHero';
    internalTitle?: string | null;
    sectionId?: string | null;
    sectionPadding?: string | null;
    variant?: string | null;
    eyebrow?: string | null;
    headingLevel?: string | null;
    heading?: string | null;
    assetPosition?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    body?: { __typename?: 'SectionHeroBody'; json: any } | null;
    buttonsCollection?: {
      __typename?: 'SectionHeroButtonsCollection';
      items: Array<({ __typename?: 'MoleculeButton' } & ButtonFragment) | null>;
    } | null;
    asset?: {
      __typename?: 'Asset';
      url?: string | null;
      title?: string | null;
      description?: string | null;
      width?: number | null;
      height?: number | null;
    } | null;
  };

  export type ImageBlockFragment = {
    __typename?: 'SectionImageBlock';
    internalTitle?: string | null;
    sectionId?: string | null;
    sectionPadding?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    image?: {
      __typename?: 'Asset';
      url?: string | null;
      title?: string | null;
      description?: string | null;
      width?: number | null;
      height?: number | null;
    } | null;
    caption?: { __typename?: 'SectionImageBlockCaption'; json: any } | null;
  };

  export type PageSeoByPathnameQueryVariables = Exact<{
    pathname: Scalars['String']['input'];
    preview?: InputMaybe<Scalars['Boolean']['input']>;
  }>;

  export type PageSeoByPathnameQuery = {
    __typename?: 'Query';
    templatePageCollection?: {
      __typename?: 'TemplatePageCollection';
      items: Array<{
        __typename?: 'TemplatePage';
        sys: { __typename?: 'Sys'; id: string };
        seo?: ({ __typename?: 'MetaSeo' } & SeoFragment) | null;
      } | null>;
    } | null;
  };

  export type PageByPathnameQueryVariables = Exact<{
    pathname: Scalars['String']['input'];
    preview?: InputMaybe<Scalars['Boolean']['input']>;
  }>;

  export type PageByPathnameQuery = {
    __typename?: 'Query';
    templatePageCollection?: {
      __typename?: 'TemplatePageCollection';
      items: Array<{
        __typename?: 'TemplatePage';
        title?: string | null;
        pathname?: string | null;
        sys: { __typename?: 'Sys'; id: string };
        sectionsCollection?: {
          __typename?: 'TemplatePageSectionsCollection';
          items: Array<
            | ({ __typename: 'ComponentAccordion' } & AccordionFragment)
            | ({ __typename: 'SectionHeadingBlock' } & HeadingFragment)
            | ({ __typename: 'SectionHero' } & HeroFragment)
            | ({ __typename: 'SectionImageBlock' } & ImageBlockFragment)
            | null
          >;
        } | null;
      } | null>;
    } | null;
  };
}
