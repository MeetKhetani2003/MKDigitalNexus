import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";
import React from "react";

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
