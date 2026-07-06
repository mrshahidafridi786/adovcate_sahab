import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import LoadingScreen from '@/components/loading-screen';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import FloatingActions from '@/components/floating-actions';

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Advocate Khurshid Azam | Advocate High Court | Peshawar',
  description: 'Professional Lawyer in Peshawar providing legal consultation, litigation, tax law, civil law, criminal law, corporate legal advisory, and court representation.',
  keywords: 'Advocate Khurshid Azam, Khurshid Azam, Advocate High Court, Peshawar Lawyer, Tax Practitioner Peshawar, Legal Advisor Secretariat KPK, Peshawar Advocate, Legal Services Peshawar, Civil Secretariat Lawyer',
  authors: [{ name: 'Advocate Khurshid Azam' }],
  creator: 'Advocate Khurshid Azam',
  openGraph: {
    title: 'Advocate Khurshid Azam | Advocate High Court | Peshawar',
    description: 'Professional Lawyer in Peshawar providing legal consultation, litigation, tax law, civil law, criminal law, corporate legal advisory, and court representation.',
    url: 'https://khurshidazam.com',
    siteName: 'Advocate Khurshid Azam Portfolio',
    images: [
      {
        url: '/khurshid-azam.jpg',
        width: 600,
        height: 600,
        alt: 'Advocate Khurshid Azam - Advocate High Court',
      },
    ],
    locale: 'en_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advocate Khurshid Azam | Advocate High Court | Peshawar',
    description: 'Professional Lawyer in Peshawar providing legal consultation, litigation, tax law, civil law, criminal law, corporate legal advisory, and court representation.',
    images: ['/khurshid-azam.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://khurshidazam.com/#person',
      'name': 'Advocate Khurshid Azam',
      'jobTitle': 'Advocate High Court & Tax Practitioner',
      'worksFor': {
        '@type': 'LegalService',
        'name': 'Advocate Khurshid Azam Chambers'
      },
      'image': 'https://khurshidazam.com/khurshid-azam.jpg',
      'description': 'Professional Advocate High Court in Peshawar, specializing in litigation, taxation, civil, criminal and corporate legal advice.',
      'url': 'https://khurshidazam.com',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Peshawar',
        'addressRegion': 'Khyber Pakhtunkhwa',
        'addressCountry': 'Pakistan'
      }
    },
    {
      '@type': 'LegalService',
      'name': 'Advocate Khurshid Azam Chambers',
      'image': 'https://khurshidazam.com/khurshid-azam.jpg',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Peshawar High Court, Peshawar',
        'addressRegion': 'Khyber Pakhtunkhwa',
        'addressCountry': 'Pakistan'
      },
      'telephone': '+923369592956',
      'priceRange': '$$',
      'openingHours': 'Mo-Fr 09:00-17:00'
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] dark:bg-[#090D16] text-[#1E293B] dark:text-[#F8FAFC]">
        <ThemeProvider>
          <LoadingScreen />
          <Navbar />
          {children}
          <Footer />
          <FloatingActions />
        </ThemeProvider>
      </body>
    </html>
  );
}
