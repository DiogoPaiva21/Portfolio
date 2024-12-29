"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container px-4 mx-auto text-center z-10"
      >
        {/* <GraduationCap className="w-16 h-16 mx-auto mb-6 text-primary" />*/}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          Diogo Paiva
        </h1>
        <div className="space-y-2 mb-6">
          <p className="text-xl md:text-2xl font-medium text-muted-foreground">
            Master in Informatics Engineering
          </p>
          <p className="text-lg md:text-xl text-muted-foreground/80">
            Dissertation / Internship Preparation
          </p>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Exploring my path through conferences, workshops, and continuous learning experiences
        </p>
      </motion.div>
    </section>
  );
}