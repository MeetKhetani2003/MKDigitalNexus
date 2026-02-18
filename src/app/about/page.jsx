"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Safety: Force immediate visibility
      gsap.set(".reveal-content", { opacity: 1, visibility: "visible" });

      // Initial Hero Animation
      gsap.fromTo(
        ".about-hero-text",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
      );

      // Scroll-triggered sections
      gsap.utils.toArray(".scroll-reveal").forEach((section) => {
        gsap.fromTo(
          section,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
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
    <main
      ref={containerRef}
      className="bg-[#fefcfb] min-h-screen selection:bg-accent selection:text-white"
    >
      {/* --- Section 1: Editorial Hero --- */}
      <section className="pt-48 pb-24 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="about-hero-text">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-8 block">
              Founder & Lead Engineer
            </span>
            <h1 className="text-6xl lg:text-[8vw] font-extralight tracking-tighter text-primary leading-[0.85]">
              Architecting <span className="italic font-medium">Modern</span>{" "}
              <br />
              Digital <span className="font-medium">Foundations.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* --- Section 2: Core Philosophy (Split Layout) --- */}
      <section className="scroll-reveal px-10 py-32 border-t border-gray-100 reveal-content">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] bg-primary rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
              alt="Development Environment"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <p className="text-xs font-mono tracking-widest uppercase opacity-60 mb-2">
                Based in
              </p>
              <p className="text-xl font-light">Junagadh, India</p>
            </div>
          </div>

          <div className="space-y-10">
            <h2 className="text-4xl font-extralight tracking-tight text-primary">
              The <span className="italic font-medium">MERN Stack</span>{" "}
              Advantage.
            </h2>
            <div className="space-y-6 text-lg text-primary/80 font-light leading-relaxed">
              <p>
                I specialize in building robust, scalable, and modern web
                applications[cite: 6]. As the lead at **Loginex**, my focus is
                on delivering high-performance digital solutions powered by the
                synergy of MongoDB, Express.js, React.js, and Node.js[cite: 1,
                6, 15].
              </p>
              <p className="text-gray-500 text-base">
                Every project I undertake is engineered for rapid responsiveness
                and secure, flexible backend scaling. We prioritize maintainable
                codebases and clean standards to ensure your digital future is
                future-proof[cite: 18, 19].
              </p>
            </div>

            <div className="pt-6 grid grid-cols-2 gap-8 border-t border-gray-100">
              <div>
                <p className="text-3xl font-bold text-primary">12+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-accent">
                  Live Deployments
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-accent">
                  MERN Specialized
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: The Portfolio Record --- */}
      <section className="scroll-reveal py-32 bg-primary text-white px-10 reveal-content">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl font-extralight tracking-tighter leading-none">
              A Proven <br />
              <span className="italic font-medium text-accent">Portfolio.</span>
            </h2>
            <p className="max-w-md text-white/50 font-light text-lg">
              Demonstrated capability across e-commerce, restaurant management,
              corporate platforms, and education[cite: 7, 8, 9, 13].
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
              { name: "Groovy Foods", tag: "E-commerce" },
              { name: "Loginex", tag: "Corporate" },
              { name: "Shynex Detailing", tag: "Service Business" },
              { name: "Groovy Cafe", tag: "Hospitality" },
              { name: "BSR Worldwide", tag: "Information" },
              { name: "RSDM Institute", tag: "Education" },
            ].map((proj, i) => (
              <div
                key={i}
                className="group border-b border-white/10 pb-8 hover:border-accent transition-colors duration-500"
              >
                <p className="text-[10px] font-mono text-accent mb-4 tracking-widest">
                  0{i + 1} — {proj.tag}
                </p>
                <h4 className="text-2xl font-light group-hover:italic transition-all">
                  {proj.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 4: Final CTA --- */}
      <section className="py-40 text-center px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl lg:text-7xl font-extralight tracking-tighter text-primary mb-12">
            Ready to build <br /> your{" "}
            <span className="italic font-medium">Digital Future?</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="px-16 py-5 bg-primary text-white rounded-lg text-[10px] font-black uppercase tracking-[0.4em] hover:bg-accent transition-all duration-500 shadow-2xl shadow-primary/20"
            >
              Start Project
            </Link>
            <Link
              href="/services"
              className="px-16 py-5 border border-primary/10 text-primary rounded-lg text-[10px] font-black uppercase tracking-[0.4em] hover:border-accent transition-all duration-500"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
