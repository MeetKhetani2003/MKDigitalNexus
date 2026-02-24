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
    // Brand Keywords
    "MK Digital Nexus",
    "MK Digital Nexus India",
    "MK Digital Nexus Gujarat",
    "mkdigitalnexus.in",
    "MK Digital Nexus Web Development",
    "MK Digital Nexus CRM Solutions",
    "MK Digital Nexus Rajkot",
    "MK Digital Nexus Junagadh",

    // Web Development - India
    "Web Development Company in India",
    "Best Web Development Company India",
    "Professional Website Developer India",
    "Custom Website Development India",
    "Business Website Development India",
    "Corporate Website Design India",
    "Startup Website Development India",
    "Website Development Services India",
    "Affordable Website Development India",
    "Website Designing Company India",

    // Gujarat Targeting
    "Web Development Company in Gujarat",
    "Website Developer in Gujarat",
    "Best Web Designer Gujarat",
    "Digital Agency in Gujarat",
    "Gujarat Website Development Services",
    "Custom Web Application Gujarat",
    "Software Development Company Gujarat",
    "CRM Development Company Gujarat",

    // Rajkot Targeting
    "Web Development Company in Rajkot",
    "Web Designer in Rajkot",
    "Website Developer Rajkot",
    "SEO Company in Rajkot",
    "Digital Marketing Agency Rajkot",
    "Rajkot Website Design Services",
    "Rajkot Software Company",
    "Business Website Developer Rajkot",
    "Rajkot Web Application Developer",
    "Rajkot CRM Development",

    // Junagadh Targeting
    "Web Development Company in Junagadh",
    "Website Designer Junagadh",
    "Junagadh Web Developer",
    "Junagadh Digital Agency",
    "Website Development Services Junagadh",
    "Junagadh Software Developer",
    "Junagadh CRM Developer",
    "Best Website Developer Junagadh",
    "Junagadh IT Company",
    "Junagadh Web Application Company",

    // Factory / Manufacturing Focus
    "Factory Website Development",
    "Manufacturing Company Website Design",
    "Industrial Website Development India",
    "Manufacturing Website Developer Gujarat",
    "Factory Web Design Rajkot",
    "B2B Manufacturing Website Development",
    "Industrial Business Website India",
    "Manufacturing CRM Software",
    "Production Management Dashboard",
    "Factory ERP Dashboard Development",

    // Clothing / Textile Focus
    "Clothing Brand Website Development",
    "Textile Website Developer Gujarat",
    "Garment Industry Website Design",
    "Fashion Brand Website India",
    "Apparel Website Development",
    "Online Clothing Store Development",
    "Ecommerce Website for Clothing Brand",
    "Textile Manufacturing Website",
    "Garment Factory Website Developer",
    "Fashion Ecommerce Website Gujarat",

    // Web Application
    "Custom Web Application Development",
    "Web App Development Company India",
    "React Web Application Developer",
    "NextJS Development Company",
    "MERN Stack Developer India",
    "Business Web Portal Development",
    "Admin Dashboard Development",
    "Custom Business Software Development",
    "Cloud Based Web Application India",
    "Scalable Web Application Development",

    // CRM / Dashboard
    "Custom CRM Development India",
    "Business CRM Dashboard Development",
    "Sales CRM Software Development",
    "Lead Management System Development",
    "Customer Management Software India",
    "Custom Admin Panel Development",
    "Analytics Dashboard Development",
    "Inventory Management Dashboard",
    "Manufacturing CRM Software India",
    "Business Automation Software Development",

    // SEO & Digital
    "SEO Services Gujarat",
    "Local SEO Company Rajkot",
    "Digital Marketing Agency Junagadh",
    "Business Growth Digital Agency",
    "Website Ranking Services India",
    "Google Ranking Services Gujarat",
    "Lead Generation Website Developer",
    "Performance Marketing Gujarat",
    "Business Branding Agency Gujarat",
    "Startup Digital Solutions India",
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
