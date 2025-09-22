import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TrueNorthMoving | Professional Moving Services in Canada",
  description: "Trusted local & long-distance moving services for homes and offices. Professional movers offering clear pricing, careful handling, and expert packing services across Canada.",
  keywords: "moving services, local moving, long-distance moving, residential moving, commercial moving, office relocation, packing services, professional movers, Canada movers, TrueNorthMoving",
  authors: [{ name: "TrueNorthMoving" }],
  creator: "TrueNorthMoving",
  metadataBase: new URL("https://truenorthmoving.ca"),
  openGraph: {
    type: "website",
    title: "TrueNorthMoving | Professional Moving Services",
    description: "Reliable moving services for homes and offices. Clear pricing, careful handling, and expert packing across Canada.",
    siteName: "TrueNorthMoving",
    images: [{ url: "/hero4.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrueNorthMoving | Professional Moving Services",
    description: "Reliable moving services for homes and offices. Clear pricing, careful handling, and expert packing across Canada.",
    images: ["/hero4.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolageGrotesque.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
