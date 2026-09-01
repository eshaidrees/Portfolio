"use client";

import { motion } from "framer-motion";
import {
  FiMail,
  FiSend,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050511] py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Purple glow */}

        <div className="absolute left-[10%] top-[20%] h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[130px]" />

        {/* Cyan glow */}

        <div className="absolute bottom-[10%] right-[10%] h-[350px] w-[350px] rounded-full bg-cyan-500/8 blur-[130px]" />

        {/* Center glow */}

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/5 blur-[120px]" />

        {/* Bottom fade */}

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050511] to-transparent" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-12 text-center"
        >
          {/* Small label */}

          <div className="mb-4 inline-flex items-center gap-2">
            <FiMail
              size={14}
              className="text-fuchsia-400"
            />

            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-purple-300">
              Get In Touch
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          {/* Accent */}

          <div className="mx-auto mt-4 h-[2px] w-14 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400" />

          {/* Description */}

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-[15px]">
            Have a project in mind or want to discuss an idea? Send me a
            message and let's create something meaningful together.
          </p>
        </motion.div>

        {/* =====================================================
            CONTACT CARD
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-2xl"
        >
          <div className="group relative">

            {/* Outer glow */}

            <div className="pointer-events-none absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-fuchsia-500/30 via-purple-500/20 to-cyan-400/30 opacity-60 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

            {/* Card */}

            <div className="relative rounded-3xl border border-white/[0.08] bg-[#080817]/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">

              {/* Top icon */}

              <div className="mb-8 flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-purple-300">
                  <FiSend size={19} />
                </div>

                <div>
                  <h3 className="text-base font-bold text-white">
                    Send Me a Message
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    I'll get back to you as soon as possible.
                  </p>
                </div>

              </div>

              {/* =================================================
                  FORM
              ================================================== */}

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-5"
              >
                {/* Web3Forms */}

                <input
                  type="hidden"
                  name="access_key"
                  value="814718bb-47d7-41bf-aa06-d10452d13958"
                />

                {/* Name */}

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 flex items-center gap-2 text-xs font-medium text-gray-300"
                  >
                    <FiUser
                      size={13}
                      className="text-purple-400"
                    />

                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition-all duration-300 focus:border-purple-400/50 focus:bg-purple-500/[0.03] focus:ring-2 focus:ring-purple-500/10"
                  />
                </div>

                {/* Email */}

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 flex items-center gap-2 text-xs font-medium text-gray-300"
                  >
                    <FiMail
                      size={13}
                      className="text-cyan-400"
                    />

                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition-all duration-300 focus:border-cyan-400/50 focus:bg-cyan-500/[0.03] focus:ring-2 focus:ring-cyan-500/10"
                  />
                </div>

                {/* Message */}

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 flex items-center gap-2 text-xs font-medium text-gray-300"
                  >
                    <FiMessageSquare
                      size={13}
                      className="text-fuchsia-400"
                    />

                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me a little about your project..."
                    required
                    rows={6}
                    className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition-all duration-300 focus:border-fuchsia-400/50 focus:bg-fuchsia-500/[0.03] focus:ring-2 focus:ring-fuchsia-500/10"
                  />
                </div>

                {/* =================================================
                    SEND BUTTON
                ================================================== */}

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 px-5 py-3.5 text-sm font-bold text-white shadow-[0_8px_30px_rgba(168,85,247,0.2)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(168,85,247,0.35)]"
                >
                  <span>Send Message</span>

                  <FiSend
                    size={15}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5"
                  />
                </motion.button>

              </form>

            </div>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM TEXT
        ====================================================== */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-8 text-center text-xs tracking-wide text-gray-600"
        >
          Let's turn your idea into a beautiful digital experience.
        </motion.p>

      </div>
    </section>
  );
}