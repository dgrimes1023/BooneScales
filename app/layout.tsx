import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Boone Scales | Web Design for Small Businesses',
  description: 'Boone Scales specializes in web design, development, and digital solutions for small businesses in Alliance, OH and beyond. Get a modern, responsive website to help your business grow.',
  generator: 'v0.dev',
  keywords: ['web design', 'web development', 'small business websites', 'Alliance Ohio', 'digital marketing', 'responsive web design', 'Boone Scales', 'SEO', 'website design', 'business websites'],
  authors: [{ name: 'Boone Scales', url: 'https://boonescales.com' }],
  openGraph: {
    title: 'Boone Scales | Web Design for Small Businesses',
    description: 'Modern, responsive web design and development for small businesses in Alliance, OH and beyond. Grow your business with Boone Scales.',
    url: 'https://boonescales.com',
    siteName: 'Boone Scales',
    images: [
      {
        url: '/BooneScales_logo.png',
        width: 400,
        height: 400,
        alt: 'Boone Scales Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boone Scales | Web Design for Small Businesses',
    description: 'Modern, responsive web design and development for small businesses in Alliance, OH and beyond. Grow your business with Boone Scales.',
    images: ['/BooneScales_logo.png'],
    creator: '@yourtwitterhandle',
  },
  icons: {
    icon: '/BooneScales_logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
