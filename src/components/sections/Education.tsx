'use client'

interface Education {
  degree: string
  institution: string
  period: string
  location: string
  description?: string
  mainCourses?: string[]
}

const education: Education[] = [
  {
    degree: "Master's in Computational Science and Engineering",
    institution: "École Polytechnique Fédérale de Lausanne (EPFL)",
    period: "2022 - now",
    location: "Lausanne, Switzerland",
    description: "Focus on Deep Learning and Computational Physics",
    mainCourses: [
      "Machine Learning (by M. Jaggi) ",
      "Reinforcement Learning (by W. Gerstner)",
      "Instability (by F. Gallaire)",
      "Geometric Computing (by M. Pauly)",
    ]
  },
  
  {
    degree: "Bachelor's in Physics",
    institution: "École Polytechnique Fédérale de Lausanne (EPFL)",
    period: "2019 - 2022",
    location: "Lausanne, Switzerland",
    description: "Focus on Theoretical Physics and Mathematics",
    mainCourses: [
      "Calculus I-II-III-IV",
      "Linear Algebra I-II",
      "Electrodynamics",
      "Special Relativity",
      "Thermodynamics"
    ]
  },
  {
    degree: "1-year exchange for Third Bachelor year",
    institution: "Royal Institute of Technology (KTH)",
    period: "2021 - 2022",
    location: "Stockholm, Sweden",
    description: "Focus on Advanced Physics courses and Computational Physics",
    mainCourses: [
      "Advanced Quantum Mechanics",
      "Elementary Particle Physics",
      "Statistical Physics",
      "Nuclear reactor physics"
    ]
  }
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Education
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            My academic journey
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative pl-8 sm:pl-32 py-6 group"
            >
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-12 before:h-full before:px-px before:bg-gray-200 dark:before:bg-gray-700 before:ml-0.5 before:top-8 before:group-last:h-[calc(100%-4rem)]">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full dark:text-emerald-400 dark:bg-emerald-900/30">
                  {edu.period}
                </time>
                <div className="text-xl font-bold text-gray-900 dark:text-white">
                  {edu.degree}
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                <p className="font-medium">{edu.institution}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{edu.location}</p>
                {edu.description && (
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{edu.description}</p>
                )}
                {edu.mainCourses && (
                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Main Courses:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.mainCourses.map((course, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 