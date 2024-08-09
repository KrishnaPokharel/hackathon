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
      <head>
      <meta name="viewport" content="width=1850, initial-scale=1.0"/>

      </head>
      <body className={inter.className}>
        <TokenProvider>
          <Navigation/>
          {children}
          </TokenProvider>
        </body>
    </html>
  );
}
