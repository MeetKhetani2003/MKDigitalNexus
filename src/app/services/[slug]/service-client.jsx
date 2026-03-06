"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";

const ServiceDetailClient = ({ data }) => {
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
  }, []);

  return (
    <main
      ref={containerRef}
      className="bg-[#fefcfb] min-h-screen pt-40 pb-24 px-10"
    >
      <div className="max-w-7xl mx-auto">
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
        <div className="border-t border-gray-100 pt-20">
          <h2 className="reveal-text text-3xl font-extralight text-primary mb-12">
            Proven <span className="italic font-medium">Deployments</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.liveLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                className="reveal-text group relative overflow-hidden rounded-2xl border border-gray-100 bg-white hover:shadow-2xl transition-all duration-500"
              >
                {/* Website Screenshot */}
                <div className="overflow-hidden rounded-t-2xl bg-white">
                  <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-100">
                    <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                  </div>

                  <Image
                    src={link.img}
                    alt={link.name}
                    width={600}
                    height={300}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                      {link.name}
                    </h3>

                    <p className="text-xs text-gray-400 mt-1">
                      Live Production Website
                    </p>
                  </div>

                  <div className="text-xl group-hover:translate-x-1 transition-transform">
                    ↗
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-white text-sm tracking-widest uppercase font-bold">
                    Visit Website
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

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

export default ServiceDetailClient;
