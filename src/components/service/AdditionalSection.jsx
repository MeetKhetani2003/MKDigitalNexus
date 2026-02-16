"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
const techStack = [
  { name: "React / Next.js", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Rust", icon: "⚙️" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "TypeScript", icon: "📘" },
];

const workflow = [
  {
    step: "01",
    title: "Discovery",
    desc: "Understanding your business goals and technical requirements.",
  },
  {
    step: "02",
    title: "Architecture",
    desc: "Designing scalable system logic and database schemas.",
  },
  {
    step: "03",
    title: "Development",
    desc: "Clean, high-performance coding with the MERN stack.",
  },
  {
    step: "04",
    title: "Deployment",
    desc: "Seamless launch and server optimization.",
  },
];
// ... (techStack and workflow arrays remain the same)

const AdditionalSections = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Force visibility immediately to avoid the "stuck at 0" issue
      gsap.set(".tech-item, .flow-step", { opacity: 1, visibility: "visible" });

      // Tech Stack: Using fromTo for explicit control
      gsap.fromTo(
        ".tech-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".tech-grid",
            start: "top 90%", // Trigger sooner
            toggleActions: "play none none none",
            once: true,
          },
        },
      );

      // Workflow: Using fromTo
      gsap.fromTo(
        ".flow-step",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".workflow-container",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <section className="py-24 px-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-4 block">
              Engineered With
            </span>
            <h2 className="text-4xl font-extralight tracking-tighter text-primary">
              Our <span className="italic font-medium">Core Stack.</span>
            </h2>
          </div>
          <div className="tech-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="tech-item p-8 border border-gray-100 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-accent/20 hover:shadow-xl transition-all duration-500"
              >
                <span className="text-3xl">{tech.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-10 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-4 block">
              Process
            </span>
            <h2 className="text-4xl lg:text-5xl font-extralight tracking-tighter text-primary leading-tight">
              From <span className="italic font-medium">Concept</span> <br /> to
              Execution.
            </h2>
          </div>
          <div className="workflow-container lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {workflow.map((item, i) => (
              <div key={i} className="flow-step group">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-mono text-accent">
                    {item.step}
                  </span>
                  <div className="h-px flex-1 bg-primary/5 group-hover:bg-accent/20 transition-all" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdditionalSections;
