'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 text-gray-800 dark:text-gray-200">
      <header className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg dark:bg-gray-800 dark:bg-opacity-30">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Your Name
          </div>
          <div className="hidden md:flex space-x-6">
            {['About', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 py-2">
            {['About', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-grow">
        <section id="hero" className="py-20 text-center relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              Welcome to My Digital Playground
            </h1>
            <p className="text-xl mb-8 animate-fade-in-up animation-delay-200">
              Crafting digital experiences that inspire and innovate.
            </p>
            <div className="animate-fade-in-up animation-delay-400">
              <Link
                href="#contact"
                className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300 inline-block"
              >
                Let's Connect
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="relative w-64 h-64 mx-auto">
                  <div className="absolute inset-0 bg-indigo-500 rounded-full animate-morph"></div>
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Your Name"
                    width={300}
                    height={300}
                    className="rounded-full relative z-10 object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-4">
                  Hello! I'm a passionate web developer with a knack for creating engaging digital experiences. My journey in the world of coding started with a curiosity for how things work on the web, and it has evolved into a full-fledged passion for building innovative solutions.
                </p>
                <p className="text-lg mb-4">
                  With expertise in React, Next.js, and Tailwind CSS, I love bringing ideas to life through clean, efficient, and user-friendly code. My approach combines creativity with technical precision, ensuring that every project not only looks great but also performs flawlessly.
                </p>
                <p className="text-lg">
                  When I'm not immersed in code, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good sci-fi novel. I believe in continuous learning and am always excited to take on new challenges in the ever-evolving world of web development.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "E-commerce Platform", desc: "A full-stack online store with real-time inventory management." },
                { title: "Task Management App", desc: "A collaborative tool for teams to organize and track projects." },
                { title: "Weather Dashboard", desc: "An interactive weather app with location-based forecasts." }
              ].map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                  <Image
                    src={`/placeholder.svg?height=200&width=400`}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.desc}</p>
                    <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">Explore Project</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300 w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {currentTime.getFullYear()} Your Name. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            {[
              { name: 'Twitter', icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' },
              { name: 'GitHub', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
              { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' }
            ].map((social) => (
              <a key={social.name} href="#" className="hover:text-indigo-400 transition duration-300">
                <span className="sr-only">{social.name}</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}