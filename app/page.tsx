"use client";

import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import PracticeAreas from "@/components/PracticeAreas";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="min-h-screen bg-gray-900"
    >
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Experience />
      <PracticeAreas />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </motion.main>
  );
}
