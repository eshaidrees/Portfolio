"use client";

import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiCheckCircle,
  FiCalendar,
} from "react-icons/fi";

const educationItems = [
  {
    title: "Intermediate in Commerce",
    subtitle: "Business & Commerce",
    period: "2021 – 2023",
    description:
      "Completed intermediate studies with a focus on accounting, business fundamentals, economics, and commerce.",
  },

  {
    title: "GIAIC – Artificial Intelligence & Computing",
    subtitle: "Professional Training Program",
    period: "Feb 2024 – Dec 2025",
    description:
      "Completed an intensive technology program focused on modern web development, programming, artificial intelligence, and emerging AI technologies.",
  },

  {
    title: "TypeScript",
    subtitle: "Quarter 1",
    period: "Completed",
    description:
      "Developed a strong foundation in TypeScript, including static typing, interfaces, generics, reusable types, and scalable application architecture.",
  },

  {
    title: "Next.js – Frontend Development",
    subtitle: "Quarter 2",
    period: "Completed",
    description:
      "Built modern web applications with Next.js, focusing on responsive interfaces, routing, server-side rendering, reusable components, and performance optimization.",
  },

  {
    title: "Advanced Python",
    subtitle: "Quarter 3",
    period: "Completed",
    description:
      "Strengthened Python programming skills through advanced concepts, object-oriented programming, problem solving, automation, and practical development projects.",
  },

  {
    title: "Agentic AI with OpenAI Agents SDK",
    subtitle: "Quarter 4",
    period: "Completed",
    description:
      "Explored agentic AI development, intelligent workflows, tool integration, and autonomous AI systems using modern AI agent technologies.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#050511] py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Purple glow */}

        <div className="absolute left-[8%] top-[20%] h-[400px] w-[400px] rounded-full bg-purple-600/8 blur-[140px]" />

        {/* Cyan glow */}

        <div className="absolute bottom-[15%] right-[8%] h-[400px] w-[400px] rounded-full bg-cyan-500/7 blur-[140px]" />

        {/* Soft fade */}

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050511] to-transparent" />
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-14">

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
          className="mb-16 max-w-2xl"
        >
          {/* Label */}

          <div className="mb-4 flex items-center gap-2">
            <FiBookOpen
              size={14}
              className="text-purple-400"
            />

            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-purple-300">
              Education & Learning
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          {/* Accent line */}

          <div className="mt-4 h-[2px] w-14 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500" />

          {/* Description */}

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-[15px]">
            My educational journey combines a foundation in commerce with
            professional training in web development, programming, and
            artificial intelligence.
          </p>
        </motion.div>

        {/* =====================================================
            TIMELINE
        ====================================================== */}

        <div className="relative">

          {/* Desktop Timeline */}

          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-purple-500/60 via-fuchsia-500/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">

            {educationItems.map((item, index) => {

              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 30,
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
                    duration: 0.6,
                    delay: index * 0.06,
                  }}
                  className="relative md:grid md:grid-cols-2"
                >

                  {/* =================================================
                      TIMELINE DOT
                  ================================================== */}

                  <div className="absolute left-5 top-7 z-20 -translate-x-1/2 md:left-1/2">

                    <div className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-purple-400 bg-[#050511] shadow-[0_0_15px_rgba(168,85,247,0.45)]">

                      <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400" />

                    </div>

                  </div>

                  {/* =================================================
                      CARD
                  ================================================== */}

                  <div
                    className={`pl-12 md:pl-0 ${
                      isEven
                        ? "md:pr-14"
                        : "md:col-start-2 md:pl-14"
                    }`}
                  >

                    <motion.div
                      whileHover={{
                        y: -5,
                      }}
                      className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#080817]/75 p-6 backdrop-blur-sm transition-all duration-500 hover:border-purple-400/30 hover:bg-[#0a0a1d]"
                    >

                      {/* Hover glow */}

                      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* =================================================
                          TOP ROW
                      ================================================== */}

                      <div className="relative z-10 flex items-start justify-between gap-4">

                        <div className="flex items-center gap-3">

                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/10 bg-purple-500/[0.07] text-purple-300 transition-colors duration-300 group-hover:border-purple-400/30 group-hover:text-fuchsia-300">
                            <FiBookOpen size={18} />
                          </div>

                          <div>

                            <div className="flex items-center gap-2">

                              <FiCalendar
                                size={11}
                                className="text-cyan-400"
                              />

                              <span className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
                                {item.period}
                              </span>

                            </div>

                          </div>

                        </div>

                        {/* Completed */}

                        <FiCheckCircle
                          size={17}
                          className="shrink-0 text-purple-400/70 transition-colors duration-300 group-hover:text-cyan-400"
                        />

                      </div>

                      {/* =================================================
                          TITLE
                      ================================================== */}

                      <div className="relative z-10 mt-5">

                        <h3 className="text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-purple-300">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs font-medium text-cyan-400/80">
                          {item.subtitle}
                        </p>

                      </div>

                      {/* =================================================
                          DESCRIPTION
                      ================================================== */}

                      <p className="relative z-10 mt-4 text-sm leading-6 text-gray-400">
                        {item.description}
                      </p>

                      {/* Bottom accent */}

                      <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 transition-transform duration-500 group-hover:scale-x-100" />

                    </motion.div>

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>

        {/* =====================================================
            BOTTOM NOTE
        ====================================================== */}

        <motion.div
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
          }}
          className="mt-14 text-center"
        >
          <p className="text-xs tracking-wide text-gray-600">
            Always learning. Always building. Always improving.
          </p>
        </motion.div>

      </div>
    </section>
  );
}