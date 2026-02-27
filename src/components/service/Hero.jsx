"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Website Development in Gujarat",
    tag: "MERN Stack / Next.js",
    brief:
      "High-performance business websites built for speed and scalability.",
    description:
      "We engineer SEO-optimized web applications using Next.js and React. Our focus is on clean architecture, lightning-fast load times, and responsive precision for businesses in Rajkot and Junagadh.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    id: "01",
    slug: "web-development",
  },
  {
    title: "Custom Software Development Services",
    tag: "Custom Architecture",
    brief: "Robust backend systems for complex business workflows.",
    description:
      "From API development to secure database management, we build enterprise-grade systems that power factories, clothing brands, and modern businesses across Gujarat.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
    id: "02",
    slug: "software-development",
  },
  {
    title: "CRM & Inventory Dashboard Development",
    tag: "CRM / Inventory",
    brief: "Centralized business dashboards for real-time operational control.",
    description:
      "Transform raw business data into clarity with custom CRM dashboards, inventory tracking systems, and automation tools built using scalable MERN stack architecture.",
    image:
      "https://images.unsplash.com/photo-1551288049-bbda48658a7d?auto=format&fit=crop&q=80&w=1000",
    id: "03",
    slug: "crm-inventory-dashboard",
  },
];

const ServicesPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure visible state
      gsap.set(".header-reveal, .service-row-item", {
        opacity: 1,
        visibility: "visible",
      });

      // Hero text animation
      gsap.fromTo(
        ".header-reveal",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" },
      );

      // Service rows animation
      services.forEach((_, i) => {
        gsap.fromTo(
          `.service-row-${i}`,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: `.service-row-${i}`,
              start: "top 90%",
              toggleActions: "play none none none",
              once: true,
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-[#fefcfb] min-h-screen">
      {/* 🔥 SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Web Development & CRM Solutions",
            provider: {
              "@type": "Organization",
              name: "MK Digital Nexus",
              url: "https://www.mkdigitalnexus.in",
            },
            areaServed: {
              "@type": "Place",
              name: "Rajkot, Junagadh, Gujarat, India",
            },
            description:
              "Professional website development, CRM dashboard systems, and scalable web applications for businesses across Gujarat.",
          }),
        }}
      />

      {/* HERO SECTION */}
      <section className="pt-28 sm:pt-32 pb-16 px-6 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <span className="header-reveal text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-6 block">
            Web Development Services
          </span>

          {/* 🔥 SEO Optimized H1 */}
          <h1 className="header-reveal text-4xl sm:text-5xl lg:text-7xl font-extralight tracking-tighter text-primary leading-tight">
            Web Development Services in{" "}
            <span className="italic font-medium">Rajkot & Junagadh.</span>
            <br />
            Custom{" "}
            <span className="font-medium">CRM & Software Solutions.</span>
          </h1>

          {/* Supporting SEO paragraph */}
          <p className="header-reveal mt-8 text-lg text-gray-500 max-w-2xl leading-relaxed">
            MK Digital Nexus provides professional website development, scalable
            web applications, and custom CRM dashboard systems for factories,
            clothing brands, and growing businesses across Gujarat.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="px-6 sm:px-8 lg:px-10 pb-32 space-y-12">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-row-${index} max-w-7xl mx-auto service-row-item`}
          >
            <Link
              href={`/services/${service.slug}`}
              className="group flex flex-col lg:flex-row bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-accent/20 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="w-full lg:w-[45%] h-64 sm:h-80 lg:h-auto relative overflow-hidden bg-primary">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute top-6 left-6 px-3 py-1 bg-white/90 backdrop-blur-sm rounded text-[10px] font-bold text-primary uppercase tracking-widest">
                  Project {service.id}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4 block">
                  {service.tag}
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
                  {service.title}
                </h2>

                <p className="text-lg font-medium text-primary/80 mb-6 leading-snug">
                  {service.brief}
                </p>

                <p className="text-gray-500 font-light leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-colors">
                  Explore Implementation
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
};

export default ServicesPage;
