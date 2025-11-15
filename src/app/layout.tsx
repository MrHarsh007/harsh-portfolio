import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import ConditionalHeader from "@/components/ConditionalHeader";
import CustomCursor from "@/components/CustomCursor";

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
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Harsh Porwal Portfolio",
    title: "Harsh Porwal - Flutter Developer Portfolio",
    description: "Flutter Developer with 2+ years of experience building scalable mobile and web applications.",
    images: ['/harsh.png'],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Porwal - Flutter Developer Portfolio",
    description: "Flutter Developer with 2+ years of experience building scalable mobile and web applications.",
    images: ['/harsh.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical images for better performance */}
        <link rel="preload" href="/harsh_main.png" as="image" />
        <link rel="preload" href="/harsh.png" as="image" />
        <link rel="preload" href="/harsh_netflix.png" as="image" />
        <link rel="preload" href="/blue.png" as="image" />
        <link rel="preload" href="/grey.png" as="image" />
        <link rel="preload" href="/red.png" as="image" />
        <link rel="preload" href="/yellow.png" as="image" />
        <link rel="preload" href="/netflix-sound.mp3" as="audio" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased cursor-none`}
      >
        <CustomCursor />
        <ConditionalHeader />
        {children}
      </body>
    </html>
  );
}
