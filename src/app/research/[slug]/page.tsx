import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getAssetPath } from '@/lib/utils'

interface ResearchItem {
  title: string
  description: string
  image: string
  tags: string[]
  publicationUrl?: string
  gitProjectUrl?: string
  researchReportUrl?: string
  content: string
}

// This would typically come from a database or CMS
const researchItems: Record<string, ResearchItem> = {
  'gnn-deng': {
    title: 'Graph Neural Networks in Battery Material simulations',
    description: 'Master Thesis at NUS (Singapore) — Feb. 2025 - Sept. 2025',
    image: getAssetPath('/images/research/neb.png'),
    tags: ['Graph-NN', 'Monte Carlo', 'NEB', 'Fast-Ion Conductors'],
    publicationUrl: '',
    gitProjectUrl: '',
    researchReportUrl: '',
    content: `
      <p><strong>Project Description</strong></p>
      
      <p>Understanding ion transport in functional materials is crucial to investigate intricate chemical reactions, enhancing the rate performance of materials for energy storage and conversion, and optimizing catalysts.</p>
      
      <p>To model ion transport, atomistic simulations, particularly molecular dynamics (MD) and kinetic Monte Carlo (kMC), have been developed and applied. However, kMC simulations are less frequently used compared to MDs due to the absence of systematic workflows for constructing models to predict transition rates.</p>
      
      <p>DENG's group has previously developed the kMCpy, [1] a Python-based kMC simulation package. In this project, we aim to further enhance kMCpy by incorporating two new functions: (i) symmetry and graph representation of the crystal structure, and (ii) a graph neural network (GNN) model [2,3] for predicting barriers.</p>
      
      <p>These functions will be integrated into kMCpy, providing a structured approach to computing highly accurate kinetic properties. We will apply these functions to solid-state electrolyte materials, [4] such as NASICON, LLZO, and Agyrodite, which have promising potential applications in rechargeable batteries.</p>
      
      <p>Consequently, kMCpy can be utilized in high-throughput simulations for the discovery and optimization of novel functional materials.</p>
      
      <br>
      
      <h3>References</h3>
      <p><em>[1] Deng, Z.; Mishra, T. P.; Xie, W.; Saeed, D. A.; Gautam, G. S.; Canepa, P. kMCpy: A
Python Package to Simulate Transport Properties in Solids with Kinetic Monte Carlo.
Comput. Mater. Sci. 2023, 229, 112394. https://doi.org/10.1016/
j.commatsci.2023.112394.  </em></p>
      <p><em>[2] Satorras, V. G.; Hoogeboom, E.; Welling, M. E(n) Equivariant Graph Neural
Networks. arXiv February 16, 2022. http://arxiv.org/abs/2102.09844 (accessed
2024-09-17).</em></p>
      <p><em>[4] Solid-state electrolyte materials reference</em></p>
    `
  },
    'unet-lsms': {
    title: '3D U-Net for Predicting stress in composite materials',
    description: 'Research Project at LSMS-EPFL (Lausanne) — Feb. 2024 - Sept. 2024',
    image: getAssetPath('/images/research/ann.png'),
    tags: ['U-Net', 'Deformation Physics', 'Pytorch', 'Scientific writing'],
    publicationUrl: '',
    gitProjectUrl: 'https://github.com/p-devianne/ann_solidMaterialLaws',
    researchReportUrl: getAssetPath('/pdfs/unet-lsms.pdf'),
    content: `
      <p><strong>Project Description</strong></p>
          
      <p>Simulations of materials physics at the micro-scale are useful for numerous applications. Recently, machine learning methods have been developed to replace numerical schemes due to their fast compute time and versatility.</p>      <p>This project presents a deep learning model for predicting stress distributions in 3D solid materials, inspired by a prior 2D study [1]. Our approach employs a 3D U-Net deep convolutional neural network (CNN) trained to map the spatial arrangement of microstructural features to the corresponding 3D stress tensor fields.</p>
      
      <p>The 3D U-Net model provides local stress tensor fields for down-scaling. We demonstrate that the method achieves similar error rates to the 2D approach. We developed data augmentation techniques which improved performance of the model. We found that the model scales well to finer resolutions. We also performed hyper-parameter tuning.</p>
      
      <br>
      
      <h3>References</h3>
      <p><em>[1] GUPTA, GRAHAM-BRADY, ET AL. Accelerated multiscale mechanics modeling in a deep learning framework (2023)</em></p>
    `
  },
    'fmri-mial': {
    title: 'Evaluation of Reconstruction models for fetal-brain MRI',
    description: 'Research Project at LTS5-EPFL (Lausanne) — Feb. 2023 - Sept. 2023',
    image: getAssetPath('/images/research/fetal.png'),
    tags: ['Quality Assessment', 'Deep Learning', 'Ill-posed Problem', 'Medical Imaging'],
    publicationUrl: '',
    gitProjectUrl: 'https://github.com/Medical-Image-Analysis-Laboratory/fetal_brain_utils/tree/44c2891ff339a81579a44746c30e857a3fbd755f',
    researchReportUrl: getAssetPath('/pdfs/fmri-mial.pdf'),
    content: `
      <p><strong>Project Description</strong></p>
          
      <p>SRR algorithms aims to reconstruct High-resolution volume of the fetal brain from Low-
resolution MRI acquisitions. [1-3] Evaluating the performance of these algorithms is crucial for assisting clinical diagnosis. [4] The Quality Control on the algorithms is done by building adequate
uncertainty metrics for the algorithms. 

      <p> The algorithms make use of outlier-rejection techniques,
to correct potential artefacts from the MRI data due to fetal motion during the acquisition. The
outlier-rejection methods are quantifying the amount of information discarded for the final re-
construction. </p> 
      
      <p> Evaluating the parameters from these methods corresponds to building uncertainty
metrics for the algorithm. Uncertainty maps of the reconstructed brains are built from the met-
rics. They aim at quantifying the uncertainty areas in the reconstructed fetal brain. </p>

      <p> Correlating the uncertainty findings with expert ratings evaluates the performance of the metrics on ground-
truth data. Specific metrics displayed predictive power on the quality of the reconstructed fetal
brain. 

      <p> However, lack of complexity in the quality ratings of the data as well as in the different
metrics still retains high-performance uncertainty quantification. </p>

<br>

<p><strong>Keywords: Fetal brain MRI, SRR algorithm, Quality Control, Uncertainty Quantification.</strong></p>

<br>

<h3>References</h3>
<p><em>[1] S. Tourbier and et al. “MIAL super-resolution toolkit v2.0.1”. In: Zenodo (2020).
<p><em>[2] M. Ebner and et al. “An automated framework for localization, segmentation, and super-
resolution reconstruction of fetal brain MRI.” In: NeuroImage (2020).</em></p>
<p><em>[3] J. Xu and et al. “NeSVoR: Implicit neural representation for slice-to-volume reconstruction in
MRI.” In: IEEE Trans Med Imaging (2023). </em></p>
<p><em>[4] T. Sanchez et al. “FetMRQC: Automated Quality Control for fetal brain MRI”. In: (2023). </em></p>
`
  },
}

