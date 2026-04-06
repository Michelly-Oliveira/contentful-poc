import 'react';

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    analytics: any;
  }

  type SearchParams = Promise<{ searchParams: Record<string, string> }>;

  type Params = {
    params: Promise<{
      slug?: string[];
    }>;
  } & SearchParams;

  type PageProps = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  };
}

export interface ClassStyles {
  className?: string;
}

export interface ReactChildren {
  children: ReactNode;
}

export interface PassThroughProps extends ReactChildren, ClassStyles {}

type ExtractKey<T, K extends string> = T extends { [P in K]?: infer U } ? NonNullable<U> : never;

type ExtractKeyFromArray<T extends readonly unknown[], K extends string> = {
  [P in keyof T]: ExtractKey<T[P], K>;
}[number];

type EnumerateInc<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? [...Acc, N][number]
  : EnumerateInc<N, [...Acc, Acc['length']]>;

type IntRange<F extends number, T extends number> = Exclude<EnumerateInc<T>, EnumerateInc<F>> | F;
