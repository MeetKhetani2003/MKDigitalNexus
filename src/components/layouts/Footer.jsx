"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FooterLink = ({ href, children }) => {
  const lineRef = useRef(null);

  return (
    <Link
      href={href}
      className="relative text-xs font-bold uppercase tracking-[0.15em] text-primary/70 hover:text-accent transition-colors duration-300 w-fit"
    >
      {children}
      <span
        ref={lineRef}
        className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent"
      />
    </Link>
  );
};

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.from(footerRef.current, {
      y: 30,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom-=100",
      },
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-white border-t border-gray-100 pt-16 pb-8"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10 transition-transform duration-700 group-hover:scale-110">
                <Image
                  src="/logo.png"
                  fill
                  alt="Logo"
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-black tracking-tight text-primary">
                MK <span className="text-accent">NEXUS</span>
              </span>
            </Link>

            <p className="text-sm text-gray-500 leading-relaxed">
              Professional web development company in Rajkot & Junagadh building
              scalable digital solutions for modern businesses.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-black text-primary/30 uppercase tracking-[0.2em]">
                Navigation
              </span>
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/about">About</FooterLink>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-xs font-black text-primary/30 uppercase tracking-[0.2em]">
                Company
              </span>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/privacy">Privacy</FooterLink>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-xs font-black text-primary/30 uppercase tracking-[0.2em]">
                Social
              </span>
              <FooterLink href="https://linkedin.com">LinkedIn</FooterLink>
              <FooterLink href="https://github.com">GitHub</FooterLink>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-xs text-gray-400 uppercase tracking-widest">
            © 2026 MK Digital Nexus
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
