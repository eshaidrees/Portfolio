"use client";

import Link from "next/link";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#07051d] text-white"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Top-left purple circle */}
        <div
          className="
            absolute
            -left-[100px]
            -top-[150px]
            h-[320px]
            w-[320px]
            rounded-full
            bg-purple-700/20
            blur-[1px]
          "
        />

        {/* Main right purple glow */}
        <div
          className="
            absolute
            right-[2%]
            top-[20%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-purple-700/[0.08]
            blur-[120px]
          "
        />

        {/* Cyan glow */}
        <div
          className="
            absolute
            bottom-[5%]
            right-[25%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-cyan-500/[0.04]
            blur-[120px]
          "
        />

        {/* Bottom-right circle */}
        <div
          className="
            absolute
            -bottom-[190px]
            -right-[100px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-purple-700/15
          "
        />

        {/* Very subtle overall gradient */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_75%_50%,rgba(91,33,182,0.10),transparent_38%)]
          "
        />

      </div>


      {/* =====================================================
          DECORATIVE ELEMENTS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Diagonal purple bar - upper right */}
        <div
          className="
            absolute
            right-[11%]
            top-[16%]
            h-[110px]
            w-[34px]
            rotate-45
            rounded-full
            bg-gradient-to-b
            from-purple-500/0
            via-purple-500/40
            to-purple-500/0
            blur-[1px]
          "
        />

        {/* Diagonal bar behind portrait */}
        <div
          className="
            absolute
            right-[47%]
            top-[42%]
            h-[120px]
            w-[32px]
            rotate-45
            rounded-full
            bg-gradient-to-b
            from-purple-500/0
            via-purple-500/35
            to-purple-500/0
          "
        />

        {/* Lower diagonal bar */}
        <div
          className="
            absolute
            bottom-[16%]
            right-[42%]
            h-[95px]
            w-[30px]
            rotate-45
            rounded-full
            bg-gradient-to-b
            from-purple-500/0
            via-purple-500/35
            to-purple-500/0
          "
        />

        {/* Star */}
        <div
          className="
            absolute
            right-[6%]
            top-[22%]
            text-[48px]
            leading-none
            text-purple-400
            drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]
          "
        >
          ✦
        </div>


        {/* Dot grid */}
        <div
          className="
            absolute
            bottom-[17%]
            left-[42%]
            hidden
            h-[80px]
            w-[95px]
            opacity-70
            lg:block
          "
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(139,92,246,0.9) 1.6px, transparent 1.6px)",
            backgroundSize: "20px 20px",
          }}
        />

      </div>


      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-[1440px]
          items-center
          px-6
          py-24
          sm:px-10
          lg:px-16
          xl:px-20
        "
      >

        <div
          className="
            grid
            w-full
            items-center
            lg:grid-cols-[43%_57%]
          "
        >


          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div
            className="
              relative
              z-30
              max-w-[570px]
              pt-10
              lg:pt-0
            "
          >

            {/* Welcome pill */}

            <div
              className="
                mb-7
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-purple-500
                bg-purple-500/[0.03]
                px-5
                py-2.5
                text-[11px]
                font-medium
                tracking-[0.28em]
                text-purple-200
                shadow-[0_0_20px_rgba(124,58,237,0.08)]
                sm:text-xs
              "
            >
              <span
                className="
                  text-lg
                  leading-none
                  text-cyan-400
                  drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]
                "
              >
                ✦
              </span>

              WELCOME TO MY PORTFOLIO
            </div>


            {/* Greeting */}

            <h1
              className="
                text-[50px]
                font-bold
                leading-[0.92]
                tracking-tight
                sm:text-6xl
                lg:text-[76px]
              "
            >
              <span className="block text-white">
                Hi, I'm
              </span>

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-white
                  via-purple-200
                  to-purple-500
                  bg-clip-text
                  text-transparent
                "
              >
                Esha
              </span>
            </h1>


            {/* Heart */}

            <span
              className="
                absolute
                left-[260px]
                top-[170px]
                rotate-[-10deg]
                text-5xl
                font-light
                text-purple-400
                sm:left-[310px]
                sm:top-[175px]
                lg:left-[310px]
                lg:top-[172px]
              "
            >
              ♡
            </span>


            {/* Animated role */}

            <div
              className="
                mt-8
                min-h-[42px]
                text-2xl
                font-semibold
                sm:text-3xl
                lg:text-[36px]
              "
            >
              <span className="text-white">
                <TypeAnimation
                  sequence={[
                    "Web Developer",
                    1800,
                    "Frontend Developer",
                    1800,
                    "Next.js Developer",
                    1800,
                    "AI Developer",
                    1800,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>

              <span className="text-purple-400">|</span>
            </div>


            {/* Description */}

            <p
              className="
                mt-6
                max-w-[520px]
                text-[15px]
                leading-7
                text-purple-100/75
                sm:text-base
                sm:leading-7
                lg:text-[16px]
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

            <div className="mt-8 flex flex-wrap gap-4">

              {/* View Work */}

              <Link
                href="/projects"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-fuchsia-500
                  via-purple-500
                  to-blue-500
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  shadow-[0_0_30px_rgba(168,85,247,0.30)]
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]
                  sm:text-base
                "
              >
                View My Work

                <FiArrowRight
                  size={19}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>


              {/* Download CV */}

              <a
                href="/images/cv.pdf"
                download
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-purple-500/70
                  bg-purple-500/[0.03]
                  px-7
                  py-3.5
                  text-sm
                  font-medium
                  text-purple-100
                  transition-all
                  duration-300
                  hover:border-purple-400
                  hover:bg-purple-500/10
                  hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]
                  sm:text-base
                "
              >
                Download CV
                <FiDownload size={18} />
              </a>

            </div>


            {/* =================================================
                SOCIALS
            ================================================= */}

            <div className="mt-10">

              <p
                className="
                  mb-5
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  text-purple-200/80
                "
              >
                Let's Connect
              </p>


              <div className="flex gap-4">

                {/* GitHub */}

                <a
                  href="https://github.com/eshaidrees"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-purple-500/60
                    bg-purple-500/[0.03]
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-purple-400
                    hover:bg-purple-500/10
                    hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]
                  "
                >
                  <FiGithub size={20} />
                </a>


                {/* LinkedIn */}

                <a
                  href="https://linkedin.com/eshaidrees"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-purple-500/60
                    bg-purple-500/[0.03]
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-purple-400
                    hover:bg-purple-500/10
                    hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]
                  "
                >
                  <FiLinkedin size={20} />
                </a>


                {/* Email */}

                <a
                  href="mailto:eshaidrees190@email.com"
                  aria-label="Email"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-purple-500/60
                    bg-purple-500/[0.03]
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-purple-400
                    hover:bg-purple-500/10
                    hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]
                  "
                >
                  <FiMail size={20} />
                </a>

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT PORTRAIT
          ================================================= */}

          <div
            className="
              relative
              mt-12
              flex
              min-h-[380px]
              items-end
              justify-center
              lg:mt-0
              lg:min-h-[760px]
            "
          >

            {/* Large circular ring behind image */}

            <div
              className="
                absolute
                bottom-[4%]
                left-1/2
                h-[340px]
                w-[340px]
                -translate-x-1/2
                rounded-full
                border
                border-purple-600/50
                shadow-[0_0_35px_rgba(124,58,237,0.18)]
                sm:h-[520px]
                sm:w-[520px]
                lg:left-auto
                lg:right-[2%]
                lg:h-[690px]
                lg:w-[690px]
                lg:translate-x-0
              "
            />


            {/* Purple ring glow */}

            <div
              className="
                absolute
                bottom-[4%]
                left-1/2
                h-[340px]
                w-[340px]
                -translate-x-1/2
                rounded-full
                border
                border-purple-500/20
                blur-[4px]
                sm:h-[520px]
                sm:w-[520px]
                lg:left-auto
                lg:right-[2%]
                lg:h-[690px]
                lg:w-[690px]
                lg:translate-x-0
              "
            />


            {/* Portrait */}

            <div
              className="
                relative
                z-10
                h-[340px]
                w-[340px]
                max-w-full
                sm:h-[520px]
                sm:w-[520px]
                lg:h-[690px]
                lg:w-[690px]
                lg:max-w-[690px]
              "
            >

              <img
                src="/images/my-image.png"
                alt="Esha"
                className="
                  h-full
                  w-full
                  object-contain
                  object-center
                "
              />


              {/* Left blend */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  left-0
                  w-[12%]
                  bg-gradient-to-r
                  from-[#07051d]
                  to-transparent
                  lg:w-[10%]
                "
              />


              {/* Bottom blend */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-0
                  h-[12%]
                  w-full
                  bg-gradient-to-t
                  from-[#07051d]
                  to-transparent
                "
              />

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          MOBILE BOTTOM FADE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-40
          h-24
          w-full
          bg-gradient-to-t
          from-[#07051d]
          to-transparent
          lg:hidden
        "
      />

    </section>
  );
}
