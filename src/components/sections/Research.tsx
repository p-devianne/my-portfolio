'use client'

import Link from 'next/link'
import Image from 'next/image'

interface ResearchItem {
  title: string
  description: string
  image: string
  tags: string[]
  slug: string
}

const researchItems: ResearchItem[] = [
  {
    title: 'Graph Neural Networks in Battery Material simulations',
    description: 'Master Thesis at NUS (Singapore) — Feb. 2025 - Sept. 2025',
    image: '/images/research/neb.png',
    tags: ['Graph-NN', 'Monte Carlo', 'NEB', 'Fast-Ion Conductors'],
    slug: 'gnn-deng'
  },
  {
    title: '3D U-Net for Predicting stress in composite materials',
    description: 'Research Project at LSMS-EPFL (Lausanne) — Feb. 2024 - Sept. 2024',
    image: '/images/research/ann.png',
    tags: ['U-Net', 'Deformation Physics', 'Pytorch', 'Scientific writing'],
    slug: 'unet-lsms'
  },
  {
    title: 'Evaluation of Reconstruction models for fetal-brain MRI',
    description: 'Research Project at LTS5-EPFL (Lausanne) — Feb. 2023 - Sept. 2023',
    image: '/images/research/fetal.png',
    tags: ['Quality Assessment', 'Deep Learning', 'Ill-posed Problem', 'Medical Imaging'],
    slug: 'fmri-mial'
  },
]

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

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {researchItems.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/research/${item.slug}`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  View Research
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 