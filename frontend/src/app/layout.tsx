import "./globals.css";
import type { Metadata } from "next";
import { Yanone_Kaffeesatz } from "next/font/google";
import Image from "next/image";
import logo from "./assets/icons8-powerlifting-64.png";
import Link from "next/link";
import AuthProvider from "./Providers";
import Head from "next/head";

const yanone = Yanone_Kaffeesatz({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Herculean Strength",
  description: "A Powerlifting Strength App",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={yanone.className}>
        <AuthProvider>
          <header className="flex justify-center">
            <Link href="/">
              <Image
                priority
                height={64}
                width={64}
                alt="powerlifting icon from icons8"
                src={logo}
              ></Image>
            </Link>
          </header>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
