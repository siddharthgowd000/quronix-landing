"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Products", href: "#products" },
  { name: "Technology", href: "#technology" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Applications", href: "#applications" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      const scrollY = window.scrollY + 120;
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center  pointer-events-none">
      <div
        className={cn(
          "w-full max-w-8xl h-16 md:h-20 flex items-center justify-between px-4 md:px-8  pointer-events-auto transition-all duration-500",
          "bg-white/95 backdrop-blur-xl border border-neutral-200/80 shadow-sm",
          "shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.04)]",
          isScrolled && "shadow-[0_4px_20px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.02)]"
        )}
      >
        {/* Logo - click to top */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMobileOpen(false);
          }}
          className="flex items-center gap-3 shrink-0"
        >
          <div className="relative h-24 max-w-[280px] shrink-0">
            <Image
              src="/logo.png"
              alt="Quronix"
              width={200}
              height={200}
              className="object-contain object-left h-full w-auto"
              priority
            />
          </div>
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "relative px-4 py-2 rounded-lg text-md font-medium transition-colors",
                  isActive
                    ? "text-primary-600"
                    : "text-neutral-600 hover:text-primary-600 hover:bg-primary-50/80"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right: CTA + mobile menu button */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden sm:block"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-950 text-white text-sm font-medium shadow-lg shadow-neutral-950/10 hover:bg-neutral-800 transition-colors"
            >
              Get in Touch
              <ChevronRight className="size-4" />
            </motion.button>
          </a>

          <motion.button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden p-2 rounded-xl text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 pointer-events-auto overflow-hidden"
          >
            <div className="bg-white border border-neutral-200 rounded-2xl shadow-lg shadow-neutral-200/50 py-3 px-2">
              {navLinks.map((link) => {
                const id = link.href.slice(1);
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      isActive ? "text-primary-600 bg-primary-50/80" : "text-neutral-700 hover:bg-neutral-100"
                    )}
                  >
                    {link.name}
                    <ChevronRight className="size-4 text-neutral-400" />
                  </a>
                );
              })}
              <div className="border-t border-neutral-200/80 mt-2 pt-2 px-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-neutral-950 text-white text-sm font-medium"
                >
                  Get in Touch
                  <ChevronRight className="size-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
