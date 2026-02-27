"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const CustomLink = ({ href, children, onClick }) => {
  const pathname = usePathname();
  const lineRef = useRef(null);
  const isActive = pathname === href;

  useEffect(() => {
    gsap.set(lineRef.current, { width: isActive ? "100%" : "0%" });
  }, [isActive]);

  const onMouseEnter = () => {
    if (!isActive) {
      gsap.to(lineRef.current, { width: "100%", duration: 0.3 });
    }
  };

  const onMouseLeave = () => {
    if (!isActive) {
      gsap.to(lineRef.current, { width: "0%", duration: 0.3 });
    }
  };

  return (
    <Link
      href={href}
      onClick={onClick}
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
  const drawerRef = useRef(null);
  const backdropRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -20,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    });
  }, []);

  useEffect(() => {
    if (open) {
      gsap.to(drawerRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(backdropRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.3,
      });
    } else {
      gsap.to(drawerRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.inOut",
      });
      gsap.to(backdropRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
      });
    }
  }, [open]);

  return (
    <>
      <header
        ref={navRef}
        className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10 h-14">
          <nav className="flex items-center justify-between h-full">
            {/* Left Side (Desktop Only) */}
            <div className="hidden md:flex flex-1 justify-start gap-12">
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

            {/* Right Side (Desktop Only) */}
            <div className="hidden md:flex flex-1 justify-end gap-12">
              <CustomLink href="/about">About</CustomLink>
              <CustomLink href="/contact">Contact</CustomLink>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-primary text-xl"
            >
              ☰
            </button>
          </nav>
        </div>
      </header>

      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={() => setOpen(false)}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm opacity-0 pointer-events-none z-40"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl translate-x-full z-50 flex flex-col p-10 gap-8"
      >
        <button
          onClick={() => setOpen(false)}
          className="self-end text-2xl text-primary"
        >
          ✕
        </button>

        <CustomLink href="/" onClick={() => setOpen(false)}>
          Home
        </CustomLink>
        <CustomLink href="/services" onClick={() => setOpen(false)}>
          Services
        </CustomLink>
        <CustomLink href="/about" onClick={() => setOpen(false)}>
          About
        </CustomLink>
        <CustomLink href="/contact" onClick={() => setOpen(false)}>
          Contact
        </CustomLink>
      </div>
    </>
  );
};

export default NavBar;
