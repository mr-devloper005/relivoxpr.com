import { slot4BrandConfig } from '@/editable/theme/brand.config'
import { mediaDistributionRoute } from '@/config/media-distribution-route'

const news = mediaDistributionRoute

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Press release distribution, done right',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Press release distribution & media coverage',
    primaryLinks: [
      { label: 'Newsroom', href: news },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Distribute a release', href: '/create' },
      secondary: { label: 'Talk to us', href: '/contact' },
    },
  },
  footer: {
    tagline: 'Newswire distribution and verified media coverage',
    description: 'A modern media distribution network that puts your announcements in front of journalists, outlets, and the audiences that matter — fast, measurable, and on brand.',
    columns: [
      {
        title: 'Distribute',
        links: [
          { label: 'Newsroom', href: news },
          { label: 'Press Releases', href: `${news}?category=press-release` },
          { label: 'Business News', href: `${news}?category=business` },
          { label: 'Search Coverage', href: '/search' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { label: 'Publish', href: '/create' },
        ],
      },
    ],
    bottomNote: 'Built for fast, measurable, category-led media distribution.',
  },
  commonLabels: {
    readMore: 'Read release',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Distributed',
  },
} as const
