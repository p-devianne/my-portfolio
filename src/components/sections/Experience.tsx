'use client'

interface Experience {
  title: string
  company: string
  period: string
  description: string[]
  technologies: string[]
}

// Helper function to render text with links
const renderTextWithLinks = (text: string) => {
  // Simple regex to match [text](url) pattern
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  const parts = text.split(linkRegex)
  
  if (parts.length === 1) {
    return text
  }
  
  const elements: JSX.Element[] = []
  for (let i = 0; i < parts.length; i += 3) {
    if (parts[i]) {
      elements.push(<span key={`text-${i}`}>{parts[i]}</span>)
    }
    if (parts[i + 1] && parts[i + 2]) {
      elements.push(
        <a
          key={`link-${i}`}
          href={parts[i + 2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 underline"
        >
          {parts[i + 1]}
        </a>
      )
    }
  }
  
  return elements
}

const experiences: Experience[] = [
  {
    title: "Deep Learning Intern",
    company: "General Electric HealthCare",
    period: "Sept. 2024 - Feb. 2025",
    description: [
      "Built a database of anthropomorphic breast phantoms (3D breast CT images).",
      "Developed and tuned a deep learning model on this dataset.",
      "Evaluate its performance on domain-specific benchmarks. A significant improvement was observed on these benchmarks.",
      "Supervised by Dr. Sylvain Bernard and Dr. Vincent Bismuth."
    ],
    technologies: ["Pytorch", "Deep Learning", "Medical Imaging", "Optics"]
  },
  {
    title: "Teaching Assistant",
    company: "EPFL",
    period: "2020 - 2024",
    description: [
      "Computational Physics in C++ (Sept. 2021 - July. 2024) with [Prof. Laurent Villard](https://people.epfl.ch/laurent.villard) for 2nd-year Physics students.",
      "Linear Algebra (Sept. 2023 - Jan. 2024) with [Prof. Orane Pouchon](https://people.epfl.ch/orane.pouchon) for 1st-year Bachelor students.",
      "Thermodynamics (Jan. 2024 - July. 2024) with [Prof. Andreas Osterwalder](https://people.epfl.ch/andreas.osterwalder) for 1st-year Chemistry students."
    ],
    technologies: ["Pedagogue", "Communication"]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Experience
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            My professional journey
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-indigo-500 dark:border-indigo-400"
            >
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.period}
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i}>{renderTextWithLinks(item)}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 