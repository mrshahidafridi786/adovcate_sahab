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
  title: 'Muhammad Atif Khattak | Advocate High Court | Peshawar',
  description: 'Professional Lawyer in Peshawar providing legal consultation, litigation, tax law, civil law, criminal law, corporate legal advisory, and court representation.',
  keywords: 'Muhammad Atif Khattak, Advocate High Court, Peshawar Lawyer, Tax Practitioner Peshawar, Legal Advisor Secretariat KPK, Peshawar Advocate, Legal Services Peshawar, Civil Secretariat Lawyer',
  authors: [{ name: 'Muhammad Atif Khattak' }],
  creator: 'Muhammad Atif Khattak',
  openGraph: {
    title: 'Muhammad Atif Khattak | Advocate High Court | Peshawar',
    description: 'Professional Lawyer in Peshawar providing legal consultation, litigation, tax law, civil law, criminal law, corporate legal advisory, and court representation.',
    url: 'https://atifkhattak.com',
    siteName: 'Muhammad Atif Khattak Portfolio',
    images: [
      {
        url: '/atif-khattak.jpg',
        width: 600,
        height: 600,
        alt: 'Muhammad Atif Khattak - Advocate High Court',
      },
    ],
    locale: 'en_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Atif Khattak | Advocate High Court | Peshawar',
    description: 'Professional Lawyer in Peshawar providing legal consultation, litigation, tax law, civil law, criminal law, corporate legal advisory, and court representation.',
    images: ['/atif-khattak.jpg'],
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
      '@id': 'https://atifkhattak.com/#person',
      'name': 'Muhammad Atif Khattak',
      'jobTitle': 'Advocate High Court & Tax Practitioner',
      'worksFor': {
        '@type': 'LegalService',
        'name': 'Muhammad Atif Khattak Chambers'
      },
      'image': 'https://atifkhattak.com/atif-khattak.jpg',
      'description': 'Professional Advocate High Court in Peshawar, specializing in litigation, taxation, civil, criminal and corporate legal advice.',
      'url': 'https://atifkhattak.com',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Peshawar',
        'addressRegion': 'Khyber Pakhtunkhwa',
        'addressCountry': 'Pakistan'
      }
    },
    {
      '@type': 'LegalService',
      'name': 'Muhammad Atif Khattak Chambers',
      'image': 'https://atifkhattak.com/atif-khattak.jpg',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Peshawar High Court, Peshawar',
        'addressRegion': 'Khyber Pakhtunkhwa',
        'addressCountry': 'Pakistan'
      },
      'telephone': '+923339136195',
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
