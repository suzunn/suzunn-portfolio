import './globals.css';
import { Suspense } from 'react';
import { GeistMono, GeistSans } from 'next/font/google';

const geistMono = GeistMono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
});

const geistSans = GeistSans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-sans',
});

export const metadata = {
  title: 'Portfolio',
  description: 'My portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistMono.variable} ${geistSans.variable}`}>
      <body>
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
