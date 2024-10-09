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
    <article className="max-w-5xl mx-auto px-4 py-8">
      <header className="mb-8 pb-8 border-b border-gray-200 last:border-b-0">
        <h1 className="text-4xl font-bold tracking-tight text-primary mb-2">
        MY SHAD Experience
        </h1>
        <h1 className="text-sm text-muted-foreground">
        Last Updated: 2024-10-07 
        </h1>
      </header>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-m text-muted-foreground">
        In July of 2023, I spent a month at the University of New Brunswick for a program called SHAD. Man, I’ll say it first and foremost, I loved SHAD. For some, it was considered a “glorified summer camp”. But it really did teach me so much about life in general. It was a month where you gained as much as you put into it. 
        <br></br><br></br>
        Just the memories I made from SHAD were enough to justify the commitment. I came in not knowing anyone and left that month with 52 friends. It taught me the value of a community, the value of friends, the value of putting in that extra effort to really get to know someone. 
        <br></br><br></br>
        SHAD was a jam-packed program. Our days started as early as 8:00 am, and ended later at night at around 10:30 pm. There was always some sort of activity to occupy our time. We would go from lecture to lecture, with little to no breaks. As a ‘shaddie’, you had no clue what you were expected to do the next day. It was all just spontaneous. Most of us hated this. But the goal was to get you out of your comfort zone.
        <br></br><br></br>
        A lot of SHAD was meant to get you out of your comfort zone. Being in university right now, SHAD prepared you in many ways. Living on my own at a dorm right now is a different experience. But SHAD helped me prepare for it. You learn things. You learn how to take responsibility over yourself. People mature at different rates - some people learn this before SHAD. But I’m sure many people leave SHAD engraving self-responsibility within themselves. 
        <br></br><br></br>
        It’s wild how much we went through in just a month. We explored a bunch of New Brunswick, learned some pretty cool things in our lectures, had a lot of leadership building activities, and just learned day by day. It gave me a clearer sense of purpose in life. 
        <br></br><br></br>
        My program director, a chemical engineer, inspired us through his discovery of a cancer drug. It touched my heart, showing me that the “why” matters most. The days at SHAD were rigorous and consuming, but it showed me what it meant to leave your “comfort zone”. It was the best month ‘for’ my life. 

        </p>
      </div>
    </article>
    </div>
    </div>

)
}

