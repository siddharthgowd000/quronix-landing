"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, ChevronRight, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
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
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

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
          "w-full max-w-8xl h-16 md:h-20 flex items-center justify-between px-4 md:px-8 pointer-events-auto transition-all duration-500",
          "bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm",
          "shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.04)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.3)]",
          isScrolled && "shadow-[0_4px_20px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
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
                    ? "text-primary-500 dark:text-primary-400"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50/80 dark:hover:bg-neutral-800/80"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary-500 dark:bg-primary-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right: Theme toggle + CTA + mobile menu button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme toggle */}
          {mounted && (
            <motion.button
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              onClick={() => setTheme(isDark ? "light" : "dark")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "p-2.5 rounded-xl transition-colors",
                "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200",
                "hover:bg-neutral-100 dark:hover:bg-neutral-800",
                "border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700"
              )}
            >
              {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
            </motion.button>
          )}

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden sm:block"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-sm font-medium shadow-lg shadow-neutral-950/10 dark:shadow-neutral-500/20 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
            >
              Get in Touch
              <ChevronRight className="size-4" />
            </motion.button>
          </a>

          <motion.button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden p-2 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
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
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow-lg shadow-neutral-200/50 dark:shadow-neutral-950/50 py-3 px-2">
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
                      isActive ? "text-primary-600 dark:text-primary-400 bg-primary-50/80 dark:bg-primary-900/30" : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    )}
                  >
                    {link.name}
                    <ChevronRight className="size-4 text-neutral-400 dark:text-neutral-500" />
                  </a>
                );
              })}
              <div className="border-t border-neutral-200/80 dark:border-neutral-700/80 mt-2 pt-2 px-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-sm font-medium"
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
