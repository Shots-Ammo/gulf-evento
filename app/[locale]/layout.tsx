import type { Metadata } from "next";
import { Outfit, Inter, Tajawal } from "next/font/google";
import "./globals.css";
import Noura from '@/components/get_bot';

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Gulf Evento | Premier General Contracting & Architectural Engineering",
  description: "Established in Al Jubail in 1435 H, Gulf Evento delivers elite structural concrete, custom architectural finishes, complex electrical networks, HVAC climate control, and luxury engineering solutions across Saudi Arabia.",
  keywords: ["Gulf Evento", "Contracting Al Jubail", "Saudi Arabia Construction", "Architectural Finishing Jubail", "Structural Concrete", "Luxury Architecture Saudi"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${tajawal.variable} h-full scroll-smooth antialiased`}
    >
      <body className="font-sans min-h-full bg-cream text-charcoal flex flex-col">
        {children}
        <Noura />
      </body>
    </html>
  );
}
