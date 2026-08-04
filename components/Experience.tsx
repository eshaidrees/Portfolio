"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovation Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Leading development of enterprise-level web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
    achievements: [
      "Increased application performance by 40%",
      "Led a team of 5 developers",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    location: "New York, NY",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple client projects using modern web technologies. Collaborated with designers and product managers to deliver exceptional user experiences.",
    achievements: [
      "Delivered 15+ successful projects",
      "Improved code quality by 35%",
      "Reduced bug reports by 25%",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Startup Hub",
    location: "Austin, TX",
    period: "2019 - 2020",
    description:
      "Built responsive and interactive user interfaces for web applications. Worked closely with UX designers to implement pixel-perfect designs.",
    achievements: [
      "Developed 10+ responsive websites",
      "Achieved 95% client satisfaction",
      "Reduced page load time by 30%",
    ],
  },
  {
    title: "Junior Developer",
    company: "Code Academy",
    location: "Seattle, WA",
    period: "2018 - 2019",
    description:
      "Started my professional journey building websites and learning modern development practices. Gained experience in various technologies and frameworks.",
    achievements: [
      "Completed 20+ training projects",
      "Learned 5+ programming languages",
      "Contributed to open-source projects",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gold-gradient">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and the valuable experience I've gained throughout my career.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/30 to-transparent" />

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-background z-10" />

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass p-6 rounded-2xl hover:border-gold/30 transition-all group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors">
                          <Briefcase className="text-gold" size={20} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold group-hover:text-gold transition-colors">
                            {experience.title}
                          </h3>
                          <p className="text-gold text-sm">{experience.company}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                          <span className="text-gray-400">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}