'use client'

import Link from 'next/link'

interface SocialLink {
  name: string
  url: string
  icon: JSX.Element
  username: string
}

interface ContactBadge {
  type: string
  value: string
  icon: string
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/p-devianne',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    username: 'p-devianne'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/paul-devianne-98362718b',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.75-2.2C20.3 8 21 10.42 21 14.25V24h-4v-8.25c0-1.96-.04-4.5-2.75-4.5-2.75 0-3.17 2.14-3.17 4.36V24h-4V8z"/>
      </svg>
    ),
    username: 'Paul Devianne'
  },
  {
    name: 'ORCID',
    url: 'https://orcid.org/0009-0004-9614-8970',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 2.5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5-9.5-4.253-9.5-9.5 4.253-9.5 9.5-9.5zm0 2.5c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 2.5c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5z"/>
      </svg>
    ),
    username: 'Paul Devianne'
  }
]

const contactBadges: ContactBadge[] = [
  {
    type: 'Email',
    value: 'pauldevianne@gmail.com',
    icon: '📧'
  },
  {
    type: 'Location',
    value: 'Singapore',
    icon: '📍'
  }
]

export default function SocialLinks() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap justify-center gap-2">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              <span className="text-gray-700 dark:text-gray-300">{link.icon}</span>
              <span className="text-gray-700 dark:text-gray-300">{link.username}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {contactBadges.map((badge) => (
          <div
            key={badge.type}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm"
          >
            <span>{badge.icon}</span>
            <span>{badge.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
} 