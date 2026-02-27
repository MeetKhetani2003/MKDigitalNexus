import AdditionalSections from "@/components/service/AdditionalSection";
import ExpertSections from "@/components/service/ExpertSection";
import ServicesPage from "@/components/service/Hero";

export const metadata = {
  title: "Web Development Services in Rajkot & Junagadh | MK Digital Nexus",
  description:
    "Professional web development services in Gujarat. MK Digital Nexus provides website development, custom CRM dashboard solutions, and scalable web applications for businesses in Rajkot, Junagadh, and across India.",

  keywords: [
    "Web Development Services Rajkot",
    "Website Development Junagadh",
    "CRM Dashboard Development Gujarat",
    "Custom Web Application Development India",
    "MERN Stack Development Company",
    "Next.js Development Agency",
    "Manufacturing Website Development Gujarat",
    "Clothing Brand Website Developer",
    "Software Development Company Rajkot",
  ],

  openGraph: {
    title: "Web Development & CRM Solutions in Rajkot & Junagadh",
    description:
      "Explore MK Digital Nexus services including business websites, CRM dashboards, and scalable web applications across Gujarat.",
    url: "https://www.mkdigitalnexus.in/services",
    siteName: "MK Digital Nexus",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Service() {
  return (
    <>
      <ServicesPage />
      <AdditionalSections />
      <ExpertSections />
    </>
  );
}
