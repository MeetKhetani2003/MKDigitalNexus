import AdditionalSections from "@/components/service/AdditionalSection";
import ExpertSections from "@/components/service/ExpertSection";
import ServicesPage from "@/components/service/Hero";
import React from "react";

const Service = () => {
  return (
    <div>
      <ServicesPage />
      <AdditionalSections />
      <ExpertSections />
    </div>
  );
};

export default Service;
