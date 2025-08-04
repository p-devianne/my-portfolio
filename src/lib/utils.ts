import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to get the correct asset path for GitHub Pages
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/my-portfolio' : ''
  return `${basePath}${path}`
} 