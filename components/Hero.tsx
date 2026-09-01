"use client";

import Link from "next/link";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section id="home"
     className="relative min-h-screen overflow-hidden bg-[#08051d] text-white">
    

      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute inset-0">

        <img
          src="/images/hero2.jpeg"
          alt=""
          className="
            h-full
            w-full
            object-cover
            object-center
            lg:object-center
          "
        />

        {/* ================= DESKTOP OVERLAY ================= */}

        <div
          className="
            absolute
            inset-0
            hidden
            lg:block
          "
          style={{
            background: `
              linear-gradient(
                90deg,
                #08051d 0%,
                #08051d 35%,
                rgba(8,5,29,0.98) 45%,
                rgba(8,5,29,0.85) 53%,
                rgba(8,5,29,0.40) 64%,
                rgba(8,5,29,0.05) 76%,
                transparent 100%
              )
            `,
          }}
        />

        {/* ================= MOBILE OVERLAY ================= */}

        <div
          className="
            absolute
            inset-0
            lg:hidden
          "
          style={{
            background: `
              linear-gradient(
                180deg,
                #08051d 0%,
                #08051d 38%,
                rgba(8,5,29,0.96) 48%,
                rgba(8,5,29,0.72) 62%,
                rgba(8,5,29,0.20) 82%,
                #08051d 100%
              )
            `,
          }}
        />

        {/* Mobile extra dark layer behind text */}
        <div
          className="
            absolute
            left-0
            top-0
            h-[58%]
            w-full
            bg-[#08051d]/30
            lg:hidden
          "
        />

        {/* Purple glow */}
        <div
          className="
            pointer-events-none
            absolute
            right-[5%]
            top-[15%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-purple-600/10
            blur-[130px]
          "
        />

        {/* Bottom fade */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            h-40
            w-full
            bg-gradient-to-t
            from-[#08051d]
            to-transparent
          "
        />

      </div>


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-6
          py-20
          sm:px-8
          lg:px-10
        "
      >

        <div className="w-full">

          {/* =================================================
              TEXT
          ================================================= */}

          <div
            className="
              max-w-[610px]
              pt-10
              lg:pt-0
            "
          >

            <p className="mb-5 text-base text-gray-200 sm:text-lg">
              Hi, I'm Esha 👋
            </p>


            <h1
              className="
                text-[42px]
                font-bold
                leading-[1.05]
                tracking-tight
                sm:text-6xl
                lg:text-[68px]
              "
            >
               <div className="mt-5 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  1800,
                  "Web Developer",
                  1800,
                  "Next.js Developer",
                  1800,
                  "AI Developer",
                  1800,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>
            </h1>


            <p
              className="
                mt-6
                max-w-xl
                text-[15px]
                leading-6
                text-gray-300
                sm:text-lg
                sm:leading-7
              "
            >
               I build modern, responsive and visually engaging websites
              using Next.js, React, TypeScript and Tailwind CSS. I also
              explore AI-powered tools and intelligent solutions to create
              better digital experiences.
            </p>


            {/* =================================================
                BUTTONS
            ================================================= */}

            <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">

              <Link
                href="/projects"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-fuchsia-500
                  to-cyan-500
                  px-5
                  py-3
                  text-sm
                  font-medium
                  shadow-[0_0_25px_rgba(168,85,247,0.3)]
                  transition-all
                  duration-300
                  hover:scale-105
                  sm:px-6
                  sm:py-3.5
                  sm:text-base
                "
              >
                View My Work

                <FiArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>


              <a
                href="/images/cv.pdf"
                download
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-purple-400/60
                  bg-[#08051d]/70
                  px-5
                  py-3
                  text-sm
                  font-medium
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-purple-300
                  hover:bg-purple-500/10
                  sm:px-6
                  sm:py-3.5
                  sm:text-base
                "
              >
                Download CV
                <FiDownload size={17} />
              </a>

            </div>


            {/* =================================================
                SOCIALS
            ================================================= */}

            <div className="mt-8 sm:mt-9">

              <p
                className="
                  mb-4
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-gray-400
                  sm:text-sm
                "
              >
                Let's Connect
              </p>


              <div className="flex gap-3">

                <a
                  href="https://github.com/eshaidrees"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    bg-black/25
                    backdrop-blur-md
                    transition-all
                    hover:-translate-y-1
                    hover:border-purple-400
                    hover:bg-purple-500/20
                    sm:h-11
                    sm:w-11
                  "
                >
                  <FiGithub size={19} />
                </a>


                <a
                  href="https://linkedin.com/eshaidrees"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    bg-black/25
                    backdrop-blur-md
                    transition-all
                    hover:-translate-y-1
                    hover:border-purple-400
                    hover:bg-purple-500/20
                    sm:h-11
                    sm:w-11
                  "
                >
                  <FiLinkedin size={19} />
                </a>


                <a
                  href="mailto:eshaidrees190@email.com"
                  aria-label="Email"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    bg-black/25
                    backdrop-blur-md
                    transition-all
                    hover:-translate-y-1
                    hover:border-purple-400
                    hover:bg-purple-500/20
                    sm:h-11
                    sm:w-11
                  "
                >
                  <FiMail size={19} />
                </a>

              </div>
            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          MOBILE IMAGE BLEND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-[48%]
          w-full
          -translate-x-1/2
          lg:hidden
        "
      >

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-transparent
            via-transparent
            to-[#08051d]
          "
        />

      </div>

    </section>
  );
}