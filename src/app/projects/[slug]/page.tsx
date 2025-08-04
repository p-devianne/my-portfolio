import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  projectReportUrl?: string
  content: string
}

// This would typically come from a database or CMS
const projects: Record<string, Project> = {
  'mc-pcsc': {
    title: 'C++ software for Monte Carlo calculations',
    description: 'Software package for Statistical moments estimation with Monte Carlo method',
    image: '/images/projects/c++-mc.png',
    technologies: ['Object-Oriented Programming', 'Google Test', 'Git Modules'],
    githubUrl: 'https://github.com/sprmsv/PCSC-MonteCarlo',
    projectReportUrl: '',
    content: `
      <p><strong>Project Description</strong></p>

      <p>From a user defined function and a distribution, this library approximates the statistical moments using Monte Carlo approximation. </p>

      <p>The library is written in C++ and uses the Eigen library for linear algebra and the Google Test library for unit testing. </p>

      <p>The library is tested on Linux and macOS.</p>

    `
  },
  'gan-ml': {
    title: 'Generative model for electron diffusion in tissues',
    description: 'Deep Generative model to mimick electron behaviour in human tissues.',
    image: '/images/projects/ml-projet2.png',
    technologies: ['Pytorch', 'Generative Adversarial Networks', 'Data Analysis'],
    githubUrl: 'https://github.com/clem2212/Projet02',
    projectReportUrl: '/pdfs/gan-ml.pdf',
    content: `
      <p><strong>Project Description</strong></p>

      <p> The aim of this project is to predict the best
way possible collision events of electrons in water given initial
conditions of the particles. </p>

      <p>During its diffusion in the water, the
electron undergoes many interactions before losing all its energy
and dissipating. At each encounter, it may or may not create
a new particle with its own new properties. </p>
      
      <p> Using Generative Adversarial Networks (GANs), [1] we model the different
types of interactions in order to best predict the behavior
of electrons over time and space in the media. </p>
     
      <p> Simulating elementary particle physics is very costly computationally. By
using a pre-trained machine learning algorithm, one can simulate
the same events with many less computations. </p>

      <br>
      
      <h3>References</h3>
      <p><em>[1] A. Creswell, T. White, V. Dumoulin, K. Arulkumaran, B. Sengupta, and
      A. A. Bharath, “Generative adversarial networks: An overview,” IEEE
      Signal Processing Magazine, vol. 35, no. 1, pp. 53–65, 2018. </em></p>
    `
  },
  'rl-swiss': {
    title: 'Reinforcement Learning for Swiss epidemic government policy',
    description: 'Applying reinforcement learning techniques to optimize government policies for epidemic mitigation in Switzerland.',
    image: '/images/projects/rl-swiss.png',
    technologies: ['Agent', 'Policy optimization', 'Deep-Q Learning'],
    githubUrl: 'https://github.com/paulblgr/Miniproject-ANN',
    projectReportUrl: '/pdfs/rl-swiss.pdf',
    content: `
      <p>Project for the CS-456 EPFL-course on Deep-Q learning for epidemic mitigation.</p>
    `
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug]

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/#projects"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-8"
        >
          ← Back to Projects
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96 w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="prose dark:prose-invert max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: project.content }}
            />
            
            <div className="flex flex-wrap gap-4">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  Git Project
                </a>
                ) : (
                  <span className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-500 bg-gray-100 cursor-not-allowed">
                    Git Project Unavailable
                  </span>
                )}

                {project.projectReportUrl ? (
                <a
                  href={project.projectReportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
                >
                  Project Report
                </a>
              ) : (
                <span className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-500 bg-gray-100 cursor-not-allowed">
                  Project Report Unavailable
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 