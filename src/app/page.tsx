'use client'

import Link from 'next/link'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Research from '@/components/sections/Research'
import Projects from '@/components/sections/Projects'
import SocialLinks from '@/components/ui/SocialLinks'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'
import { useState } from 'react'

export default function Home() {
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('pauldevianne@gmail.com')
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 1200)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Link href="/" className="text-xl font-bold">
                Paul Devianne
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link href="#about" className="hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="#education" className="hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  Education
                </Link>
                <Link href="#experience" className="hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  Experience
                </Link>
                <Link href="#research" className="hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  Research
                </Link>
                <Link href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  Projects
                </Link>
                <Link href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src={getAssetPath("/images/background.jpg")}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pt-12">
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full border-4 border-white/20 shadow-lg" />
              <Image
                src={getAssetPath("/images/profiles/profile_3.jpg")}
                alt="Paul Devianne" 
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Paul Devianne
            </h1>
            <p className="mt-4 text-xl text-gray-100">
              Master Student @ <span className="font-bold">EPFL</span> in Computational Science and Engineering
            </p>
            <p className="mt-4 text-lg text-gray-200 italic">
              "Bridging theory and simulation, one equation at a time"
            </p>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>

      <div className="w-24 h-px bg-gray-200 dark:bg-gray-700 mx-auto" />

      {/* About Section */}
      <About />

      <div className="w-24 h-px bg-gray-200 dark:bg-gray-700 mx-auto" />

      {/* Education Section */}
      <Education />

      <div className="w-24 h-px bg-gray-200 dark:bg-gray-700 mx-auto" />

      {/* Experience Section */}
      <Experience />

      <div className="w-24 h-px bg-gray-200 dark:bg-gray-700 mx-auto" />

      {/* Research Section */}
      <Research />

      <div className="w-24 h-px bg-gray-200 dark:bg-gray-700 mx-auto" />

      {/* Projects Section */}
      <Projects />

      <div className="w-24 h-px bg-gray-200 dark:bg-gray-700 mx-auto" />

      {/* Contacts Section */}
      <section id="contact" className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Contacts
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/p-devianne"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 hover:from-gray-700 hover:to-gray-800 dark:hover:from-gray-600 dark:hover:to-gray-500 hover:text-white dark:hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              p-devianne
            </a>
            <a
              href="https://www.linkedin.com/in/paul-devianne-98362718b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 hover:from-blue-500 hover:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 hover:text-white dark:hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.75-2.2C20.3 8 21 10.42 21 14.25V24h-4v-8.25c0-1.96-.04-4.5-2.75-4.5-2.75 0-3.17 2.14-3.17 4.36V24h-4V8z"/>
              </svg>
              Paul Devianne
            </a>
            <a
              href="https://orcid.org/0009-0004-9614-8970"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 hover:from-green-500 hover:to-green-600 dark:hover:from-green-600 dark:hover:to-green-700 hover:text-white dark:hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 2.5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5-9.5-4.253-9.5-9.5 4.253-9.5 9.5-9.5zm0 2.5c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 2.5c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5z"/>
              </svg>
              ORCID
            </a>
            <button
              onClick={copyEmail}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 relative overflow-hidden ${
                emailCopied 
                  ? 'bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 text-green-700 dark:text-green-300' 
                  : 'bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-indigo-100 hover:to-purple-100 dark:hover:from-indigo-900/40 dark:hover:to-purple-900/40 text-gray-700 dark:text-gray-300'
              }`}
            >
              <span className="relative z-10 transition-transform duration-200">
                {emailCopied ? '✅' : '📧'}
              </span>
              <span className={`relative z-10 transition-all duration-200 ${
                emailCopied 
                  ? 'text-green-700 dark:text-green-300 font-medium' 
                  : ''
              }`}>
                {emailCopied ? '✓ Copied!' : 'pauldevianne@gmail.com'}
              </span>
            </button>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700">
              📍 Singapore
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
