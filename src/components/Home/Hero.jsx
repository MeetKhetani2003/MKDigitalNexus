"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal", {
        y: 30,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "expo.out",
      });

      gsap.to(cardRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-grid flex items-center px-6 sm:px-8 lg:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 z-10 text-center lg:text-left">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">
              Web Development & CRM Experts in Gujarat
            </span>
          </div>

          <h1 className="reveal text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extralight text-primary leading-[1.1] tracking-tight mb-6 sm:mb-8">
            Web Development Company in{" "}
            <span className="font-semibold italic">Rajkot & Junagadh</span>
            <br />
            <span className="font-medium">
              Websites, Web Apps & CRM Solutions
            </span>
          </h1>

          <p className="reveal text-base sm:text-lg text-gray-500 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 sm:mb-12">
            MK Digital Nexus is a Gujarat-based web development agency helping
            factories, clothing brands, and modern businesses build scalable,
            high-performance digital systems.
          </p>
        </div>

        <div className="lg:col-span-5 relative flex justify-center mt-12 lg:mt-0">
          <div
            ref={cardRef}
            className="relative w-64 sm:w-72 md:w-80 h-[380px] sm:h-[420px] md:h-[480px] bg-primary rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden border border-white/10"
          >
            <div className="absolute -top-16 -right-16 w-48 sm:w-64 h-48 sm:h-64 bg-accent/20 rounded-full blur-[80px]" />

            <div>
              <h3 className="text-white/90 text-lg sm:text-xl font-extralight tracking-tight pt-4">
                Website & CRM Architecture
              </h3>
            </div>

            <div>
              <p className="text-4xl sm:text-5xl md:text-6xl font-light text-white">
                99%
              </p>
              <p className="text-white/50 text-xs sm:text-sm font-medium">
                Optimized Performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
