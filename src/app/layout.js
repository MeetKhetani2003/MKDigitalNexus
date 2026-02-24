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
  title: {
    default: "MK Digital Nexus | Web Development Company in Rajkot & Junagadh",
    template: "%s | MK Digital Nexus",
  },
  description:
    "MK Digital Nexus is a Gujarat-based web development agency specializing in business websites, web applications, and custom CRM dashboards. Serving Rajkot, Junagadh & across India. 2+ years of experience delivering scalable digital solutions for factories and clothing brands.",

  keywords: [
    "Web Development Company in Rajkot",
    "Web Developer in Junagadh",
    "Website Development Gujarat",
    "Factory Website Development India",
    "Clothing Brand Website Developer",
    "Custom CRM Dashboard Development",
    "Web Application Development India",
    "Digital Agency in Gujarat",
    "Manufacturing Website Design",
  ],

  authors: [{ name: "MK Digital Nexus" }],
  creator: "MK Digital Nexus",
  metadataBase: new URL("https://www.mkdigitalnexus.in"),

  openGraph: {
    title: "MK Digital Nexus | Websites, Web Apps & CRM Solutions in Gujarat",
    description:
      "Professional web development company building websites, CRM dashboards, and web applications for factories and clothing brands in Rajkot, Junagadh & across India.",
    url: "https://www.mkdigitalnexus.in",
    siteName: "MK Digital Nexus",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MK Digital Nexus - Digital Solutions for Growing Businesses",
    description:
      "We build scalable websites, web apps, and CRM systems for factories and clothing businesses across Gujarat and India.",
  },

  robots: {
    index: true,
    follow: true,
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
