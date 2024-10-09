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
        Why you should join clubs in high school 🌟
        </h1>
        <h1 className="text-sm text-muted-foreground">
        Last Updated: 2024-10-07 
        </h1>
      </header>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-m text-muted-foreground">
        	Clubs in high school made high school that much more rewarding. It was more than just grades - and that felt nice. Going into high school, I came in with the expectations that I would be sweating and tryharding academically. That got boring really fast. 
          <br></br><br></br>
          In grade 10, I started getting more involved in school. Meanwhile, in grade 9, I felt non-existent. I sorta pushed myself into a comfort zone that I didn’t want to get out of. Grade 10, in many ways, was transformational. 
          <br></br><br></br>
          Throughout high school, I served as Treasurer of the Student Activity Council, Treasurer of the Student Athletic Council, Co-President of our SHSM-ICT council, and a bunch of executive positions in other clubs. I even tried making a coding club that failed horribly. But hey, it built character. And in general, that’s the one good thing clubs do: build character.
          <br></br><br></br>
          Getting involved hasn’t always been easy. I’ve lost a SAC election. I’ve felt uncomfortable leading things. I’ve felt discomfort in even balancing my school-life balances. But all in all, these things help you grow. It’s why I encourage joining clubs. You should learn to grow through this discomfort. Time management is such an underrated skill. The only way to build on this skill is to throw yourself in the water. But as with everything, there is a limit. You don’t want to drown. 
          <br></br><br></br>
          Other than that, joining clubs is so satisfying. I’ve had the opportunity to facilitate real change in not only the school, but the outer community. It’s channeled a thing I am genuinely passionate for: social good. I’ve spoken about this many times, but I do want to incorporate social good within my technical projects in the future. 
          <br></br><br></br>
          Through some of the initiatives I’ve spearheaded in the past, I’ve had the chance to help raise money for some great causes. I’m talking raising thousands for homeless shelters (Eva’s Place) and the Terry Fox Foundation. 
          <br></br><br></br>
          To raise money for the Terry Fox Foundation, we decided to host a Terry Fox day at our school. We sold snacks, had competitions, and held a water bucket dump challenge fundraiser. I, alongside other teachers and SAC members, had volunteered to get water dumped on us. Albeit, I may have caught a cold after, it was still an incredibly rewarding experience.
          <br></br><br></br>
          But honestly, it’s those memories that you cherish in high school. I’m not going to remember what mark I got on that calc test, or the writing styles I learned in English. I’m going to remember the Terry Fox water dump challenge, where we genuinely did a good thing for our greater community. 
          <br></br><br></br>
          If you’re still in high school, or even university, join clubs. Even if you don’t know what to expect from them. Try getting yourself involved. Try feeling that discomfort. It’s only going to help you.

        </p>
       
      </div>
    </article>
    </div>
    </div>

)
}

