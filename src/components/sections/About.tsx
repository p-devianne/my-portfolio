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
            <p className="text-lg text-gray-600 dark:text-gray-300 text-justify">
              I am a Master student at EPFL in Computational Science and Engineering,
               from the Mathematics department. 
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-justify">
              I am passionate about the <span className="font-bold">mathematical nature of physics</span>, and our ability to simulate it accurately.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-justify">
            Currently, I am doing my Master's thesis at NUS (Singapore) with Prof. Deng Zeyu.
            I am developing an Equivariant Graph Neural Network to simulate ion transport in battery materials.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-justify">
            Originally from Lille (France), I did my High School in Luxembourg and moved to Lausanne
             (Switzerland) for my Bachelor's degree in Physics.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-justify">
              I had always been interested in the fundamental laws of nature and our ability to model them. It motivated my choice for my studies.
              During my Bachelor's, I developed a strong mathematical background, essential for Physics' theory.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-justify">
            Then, I have taken interest in Computational Physics and its potential for advancing physical knowledge, previously
              unreachable from experiments.
            Thus, I chose my Master to focus on Modeling and Computations. I improved my skills in mathematical modeling and discovered new tools such as Image Processing and Deep Learning.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-justify">
            After my Master, I envision to pursue a PhD at the intersection between Computational Physics and Deep Learning.
            </p>
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