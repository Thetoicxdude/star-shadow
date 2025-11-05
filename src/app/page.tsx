"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

// Dynamic import for ThreeJS component
const ThreeDModel = dynamic(() => import("@/components/ThreeDModel"), {
  ssr: false,
});

const glowEffects = [
  "animate-glow-blue",
  "animate-glow-purple",
  "animate-glow-cyan",
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function HomePage() {
  const [currentGlow, setCurrentGlow] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentGlow((prev) => (prev + 1) % glowEffects.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0">
          <ThreeDModel />
        </div>
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500 rounded-full"
              initial={{ 
                x: (typeof window !== "undefined" ? Math.random() * window.innerWidth : 0),
                y: (typeof window !== "undefined" ? Math.random() * window.innerHeight : 0),
                opacity: 0 
              }}
              animate={{
                x: (typeof window !== "undefined" ? Math.random() * window.innerWidth : 0),
                y: (typeof window !== "undefined" ? Math.random() * window.innerHeight : 0),
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center space-y-8 p-4">
          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h1 className={classNames(
                  "text-7xl font-bold tracking-tighter relative z-10",
                  "text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]",
                  "text-shadow-lg backdrop-blur-[2px] px-4 py-2 rounded-lg",
                  "bg-gradient-to-r from-black/30 to-transparent",
                  glowEffects[currentGlow]
                )}>
                  星影工作室
                </h1>
                <motion.p
                  className="text-xl text-white max-w-2xl mx-auto drop-shadow-lg bg-black/20 px-4 py-2 rounded-lg backdrop-blur-[2px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  專業的遊戲、網站與Discord服務提供商
                  <br />
                  為您打造最優質的數位體驗
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              探索我們的服務
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <div className="w-2 h-2 bg-white rounded-full mx-auto" />
          </div>
        </motion.div>
      </section>

      <StatsSection />
      <ServicesSection />
      <Footer />
    </main>
  );
}
