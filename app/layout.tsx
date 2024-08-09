"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect} from "react";
import { TokenProvider } from "@/context/TokenContext";
import Navigation from "@/components/Navigation";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

 

  return (
    <html lang="en">
      <body className={inter.className}>
        <TokenProvider>
          <Navigation/>
          {children}
          </TokenProvider>
        </body>
    </html>
  );
}
