"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ContactPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal header and info cards
      gsap.fromTo(
        ".contact-reveal",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" },
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="bg-[#fefcfb] min-h-screen pt-40 pb-24 px-10 selection:bg-accent selection:text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* --- Section 1: Editorial Header --- */}
        <div className="mb-20">
          <span className="contact-reveal text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-6 block">
            Initiate Connection
          </span>
          <h1 className="contact-reveal text-6xl lg:text-8xl font-extralight tracking-tighter text-primary leading-[0.9]">
            Let's build your <br />
            <span className="italic font-medium text-accent">
              Digital Future.
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* --- Section 2: Direct Contact Details --- */}
          <div className="lg:col-span-4 space-y-12">
            <div className="contact-reveal group">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/30 mb-4 group-hover:text-accent transition-colors">
                Official Email
              </p>
              <a
                href="mailto:team@loginex.ca"
                className="text-xl font-light text-primary border-b border-primary/10 pb-1 hover:border-accent transition-all"
              >
                team@loginex.ca [cite: 3]
              </a>
            </div>

            <div className="contact-reveal">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/30 mb-4">
                Direct Lines
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-accent font-mono">
                    IN
                  </span>
                  <p className="text-lg font-light text-primary">
                    +91 63531 21773 (Meet){" "}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-accent font-mono">
                    CA
                  </span>
                  <p className="text-lg font-light text-primary">
                    +1 778 899 8845 (Ansh) [cite: 3]
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-reveal p-8 bg-primary rounded-xl text-white shadow-2xl">
              <h3 className="text-lg font-bold mb-4">The MERN Advantage</h3>
              <p className="text-sm text-white/60 font-light leading-relaxed">
                Every project we undertake is built with high-performance
                React.js and secure Node.js backends. Ready to scale? Let's
                discuss your architecture.
              </p>
            </div>
          </div>

          {/* --- Section 3: Quotation Form --- */}
          <div className="lg:col-span-8">
            <form className="contact-reveal bg-white border border-gray-100 p-10 lg:p-14 rounded-xl shadow-sm space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-gray-200 py-4 outline-none focus:border-accent transition-colors font-light text-lg"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-500 group-focus-within:w-full" />
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-gray-200 py-4 outline-none focus:border-accent transition-colors font-light text-lg"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-500 group-focus-within:w-full" />
                </div>
              </div>

              <div className="relative group">
                <select className="w-full bg-transparent border-b border-gray-200 py-4 outline-none focus:border-accent transition-colors font-light text-lg appearance-none cursor-pointer">
                  <option disabled selected>
                    Select Service Interest
                  </option>
                  <option>Web Development (Inquiry Focus)</option>
                  <option>Software Engineering (E-commerce/Admin)</option>
                  <option>Bespoke Business Dashboard</option>
                </select>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-500 group-focus-within:w-full" />
              </div>

              <div className="relative group">
                <textarea
                  rows="1"
                  placeholder="Project Brief"
                  className="w-full bg-transparent border-b border-gray-200 py-4 outline-none focus:border-accent transition-colors font-light text-lg resize-none"
                />
                <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-500 group-focus-within:w-full" />
              </div>

              <div className="pt-6">
                <button className="w-full bg-primary text-white py-6 rounded-lg text-[10px] font-black uppercase tracking-[0.4em] hover:bg-accent transition-all duration-500 shadow-xl shadow-primary/10">
                  Send Quotation Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
