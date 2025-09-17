import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import ProjectShowcase from "@/components/ProjectShowcase";
import WhoWeAre from "@/components/WhoWeAre";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhoWeAre />
        <Services />
        <HowWeWork />
        <ProjectShowcase />
        <Pricing />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
