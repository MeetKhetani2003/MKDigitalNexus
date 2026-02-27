import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";
import React from "react";
export const metadata = {
  title: "Web Development Company in Rajkot & Junagadh",
  description:
    "MK Digital Nexus is a professional web development company in Rajkot and Junagadh, Gujarat. We build business websites, CRM dashboards, and scalable web applications for factories and clothing brands.",
  alternates: {
    canonical: "/",
  },
};
const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default page;
