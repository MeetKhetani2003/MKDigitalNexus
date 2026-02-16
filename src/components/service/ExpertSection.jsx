"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { label: "Real-life Projects", value: "12+" },
  { label: "Technologies Mastered", value: "8+" },
  { label: "Lines of Code", value: "1M+" },
  { label: "Client Satisfaction", value: "100%" },
];

const faqs = [
  {
    q: "Why choose MERN stack for my project?",
    a: "The MERN stack (MongoDB, Express, React, Node.js) allows for a unified JavaScript environment, ensuring faster development cycles and high scalability for modern web apps.",
  },
  {
    q: "How do you handle project security?",
    a: "Security is built into the architecture. We implement JWT authentication, data encryption at rest, and regular dependency audits to keep your software safe.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. Every project includes a dedicated support window to handle optimizations, bug fixes, and server management as your user base grows.",
  },
];

const ExpertSections = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats Animation
      gsap.fromTo(
        ".stat-card",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 85%",
            once: true,
          },
        },
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#fefcfb]">
      {/* --- Achievements / Stats Section --- */}
      <section className="py-24 px-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="stat-card p-10 bg-white border border-gray-100 rounded-xl text-center hover:border-accent/30 transition-all shadow-sm"
              >
                <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Technical FAQ Section --- */}
      <section className="py-32 px-10 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-4 block">
              Expertise
            </span>
            <h2 className="text-4xl font-extralight tracking-tighter text-primary">
              Common <span className="italic font-medium">Inquiries.</span>
            </h2>
          </div>

          <div className="space-y-12">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-8">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-start gap-4">
                  <span className="text-accent font-mono text-xs mt-1">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-gray-500 font-light leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertSections;
