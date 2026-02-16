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
    title: "Web Development",
    tag: "MERN Stack / Next.js",
    brief:
      "High-performance applications built for speed and global scalability.",
    description:
      "We engineer SEO-optimized web applications using Next.js and React. Our focus is on clean architecture, lightning-fast load times, and responsive precision.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    id: "01",
    slug: "web-development",
  },
  {
    title: "Software Engineering",
    tag: "Custom Architecture",
    brief: "Robust backend logic designed for complex business workflows.",
    description:
      "From custom API development to secure database management, we build the engine that powers your business with enterprise-grade security and reliability.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
    id: "02",
    slug: "software-development",
  },
  {
    title: "Business Dashboards",
    tag: "CRM / Inventory",
    brief:
      "Centralized command centers for real-time operational intelligence.",
    description:
      "Transform raw data into clarity. Our custom dashboards provide real-time inventory tracking, customer management, and automated reporting in one elegant interface.",
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
      // Safety: Ensure elements start from a clean state
      gsap.set(".header-reveal, .service-row-item", {
        opacity: 1,
        visibility: "visible",
      });

      // Header Animation
      gsap.fromTo(
        ".header-reveal",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" },
      );

      // Service Rows with improved Trigger
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
              start: "top 90%", // Starts sooner to avoid "invisible" gap
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
      <section className="pt-32 pb-16 px-10">
        <div className="max-w-7xl mx-auto">
          <span className="header-reveal text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-6 block">
            Capabilities
          </span>
          <h1 className="header-reveal text-6xl lg:text-7xl font-extralight tracking-tighter text-primary leading-none">
            Digital <span className="italic font-medium">Foundations.</span>{" "}
            <br />
            Engineered <span className="font-medium">Better.</span>
          </h1>
        </div>
      </section>

      <section className="px-10 pb-40 space-y-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-row-${index} max-w-7xl mx-auto service-row-item`}
          >
            <Link
              href={`/services/${service.slug}`}
              className="group flex flex-col lg:flex-row bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-accent/20 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="w-full lg:w-[45%] h-80 lg:h-auto relative overflow-hidden bg-primary">
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
              <div className="flex-1 p-10 lg:p-14 flex flex-col justify-center">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4 block">
                  {service.tag}
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                  {service.title}
                </h2>
                <p className="text-lg font-medium text-primary/80 mb-6 leading-snug">
                  {service.brief}
                </p>
                <p className="text-gray-500 font-light leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-colors">
                  Explore Implementation{" "}
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
