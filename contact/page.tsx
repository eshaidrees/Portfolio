'use client'
import { motion } from 'framer-motion';
import React from 'react';
import DarkMode from '../components/DarkMode';

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 dark:from-gray-900 dark:via-gray-800 dark:to-black py-16 px-6">
      <div className="absolute top-5 right-5">
        <DarkMode />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-white mt-6 mb-6 text-center"
      >
        Contact Me
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 mx-auto p-6 bg-white bg-opacity-90 rounded-lg shadow-xl"
      >
        <form action="https://api.web3forms.com/submit" method="POST" className="text-left">
          <input type="hidden" name="access_key" value="814718bb-47d7-41bf-aa06-d10452d13958" />

          <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required className="w-full p-3 mb-4 border rounded-lg" />

          <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" required className="w-full p-3 mb-4 border rounded-lg" />

          <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" placeholder="Your message" required className="w-full p-3 mb-4 border rounded-lg h-32 resize-none" />

          <button type="submit" className="w-full px-4 py-3 text-white bg-black rounded-lg hover:bg-gray-800 transition duration-300">
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
}





// import React from "react";

// export default function Contact(){
//   return (
//     <div className=" flex flex-col items-center justify-center min-h-screen bg-blue-950 p-8 text-center font-sans ">
//     <h1 className="title text-3xl  font-bold text-white ">Contact Me</h1>
  
//     <div className="form w-full sm:w-3/4 md:w-1/2 lg:w-1/2 mx-auto my-6 p-5 bg-[#cdf2f5] rounded-lg shadow-lg ">
//         <form action="https://api.web3forms.com/submit" method="POST">
//         <input type="hidden" name="access_key" value="814718bb-47d7-41bf-aa06-d10452d13958" />

//         <label htmlFor="name" className="block mt-2 mb-1 text-left text-[#0c0b0b]">Name</label>
//         <input type="text" id="name" name="name" placeholder="Enter your name" required className="w-full p-2 mb-3 border border-gray-300 rounded-lg" />
  
//         <label htmlFor="email" className="block mt-2 mb-1 text-left text-[#0c0b0b]">Email address:</label>
//         <input type="email" id="email" name="email" placeholder="Enter your email" required className="w-full p-2 mb-3 border border-gray-300 rounded-lg" />
  
//         <label htmlFor="message" className="block mt-2 mb-1 text-left text-[#0c0b0b]">Your Message:</label>
//         <textarea id="message" name="message" placeholder="Enter your message" required className="w-full p-2 mb-3 border border-gray-300 rounded-lg"></textarea>
  
//         <button type="submit" className="w-full px-4 py-2 mt-5 text-white bg-[#1a1919] rounded-lg hover:bg-black">
//           Send
//         </button>
//       </form>
//     </div>
//   </div>
//   );
// };
