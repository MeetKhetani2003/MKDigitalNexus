"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Website Development in Rajkot & Junagadh",
    desc: "High-performance business website development services for companies across Gujarat, optimized for SEO and lead generation.",
    slug: "web-development",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
  },
  {
    title: "Custom CRM Dashboard Development in Gujarat",
    desc: "Sales CRM, inventory management, and automation systems designed for factories.",
    slug: "crm-inventory-dashboard",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 3h18v18H3V3zM3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Manufacturing & Clothing Brand Website Development",
    desc: "Industrial and ecommerce website solutions tailored for Gujarat businesses.",
    slug: "software-development",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
            once: true,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-10 bg-[#fefcfb]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-4 block">
              Our Web Development Expertise
            </span>

            {/* SEO Improved Heading */}
            <h2
              id="services-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-primary leading-tight tracking-tight"
            >
              Website & CRM Development{" "}
              <span className="font-semibold italic">Solutions</span>
              <br />
              for Businesses in Gujarat.
            </h2>

            {/* Small SEO Support Text (does not break UI) */}
            <p className="mt-6 text-gray-500 font-light text-lg">
              We provide professional website development and custom CRM
              dashboard solutions in Rajkot, Junagadh, and across Gujarat.
            </p>
          </div>

          <Link
            href="/services"
            className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary pb-2 border-b-2 border-primary/10 hover:border-accent transition-all duration-300"
          >
            Explore All Services
            <span className="group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              className="service-card group relative p-6 sm:p-8 md:p-10 bg-white rounded-[2rem] border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:border-accent/30 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(10,17,40,0.1)] block"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white mb-8 shadow-lg shadow-primary/20 group-hover:bg-accent group-hover:shadow-accent/40 transition-all duration-500">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-500 font-light leading-relaxed mb-10 text-sm">
                {service.desc}
              </p>

              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-accent">
                View Details
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
