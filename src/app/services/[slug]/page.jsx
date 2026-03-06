import ServiceDetailClient from "./service-client.jsx";

const serviceData = {
  "web-development": {
    title: "Web Development",
    subtitle: "High-Performance Inquiry Generation",
    description:
      "Professional Web Development services using Next.js. Fast, SEO optimized websites designed for lead generation and business growth.",
    keywords: [
      "web development",
      "next js development",
      "seo optimized website",
      "business website development",
    ],
    overview:
      "We engineer high-speed, SEO-optimized web platforms specifically designed for business marketing. Our focus is on aesthetic precision and lead generation to convert visitors into inquiries.",
    techFeatures: [
      {
        label: "01",
        title: "Marketing Precision",
        desc: "Landing pages and corporate sites built to drive user engagement and inquiry growth.",
      },
      {
        label: "02",
        title: "Next.js Speed",
        desc: "Lightning-fast load times to ensure maximum retention and improved search rankings.",
      },
      {
        label: "03",
        title: "Clean Design",
        desc: "Elegant, minimalist interfaces that prioritize your brand identity and professional appeal.",
      },
    ],
    liveLinks: [
      {
        name: "Loginex",
        url: "https://www.loginex.ca/",
        img: "/websites/loginex.png",
      },
      {
        name: "Shynex Detailing",
        url: "https://www.shynexdetailing.ca/",
        img: "/websites/shynex.png",
      },
      {
        name: "BSR Worldwide",
        url: "https://www.bsrworldwide.in/",
        img: "/websites/bsr.png",
      },
      {
        name: "Green Wave Packaging",
        url: "https://www.greenwavepackaging.ca/",
        img: "/websites/GreenWavePackaging.png",
      },
      {
        name: "Groovy Cafe",
        url: "https://www.groovycafe.in/",
        img: "/websites/GroovyCafe.png",
      },
      {
        name: "Green Wave Global",
        url: "https://gwgc.ca",
        img: "/websites/gwgc.png",
      },
    ],
  },

  "software-development": {
    title: "Software Engineering",
    subtitle: "E-commerce & Admin-Driven Platforms",
    description:
      "Custom Software Development services using MERN stack. Build scalable ecommerce platforms with powerful admin dashboards.",
    keywords: [
      "software development",
      "mern stack development",
      "custom software",
      "ecommerce development",
    ],
    overview:
      "We build robust MERN stack applications featuring powerful admin panels to manage products, track inventory, and handle full-scale e-commerce operations.",
    techFeatures: [
      {
        label: "01",
        title: "Inventory Systems",
        desc: "Complete admin control to manage products, stock levels, and store logistics in real-time.",
      },
      {
        label: "02",
        title: "MERN Scalability",
        desc: "Secure backends with Node.js and MongoDB designed to grow with your business traffic.",
      },
      {
        label: "03",
        title: "End-to-End Apps",
        desc: "Full-cycle development from user-facing store-fronts to complex management back-offices.",
      },
    ],
    liveLinks: [
      {
        name: "Groovy Foods",
        url: "https://www.groovyfoods.in/",
        img: "/software/groovyfoods.png",
      },
      {
        name: "M & P Fastners",
        url: "https://www.mandpfasteners.in/",
        img: "/software/Rickyexport.png",
      },
    ],
  },

  "crm-inventory-dashboard": {
    title: "Business Dashboards",
    subtitle: "Custom CRM & Intelligence",
    description:
      "Custom CRM dashboards and business intelligence systems designed to manage operations and provide real-time insights.",
    keywords: [
      "crm dashboard",
      "business intelligence dashboard",
      "inventory dashboard",
      "admin panel development",
    ],
    overview:
      "Specialized, highly customizable CRM dashboards built to fit unique business needs.",
    techFeatures: [
      {
        label: "01",
        title: "Bespoke Logic",
        desc: "Dashboards custom-engineered to match your specific business workflow and data points.",
      },
      {
        label: "02",
        title: "Data Clarity",
        desc: "Transforming complex operational data into intuitive, real-time visual insights.",
      },
      {
        label: "03",
        title: "Privacy Focused",
        desc: "Secure internal management tools designed for high-concurrency business operations.",
      },
    ],
    liveLinks: [
      {
        name: "Bhagvati Admin (Demo)",
        url: "https://bhagvati-admin.vercel.app/",
        img: "/crm/bhagvati.png",
      },
      {
        name: "Restaurant POS Admin (Demo)",
        url: "https://pos-client-kappa.vercel.app/",
        img: "/crm/restaurant.png",
      },
    ],
  },
};

/* ================================
   Dynamic SEO
================================ */

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const data = serviceData[slug] || serviceData["web-development"];

  return {
    title: `${data.title} Services | MK Digital Nexus`,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://mkdigitalnexus.in/services/${slug}`,
      siteName: "MK Digital Nexus",
      type: "website",
    },
    alternates: {
      canonical: `https://mkdigitalnexus.in/services/${slug}`,
    },
  };
}
/* ================================
   Page Component
================================ */

export default async function Page({ params }) {
  const { slug } = await params;

  const data = serviceData[slug];

  if (!data) {
    return <div>Service not found</div>;
  }

  return <ServiceDetailClient data={data} />;
}
