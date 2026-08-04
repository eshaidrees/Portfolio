"use client";

import { motion, Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Sparkles, Code2, Terminal, Cpu, ArrowRight } from "lucide-react";

export default function Hero() {
  // Stagger container for animating elements in sequence
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Fade up animations for children
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  // Subtle pulsing glow for ambient background circles
  const glowVariants: Variants = {
    animate: {
      scale: [1, 1.1, 0.95, 1],
      opacity: [0.6, 0.8, 0.5, 0.6],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-20">
      {/* Cinematic Ambient Backglow & Background patterns */}
      <div className="absolute inset-0 z-0">
        {/* Dot pattern grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:32px_32px] opacity-80" />
        
        {/* Centered multi-layered neon glow backdrops (lens flares) */}
        <motion.div 
          variants={glowVariants}
          animate="animate"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" 
        />
        <motion.div 
          animate={{
            scale: [1, 0.9, 1.1, 1],
            opacity: [0.4, 0.7, 0.5, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-neon-blue/800 bg-opacity-5 bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" 
        />
        <motion.div 
          animate={{
            scale: [1.1, 1, 0.9, 1.1],
            opacity: [0.3, 0.5, 0.4, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-gold/5 rounded-full blur-[90px] pointer-events-none" 
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl flex flex-col items-center justify-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-8"
        >
          {/* Futuristic Portfolio Pill Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 glass px-4.5 py-2 rounded-full border-gold/20 shadow-[0_0_20px_rgba(212,175,55,0.08)] hover:border-gold/40 transition-colors duration-500 cursor-default"
          >
            <Sparkles className="text-gold animate-pulse" size={14} />
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold-light font-semibold">
              Esha's Portfolio
            </span>
          </motion.div>

          {/* Cinematic Epic Heading - Scaled for better balance */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] max-w-4xl"
          >
            <span className="block text-white mb-2 font-mono text-lg sm:text-xl tracking-normal text-gray-400 font-medium">
              Hi, I'm Esha
            </span>
            <TypeAnimation
              sequence={[
                "Next-Gen AI & Web Developer",
                1500,
                "Future AI Agent Architect",
                1500,
                "Innovative Problem Solver",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block neon-gradient text-glow filter drop-shadow-[0_2px_10px_rgba(0,212,255,0.15)] pb-1"
            />
            <span className="block neon-gradient text-glow filter drop-shadow-[0_2px_10px_rgba(0,212,255,0.15)] mt-1">
              Always Learning, Always Building
            </span>
          </motion.h1>

          {/* Premium Refined Tagline/Bio */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-sans"
          >
            I build modern, high-performance web applications using <span className="text-white font-medium">Next.js</span>, <span className="text-white font-medium">React</span>, and <span className="text-white font-medium">TypeScript</span>. 
            Passionate about crafting intelligent digital experiences and designing autonomic AI agents.
          </motion.p>

          {/* Micro-Interactive Tech Capsule Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 py-3 max-w-xl"
          >
            <div className="flex items-center gap-2 glass px-3.5 py-1.5 rounded-full border-white/5 hover:border-neon-blue/30 transition-all duration-300 group">
              <Code2 className="text-neon-blue group-hover:scale-110 transition-transform" size={14} />
              <span className="text-[11px] font-mono text-gray-400 group-hover:text-white transition-colors">Next.js Expert</span>
            </div>
            <div className="flex items-center gap-2 glass px-3.5 py-1.5 rounded-full border-white/5 hover:border-neon-purple/30 transition-all duration-300 group">
              <Cpu className="text-neon-purple group-hover:scale-110 transition-transform" size={14} />
              <span className="text-[11px] font-mono text-gray-400 group-hover:text-white transition-colors">High Performance</span>
            </div>
            <div className="flex items-center gap-2 glass px-3.5 py-1.5 rounded-full border-white/5 hover:border-gold/30 transition-all duration-300 group">
              <Terminal className="text-gold group-hover:scale-110 transition-transform" size={14} />
              <span className="text-[11px] font-mono text-gray-400 group-hover:text-white transition-colors">AI Agent Developer</span>
            </div>
          </motion.div>

          {/* Centered CTA Buttons with Hover and Scale Effects */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-6"
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 rounded-xl text-xs uppercase tracking-widest font-mono text-[#050510] bg-gold hover:bg-gold-light transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.5)] font-bold text-center inline-flex items-center justify-center gap-2.5 group w-full sm:w-auto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 rounded-xl text-xs uppercase tracking-widest font-mono text-white glass hover:border-white/20 transition-all duration-300 text-center inline-flex items-center justify-center w-full sm:w-auto hover:bg-white/5 hover:shadow-[0_4px_20px_rgba(255,255,255,0.02)]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Cinematic Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 z-10 cursor-pointer"
        onClick={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[9px] uppercase tracking-widest font-mono text-gray-500 font-semibold hover:text-white transition-colors">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5.5 h-9 rounded-full border border-gray-600 flex justify-center p-1.5 hover:border-gold transition-colors"
        >
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-gold" 
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
