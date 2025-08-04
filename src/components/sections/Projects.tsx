'use client'

import Link from 'next/link'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  slug: string
}

const projects: Project[] = [
  {
    title: 'C++ software for Monte Carlo calculations',
    description: 'Software package for Statistical moments estimation with Monte Carlo method',
    image: '/images/projects/c++-mc.png',
    technologies: ['Object-Oriented Programming', 'Google Test', 'Git Modules'],
    slug: 'mc-pcsc'
  },
  {
    title: 'Generative model for electron diffusion in tissues',
    description: 'Deep Generative model to mimick electron behaviour in human tissues.',
    image: '/images/projects/ml-projet2.png',
    technologies: ['Pytorch', 'Generative Adversarial Networks', 'Data Analysis'],
    slug: 'gan-ml'
  },
  {
    title: 'Reinforcement Learning for Swiss epidemic government policy',
    description: 'Applying reinforcement learning techniques to optimize government policies for epidemic mitigation in Switzerland.',
    image: '/images/projects/rl-swiss.png',
    technologies: ['Agent', 'Policy optimization', 'Deep-Q Learning'],
    slug: 'rl-swiss'
  },
  // Add more projects here
]

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

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 