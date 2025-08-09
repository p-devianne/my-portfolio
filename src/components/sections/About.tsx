'use client'

interface Language {
  name: string
  level: string
  native?: boolean
}

const languages: Language[] = [
  {
    name: "French",
    level: "Fluent",
    native: true
  },
  {
    name: "English",
    level: "Fluent"
  },
  {
    name: "Chinese",
    level: "HSK 2"
  },
  {
    name: "German",
    level: "Beginner"
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            In a nutshell
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-[1fr,auto,1fr]">
          <div className="prose dark:prose-invert max-w-none md:max-w-xl">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Current Status</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• <span className="font-medium">Master student at EPFL</span> in Computational Science and Engineering (Mathematics department)</li>
                  <li>• <span className="font-medium">Master's thesis at NUS (Singapore)</span> with Prof. Deng Zeyu</li>
                  <li>• Developing an <span className="font-medium">Equivariant Graph Neural Network</span> to simulate ion transport in battery materials</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Background & Passion</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Coming from <span className="font-medium">Lille (France), </span> I studied in the <span className="font-medium">French High School of Luxembourg</span></li>
                  <li>• Passionate about the <span className="font-bold text-indigo-600 dark:text-indigo-400">mathematical nature of physics</span> and accurate simulation capabilities</li>
                  <li>• Always interested in <span className="font-medium">fundamental laws of nature</span> and our ability to model them</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Academic Journey</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• <span className="font-medium">Bachelor's in Physics at EPFL</span> - developed strong mathematical background</li>
                  <li>• Discovered interest in <span className="font-medium">Computational Physics</span> and its potential for advancing physical knowledge</li>
                  <li>• <span className="font-medium">Master's focus</span> on Modeling and Computations, Image Processing, and Deep Learning</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Future Vision</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Pursuing a <span className="font-medium">PhD at the intersection of Computational Physics and Deep Learning</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-px bg-gray-300 dark:bg-gray-700" />
          <div className="space-y-6 md:pl-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Skills & Expertise
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Research Methods', 'Physics', 'Deep Learning', 'Python / Pytorch', 'Numerical Methods', 'Data Analysis', 'Image Processing', 'Linux'].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-24 h-px bg-gray-200 dark:bg-gray-700 mx-auto my-6" />

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Research Interests
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Machine Learning for Physics </li>
                <li>• Medical Imaging and AI</li>
                <li>• Computational methods for Atomistic simulations</li>
                <li>• Groups and Symmetries in Physics</li>
              </ul>
            </div>

            <div className="w-24 h-px bg-gray-200 dark:bg-gray-700 mx-auto my-6" />

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Languages
              </h3>
              <div className="mt-4 space-y-3">
                {languages.map((language) => (
                  <div key={language.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-900 dark:text-white font-medium">{language.name}</span>
                      {language.native && (
                        <span className="text-xs text-emerald-600 dark:text-emerald-400">(Native)</span>
                      )}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{language.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 