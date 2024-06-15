import type { Metadata } from "next";

import "./globals.css";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";



export const metadata: Metadata = {
  title: " Car Hub",
  description: "Book, buy, or rent the car according to you all is here!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
