'use client'
import './globals.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Poppins } from '@next/font/google'

export interface TechTagsProps {
  technologies: string[]
}

export function TechTags({ technologies }: TechTagsProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-indigo-400 opacity-90 text-gray-800"
        >
          {tech}
        </span>
      ))}
    </div>
  )
}


const poppins = Poppins({
  weight: ['400', '600', '700'], // Choose font weights (regular, semi-bold, bold)
  subsets: ['latin'], // Choose the character subset you need
})

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [typedText, setTypedText] = useState('')
  const fullText = "Hey I'm Haresh!"

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100) // Adjust the speed of typing here
      return () => clearTimeout(timeoutId)
    }
  }, [typedText, fullText])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className = "min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-indigo-900 text-gray-200">
    <div className={poppins.className}>
    <header className="bg-gray-900 backdrop-filter backdrop-blur-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <title>Haresh's Dispora</title>
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Haresh Goyal 
        </div>
        <link rel="icon" href="/images/favicon.ico" sizes="any"/>
        
        <div className="hidden md:flex space-x-6">
          {['About', 'Projects', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-indigo-400 transition duration-300"
            >
              {item}
            </Link>
          ))}
          <Link
            href="/blog"
            className="hover:text-indigo-400 transition duration-300"
          >
            Blog
          </Link>
          <Link
            href="/images/Haresh_Goyal_Resume_v1.pdf"
            className="hover:text-indigo-400 transition duration-300"
          >
            Resume
          </Link>
        </div>
        
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 py-2">
          {['About', 'Projects', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-6 py-2 hover:bg-gray-700"
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/blog"
            className="block px-6 py-2 hover:bg-gray-700"
            onClick={toggleMenu}
          >
            Blog
          </Link>
          <Link
            href="/images/Haresh_Goyal_Resume_v1.pdf"
            className="block px-6 py-2 hover:bg-gray-700"
            onClick={toggleMenu}
          >
            Resume
          </Link>
        </div>
      )}
    </header>

      <main className="flex-grow">
        <section id="hero" className="py-20 text-center relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
                <span className="sr-only">{fullText}</span>
                <span aria-hidden="true" className="typewriter-text">{typedText}</span>
                <span className="cursor"></span>
            </h1>
            <p className="text-xl mb-8 animate-fade-in-up animation-delay-200">
              Just an ordinary teen with an extraordinary passion for learning!  
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

        <section id="about" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="relative w-64 h-64 mx-auto">
                  <div className="absolute inset-0 bg-indigo-500 rounded-full animate-morph"></div>
                  <Image
                    src="/images/headshot.jpg"
                    alt="Your Name"
                    width={300}
                    height={300}
                    className="rounded-full relative z-10 object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-4">
                👋🏼 My name is Haresh! I am a first-year Computer Engineering Student @ The University of Waterloo. 
                </p>
                <p className="text-lg mb-4">
                🧠 As I mould myself into a versatile professional, I've invested time in learning what it means to be a leader, an envisionist, and most of all, a learner.                </p>
                <p className="text-lg mb-4">
                💻I'm proficient in Python, Java, C++, Web Development and Full-Stack Development. I've been working on several Machine Learning (ML) projects in the past bit, driven by social good. 
                </p>
                <p className="text-lg">
              ⚡Feel free to connect! Always looking to collaborate to create bigger things!  </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "FlipDrip", 
                  desc: "A \"Tinder-like\" application used to give catered personalizations",
                  image: "/images/FliporDrip.png",
                  link: "https://devpost.com/software/wearmydrip",
                  technologies: ["Vue.Js", "Web-Dev", "TensorFlow.Js"]
                },
                { title: "Google x TKS Challenge", 
                  desc: "Worked alongside Google to find a way to make their business model more effective \n", 
                  image: "/images/googlelite.png",
                  link: "https://www.loom.com/share/6752c5965c494f7db54481449e677104?sid=50a82a89-57b8-4c04-862b-e8d84156bece",
                  technologies: ["Figma", "Canva", "Gemini AI"]
                },
                { title: "Personal Website", 
                  desc: "Created a fully interactive, designed language to display personal progress",
                  image: "/images/website.png",
                  link: "",
                  technologies: ["React", "Next.Js", "Tailwind CSS"]
                },
                { title: "Khanscapes", 
                  desc: "Built a website for Khanscapes to help them expand their online presence",
                  image: "/images/khanscapes.png",
                  link: "https://khanscapes-hareshgoyal06-gmailcoms-projects.vercel.app/",
                  technologies: ["React", "Next.Js", "Tailwind CSS", "Express.JS", "TypeScript"]
                },
                { title: "Mesh.io", 
                  desc: "Developed a real-time networking platform, connecting idividuals based on shared skill sets.",
                  image: "/images/mesh.png",
                  link: "https://github.com/jaedonvisva/mesh",
                  technologies: ["React", "Next.Js", "Tailwind CSS", "Express.JS", "TypeScript"]
                },
                { title: "Uptick", 
                  desc: "Developed a comprehensive stock market analysis platform providing real-time data",
                  image: "/images/uptick.png",
                  link: "https://github.com/hareshgoyal06/tickup",
                  technologies: ["React", "Next.Js", "Tailwind CSS", "Express.JS", "TypeScript"]
                },
              ].map((project, index) => (
                <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                  <Image
                     src ={project.image}
                     alt={project.title}
                     width={400}
                     height={200}
                     className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.desc}</p>
                    <a href={project.link} className="text-indigo-400 hover:underline">Explore Project</a>
                    <TechTags technologies={project.technologies} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        
        
        
        </section>
        <section className="w-full py-12 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6 mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">My Portfolio</h2>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden flex flex-col">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Resume</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Mid Resume (it is what it is)</p>
                    <p className="text-l font-semibold mb-2">Last Updated: <i>September 28th, 2024</i></p>
                  </div>
                  <div className="p-6 mt-auto">
                    <Link href="/images/Haresh_Goyal_Resume_v1.pdf" className="w-full">
                      <button className="w-full py-3 px-4 bg-purple-800 hover:bg-gray-800 text-gray-200 font-semibold border border-gray-300 dark:border-gray-700 rounded shadow">
                        <span className="mr-2">📄</span>
                        Download Full Resume (PDF)
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden flex flex-col">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Blog</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Yap sessions (may be useful to some)</p>
                    <p className="text-l font-semibold mb-2">Last Updated: <i>September 28th, 2024</i></p>
                  </div>
                  <div className="flex items-center justify-center flex-grow p-6">
                    <Link href="/blog" className="w-full">
                      <button className="w-full py-3 px-4 bg-purple-800 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out text-lg">
                        Visit My Blog
                        <span className="ml-2">→</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

        <section id="contact" className="py-20 hover:indigo-400 transition duration-300 ">
          <div className="container mx-auto px-6 ">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-100 ">Get in Touch</h2>
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto text-transparent bg-indigo-900 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 flex items-center justify-center space-x-4">
                <span className="text-2xl text-indigo-400" aria-hidden="true">
                  ✉️
                </span>
                <a
                  href={`mailto:${"haresh.goyal@uwaterloo.ca"}`}
                  className="text-lg font-medium text-white hover:text-indigo-900 transition duration-300"
                >
                  {"haresh.goyal@uwaterloo.ca"}
                </a>
              </div>
            </div>
            <p className="mt-8 text-center gap-2 bottom-3 text-gray-400">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
          </div>
          <div className="container mx-auto px-6 text-center">
          <div className="mt-4 gap-2 flex justify-center space-x-4">
            {[
              { name: 'Instragram', 
                link: 'https://www.instagram.com/hxreshgoyal/', 
                icon: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' },
              { name: 'GitHub', 
                link: 'https://github.com/hareshgoyal06', 
                icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
              { name: 'LinkedIn', 
                link: 'https://linkedin.com/in/haresh-goyal', 
                icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' }
            ].map((social) => (
              <a 
              key={social.name} 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-indigo-400 transition duration-300"
            >
                <span className="sr-only">{social.name}</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
    </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {currentTime.getFullYear()} Haresh Goyal. All rights reserved.</p>
        </div>
      </footer>
      </div>  
    </div>
  )
}
