"use client";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

type Filter = "All" | "Websites" | "E-commerce" | "Video" | "Branding";

const projects = [
  { title: "Lumen Apparel", cat: "E-commerce", img: "/images/portfolio-ecommerce.jpg", desc: "Full Shopify rebuild with a 2.1× conversion lift." },
  { title: "Aria Studio", cat: "Branding", img: "/images/portfolio-branding.jpg", desc: "Identity system, guidelines, and stationery suite." },
  { title: "Nova Portfolio", cat: "Websites", img: "/images/service-webdev.jpg", desc: "Next.js portfolio with scroll-driven motion." },
  { title: "Pulse Reels", cat: "Video", img: "/images/service-video.jpg", desc: "AI-generated reel engine — 40 reels / month." },
  { title: "Meridian SaaS", cat: "Websites", img: "/images/service-marketing.jpg", desc: "Marketing site + dashboard design system." },
  { title: "Cove Skincare", cat: "E-commerce", img: "/images/portfolio-ecommerce.jpg", desc: "Headless commerce with subscription engine." },
  { title: "Halo Studio", cat: "Branding", img: "/images/portfolio-branding.jpg", desc: "Logo, brand film, and social templates." },
  { title: "Orbit Launch", cat: "Video", img: "/images/service-video.jpg", desc: "Launch week reel series — 2.4M views." },
];

const filters: Filter[] = ["All", "Websites", "E-commerce", "Video", "Branding"];

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <>
      <section className="relative overflow-hidden bg-offwhite pt-32 pb-14 sm:pt-40 sm:pb-20">
        <div className="grid-pattern absolute inset-0 -z-10 opacity-60" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Selected work
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-navy-900 sm:text-6xl">
              A studio that ships.
              <span className="block italic font-serif font-normal text-accent">
                Here's the proof.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              A small slice of websites, storefronts, reels, and brand systems we've
              launched in the last 18 months — for founders, studios, and operators
              across India, the Gulf, and the US.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sticky top-[72px] z-30 border-y border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-5 py-4 sm:px-8 no-scrollbar">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                active === f
                  ? "border-navy-900 bg-navy-900 text-white"
                  : "border-slate-200 bg-white text-ink/70 hover:border-navy-900/20 hover:text-navy-900"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.title + active} delay={(i % 6) * 0.06}>
                <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white card-shadow transition-all duration-500 hover:-translate-y-1.5 hover:card-shadow-hover">
                  <div className="relative aspect-[4/3] overflow-hidden bg-offwhite">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy-900 shadow-lg backdrop-blur opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                      {p.cat}
                    </span>
                    <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-navy-900">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
