import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tasks",
  description: "Manage your daily life",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className="flex flex-col justify-center items-center h-screen">
        {children}
      </main>
      </body>
    </html>
  );
}