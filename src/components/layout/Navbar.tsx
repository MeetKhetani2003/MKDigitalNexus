"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "../ui/Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services & Pricing" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_1px_0_rgba(11,36,71,0.04)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Logo className="h-9 w-9" />
          <div className="flex flex-col leading-tight">
            <span className="text-[15px] font-semibold tracking-tight text-navy-900">
              MK Digital Nexus
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted">
              Digital Agency
            </span>
          </div>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const isActive = pathname === l.to;
            return (
              <li key={l.to}>
                <Link
                  href={l.to}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors rounded-full block ${
                    isActive
                      ? "text-accent"
                      : "text-ink/75 hover:text-navy-900"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 -z-10 rounded-full bg-navy-900/[0.06]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-navy-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
          >
            Start a Project
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 backdrop-blur text-navy-900"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl"
          >
            <ul className="flex flex-col px-5 py-4">
              {links.map((l) => {
                const isActive = pathname === l.to;
                return (
                  <li key={l.to}>
                    <Link
                      href={l.to}
                      className={`block py-3 text-base font-medium ${
                        isActive ? "text-accent" : "text-ink/80"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-3">
                <Link
                  href="/contact"
                  className="block w-full rounded-full bg-navy-900 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Start a Project
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
