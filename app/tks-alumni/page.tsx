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
            UW CE 1A 🧑‍💻
        </h1>
        <h1 className="text-sm text-muted-foreground">
        Last Updated: 2024-10-07 
        </h1>
      </header>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-m text-muted-foreground">
        I remember getting into Waterloo Computer Engineering on a brisk morning during the March break. Honestly, even writing this from my dorm room feels like a surreal experience. I knew Waterloo would be home from the first time I visited the campus. At the same time, I knew Waterloo Engineering wasn’t a joke. But with the bad comes the good. 
        </p>
        <br></br>
        <br></br>
        <p>
        With 1A being our first term, there are still lots of mixed emotions that are forming. But what I will say is that Waterloo provides an environment that forces you to grind. Seeing people around you talking about such great things forces you to get out of your comfort zone and explore. In many ways, it’s a great thing. But at times, it can feel toxic and lead to ‘imposter syndrome’. In short, that is the essence of Waterloo.  
        </p>
        <br></br>
        <p>
        Waterloo as a whole, has been chill. My experience kickstarted with Engineering Orientation. Honestly, it was much better than I expected. It gave me the chance to meet a bunch of people and get into the whole engineering spirit. There were a bunch of cool components to it too. I remember walking in the mud with some boys, doing some of the wackiest karaoke possible, and the engineering concert at the end of it. Oh, and not to mention our life-sized catapult at Junk Wars. Plus, being crowned our team’s hype hero. Yep, some pretty core memories. 
        </p>
        <Image className="max-w-5xl mx-auto my-8 rounded-lg shadow-md"
          src="/images/concert.png"
          width={600}
          height={400}
          alt=""
        />
        <br></br>
        <p>
        <b>It’s honestly what you make out of it.</b> I feel like that applies in just some of many aspects of life too. If you read my experience at SHAD, you will see me say the same things. It’s what you make out of it. 
        </p>
        <br></br>
        <p>
        Over the next few months, I will be explaining my thoughts on our courses a little more in-depth. So far, our courses include: 
        </p>
        <br></br>

        <p>
        ECE 105 - Classical Mechanics
        <br></br>
        ECE 150 - Introduction to Programming in C++
        <br></br>
        ECE 190 - Engineering Practice and Profession
        <br></br>
        ECE 198 - Project Studio 
        <br></br>
        MATH 117 - Calculus I (Engineering)
        <br></br>
        MATH 115 - Linear Algebra 
        <br></br>
        ENGL 192 - English Communication for Engineers 
        <br></br>
        <br></br>
        Stayed tuned (let’s hope I pass).
        </p>
        
        <Image className="max-w-5xl mx-auto my-8 rounded-lg shadow-md"
          src="/images/schedule.png"
          width={600}
          height={400}
          alt=""
        />
      </div>
    </article>
    </div>
    </div>

)
}

