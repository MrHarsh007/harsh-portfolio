import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import ConditionalHeader from "@/components/ConditionalHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Harsh Porwal - Flutter Developer Portfolio",
    template: "%s | Harsh Porwal"
  },
  description: "Flutter Developer with 2+ years of experience building scalable mobile and web applications. Explore my projects, skills, and professional journey.",
  keywords: ["Flutter Developer", "Mobile App Development", "Harsh Porwal", "BLoC", "GetX", "Firebase", "Google Cloud Platform"],
  authors: [{ name: "Harsh Porwal" }],
  creator: "Harsh Porwal",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Harsh Porwal Portfolio",
    title: "Harsh Porwal - Flutter Developer Portfolio",
    description: "Flutter Developer with 2+ years of experience building scalable mobile and web applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Porwal - Flutter Developer Portfolio",
    description: "Flutter Developer with 2+ years of experience building scalable mobile and web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased`}
      >
        <ConditionalHeader />
        {children}
      </body>
    </html>
  );
}
