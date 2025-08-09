'use client'

import Link from 'next/link'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  slug: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    title: 'C++ software for Monte Carlo calculations',
    description: 'Software package for Statistical moments estimation with Monte Carlo method',
    image: getAssetPath('/images/projects/c++-mc.png'),
    technologies: ['Object-Oriented Programming', 'Google Test', 'Git Modules'],
    slug: 'mc-pcsc',
    githubUrl: 'https://github.com/sprmsv/PCSC-MonteCarlo'
  },
  {
    title: 'Generative model for electron diffusion in tissues',
    description: 'Deep Generative model to mimick electron behaviour in human tissues.',
    image: getAssetPath('/images/projects/ml-projet2.png'),
    technologies: ['Pytorch', 'Generative Adversarial Networks', 'Data Analysis'],
    slug: 'gan-ml',
    githubUrl: 'https://github.com/clem2212/Projet02'
  },
  {
    title: 'Reinforcement Learning for Swiss epidemic government policy',
    description: 'Applying reinforcement learning techniques to optimize government policies for epidemic mitigation in Switzerland.',
    image: getAssetPath('/images/projects/rl-swiss.png'),
    technologies: ['Agent', 'Policy optimization', 'Deep-Q Learning'],
    slug: 'rl-swiss',
    githubUrl: 'https://github.com/paulblgr/Miniproject-ANN'
  },
]

// Featured project (most recent/important)
const featuredProject = projects[0]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            A selection of my recent work
          </p>
        </div>

        <div className="mt-12 max-w-6xl mx-auto">
          {/* Featured Project */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-3/5">
                <div className="relative h-80 md:h-full">
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/5 p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {featuredProject.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  {featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${featuredProject.slug}`}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-indigo-500 dark:to-purple-500 dark:hover:from-indigo-600 dark:hover:to-purple-600 text-white transition-all duration-300 transform hover:scale-105"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>

          {/* View All Projects Button */}
          <div className="mt-8 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-indigo-600 dark:border-indigo-500 text-base font-medium rounded-md text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export { projects }