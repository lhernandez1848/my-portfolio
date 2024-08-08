import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap', });

export const metadata: Metadata = {
  title: "Lisdanay Hernandez - Portfolio",
  description: "This is a portfolio website detailing all my projects and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-full ${montserrat.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
