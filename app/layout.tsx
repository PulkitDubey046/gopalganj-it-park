import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsappButton from "@/components/WhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gopalganjitpark.com"),
  title: {
    default: "Gopalganj IT Park | Best Computer Training Institute in Gopalganj",
    template: "%s | Gopalganj IT Park"
  },
  description: "Government recognized computer training institute in Gopalganj, Bihar. Offering NIELIT 'O' Level, CCC, KYP, Python Programming, Web Designing, and Basic Computer Training with 100% practical lab focus.",
  keywords: [
    "Gopalganj IT Park",
    "Computer Institute in Gopalganj",
    "Best Computer Center Gopalganj",
    "NIELIT O Level course Gopalganj",
    "CCC course in Gopalganj",
    "KYP center Gopalganj",
    "Computer training center Bihar",
    "Learn Python coding Gopalganj"
  ],
  authors: [{ name: "Gopalganj IT Park", url: "https://www.gopalganjitpark.com" }],
  creator: "Gopalganj IT Park",
  
  // Instructs Google Search bots exactly how to index the web page
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "googlede9a628c811f90f1", 
  },

  openGraph: {
    title: "Gopalganj IT Park | Computer Training Institute in Gopalganj",
    description: "Empowering the youth of Bihar with industry-ready computer education and government-recognized certifications like O Level, CCC, and KYP.",
    url: "https://www.gopalganjitpark.com",
    siteName: "Gopalganj IT Park",
    images: [
      {
        url: "/gitp_logo.png",
        width: 512,
        height: 512,
        alt: "Gopalganj IT Park Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  
  alternates: {
    canonical: "https://www.gopalganjitpark.com",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        {children} 
        <WhatsappButton />
      </body>
    </html>
  );
}