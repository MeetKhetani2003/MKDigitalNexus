"use client";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const reviews = [
  {
    quote:
      "MK Digital Nexus rebuilt our storefront in three weeks and our conversion rate doubled. They think like operators, not freelancers.",
    name: "Ananya Iyer",
    role: "Founder, Lumen Apparel",
    initials: "AI",
  },
  {
    quote:
      "The AI reels they ship weekly feel handcrafted. Our Instagram reach is up 4× since we started the Business plan.",
    name: "Rohan Mehta",
    role: "Marketing Lead, Pulse",
    initials: "RM",
  },
  {
    quote:
      "Clean work, honest timelines, and a team that actually answers the phone. Rare combination in this space.",
    name: "Sneha Kapoor",
    role: "Co-founder, Meridian",
    initials: "SK",
  },
  {
    quote:
      "We needed a launch page in 6 days. They shipped in 4 — with a better concept than our internal team had pitched.",
    name: "Kabir Shah",
    role: "Head of Growth, Orbit",
    initials: "KS",
  },
  {
    quote:
      "Their design system for Halo is now the north star for every asset we produce. Worth every rupee.",
    name: "Priya Nair",
    role: "Creative Director, Halo",
    initials: "PN",
  },
  {
    quote:
      "I've hired three agencies before MK Digital Nexus. None of them shipped this fast or this clean.",
    name: "Aditya Joshi",
    role: "Founder, Nova",
    initials: "AJ",
  },
  {
    quote:
      "Their video team understands hook culture. Every reel they ship has intent, structure, and a reason to be watched.",
    name: "Meera Das",
    role: "Content Lead, Cove",
    initials: "MD",
  },
  {
    quote:
      "We went from 'we need a website' to 'we need a full launch plan' in one call — and they kept up with every twist.",
    name: "Vikram Rao",
    role: "CEO, Aria Studio",
    initials: "VR",
  },
];

export default function Testimonials() {
  return (
    <>
      <section className="relative overflow-hidden bg-offwhite pt-32 pb-14 sm:pt-40 sm:pb-20">
        <div className="grid-pattern absolute inset-0 -z-10 opacity-60" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Reviews & testimonials
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-navy-900 sm:text-6xl">
              Repeat clients are
              <span className="block italic font-serif font-normal text-accent">
                our favorite metric.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              98% of our clients come back for a second project. Here's what some of
              them say — in their own words, unedited.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Rating summary */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <div className="rounded-3xl border border-slate-200 bg-offwhite p-8 text-center card-shadow sm:p-12">
              <div className="inline-flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                  </svg>
                ))}
              </div>
              <div className="mt-4 text-5xl font-semibold tracking-tight text-navy-900 sm:text-6xl">
                4.9 / 5
              </div>
              <p className="mt-3 text-base text-muted">
                Average rating across 120+ client engagements
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Review wall */}
      <section className="bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={(i % 6) * 0.06}>
                <figure className="rounded-2xl border border-slate-200 bg-white p-7 card-shadow transition-all duration-500 hover:-translate-y-1 hover:card-shadow-hover">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mt-4 text-base leading-relaxed text-ink/85">
                    "{r.quote}"
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-xs font-semibold text-white">
                      {r.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-navy-900">{r.name}</div>
                      <div className="text-xs text-muted">{r.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-offwhite py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Ready to be our next case study?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
              Tell us what you're building and we'll come back with a scoped plan
              within two hours.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
