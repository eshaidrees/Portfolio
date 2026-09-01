"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiSanity,
  SiPython,
} from "react-icons/si";

const frontendSkills = [
  {
    name: "HTML",
    level: 90,
    icon: <SiHtml5 className="text-orange-400 text-xl" />,
  },
  {
    name: "CSS",
    level: 85,
    icon: <SiCss className="text-blue-400 text-xl" />,
  },
  {
    name: "JavaScript",
    level: 60,
    icon: <SiJavascript className="text-yellow-400 text-xl" />,
  },
  {
    name: "TypeScript",
    level: 75,
    icon: <SiTypescript className="text-blue-400 text-xl" />,
  },
  {
    name: "React",
    level: 70,
    icon: <SiReact className="text-cyan-400 text-xl" />,
  },
  {
    name: "Next.js",
    level: 70,
    icon: <SiNextdotjs className="text-gray-200 text-xl" />,
  },
];

const backendSkills = [
  {
    name: "Node.js",
    level: 85,
    icon: <SiNodedotjs className="text-green-400 text-xl" />,
  },
  {
    name: "Sanity CMS",
    level: 70,
    icon: <SiSanity className="text-red-400 text-xl" />,
  },
  {
    name: "Python",
    level: 80,
    icon: <SiPython className="text-yellow-300 text-xl" />,
  },
];

const particles = Array.from({ length: 35 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${(i * 61) % 100}%`,
  size: i % 4 === 0 ? 3 : 2,
  duration: 5 + (i % 5),
  delay: (i % 7) * 0.4,
}));

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#050511]
        py-20
        sm:py-24
        lg:py-28
      "
    >

      {/* =====================================================
          MOVING BACKGROUND PARTICLES
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className="
              absolute
              rounded-full
              bg-purple-300
              shadow-[0_0_8px_rgba(192,132,252,0.8)]
            "
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              x: [0, 15, -10, 8, 0],
              y: [0, -30, 18, -15, 0],
              opacity: [0.15, 0.8, 0.3, 0.7, 0.15],
              scale: [1, 1.4, 0.8, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      </div>


      {/* =====================================================
          PURPLE / CYAN BACKGROUND GLOWS
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-150px]
          top-[20%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-purple-600/10
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-150px]
          bottom-[10%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-cyan-600/10
          blur-[130px]
        "
      />


      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
          px-6
          sm:px-10
          lg:px-14
        "
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-14"
        >

          {/* Small Label */}

          <div className="mb-4 flex items-center justify-center gap-2">

            <span
              className="
                h-2
                w-2
                rounded-full
                bg-purple-400
                shadow-[0_0_10px_rgba(192,132,252,0.8)]
                animate-pulse
              "
            />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-purple-300
              "
            >
              Expertise & Stack
            </span>

          </div>


          {/* Heading */}

          <h2
            className="
              text-3xl
              font-black
              tracking-tight
              sm:text-4xl
              lg:text-5xl
            "
          >
            My{" "}

            <span
              className="
                bg-gradient-to-r
                from-fuchsia-400
                via-purple-400
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              Skills
            </span>

          </h2>


          {/* Underline */}

          <div
            className="
              mx-auto
              mt-4
              h-[2px]
              w-12
              rounded-full
              bg-gradient-to-r
              from-fuchsia-400
              to-purple-400
            "
          />


          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-gray-400
              sm:text-[15px]
            "
          >
            Technologies and tools I use to build modern, responsive
            and scalable web applications.
          </p>

        </motion.div>


        {/* =================================================
            SKILLS GRID
        ================================================= */}

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">


          {/* =================================================
              FRONTEND
          ================================================= */}

          <SkillCard
            title="Frontend"
            subtitle="Modern interface development"
            direction="left"
          >

            {frontendSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                index={index}
              />
            ))}

          </SkillCard>


          {/* =================================================
              BACKEND
          ================================================= */}

          <SkillCard
            title="Backend & Data"
            subtitle="Server-side and data management"
            direction="right"
          >

            {backendSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                index={index}
              />
            ))}

          </SkillCard>

        </div>

      </div>


      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-32
          bg-gradient-to-b
          from-transparent
          to-[#070713]
        "
      />

    </section>
  );
}


/* =========================================================
   SKILL CARD
========================================================= */

function SkillCard({
  title,
  subtitle,
  direction,
  children,
}: {
  title: string;
  subtitle: string;
  direction: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -35 : 35,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/[0.07]
        bg-white/[0.025]
        p-6
        backdrop-blur-sm
        transition-all
        duration-300
        hover:border-purple-400/20
        hover:bg-white/[0.04]
        sm:p-8
      "
    >

      {/* Card Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-40
          w-40
          rounded-full
          bg-purple-600/10
          blur-[70px]
        "
      />


      {/* Header */}

      <div
        className="
          relative
          z-10
          mb-8
          border-b
          border-white/[0.08]
          pb-5
        "
      >

        <h3 className="text-2xl font-bold text-white">
          <span className="mr-2 font-mono text-purple-400">
            {"<"}
          </span>

          {title}

          <span className="ml-2 font-mono text-purple-400">
            {"/>"}
          </span>
        </h3>


        <p className="mt-2 text-xs text-gray-500">
          {subtitle}
        </p>

      </div>


      {/* Skills */}

      <div className="relative z-10 space-y-6">
        {children}
      </div>

    </motion.div>
  );
}


/* =========================================================
   SKILL BAR
========================================================= */

function SkillBar({
  skill,
  index,
}: {
  skill: {
    name: string;
    level: number;
    icon: React.ReactNode;
  };
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
    >

      {/* Name + Percentage */}

      <div className="mb-2 flex items-center justify-between">

        <span
          className="
            flex
            items-center
            gap-2
            text-sm
            font-medium
            text-gray-200
            sm:text-base
          "
        >
          {skill.icon}
          {skill.name}
        </span>


        <span
          className="
            text-xs
            font-medium
            text-purple-300
          "
        >
          {skill.level}%
        </span>

      </div>


      {/* Background Bar */}

      <div
        className="
          h-2
          w-full
          overflow-hidden
          rounded-full
          bg-white/[0.07]
        "
      >

        {/* Animated Progress */}

        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: `${skill.level}%`,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
            delay: index * 0.08,
            ease: "easeOut",
          }}
          className="
            relative
            h-full
            overflow-hidden
            rounded-full
            bg-gradient-to-r
            from-fuchsia-500
            via-purple-500
            to-cyan-400
          "
        >

          {/* Moving shine */}

          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
              delay: 1.5,
            }}
            className="
              absolute
              inset-y-0
              w-12
              bg-white/25
              blur-sm
            "
          />

        </motion.div>

      </div>

    </motion.div>
  );
}