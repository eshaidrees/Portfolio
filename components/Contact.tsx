"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      {/* Background neon orb highlights for visual interest */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-neon-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center">
        
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full border-gold/20 mb-4 bg-white/5">
            <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
            <span className="text-[10px] uppercase font-mono tracking-widest text-gold-light">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Contact <span className="gold-gradient">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-gold/50 to-gold mx-auto rounded-full mb-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 mx-auto p-8 bg-gray-300 bg-opacity-95 rounded-2xl shadow-2xl"
        >
          <form action="https://api.web3forms.com/submit" method="POST" className="text-left">
            <input type="hidden" name="access_key" value="814718bb-47d7-41bf-aa06-d10452d13958" />

            <label htmlFor="name" className="block mb-2 font-semibold text-gray-800  text-sm">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Your name" 
              required 
              className="w-full p-3.5 mb-5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 bg-gray-200 transition duration-200" 
            />

            <label htmlFor="email" className="block mb-2 font-semibold text-gray-800 text-sm">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Your email" 
              required 
              className="w-full p-3.5 mb-5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 bg-gray-200 transition duration-200" 
            />

            <label htmlFor="message" className="block mb-2 font-semibold text-gray-800 text-sm">Message</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Your message" 
              required 
              className="w-full p-3.5 mb-5 border border-gray-200 rounded-xl h-36 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 bg-gray-200 transition duration-200" 
            />

            <button 
              type="submit" 
              className="w-full px-4 py-3.5 text-white bg-black rounded-xl hover:bg-gray-800 transition duration-300 font-bold shadow-lg cursor-pointer text-center flex items-center justify-center gap-2"
            >
              Send
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
