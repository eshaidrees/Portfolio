"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiCode,
  FiArrowUpRight,
} from "react-icons/fi";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navItems.map((item) => item.href.substring(1));

      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 180 && rect.bottom >= 180) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <motion.nav
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "border-b border-white/[0.06] bg-[#050511]/85 py-3 backdrop-blur-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">

          {/* =================================================
              LOGO
          ================================================== */}

          <motion.a
            href="#home"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2.5"
          >
            {/* Logo Icon */}

            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 transition-all duration-300 group-hover:border-fuchsia-400/40 group-hover:bg-purple-500/20">
              <FiCode
                size={18}
                className="text-purple-300 transition-transform duration-300 group-hover:rotate-6"
              />

              {/* Small glow */}

              <div className="absolute inset-0 rounded-xl bg-purple-500/10 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Logo Text */}

            <span className="text-lg font-black tracking-tight text-white">
              Portfolio
              <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                .
              </span>
            </span>
          </motion.a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item, index) => {
              const sectionName = item.href.substring(1);
              const isActive = activeSection === sectionName;

              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  initial={{
                    opacity: 0,
                    y: -15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className={`group relative px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-500 hover:text-gray-200"
                  }`}
                >
                  {item.name}

                  {/* Active underline */}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 shadow-[0_0_10px_rgba(217,70,239,0.45)]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Hover dot */}

                  {!isActive && (
                    <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-fuchsia-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* =================================================
              DESKTOP CONTACT BUTTON
          ================================================== */}

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="hidden items-center gap-2 rounded-full border border-purple-400/25 bg-purple-500/10 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-purple-200 transition-all duration-300 hover:border-fuchsia-400/40 hover:bg-fuchsia-500/10 hover:text-white lg:flex"
          >
            Let's Talk

            <FiArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </motion.a>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <motion.button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{
              scale: 0.92,
            }}
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-gray-300 transition-all duration-300 hover:border-purple-400/30 hover:text-white lg:hidden"
          >
            {isMobileMenuOpen ? (
              <FiX size={20} />
            ) : (
              <FiMenu size={20} />
            )}
          </motion.button>
        </div>

        {/* ===================================================
            MOBILE MENU
        ==================================================== */}

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="overflow-hidden border-t border-white/[0.06] bg-[#050511]/95 backdrop-blur-2xl lg:hidden"
            >
              <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8">

                <div className="flex flex-col gap-1">
                  {navItems.map((item, index) => {
                    const sectionName = item.href.substring(1);
                    const isActive =
                      activeSection === sectionName;

                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={handleNavClick}
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.04,
                        }}
                        className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm transition-all duration-300 ${
                          isActive
                            ? "bg-purple-500/10 text-white"
                            : "text-gray-500 hover:bg-white/[0.03] hover:text-white"
                        }`}
                      >
                        <span>{item.name}</span>

                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 shadow-[0_0_8px_rgba(217,70,239,0.6)]" />
                        )}
                      </motion.a>
                    );
                  })}
                </div>

                {/* Mobile CTA */}

                <motion.a
                  href="#contact"
                  onClick={handleNavClick}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: navItems.length * 0.04,
                  }}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 px-5 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-purple-500/10"
                >
                  Let's Talk

                  <FiArrowUpRight size={15} />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}