export async function generateStaticParams() {
  return Object.keys(researchItems).map((slug) => ({
    slug: slug,
  }))
}

export default function ResearchPage({ params }: { params: { slug: string } }) {
  const research = researchItems[params.slug]

  if (!research) {
    notFound()
  }

  return (
    <main className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/#research"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-8"
        >
          ← Back to Research
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96 w-full">
            <Image
              src={research.image}
              alt={research.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {research.title}
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {research.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {research.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="prose dark:prose-invert max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: research.content }}
            />
            
            <div className="flex flex-wrap gap-4">
              {research.publicationUrl ? (
                <a
                  href={research.publicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  View Publication
                </a>
              ) : (
                <span className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-500 bg-gray-100 cursor-not-allowed">
                  Publication Unavailable
                </span>
              )}
              
              {research.gitProjectUrl ? (
                <a
                  href={research.gitProjectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-900"
                >
                  Git Project
                </a>
              ) : (
                <span className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-500 bg-gray-100 cursor-not-allowed">
                  Git Project Unavailable
                </span>
              )}
              
              {research.researchReportUrl ? (
                <a
                  href={research.researchReportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
                >
                  Research Report
                </a>
              ) : (
                <span className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-500 bg-gray-100 cursor-not-allowed">
                  Research Report Unavailable
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 