import "./globals.css";
import type { Metadata } from "next";
import { Yanone_Kaffeesatz } from "next/font/google";

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
      <body className={yanone.className}>{children}</body>
    </html>
  );
}
