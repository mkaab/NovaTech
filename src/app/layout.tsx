import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nova | Premium Tech Gadgets",
  description: "Luxury technology for the modern aesthetic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow flex flex-col pt-16">
          {children}
        </main>
        <Footer />
        
        {/* Hidden Netlify Form for static detection */}
        <form name="checkout" data-netlify="true" hidden>
          <input type="text" name="email" />
          <input type="text" name="firstName" />
          <input type="text" name="lastName" />
          <input type="text" name="address" />
          <input type="text" name="city" />
          <input type="text" name="phone" />
          <textarea name="cart_summary"></textarea>
        </form>
      </body>
    </html>
  );
}
