"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const projects = [
  {
    title: "AI Taskbook",
    description: "An intelligent task management application with AI-powered scheduling, prioritization, and productivity insights.",
    tags: ["Next.js", "TypeScript", "OpenAI", "Tailwind CSS"],
    image: "/imges/AI_Teskbook.png",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Amazon Landing Page",
    description: "A modern, responsive landing page inspired by Amazon's design system with smooth animations and interactive elements.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    image: "/imges/Amazon_Landing_Page.png",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Blog Platform",
    description: "A full-featured blog platform with markdown support, SEO optimization, and a beautiful reading experience.",
    tags: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    image: "/imges/Blog.png",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Company Portfolio",
    description: "A professional corporate portfolio website showcasing services, team members, and company achievements.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/imges/Company-Portfolio.jpg",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "E-Commerce Store",
    description: "A complete e-commerce solution with product catalog, shopping cart, and secure checkout functionality.",
    tags: ["Next.js", "Stripe", "MongoDB", "Redux"],
    image: "/imges/e-commerce.png",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Figma Design System",
    description: "A comprehensive design system and component library built for Figma with reusable UI components.",
    tags: ["Figma", "Design System", "UI Components", "Prototyping"],
    image: "/imges/Figma.png",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Sofa Web Design",
    description: "An elegant furniture e-commerce website with 3D product views and immersive shopping experience.",
    tags: ["React", "Three.js", "GSAP", "Styled Components"],
    image: "/imges/Sofa_web.png",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Todo Application",
    description: "A feature-rich todo app with drag-and-drop, categories, due dates, and progress tracking.",
    tags: ["React", "TypeScript", "Local Storage", "DnD Kit"],
    image: "/imges/Todo-App.png",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Creative Project",
    description: "An innovative creative project showcasing modern web technologies and interactive design patterns.",
    tags: ["Next.js", "Three.js", "WebGL", "GSAP"],
    image: "/imges/project-1.png",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none" />

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
            <span className="text-[10px] uppercase font-mono tracking-widest text-gold-light">Selected Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Featured <span className="gold-gradient">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-gold/50 to-gold mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            A meticulous showcase of digital systems crafted with React, high-fidelity UI design patterns, and creative interactivity.
          </p>
        </motion.div>

        {/* Dynamic Bento-inspired Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const isFeatured = project.featured;
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 group relative flex flex-col h-full bg-[#050510]/60 ${
                  isFeatured ? "md:col-span-2 lg:col-span-1 border-gold/20" : "border-white/5"
                }`}
              >
                {/* Image panel with zoom effect */}
                <div className="h-56 relative overflow-hidden bg-[#050510] border-b border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      // Fallback visual in case images don't load
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  {/* Decorative Project Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold via-neon-purple to-neon-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
                </div>

                {/* Content Panel */}
                <div className="p-8 flex flex-col flex-grow relative z-10">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors duration-300 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed font-sans flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] font-mono rounded-xl bg-gold/5 text-gold border border-gold/10 hover:border-gold/30 hover:bg-gold/10 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links Row */}
                  <div className="flex gap-6 mt-auto border-t border-white/5 pt-5">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-gold transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      <GithubIcon size={14} />
                      Source Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-gold transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs uppercase tracking-widest font-mono text-gold glass border-gold/30 hover:border-gold transition-all duration-300 font-bold group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Complete Archive
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
