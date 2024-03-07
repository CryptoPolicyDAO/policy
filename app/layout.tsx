import { Metadata } from 'next';
import Footer from '@/components/ui/Footer';
import { MainNav } from '@/components/main-nav';
import { Toaster } from '@/components/ui/Toasts/toaster';
import { PropsWithChildren, Suspense } from 'react';
import { getURL } from '@/utils/helpers';
import 'styles/main.css';
import '@/styles/globals.css';
import { marketingConfig } from '@/config/marketing';
import { ThemeProvider } from '@/components/theme-provider';

const meta = {
  title: 'Next.js Subscription Starter',
  description: 'Brought to you by Vercel, Stripe, and Supabase.',
  cardImage: '/og.png',
  robots: 'follow, index',
  favicon: '/favicon.ico',
  url: getURL()
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: meta.title,
    description: meta.description,
    referrer: 'origin-when-cross-origin',
    keywords: ['Vercel', 'Supabase', 'Next.js', 'Stripe', 'Subscription'],
    authors: [
      { name: 'Crypto Policy DAO', url: 'https://CryptoPolicy.vercel.app/' }
    ],
      creator: "CryptoPolicyDAO",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
    publisher: 'Vercel',
    robots: meta.robots,
    icons: { icon: meta.favicon },
    metadataBase: new URL(meta.url),
    openGraph: {
      url: meta.url,
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage],
      type: 'website',
      siteName: meta.title
    },
    twitter: {
      card: 'summary_large_image',
      site: '@Vercel',
      creator: '@Vercel',
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage]
    },
  };
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <header className=" z-40 bg-background container   ">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={marketingConfig.mainNav} />
        </div>
      </header>
      <body className="bg-black loading">
        <main
          id="skip"
          className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </main>
        <Footer />
        <Suspense>
          <Toaster />
        </Suspense>
        <ThemeProvider />
      </body>
    </html>
  );
}
