import Link from 'next/link'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Research from '@/components/sections/Research'
import Projects from '@/components/sections/Projects'
import SocialLinks from '@/components/ui/SocialLinks'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'

export default function Home() {
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
    </main>
  )
}
