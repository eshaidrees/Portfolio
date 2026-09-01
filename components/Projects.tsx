"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiExternalLink,
  FiGithub,
  FiFolder,
} from "react-icons/fi";

const projects = [
  {
    title: "MS Cakes & Bakes",
    description:
      "A modern bakery e-commerce website designed to showcase cakes, pastries, and custom bakery products with a smooth and user-friendly shopping experience.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/images/hero2.png",
    github: "https://github.com/eshaidrees/MS_Cakes.git",
    live: "https://mscakesandbakes.vercel.app",
    featured: true,
  },

  {
    title: "AI Taskbook",
    description:
      "An interactive AI-powered learning platform created to organize technical content, present structured lessons, and provide a modern reading experience.",
    tags: ["Next.js", "TypeScript", "OpenAI", "Tailwind CSS"],
    image: "/images/AI-Teskbook.png",
    github: "https://github.com/eshaidrees/physical-ai-textbook.git",
    live: "https://eshaidrees.github.io/physical-ai-textbook/",
    featured: true,
  },

  {
    title: "Amazon Landing Page",
    description:
      "A responsive e-commerce landing page inspired by modern online shopping platforms, featuring a clean product-focused layout and interactive user interface.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    image: "/images/Amazon_Landing_Page.png",
    github: "https://github.com/eshaidrees/Found_and_Favoured.git",
    live: "https://cozy-muse-find.vercel.app",
    featured: false,
  },

  {
    title: "Blog Platform",
    description:
      "A modern blogging platform built for creating and presenting content with a clean interface, responsive layouts, and an enjoyable reading experience.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: "/images/Blog.png",
    github: "https://github.com/eshaidrees/milestone-3-blog.git",
    live: "https://milestone-3-blog-alpha.vercel.app",
    featured: false,
  },

  {
    title: "Company Portfolio",
    description:
      "A professional company portfolio website designed to present business services, company information, team members, and achievements through a polished responsive interface.",
    tags: ["HTML", "CSS", "TypeScript", "React"],
    image: "/images/Company-Portfolio.jpg",
    github: "https://github.com/eshaidrees/Company-Portfolio.git",
    live: "https://company-portfolio-sable-six.vercel.app/",
    featured: false,
  },

  {
    title: "E-Commerce Store",
    description:
      "A complete e-commerce application featuring product browsing, shopping cart functionality, responsive product pages, and a streamlined online shopping experience.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: "/images/e-commerce.png",
    github:
      "https://github.com/eshaidrees/milestone-3-e-commerce-website.git",
    live: "https://milestone-3-e-commerce-website-neon.vercel.app/",
    featured: true,
  },

  {
    title: "Figma Design System",
    description:
      "A reusable UI design system created in Figma with structured components, consistent visual patterns, and reusable interface elements for modern digital products.",
    tags: ["Figma", "Design System", "UI Components", "Prototyping"],
    image: "/images/Figma.png",
    github:
      "https://github.com/eshaidrees/class-assignment-2-figma-design.git",
    live: "https://assignment-figma-design.vercel.app/",
    featured: false,
  },

  {
    title: "Sofa Web Design",
    description:
      "A modern furniture website focused on elegant product presentation, responsive layouts, and an immersive shopping experience for furniture products.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: "/images/Sofa_web.png",
    github: "https://github.com/eshaidrees/hackathon-2.git",
    live: "https://hackathon-2-86ga.vercel.app/",
    featured: true,
  },

  {
    title: "Todo Application",
    description:
      "A productivity application for organizing daily tasks with categories, task management, progress tracking, and a simple responsive interface.",
    tags: ["React", "TypeScript", "Local Storage", "DnD Kit"],
    image: "/images/Todo-App.png",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },

  {
    title: "Resume Builder",
    description:
      "A responsive resume builder that helps users create and organize professional resumes through a simple, interactive, and easy-to-use interface.",
    tags: ["HTML", "CSS", "TypeScript", "React"],
    image: "/images/project-1.png",
    github:
      "https://github.com/eshaidrees/hackathon_milestone_5.git",
    live: "https://hackathon-milestone-5-omega-gules.vercel.app/",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050511] py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Purple glow */}

        <div className="absolute left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-purple-600/8 blur-[140px]" />

        {/* Cyan glow */}

        <div className="absolute bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-cyan-500/7 blur-[140px]" />

        {/* Soft bottom fade */}

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050511] to-transparent" />

      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">

        {/* =================================================
            SECTION HEADER
        ================================================== */}

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
          className="mb-14 max-w-2xl"
        >

          {/* Small label */}

          <div className="mb-4 flex items-center gap-2">

            <FiFolder
              size={14}
              className="text-purple-400"
            />

            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-purple-300">
              My Work
            </span>

          </div>

          {/* Heading */}

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          {/* Small line */}

          <div className="mt-4 h-[2px] w-14 rounded-full bg-gradient-to-r from-fuchsia-400 to-purple-400" />

          {/* Description */}

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-[15px]">
            A selection of projects I've built while exploring modern web
            development, responsive UI design, e-commerce, and AI-powered
            experiences. Each project focuses on clean code, performance,
            usability, and thoughtful design.
          </p>

        </motion.div>

        {/* =================================================
            PROJECT GRID
        ================================================== */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (

            <motion.article
              key={project.title}
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
                duration: 0.6,
                delay: index * 0.06,
              }}
              whileHover={{
                y: -7,
              }}
              className={`group relative overflow-hidden rounded-2xl border bg-[#080817]/80 backdrop-blur-sm transition-all duration-500 ${
                project.featured
                  ? "border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.08)]"
                  : "border-white/[0.07]"
              }`}
            >

              {/* =================================================
                  IMAGE
              ================================================== */}

              <div className="relative h-56 overflow-hidden bg-[#080817]">

                {/* Image */}

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  loading="lazy"
                />

                {/* Dark overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#080817] via-transparent to-transparent opacity-70" />

                {/* Hover glow */}

                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Featured badge */}

                {project.featured && (
                  <div className="absolute left-4 top-4 rounded-full border border-purple-400/20 bg-[#080817]/80 px-3 py-1.5 backdrop-blur-md">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-purple-300">
                      Featured
                    </span>
                  </div>
                )}

              </div>

              {/* =================================================
                  CONTENT
              ================================================== */}

              <div className="p-6">

                {/* Title */}

                <h3 className="text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-purple-300">
                  {project.title}
                </h3>

                {/* Description */}

                <p className="mt-3 min-h-[84px] text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                {/* =================================================
                    TECH STACK
                ================================================== */}

                <div className="mt-5 flex flex-wrap gap-2">

                  {project.tags.map((tag) => (

                    <span
                      key={tag}
                      className="rounded-lg border border-purple-400/10 bg-purple-500/[0.05] px-2.5 py-1 text-[10px] font-medium text-gray-400 transition-all duration-300 group-hover:border-purple-400/20 group-hover:text-purple-200"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

                {/* =================================================
                    LINKS
                ================================================== */}

                <div className="mt-6 flex items-center gap-5 border-t border-white/[0.06] pt-5">

                  {/* GitHub */}

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      x: 3,
                    }}
                    className="flex items-center gap-2 text-xs font-medium text-gray-400 transition-colors hover:text-white"
                  >
                    <FiGithub size={15} />

                    <span>
                      Source Code
                    </span>
                  </motion.a>

                  {/* Live */}

                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      x: 3,
                    }}
                    className="flex items-center gap-2 text-xs font-medium text-purple-300 transition-colors hover:text-cyan-300"
                  >
                    <FiExternalLink size={15} />

                    <span>
                      Live Demo
                    </span>
                  </motion.a>

                </div>

              </div>

              {/* =================================================
                  BOTTOM HOVER LINE
              ================================================== */}

              <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 transition-transform duration-500 group-hover:scale-x-100" />

            </motion.article>

          ))}

        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-14 text-center"
        >

          <motion.a
            href="https://github.com/eshaidrees"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="group inline-flex items-center gap-2 rounded-xl border border-purple-400/20 bg-white/[0.02] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-purple-300 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/50 hover:bg-purple-500/[0.06] hover:text-white"
          >
            Explore More Projects

            <FiArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </motion.a>

        </motion.div>

      </div>
    </section>
  );
}