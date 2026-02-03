"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, Shield, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "System Overview", href: "#products" },
  { name: "Neural Tech", href: "#technology" },
  { name: "Clinical Data", href: "#about" },
];

export default function PerfectNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <div 
        className={cn(
          "w-full max-w-7xl h-16 flex items-center border-2 justify-between px-6 rounded-2xl pointer-events-auto transition-all duration-500",
          // Using your EXACT .glass utility
          "glass", 
          isScrolled ? " h-14 bg-white/90 shadow-lg shadow-primary-500/5" : ""
        )}
      >
        {/* Branding Area */}
        <div className="flex items-center gap-3">
          <div className="size-9 bg-primary-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20">
            <Activity className="size-5 text-white" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-lg leading-none tracking-tighter text-neutral-950">
              QURONIX
            </span>
            {/* Using your .text-clinical utility for the sub-label */}
            <span className="text-clinical text-[8px] text-neutral-400 mt-0.5">
              Core Engine v4.0
            </span>
          </div>
        </div>

        {/* Desktop Links using .text-clinical */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-clinical text-[11px] text-neutral-500 hover:text-primary-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Shield className="size-3 text-emerald-500" />
            <span className="text-clinical text-[9px] text-neutral-400">Secure Node</span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-neutral-950 text-white text-clinical text-[10px] shadow-xl shadow-neutral-950/10"
          >
            INITIALIZE
            <ChevronRight className="size-3" />
          </motion.button>
        </div>
      </div>
    </nav>
  );
}