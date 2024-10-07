'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Poppins } from '@next/font/google'


const poppins = Poppins({
    weight: ['400', '600', '700'], // Choose font weights (regular, semi-bold, bold)
    subsets: ['latin'], // Choose the character subset you need
  })


  export default function Home() {



    const blogPosts = [
      {
        id: 1,
        title: "UW CE 1A",
        excerpt: "Lots of Ups and Downs.",
        date: "2024-10-07",
      },
      {
        id: 2,
        title: "University Applications",
        excerpt: "My run-through of university applications + my waterloo AIF.",
        date: "2024-10-07",
      },
      {
        id: 3,
        title: "Why you should join clubs in high school",
        excerpt: "Overview of my highschool clubs experience.",
        date: "2024-10-07",
      },
      {
        id: 4,
        title: "TKS Alumni",
        excerpt: "Everything I got to do at TKS + what I learned",
        date: "2024-05-12",
      },
      {
        id: 5,
        title: "MY SHAD Experience",
        excerpt: "Everything about my SHAD experience. In short, it really was a month of change.",
        date: "2023-06-15",
      },
    ]

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
    <div className = "min-h-screen flex flex-col bg-gray-800">
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
              href={`/#${item.toLowerCase()}`}
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
    <div className="max-w-3xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-blue-50">Haresh's Blog 📝</h1>
    
      </header>
      <main>
        {blogPosts.map((post) => (
          <article key={post.id} className="mb-8 pb-8 border-b border-gray-200 last:border-b-0">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.id}`} className="text-indigo-400 hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-300 mb-4">{post.excerpt}</p>
            <div className="text-sm text-gray-400">
              <p>Last Updated: <time dateTime={post.date}>{post.date}</time> </p>
            </div>
          </article>
        ))}
      </main>
      <footer className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
      </footer>
    </div>



    </div>
    </div>

)
}

