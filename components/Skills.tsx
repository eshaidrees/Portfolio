"use client";

import { motion } from "framer-motion";
import React from "react";
import { SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiSanity, SiPython   } from "react-icons/si";
 
const frontendSkills = [
  { name: "HTML", level: 90, icon: <SiHtml5 className="text-orange-500 text-xl" />, color: "bg-orange-600" },
  { name: "CSS", level: 85, icon: <SiCss className="text-blue-500 text-xl" />, color: "bg-blue-600" },
  { name: "JavaScript", level: 60, icon: <SiJavascript className="text-yellow-500 text-xl" />, color: "bg-yellow-500" },
  { name: "TypeScript", level: 75, icon: <SiTypescript className="text-blue-500 text-xl" />, color: "bg-blue-700" },
  { name: "React", level: 70, icon: <SiReact className="text-cyan-500 text-xl" />, color: "bg-cyan-500" },
  { name: "Next.js", level: 70, icon: <SiNextdotjs className="text-gray-400 text-xl" />, color: "bg-gray-600" },
];

const backendSkills = [
  { name: "Node.js", level: 85, icon: <SiNodedotjs  className="text-green-500 text-xl" />, color: "bg-green-600" },
  { name: "Sanity CMS", level: 70, icon: <SiSanity  className="text-red-700 text-xl" />, color: "bg-red-700" },
  { name: "Python", level: 80, icon: <SiPython className="text-yellow-400 text-xl" />, color: "bg-yellow-400" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background neon orb highlights */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full border-gold/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
            <span className="text-[10px] uppercase font-mono tracking-widest text-gold-light">Expertise & Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            My <span className="gold-gradient">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-gold/50 to-gold mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Technologies and tools I leverage to build state-of-the-art interactive systems and secure scalable architectures.
          </p>
        </motion.div>

        {/* Categories Grid - Two Columns: Frontend and Backend, Data Management & AI Development */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Frontend Category */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-3xl border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-cyan-500 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500" />
            
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 flex items-center gap-2">
              <span className="text-gold font-mono">{"<"}</span> Frontend <span className="text-gold font-mono">{" />"}</span>
            </h3>

            <div className="space-y-6">
              {frontendSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="mb-6"
                >
                  <div className="flex justify-between mb-1 text-white text-sm font-medium">
                    <span className="flex items-center gap-2 text-lg font-medium text-white">
                      {skill.icon} {skill.name}
                    </span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-300/20 dark:bg-gray-700/50 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-3 rounded-full ${skill.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend, Data Management & AI Development Category */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-3xl border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-indigo-500 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500" />

            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 flex items-center gap-2">
              <span className="text-gold font-mono">&#123;</span> Backend And Data Management <span className="text-gold font-mono">&#125;</span>
            </h3>

            <div className="space-y-6">
              {backendSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="mb-6"
                >
                  <div className="flex justify-between mb-1 text-white text-sm font-medium">
                    <span className="flex items-center gap-2 text-lg font-medium text-white">
                      {skill.icon} {skill.name}
                    </span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-300/20 dark:bg-gray-700/50 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-3 rounded-full ${skill.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
