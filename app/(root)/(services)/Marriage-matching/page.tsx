"use client"
import React from "react";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/lamp";

const Marriagematching = () => {
  const words = `Marriage matching, also known as Kundali matching or horoscope compatibility, is a practice deeply rooted in astrology. It involves analyzing the birth charts of two individuals to assess their compatibility for marriage. The aim is to ensure harmony, happiness, and longevity in the union.`;

  return (
  <div className="p-24">
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <TextGenerateEffect words={words} />
      </motion.h1>
    </LampContainer>
    

    <div> 
      <div>Marriage Horoscope Matching & Compatibility Checking</div>
    </div>
  </div>
  
  )
};

export default Marriagematching;
