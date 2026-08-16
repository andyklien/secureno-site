import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SecuReno | Your Vision. Beautifully Built.",
    template: "%s | SecuReno",
  },
  description:
    "SecuReno connects Ottawa homeowners with a trusted network of vetted kitchen and bathroom renovation professionals — a considered, coordinated renovation experience from consultation to handover.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col pb-[72px] font-sans lg:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}
