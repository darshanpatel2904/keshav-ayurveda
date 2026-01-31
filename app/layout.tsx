import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Keshav - Premium Ayurvedic & Herbal Products | 100% Natural Wellness",
  description:
    "Discover authentic Ayurvedic products for holistic wellness. Shop turmeric, ashwagandha, chyawanprash & more. 100% natural, GMP certified. Free delivery on orders above ₹499.",
  keywords:
    "ayurveda, ayurvedic products, herbal supplements, turmeric, ashwagandha, chyawanprash, natural wellness, immunity booster, organic herbs",
  openGraph: {
    title: "Keshav - Premium Ayurvedic & Herbal Products",
    description:
      "Discover authentic Ayurvedic products for holistic wellness. 100% natural, GMP certified.",
    type: "website",
    url: "https://keshavayurveda.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
