"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const reviews = [
  {
    name: "Aarav Sharma",
    role: "CEO, TechFlow Solutions",
    content:
      "MK Digital Nexus transformed our legacy systems into a high-performance Next.js platform.",
  },
  {
    name: "Sarah Jenkins",
    role: "Product Manager, RetailSync",
    content:
      "The custom CRM dashboard built for our inventory management has streamlined our entire workflow.",
  },
  {
    name: "Rohan Mehta",
    role: "Founder, GreenWave",
    content:
      "Elegant, fast, and scalable. They took our vision and built a digital foundation effortlessly.",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Force all cards to be visible immediately on mount to prevent "Lode" error
      gsap.set(".testimonial-reveal", { opacity: 1, visibility: "visible" });

      // 2. Perform the animation
      gsap.from(".testimonial-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%", // Fires almost instantly when section enters screen
          toggleActions: "play none none none",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-10 bg-[#fefcfb]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="testimonial-reveal text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-4 block">
            Success Stories
          </span>
          <h2 className="testimonial-reveal text-4xl lg:text-5xl font-extralight text-primary tracking-tight">
            Trusted by{" "}
            <span className="font-medium italic">Industry Leaders.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              // Notice: No 'opacity-0' class here. We let GSAP handle it dynamically.
              className="testimonial-reveal group relative p-10 bg-white border border-gray-100 rounded-[2.5rem] transition-all duration-500 hover:border-accent/30 hover:shadow-2xl"
            >
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-accent"
                    />
                  ))}
                </div>
                <p className="text-gray-500 font-light italic leading-relaxed mb-10 text-lg">
                  "{review.content}"
                </p>
                <div>
                  <p className="text-sm font-bold text-primary tracking-wide">
                    {review.name}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary/30 mt-1">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
