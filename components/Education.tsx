"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, CheckCircle2, Bookmark } from "lucide-react";

const educationItems = [
  {
    title: "Intermediate in Commerce",
    subtitle: "Focus on Business & Commerce",
    status: "2021 - 2023",
    description: "Completed intermediate studies with a focus on commerce, financial accounting, and business fundamentals.",
    isCompleted: true,
  },
  {
    title: "GIAIC - Artificial Intelligence & Computing",
    subtitle: "Advanced TypeScript",
    status: "Feb 2024 - Dec 2025",
    description: "Mastered TypeScript at an advanced level with practical implementations, strict typing systems, and solid architectural designs.",
    isCompleted: true,
  },
  {
    title: "Typescript",
    subtitle: "Quarter 1",
    status: "Completed",
    description: "Comprehensive study of Next.js framework, including server-side rendering, static site generation, and modern web development architectures.",
    isCompleted: true,
  },
  {
    title: "Next.js (Frontend Development)",
    subtitle: "Quarter 2",
    status: "Completed",
    description: "Focused on advanced Python programming concepts, object-oriented design patterns, and groundwork for Agentic AI development.",
    isCompleted: true,
  },
  {
    title: "Advanced Python",
    subtitle: "Quarter 3",
    status: "Completed",
    description: "Currently working on state-of-the-art Agentic AI systems, workflow orchestration, and tooling integrations using the OpenAI Agents SDK.",
    isCompleted: true,
  },
  {
    title: "Agentic AI with OpenAI Agents SDK",
    subtitle: "Quarter 4",
    status: "Completed",
    description: "Final specialized track focusing on production deployment, microservice architectures, and scaled agent solutions.",
    isCompleted: true,
  },
];

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="education" className="py-32 relative overflow-hidden">
      {/* Background neon elements */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full border-gold/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-[10px] uppercase font-mono tracking-widest text-gold-light">Milestones & Learning</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Educational <span className="gold-gradient">Journey</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-gold/50 to-gold mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-sans">
            A comprehensive overview of my specialized education, advanced programming training, and quarter milestones at GIAIC.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Center Line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-gold/50 via-neon-purple/30 to-transparent pointer-events-none" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {educationItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline node/dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div className="w-4 h-4 rounded-full bg-[#050510] border-2 border-gold flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.4)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    </div>
                  </div>

                  {/* Left spacer/right container layout */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12">
                    <motion.div
                      whileHover={{ y: -5, borderColor: "rgba(212,175,55,0.3)" }}
                      className="glass p-8 rounded-2xl border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300 relative group"
                    >
                      {/* Sub-decorative icons */}
                      <div className="absolute top-6 right-6 text-gray-700 group-hover:text-gold transition-colors duration-300">
                        {item.isCompleted ? <CheckCircle2 size={16} className="text-green-500" /> : <Bookmark size={16} />}
                      </div>

                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-xl bg-gold/5 border border-gold/10 text-gold">
                          <GraduationCap size={18} />
                        </div>
                        <div>
                          <span className="px-3 py-1 text-[9px] font-mono tracking-wider uppercase rounded-full bg-gold/10 text-gold border border-gold/20">
                            {item.status}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-lg font-black text-white tracking-wide mb-1 group-hover:text-gold transition-colors">
                        {item.title}
                      </h3>
                      <h4 className="text-xs font-mono text-neon-blue mb-4">
                        {item.subtitle}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Empty balance spacer for desktop */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
