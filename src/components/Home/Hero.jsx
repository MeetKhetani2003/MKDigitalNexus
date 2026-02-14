"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial Entrance
      gsap.from(".reveal", {
        y: 30,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "expo.out",
      });

      // Subtle constant float for the main card
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

  // 3D Tilt Effect on Mouse Move
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();

    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    gsap.to(cardRef.current, {
      rotationY: x * 15, // Tilt side to side
      rotationX: -y * 15, // Tilt up and down
      transformPerspective: 1000,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-grid flex items-center px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 z-10">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">
              Future-Ready IT Infrastructure
            </span>
          </div>

          <h1 className="reveal text-5xl lg:text-7xl font-extralight text-primary leading-[1.1] tracking-tight mb-8">
            Engineering <span className="font-semibold italic">Digital</span>{" "}
            <br />
            Success for <span className="font-medium">Modern Enterprise.</span>
          </h1>

          <p className="reveal text-lg text-gray-500 font-light leading-relaxed max-w-xl mb-12">
            We simplify complex technology into elegant, scalable solutions.
            Build the foundation of your digital future with MK Nexus.
          </p>

          <div className="reveal flex items-center gap-10">
            {/* Magnet Button Effect */}
            <button className="group relative px-10 py-5 bg-primary text-white rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(10,17,40,0.3)]">
              <span className="relative z-10 font-semibold text-sm tracking-widest uppercase">
                Work With Us
              </span>
              {/* Animated Liquid Background on Hover */}
              <div className="absolute inset-0 bg-accent translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
            </button>

            <button className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <span className="border-b-2 border-primary/10 group-hover:border-accent transition-colors pb-1">
                Our Process
              </span>
              <span className="w-8 h-px bg-primary/20 group-hover:w-12 group-hover:bg-accent transition-all duration-500" />
            </button>
          </div>
        </div>

        {/* Interactive 3D Card Area */}
        <div className="lg:col-span-5 relative flex justify-center perspective-1000">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-80 h-[480px] bg-primary rounded-[2.5rem] shadow-2xl p-10 flex flex-col justify-between overflow-hidden cursor-pointer border border-white/10"
          >
            {/* Animated Glow following Mouse would be cool, but let's keep it elegant */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />

            <div className="space-y-6">
              <div className="w-14 h-1.5 bg-accent rounded-full shadow-[0_0_15px_rgba(18,130,162,0.5)]" />
              <div className="w-32 h-1 bg-white/10 rounded-full" />
              <h3 className="text-white/90 text-xl font-extralight tracking-tight pt-4">
                Nexus Core™ <br />
                Systems
              </h3>
            </div>

            <div className="space-y-3">
              <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-black">
                Architecture
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-6xl font-light text-white">99</p>
                <p className="text-2xl font-light text-accent">%</p>
              </div>
              <p className="text-white/50 text-xs font-medium">
                Global Optimization
              </p>
            </div>
          </div>

          {/* Velocity Badge with Hover Scaling */}
          <div className="absolute -bottom-6 -right-8 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-6 rounded-2xl border border-gray-50 reveal hover:scale-110 transition-transform duration-500 cursor-default">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  Velocity
                </p>
                <p className="text-md font-bold text-primary">Swift Deploy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
