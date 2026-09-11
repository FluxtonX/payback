import type { Metadata, Viewport } from 'next';
import './globals.css';
import AppLayout from '@/components/layout/AppLayout';

export const metadata: Metadata = {
  metadataBase: new URL('https://payback.com'),
  title: 'PayBack : Trading & Investment Scam Funds Recovery',
  description:
    'PayBack is here to help you recover funds lost in fraudulent investment or trading schemes performed by unethical brokers. It’s Time to Get Your Money Back!',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'PayBack : Trading & Investment Scam Funds Recovery',
    description:
      'PayBack is here to help you recover funds lost in fraudulent investment or trading schemes performed by unethical brokers. It’s Time to Get Your Money Back!',
    url: 'https://payback.com/',
    siteName: 'Payback',
    images: [
      {
        url: '/images/payback_og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Home',
      },
    ],
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#0B5D45',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
