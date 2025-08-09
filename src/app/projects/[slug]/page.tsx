import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getAssetPath } from '@/lib/utils'

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
    image: getAssetPath('/images/projects/c++-mc.png'),
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
    image: getAssetPath('/images/projects/ml-projet2.png'),
    technologies: ['Pytorch', 'Generative Adversarial Networks', 'Data Analysis'],
    githubUrl: 'https://github.com/clem2212/Projet02',
    projectReportUrl: getAssetPath('/pdfs/gan-ml.pdf'),
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
    image: getAssetPath('/images/projects/rl-swiss.png'),
    technologies: ['Agent', 'Policy optimization', 'Deep-Q Learning'],
    githubUrl: 'https://github.com/paulblgr/Miniproject-ANN',
    projectReportUrl: getAssetPath('/pdfs/rl-swiss.pdf'),
    content: `
      <p>Project for the CS-456 EPFL-course on Deep-Q learning for epidemic mitigation.</p>
    `
  }
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug: slug,
  }))
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
          href="/projects"
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
                  className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                ) : (
                  <span className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-500 bg-gray-100 cursor-not-allowed">
                    GitHub Unavailable
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