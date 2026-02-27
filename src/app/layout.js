import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layouts/NavBar";
import Footer from "@/components/layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.mkdigitalnexus.in"),

  title: {
    default: "Web Development Company in Rajkot & Junagadh | MK Digital Nexus",
    template: "%s | MK Digital Nexus",
  },

  description:
    "MK Digital Nexus is a professional web development company in Rajkot and Junagadh, Gujarat. We build business websites, manufacturing websites, and custom CRM dashboards for growing businesses across India.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Web Development Company in Gujarat | MK Digital Nexus",
    description:
      "Business websites, manufacturing websites, CRM dashboards & custom web apps in Rajkot, Junagadh & Gujarat.",
    url: "https://www.mkdigitalnexus.in",
    siteName: "MK Digital Nexus",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Local Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "MK Digital Nexus",
              url: "https://www.mkdigitalnexus.in",
              logo: "https://www.mkdigitalnexus.in/logo.png",
              description:
                "Web development agency specializing in websites, web apps, and CRM dashboards for factories and clothing brands.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Junagadh",
                addressRegion: "Gujarat",
                addressCountry: "India",
              },
              areaServed: ["Rajkot", "Junagadh", "Gujarat", "India"],
              sameAs: [
                "https://www.instagram.com/",
                "https://www.linkedin.com/",
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
