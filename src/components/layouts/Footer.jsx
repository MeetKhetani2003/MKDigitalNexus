"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const FooterLink = ({ href, children }) => {
  const lineRef = useRef(null);

  const onMouseEnter = () => {
    gsap.to(lineRef.current, {
      width: "100%",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const onMouseLeave = () => {
    gsap.to(lineRef.current, { width: "0%", duration: 0.3, ease: "power2.in" });
  };

  return (
    <Link
      href={href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70 hover:text-accent transition-colors duration-300 w-fit"
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
        start: "top bottom-=100", // Starts animation when footer enters viewport
      },
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-white border-t border-gray-100 pt-16 pb-8"
    >
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand Section with Logo */}
          <div className="flex-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10 transition-transform duration-700 group-hover:scale-110">
                <Image
                  src="/logo.png"
                  fill
                  alt="MK Nexus Logo"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black leading-none tracking-tighter text-primary">
                  MK <span className="text-accent">NEXUS</span>
                </span>
                <span className="text-[9px] font-bold tracking-[0.3em] text-gray-400 uppercase">
                  Digital Excellence
                </span>
              </div>
            </Link>
            <p className="text-xs text-gray-500 max-w-xs leading-relaxed font-medium">
              A premier IT service company dedicated to building elegant digital
              foundations for modern businesses.
            </p>
          </div>

          {/* Links Sections */}
          <div className="flex gap-20">
            <div className="flex flex-col gap-4">
              <span className="text-[9px] font-black text-primary/30 uppercase tracking-[0.3em] mb-2">
                Navigation
              </span>
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/projects">Projects</FooterLink>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[9px] font-black text-primary/30 uppercase tracking-[0.3em] mb-2">
                Company
              </span>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            © 2026 MK Digital Nexus. Built for the Future.
          </p>
          <div className="flex gap-8">
            <FooterLink href="https://linkedin.com">LinkedIn</FooterLink>
            <FooterLink href="https://twitter.com">Twitter</FooterLink>
            <FooterLink href="https://github.com">GitHub</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
