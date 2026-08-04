"use client";

import { motion } from "framer-motion";
import { User, Award, Target, Trophy, Clock, Star } from "lucide-react";

export default function About() {
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
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />

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
            <span className="text-[10px] uppercase font-mono tracking-widest text-gold-light">My Background</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            About <span className="gold-gradient">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-gold/50 to-gold mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Get to know more about my journey, passion, and what drives me to create exceptional digital experiences with high visual fidelity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Column - Premium Interactive Image/Avatar Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-gold to-neon-purple rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition duration-700" />
            
            <div className="relative glass p-6 rounded-3xl border-white/10 bg-[#050510]/80">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-gold/10 via-neon-purple/5 to-neon-blue/10 flex flex-col items-center justify-center border border-white/5 relative overflow-hidden group/inner">
                {/* Floating design elements inside the frame */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <img
                    src="/imges/my-image.jpg"
                    alt="Esha's Avatar"
                    width={200}
                    height={200}
                    className="rounded-full object-cover w-48 h-48 sm:w-56 sm:h-56 border-4 border-gold/20 shadow-lg group-hover/inner:scale-105 transition-transform duration-700"
                  />
                </div>

                <span className="absolute bottom-6 font-mono text-xs text-gray-500 uppercase tracking-widest">Active Developer</span>
              </div>
            </div>

            {/* Micro-interaction Overlay Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl border-white/10 shadow-2xl flex items-center gap-3 bg-[#050510]/95"
            >
              <div className="p-2.5 rounded-xl bg-gold/10 text-gold">
                <Award size={20} />
              </div>
              <div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Status</div>
                <div className="text-sm font-bold text-white">Full-Time Freelancer</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Presentation of Skills & Experience Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">
              I'm a <span className="gold-gradient">Passionate Developer</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
             I'm a web developer focused on building modern websites with Next.js, React, TypeScript, and AI tools. 
             Alongside web development, I'm continuously expanding my skills in Python, Agentic AI, and intelligent
             automation through practical projects and continuous learning.
            </p>
            <p className="text-gray-300 leading-relaxed">
             My goal is to create innovative digital solutions that combine great design, performance, 
             and emerging AI technologies.
            </p>
            </div>


            <div className="pt-4 flex">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs uppercase tracking-widest font-mono text-gold glass border-gold/30 hover:border-gold transition-all duration-300 font-bold group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Target size={14} className="group-hover:rotate-45 transition-transform duration-300" />
                Let's Build Something Great
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
