import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victor Kildahl - Software Engineer",
  description: "Kildahl.io - Personal website of Victor Kildahl",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="../src/assets/memoji2.PNG" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
