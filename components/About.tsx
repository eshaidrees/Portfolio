"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiUser,
} from "react-icons/fi";

const particles = Array.from({ length: 45 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${(i * 61) % 100}%`,
  size: i % 5 === 0 ? 3 : i % 3 === 0 ? 2.5 : 2,
  duration: 4 + (i % 6),
  delay: (i % 8) * 0.5,
}));

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050511] py-20 sm:py-24"
    >

      {/* =====================================================
          MOVING PARTICLES
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0">

        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className="
              absolute
              rounded-full
              bg-purple-300
              shadow-[0_0_8px_rgba(192,132,252,0.9)]
            "
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              x: [0, 18, -12, 8, 0],
              y: [0, -30, 15, -20, 0],
              opacity: [0.15, 0.9, 0.35, 0.8, 0.15],
              scale: [1, 1.5, 0.8, 1.3, 1],
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
          EXTRA SMALL PARTICLES
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0">

        {[...Array(20)].map((_, index) => (
          <motion.span
            key={`small-${index}`}
            className="
              absolute
              h-[1.5px]
              w-[1.5px]
              rounded-full
              bg-cyan-300
              shadow-[0_0_6px_rgba(103,232,249,0.8)]
            "
            style={{
              left: `${(index * 47 + 10) % 100}%`,
              top: `${(index * 29 + 8) % 100}%`,
            }}
            animate={{
              x: [0, -15, 12, 0],
              y: [0, 20, -25, 0],
              opacity: [0.1, 0.7, 0.2, 0.1],
            }}
            transition={{
              duration: 5 + (index % 5),
              delay: index * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      </div>


      {/* =====================================================
          SOFT BACKGROUND GLOW
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
          bottom-[5%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-cyan-600/10
          blur-[130px]
        "
      />


      {/* =====================================================
          CONTENT
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

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >

          <div className="mb-4 flex items-center gap-2">

            <FiUser
              size={14}
              className="text-purple-400"
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
              About Me
            </span>

          </div>


          <h2
            className="
              text-3xl
              font-black
              tracking-tight
              sm:text-4xl
              lg:text-5xl
            "
          >
            A little{" "}

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
              about me
            </span>

          </h2>


          <div
            className="
              mt-4
              h-[2px]
              w-12
              rounded-full
              bg-gradient-to-r
              from-fuchsia-400
              to-purple-400
            "
          />

        </motion.div>


        {/* ================= ABOUT CONTENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="max-w-4xl"
        >

          <p
            className="
              mb-3
              text-xs
              font-medium
              uppercase
              tracking-[0.2em]
              text-purple-300
            "
          >
            Who I am
          </p>


          <h3
            className="
              text-2xl
              font-bold
              leading-tight
              sm:text-3xl
              lg:text-4xl
            "
          >
            I'm a passionate{" "}

            <span
              className="
                bg-gradient-to-r
                from-fuchsia-400
                to-purple-400
                bg-clip-text
                text-transparent
              "
            >
              Web Developer
            </span>

          </h3>


          <div
            className="
              mt-6
              max-w-3xl
              space-y-4
              text-sm
              leading-7
              text-gray-400
              sm:text-[15px]
            "
          >

            <p>
              I build modern websites and web applications using{" "}
              <span className="font-medium text-gray-200">
                Next.js, React and TypeScript.
              </span>{" "}
              I enjoy turning ideas into clean, responsive and
              user-friendly digital experiences.
            </p>


            <p>
              I'm also exploring{" "}
              <span className="font-medium text-purple-300">
                Python, AI and Agentic AI
              </span>{" "}
              through practical projects and continuous learning.
            </p>

          </div>


          {/* ================= HIGHLIGHTS ================= */}

          <div
            className="
              mt-7
              grid
              gap-4
              sm:grid-cols-2
            "
          >

            <Highlight text="Clean & modern development" />

            <Highlight text="Responsive user interfaces" />

            <Highlight text="Performance focused" />

            <Highlight text="Always learning" />

          </div>


          {/* ================= BUTTON ================= */}

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.02,
              x: 3,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              group
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-lg
              bg-gradient-to-r
              from-purple-500
              to-fuchsia-500
              px-5
              py-3
              text-[10px]
              font-bold
              uppercase
              tracking-widest
              text-white
              shadow-[0_8px_25px_rgba(168,85,247,0.2)]
              transition-shadow
              hover:shadow-[0_8px_35px_rgba(168,85,247,0.35)]
            "
          >

            Let's Work Together

            <FiArrowRight
              size={14}
              className="
                transition-transform
                group-hover:translate-x-1
              "
            />

          </motion.a>

        </motion.div>

      </div>


      {/* Bottom fade */}

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
   HIGHLIGHT
========================================================= */

function Highlight({ text }: { text: string }) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      className="
        flex
        items-center
        gap-2
        text-xs
        text-gray-400
      "
    >
      <FiCheckCircle
        size={15}
        className="shrink-0 text-purple-400"
      />

      {text}
    </motion.div>
  );
}