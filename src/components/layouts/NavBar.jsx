"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation"; // Import hook
import gsap from "gsap";

const CustomLink = ({ href, children }) => {
  const pathname = usePathname();
  const lineRef = useRef(null);

  // Check if this link is currently active
  const isActive = pathname === href;

  useEffect(() => {
    // If active, ensure the line is visible immediately
    if (isActive) {
      gsap.set(lineRef.current, { width: "100%" });
    } else {
      gsap.set(lineRef.current, { width: "0%" });
    }
  }, [isActive]);

  const onMouseEnter = () => {
    if (!isActive) {
      gsap.to(lineRef.current, {
        width: "100%",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const onMouseLeave = () => {
    if (!isActive) {
      gsap.to(lineRef.current, {
        width: "0%",
        duration: 0.3,
        ease: "power2.in",
      });
    }
  };

  return (
    <Link
      href={href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
        isActive ? "text-accent" : "text-primary hover:text-accent"
      }`}
    >
      {children}
      <span
        ref={lineRef}
        className="absolute -bottom-1 left-0 h-[2px] bg-accent"
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
        <nav className="flex items-center justify-between h-full">
          {/* Left Side */}
          <div className="flex flex-1 justify-start gap-12">
            <CustomLink href="/">Home</CustomLink>
            <CustomLink href="/services">Services</CustomLink>
          </div>

          {/* Center Logo */}
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

          {/* Right Side */}
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
