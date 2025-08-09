'use client'

import Link from 'next/link'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'

interface ResearchItem {
  title: string
  description: string
  image: string
  tags: string[]
  slug: string
  githubUrl?: string
}

const researchItems: ResearchItem[] = [
  {
    title: 'Graph Neural Networks in Battery Material simulations',
    description: 'Master Thesis at NUS (Singapore) — Feb. 2025 - Sept. 2025',
    image: getAssetPath('/images/research/neb.png'),
    tags: ['Graph-NN', 'Monte Carlo', 'NEB', 'Fast-Ion Conductors'],
    slug: 'gnn-deng'
    // No githubUrl since gitProjectUrl is empty in detail page
  },
  {
    title: '3D U-Net for Predicting stress in composite materials',
    description: 'Research Project at LSMS-EPFL (Lausanne) — Feb. 2024 - Sept. 2024',
    image: getAssetPath('/images/research/ann.png'),
    tags: ['U-Net', 'Deformation Physics', 'Pytorch', 'Scientific writing'],
    slug: 'unet-lsms',
    githubUrl: 'https://github.com/p-devianne/ann_solidMaterialLaws'
  },
  {
    title: 'Evaluation of Reconstruction models for fetal-brain MRI',
    description: 'Research Project at LTS5-EPFL (Lausanne) — Feb. 2023 - Sept. 2023',
    image: getAssetPath('/images/research/fetal.png'),
    tags: ['Quality Assessment', 'Deep Learning', 'Ill-posed Problem', 'Medical Imaging'],
    slug: 'fmri-mial',
    githubUrl: 'https://github.com/Medical-Image-Analysis-Laboratory/fetal_brain_utils/tree/44c2891ff339a81579a44746c30e857a3fbd755f'
  },
]

// Featured research (most recent/important)
const featuredResearch = researchItems[0]

export default function Research() {
  return (
    <section id="research" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Research
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            My research experience
          </p>
        </div>

        <div className="mt-12 max-w-6xl mx-auto">
          {/* Featured Research */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-3/5">
                <div className="relative h-80 md:h-full">
                  <Image
                    src={featuredResearch.image}
                    alt={featuredResearch.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/5 p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {featuredResearch.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  {featuredResearch.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredResearch.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/research/${featuredResearch.slug}`}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-indigo-500 dark:to-purple-500 dark:hover:from-indigo-600 dark:hover:to-purple-600 text-white transition-all duration-300 transform hover:scale-105"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>

          {/* View All Research Button */}
          <div className="mt-8 text-center">
            <Link
              href="/research"
              className="inline-flex items-center justify-center px-6 py-3 border border-indigo-600 dark:border-indigo-500 text-base font-medium rounded-md text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-900 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors"
            >
              View All Research
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export { researchItems }