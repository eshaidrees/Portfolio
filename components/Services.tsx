"use client";

import { motion } from "framer-motion";
import { Code, Palette, Rocket, Shield, BarChart, Headphones, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies, optimized for performance and scalability.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with user experience and accessibility in mind.",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description:
      "Speed up your website with advanced optimization techniques and best practices.",
  },
  {
    icon: Shield,
    title: "Security Audits",
    description:
      "Comprehensive security assessments to protect your application from vulnerabilities.",
  },
  {
    icon: BarChart,
    title: "SEO & Analytics",
    description:
      "Improve your search rankings and gain insights with data-driven strategies.",
  },
  {
    icon: Headphones,
    title: "Maintenance & Support",
    description:
      "Ongoing support and maintenance to keep your application running smoothly.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gold-gradient">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to help your business thrive in the modern landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl hover:border-gold/30 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors mb-6">
                  <service.icon className="text-gold" size={28} />
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm text-gold hover:gap-3 transition-all"
                  whileHover={{ x: 2 }}
                >
                  Learn More
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}