import "./globals.css";
import type { Metadata } from "next";
import { Yanone_Kaffeesatz } from "next/font/google";
import Image from "next/image";
import logo from "./assets/icons8-powerlifting-64.png";
import Head from "next/head";
import Link from "next/link";

const yanone = Yanone_Kaffeesatz({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Herculean Strength",
  description: "A Powerlifting Strength App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={yanone.className}>
        <header className="flex justify-center">
          <Link href="/">
            <Image
              height={64}
              width={64}
              alt="powerlifting icon from icons8"
              src={logo}
            ></Image>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
