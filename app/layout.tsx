import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';
import { ReactElement, ReactNode } from 'react';
import { NextFont } from 'next/dist/compiled/@next/font';

const notoSans: NextFont = Noto_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: ReactNode }): ReactElement {
  return (
    <html lang='en'>
    <body className={notoSans.className}>{children}</body>
    </html>
  );
}
