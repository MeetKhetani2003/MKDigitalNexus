"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(imageRef.current, {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-10 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT CONTENT — EXACT UI KEPT */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <div className="about-reveal inline-block px-4 py-1.5 rounded-full bg-accent/5 border border-accent/10 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              About MK Digital Nexus
            </span>
          </div>

          <h2 className="about-reveal text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-primary leading-tight tracking-tight mb-6 sm:mb-8">
            Leading Web Development Company in{" "}
            <span className="font-semibold italic">Rajkot & Junagadh.</span>
            <br />
            We Build{" "}
            <span className="font-medium text-accent">
              Scalable Digital Systems.
            </span>
          </h2>

          <div className="about-reveal space-y-6 text-gray-500 font-light text-lg leading-relaxed max-w-xl">
            <p>
              MK Digital Nexus provides professional website development
              services in Gujarat, helping factories, clothing brands, and
              growing businesses establish a strong online presence.
            </p>
            <p>
              We specialize in business websites, ecommerce platforms, and
              custom CRM dashboard development using modern technologies like
              MERN Stack and Next.js.
            </p>
          </div>

          {/* STATS — EXACT SAME UI */}
          <div className="about-reveal grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-gray-100">
            <div>
              <p className="text-3xl font-light text-primary">12+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">
                Live Projects
              </p>
            </div>
            <div>
              <p className="text-3xl font-light text-primary">24/7</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">
                Expert Support
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE — EXACT UI KEPT */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0">
          <div
            ref={imageRef}
            className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group"
          >
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
              alt="Website Development Company in Gujarat Workspace"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60" />

            <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-2xl shadow-xl text-white about-reveal">
              <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">
                Serving Gujarat Since
              </p>
              <p className="text-xl font-medium">2026</p>
            </div>
          </div>

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default About;
