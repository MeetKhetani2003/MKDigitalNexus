import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL("https://www.mkdigitalnexus.in"),
  title: {
    default: "Web Development Company in Rajkot & Junagadh | MK Digital Nexus",
    template: "%s | MK Digital Nexus",
  },
  description:
    "MK Digital Nexus is a professional web development company in Rajkot and Junagadh, Gujarat. We build business websites, manufacturing websites, and custom CRM dashboards.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-accent selection:text-white`}>
        <Navbar />
        <main className="min-h-screen pt-[72px] md:pt-[88px]">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
