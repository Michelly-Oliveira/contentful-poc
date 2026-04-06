import { type ReactNode } from 'react';

import { monoFont, primaryFont, sansFont } from '@/assets/fonts';
import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import '@/theme/global.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.contentful-test.com'),
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en" className={`${primaryFont.variable} ${sansFont.variable} ${monoFont.variable}`}>
    <body className="">
      <main>
        <Navigation />
        {children}
        <Footer />
      </main>
    </body>
  </html>
);

export default RootLayout;
