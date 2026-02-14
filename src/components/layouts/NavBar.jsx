"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomLink = ({ href, children }) => {
  const lineRef = useRef(null);

  // GSAP Hover Animation
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
      className="relative text-[11px] font-bold uppercase tracking-[0.15em] text-primary hover:text-accent transition-colors duration-300"
    >
      {children}
      {/* Animated Underline */}
      <span
        ref={lineRef}
        className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent"
      />
    </Link>
  );
};

const NavBar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -20,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    });
  }, []);

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-[1440px] mx-auto px-10 h-14">
        {" "}
        {/* Reduced height to h-14 */}
        <nav className="flex items-center justify-between h-full">
          {/* Left Side - Pushed far left */}
          <div className="flex flex-1 justify-start gap-12">
            <CustomLink href="/">Home</CustomLink>
            <CustomLink href="/services">Services</CustomLink>
          </div>

          {/* Center Logo - Minimalist */}
          <div className="flex shrink-0 items-center justify-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-8 h-8 transition-transform duration-500 group-hover:rotate-[360deg]">
                <Image
                  src="/logo.png"
                  fill
                  alt="Logo"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black leading-none tracking-tighter text-primary">
                  MK <span className="text-accent">NEXUS</span>
                </span>
                <span className="text-[8px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                  Digital IT
                </span>
              </div>
            </Link>
          </div>

          {/* Right Side - Pushed far right */}
          <div className="flex flex-1 justify-end gap-12">
            <CustomLink href="/about">About</CustomLink>
            <CustomLink href="/contact">Contact</CustomLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
