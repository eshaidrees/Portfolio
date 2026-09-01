"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiMail, FiArrowUp, FiHeart } from "react-icons/fi";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/eshaidrees",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: FiMail,
    href: "mailto:contact@example.com",
    label: "Email",
  },
];

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative mt-20 overflow-hidden border-t border-white/[0.06] bg-[#07070c]">

      {/* Soft background glow */}
      <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-500/[0.07] blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 py-16 md:px-12">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-3 md:items-start">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#home"
              className="inline-block text-2xl font-black tracking-tight"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Esha
              </span>
              <span className="text-white">.</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
              Web developer focused on building modern, responsive, and
              high-performance digital experiences with React, Next.js,
              TypeScript, and AI technologies.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{
                      y: -4,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-xl
                      border border-white/10
                      bg-white/[0.03]
                      text-gray-400
                      transition-all duration-300
                      hover:border-purple-400/40
                      hover:bg-purple-400/10
                      hover:text-white
                    "
                  >
                    <Icon size={17} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    w-fit text-sm text-gray-500
                    transition-colors duration-300
                    hover:text-purple-400
                  "
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Let's Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Let's Connect
            </h3>

            <p className="max-w-xs text-sm leading-6 text-gray-500">
              Have a project, idea, or opportunity in mind? I'd love to hear
              from you.
            </p>

            <a
              href="#contact"
              className="
                mt-5 inline-flex items-center gap-2
                rounded-xl
                border border-purple-400/30
                bg-purple-400/10
                px-5 py-3
                text-xs font-semibold uppercase
                tracking-wider text-purple-300
                transition-all duration-300
                hover:border-purple-400/60
                hover:bg-purple-400/20
                hover:text-white
              "
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/[0.06]" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            flex flex-col items-center justify-between
            gap-5
            sm:flex-row
          "
        >
          <p className="flex items-center gap-1.5 text-xs text-gray-500">
            © {new Date().getFullYear()} Esha. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-gray-500">
            Built with
            <FiHeart
              size={12}
              className="text-pink-400"
            />
            using Next.js
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            aria-label="Back to top"
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl
              border border-white/10
              bg-white/[0.03]
              text-gray-400
              transition-all duration-300
              hover:border-purple-400/40
              hover:bg-purple-400/10
              hover:text-white
            "
          >
            <FiArrowUp size={17} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}