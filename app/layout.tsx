import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsappButton from "@/components/WhatsappButton"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gopalganj IT Park | Computer Training Institute",
  description: "Government Recognized Computer Training Institute in Gopalganj, Bihar. Enroll in CCC, O Level, KYP, and Basic Computer Training.",
  keywords: ["Gopalganj IT Park", "Computer Institute Gopalganj", "CCC Course Bihar", "O Level", "KYP Center"],
  authors: [{ name: "Gopalganj IT Park" }],
  verification: {
    google: "googlede9a628c811f90f1", 
  },
  openGraph: {
    title: "Gopalganj IT Park | Computer Training Institute",
    description: "Empowering the youth of Bihar with industry-ready computer education and government recognized certifications.",
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
        <WhatsappButton />[cite: 1, 6]
      </body>
    </html>
  );
}