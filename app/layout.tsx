import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Great_Vibes } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-script',
});

export const metadata: Metadata = {
  title: 'PROJECT DIVA 🌻',
  description: 'An Interactive Birthday Experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} ${greatVibes.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}