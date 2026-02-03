"use client"

import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Products from "@/components/Products";
import Features from "@/components/Features";
import About from "@/components/About";
import Applications from "@/components/Applications";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { motion } from 'framer-motion';
import { 
 
  Activity,
  Heart,
  Zap,
} from 'lucide-react';
export default function Home() {
  return (
    <>
     <div className="min-h-screen absolute inset-0 overflow-hidden pointer-events-none">
        {/* ECG Line Pattern */}
        <svg className="absolute top-0 left-0 w-full h-32 opacity-5" viewBox="0 0 1200 100">
          <path
            d="M0 50 L200 50 L220 30 L240 70 L260 50 L280 50 L300 20 L320 80 L340 50 L1200 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary-500"
          />
        </svg>

        {/* Floating Medical Icons */}
        <motion.div
          className="absolute top-20 right-20 text-primary-200"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Heart className="w-16 h-16 opacity-20" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-10 text-secondary-200"
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <Activity className="w-20 h-20 opacity-20" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-10 text-tertiary-200"
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          <Zap className="w-12 h-12 opacity-20" />
        </motion.div>

        {/* Pulse Rings */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full border-2 border-primary-300"
          animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>



      <Navigation />


      {/* Hero Section */}
      <Hero />

      

      {/* Products Section */}
      <Products />

 
      {/* Technology Section */}
      <Features />

      {/* About Section */}
      <About />

      {/* Applications Section */}
      <Applications />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </>
  );
}


