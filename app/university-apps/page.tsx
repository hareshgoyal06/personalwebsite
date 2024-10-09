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
        University Applications
        </h1>
        <h1 className="text-sm text-muted-foreground">
        Last Updated: 2024-10-07 
        </h1>
      </header>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-m text-muted-foreground">
        University applications were those things that just seemed to stress out everyone around me. I remember all the advice people would give me: “start early”, “ask others to edit”, and “brag about yourself”. Don’t get me wrong, all this advice helped me for sure (and you bet I followed it). Honestly, though, the biggest thing I learned was to <b>be genuine.</b> 
        <br></br>
        <br></br>
        I never understood the value of bragging about things you don’t accomplish. For me, writing applications became less about bragging, and more about reliving things I went through. For example, this could’ve been talking about SHAD or the clubs I had done throughout high school. Getting into Waterloo Engineering wasn’t about finding the “next big thing”. I didn’t have to talk about all my technical experience, or the “bs” side-projects I made. All my application was me talking about things I was genuinely passionate about. 
        <br></br>
        <br></br>
        That’s the one thing I try preaching to younger grades. As long as your grades are reasonable, you don’t have to stress about your university applications. Just be yourself. Talk like yourself. 
        <br></br>
        <br></br>
        This is easier said than done. I know if someone told me this as a 12th grader, I would find it cliche, and downright useless. But it’s something I could (at the very least) preach about.
        <br></br>
        <br></br>
        That being said, I would encourage 12th graders to check out university fairs, and at least, visit campuses. There’s always a big university fair at the Metro Convention Centre in Toronto. If you have no idea what you want to do in life, it’s worth a shot. Even if you do have an idea, it’s still a nice idea to check it out. Sometimes, admissions officers can give really solid advice. 
        <br></br>
        <br></br>
        Also, remember that grades matter much more than applications. It’s worth a reminder. I know people with mediocre grades and crazy extracurriculars that don’t make it into their dream programs. While unfortunate, grades will always matter most. 
        <br></br>
        <br></br>
        <br></br>
        <b>Waterloo Engineering Admissions </b>
        <br></br>
        <br></br>
        As for Waterloo Engineering, our entrance criteria were based on four main factors: AIF, Interview, Grades, and Adjustment Factor. As far as adjustment factor goes, don’t even stress. It’s out of your hands - it will either benefit you or not - just do what you do. 
        <br></br>
        <br></br>
        The AIF was really short, maybe 4-5 paragraphs in total, but really short paragraphs. Nothing to stress over, but still, get it peer-reviewed, and have a really good idea of what you want to say. Maybe go over a few drafts until you get it right. 
        <br></br>
        <br></br>
        The video interview was not bad at all. It was 2 very short questions. Honestly, just act human in those and you should be fine. I know a couple of friends who got harder questions, but as long as you’re confident and human, it shouldn’t be an issue. I did my video interviews for other universities before doing the Waterloo interview, so I had a bit of practice beforehand. Helped a little. 
        <br></br>
        <br></br>
        Lastly, grades were grades. I didn’t have the craziest grades ever. That’s for sure. But I suppose they were good enough. I got in with around a ~95% top 6 average, with the sciences (SPH4U and SCH4U) tanking my top 6. But hey, I’m here. I took SCH4U in grade 11 and ended that with a 90. But honestly, stick with it, and just aim for your best. It’ll work out in the end. 
        <br></br>
        <br></br>
        </p>

      
      </div>
    </article>
    </div>
    </div>

)
}

