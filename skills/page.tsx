'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs } from 'react-icons/si';
import DarkMode from '../components/DarkMode';

const skills = [
  { name: 'HTML', level: 90,icon: <SiHtml5 className="text-orange-500 text-xl" />, color: 'bg-orange-600' },
  { name: 'CSS', level: 85,icon: <SiCss className="text-blue-500 text-xl" />, color: 'bg-blue-600' },
  { name: 'JavaScript', level: 60,icon: <SiJavascript className="text-yellow-500 text-xl" />, color: 'bg-yellow-500' },
  { name: 'TypeScript', level: 75,icon: <SiTypescript className="text-blue-500 text-xl" />, color: 'bg-blue-700' },
  { name: 'React', level: 70,icon: <SiReact className="text-cyan-500 text-xl" />, color: 'bg-cyan-500' },
  { name: 'Next.js', level: 70,icon: <SiNextdotjs className="text-gray-400 text-xl" />, color: 'bg-gray-600 ' },
 
  { name: 'Node.js', level: 85,icon: <SiNextdotjs className="text-gray-400 text-xl" />, color: 'bg-gray-600 ' },
  { name: 'Sanity CMS', level: 70,icon: <SiNextdotjs className="text-gray-400 text-xl" />, color: 'bg-gray-600 ' },
  { name: 'Python', level: 80,icon: <SiNextdotjs className="text-gray-400 text-xl" />, color: 'bg-gray-600 ' },
  { name: 'Agentic AI', level: 75,icon: <SiNextdotjs className="text-gray-400 text-xl" />, color: 'bg-gray-600 ' },

];


export default function Skills() {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 dark:from-gray-900 dark:via-gray-800 dark:to-black min-h-screen py-16 px-6">
      <div className="absolute top-5 right-5">
        <DarkMode />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-white text-center my-9 mb-10"
      >
        My Skills
      </motion.h1>

      <div className="w-full">
  {skills.map((skill, i) => (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-1 text-white text-sm font-medium">
       <span className="flex items-center gap-2 text-lg font-medium text-white">
         {skill.icon} {skill.name}
       </span>
        <span>{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
        <div
          className={`h-3 rounded-full ${skill.color}`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </motion.div>
  ))}
  <div>Currently Learning

• Advanced Python Development
• Agentic AI Systems
• OpenAI Agents SDK
• AI Automation Workflows
• Modern Full-Stack Architectures</div>
</div>

    </div>
  );
}
