import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

// Load Inter font for non-Apple devices
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Nhlangano Cherlton Mhangwana | Software Engineer Portfolio',
  description:
    'Software Engineer with 2 years of experience building scalable web and mobile applications and APIs across telecom, AI, HRtech, and marketplace domains.',
  keywords: [
    'Nhlangano Cherlton Mhangwana',
    'Cherlton Mhangwana',
    'Software Engineer',
    'Full-Stack Developer',
    'Mobile Developer',
    'React',
    'React Native',
    'TypeScript',
    'Python',
    'FastAPI',
    'Java Spring Boot',
    'C# .NET',
    'Next.js',
    'Portfolio',
    'Johannesburg',
  ],
  authors: [
    {
      name: 'Nhlangano Cherlton Mhangwana',
      url: 'https://chlportfolio.vercel.app',
    },
  ],
  creator: 'Nhlangano Cherlton Mhangwana',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chlportfolio.vercel.app',
    title: 'Nhlangano Cherlton Mhangwana | Software Engineer Portfolio',
    description:
      'Software Engineer with 2 years of experience building scalable web and mobile applications across telecom, AI, HRtech, and marketplace domains.',
    siteName: 'Cherlton Mhangwana Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nhlangano Cherlton Mhangwana | Software Engineer Portfolio',
    description:
      'Software Engineer with 2 years of experience building scalable web and mobile applications across telecom, AI, HRtech, and marketplace domains.',
    creator: '@cherlton',
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        sizes: 'any',
      },
    ],
    shortcut: '/favicon.svg?v=2',
    apple: '/apple-touch-icon.svg?v=2',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <Script
          defer
          data-website-id="68e067ba369b1b7f1f096056"
          data-domain="chlportfolio.vercel.app"
          data-allow-localhost="true"
          src="https://datafa.st/js/script.js"
        ></Script>
      </head>
      <body
        className={cn(
          'bg-neutral-950 text-neutral-100 min-h-screen font-sans antialiased selection:bg-primary/30',
          inter.variable
        )}
      >
        <main className="flex min-h-screen flex-col bg-neutral-950">{children}</main>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
