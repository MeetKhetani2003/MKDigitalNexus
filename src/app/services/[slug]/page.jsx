"use client";
import React, { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";

const serviceData = {
  "web-development": {
    title: "Web Development",
    subtitle: "High-Performance Inquiry Generation",
    overview:
      "We engineer high-speed, SEO-optimized web platforms specifically designed for business marketing. Our focus is on aesthetic precision and lead generation to convert visitors into inquiries[cite: 16].",
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
      { name: "Loginex", url: "https://www.loginex.ca/" },
      { name: "Shynex Detailing", url: "https://www.shynexdetailing.ca/" },
      { name: "BSR Worldwide", url: "https://www.bsrworldwide.in/" },
      {
        name: "Green Wave Packaging",
        url: "https://www.greenwavepackaging.ca/",
      },
      { name: "Groovy Cafe", url: "https://www.groovycafe.in/" },
      { name: "Green Wave Global", url: "https://gwgc.ca" },
    ],
  },
  "software-development": {
    title: "Software Engineering",
    subtitle: "E-commerce & Admin-Driven Platforms",
    overview:
      "We build robust MERN stack applications featuring powerful admin panels to manage products, track inventory, and handle full-scale e-commerce operations[cite: 6, 17].",
    techFeatures: [
      {
        label: "01",
        title: "Inventory Systems",
        desc: "Complete admin control to manage products, stock levels, and store logistics in real-time.",
      },
      {
        label: "02",
        title: "MERN Scalability",
        desc: "Secure backends with Node.js and MongoDB designed to grow with your business traffic[cite: 17].",
      },
      {
        label: "03",
        title: "End-to-End Apps",
        desc: "Full-cycle development from user-facing store-fronts to complex management back-offices.",
      },
    ],
    liveLinks: [
      { name: "Groovy Foods", url: "https://www.groovyfoods.in/" },
      { name: "M & P Fastners", url: "https://www.mandpfasteners.in/" },
    ],
  },
  "crm-inventory-dashboard": {
    title: "Business Dashboards",
    subtitle: "Custom CRM & Intelligence",
    overview:
      "Specialized, highly customizable CRM dashboards built to fit unique business needs. These command centers provide raw data clarity and operational management.",
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
        desc: "Secure, internal management tools designed for high-concurrency business operations.",
      },
    ],
    liveLinks: [
      {
        name: "Bhagvati Admin (Demo)",
        url: "https://bhagvati-admin.vercel.app/",
      },
      {
        name: "Restaurant POS Admin (Demo)",
        url: "https://pos-client-kappa.vercel.app/",
      },
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const data = serviceData[slug] || serviceData["web-development"];
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal-text",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" },
      );
    }, containerRef);
    return () => ctx.revert();
  }, [slug]);

  return (
    <main
      ref={containerRef}
      className="bg-[#fefcfb] min-h-screen pt-40 pb-24 px-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-24">
          <Link
            href="/services"
            className="reveal-text text-[10px] font-black uppercase tracking-[0.3em] text-accent hover:opacity-70 transition-opacity"
          >
            ← Back to Services
          </Link>
          <h1 className="reveal-text text-6xl lg:text-8xl font-extralight tracking-tighter text-primary leading-tight mt-8">
            {data.title.split(" ")[0]} <br />
            <span className="italic font-medium">
              {data.title.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <p className="reveal-text text-xl text-primary/60 font-light mt-8 max-w-2xl">
            {data.overview}
          </p>
        </div>

        {/* Technical Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          {data.techFeatures.map((feature, i) => (
            <div
              key={i}
              className="reveal-text p-10 bg-white border border-gray-100 rounded-xl hover:border-accent/20 transition-all"
            >
              <span className="text-4xl font-bold text-primary/10 block mb-6">
                {feature.label}
              </span>
              <h3 className="text-xl font-bold text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Live Deployments / Portfolio Links */}
        <div className="border-t border-gray-100 pt-20">
          <h2 className="reveal-text text-3xl font-extralight text-primary mb-12">
            Proven <span className="italic font-medium">Deployments</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.liveLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                className="reveal-text flex items-center justify-between p-6 border border-gray-100 rounded-xl hover:bg-primary hover:text-white transition-all duration-500"
              >
                <span className="text-sm font-bold uppercase tracking-widest">
                  {link.name}
                </span>
                <span>↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Direct CTA */}
        <div className="reveal-text mt-40 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-8">
            Ready to initiate?
          </p>
          <Link
            href="/contact"
            className="text-4xl lg:text-6xl font-extralight tracking-tighter text-primary hover:text-accent transition-colors"
          >
            Start a <span className="italic font-medium">Quotation</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ServiceDetail;
