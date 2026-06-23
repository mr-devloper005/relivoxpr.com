import { slot4BrandConfig } from '@/editable/theme/brand.config'

const brand = slot4BrandConfig.siteName

export const pagesContent = {
  home: {
    metadata: {
      title: 'Press release distribution & media coverage',
      description: 'Distribute press releases to journalists, newsrooms, and media outlets. Track verified coverage, amplify announcements, and measure reach from one modern newswire.',
      openGraphTitle: 'Press release distribution & media coverage',
      openGraphDescription: 'Put your announcements in front of the right journalists and outlets, then measure the coverage in real time.',
      keywords: ['press release distribution', 'media distribution', 'newswire', 'pr distribution', 'media coverage', 'press release'],
    },
    hero: {
      badge: 'Newswire · Media Distribution',
      title: ['Get your story in', 'front of every newsroom.'],
      description: 'Distribute press releases to a vetted network of journalists, publishers, and media outlets — then track verified pickups and audience reach in real time.',
      primaryCta: { label: 'Distribute a release', href: '/create' },
      secondaryCta: { label: 'Browse the newsroom', href: '/search' },
      searchPlaceholder: 'Search releases, companies, and coverage',
      focusLabel: 'Live newsroom',
      featureCardBadge: 'Verified coverage',
      featureCardTitle: 'Real pickups from real outlets, surfaced the moment they publish.',
      featureCardDescription: 'Every distributed release is tracked across the network so your team sees coverage as it lands.',
      stats: [
        { value: '12k+', label: 'Media outlets' },
        { value: '98%', label: 'Delivery rate' },
        { value: '160+', label: 'Countries reached' },
        { value: '24/7', label: 'Live tracking' },
      ],
    },
    features: {
      badge: 'How it works',
      title: 'One newswire for the whole distribution lifecycle.',
      description: 'Write it once, send it everywhere, and watch the coverage build — without juggling a dozen tools.',
      items: [
        { icon: 'send', title: 'Distribute', description: 'Push your release to targeted journalists, newsrooms, and syndication partners in a single click.' },
        { icon: 'megaphone', title: 'Amplify', description: 'Boost reach across news media, business desks, and social channels with category-aware targeting.' },
        { icon: 'chart', title: 'Track', description: 'Measure verified pickups, audience reach, and engagement with a live coverage dashboard.' },
      ],
    },
    categories: {
      badge: 'Distribution channels',
      title: 'Reach the desks that match your story.',
      items: [
        { icon: 'news', label: 'News Media', slug: 'news-media', blurb: 'Breaking and general news desks' },
        { icon: 'briefcase', label: 'Business', slug: 'business', blurb: 'Finance, markets & corporate' },
        { icon: 'megaphone', label: 'Press Releases', slug: 'press-release', blurb: 'Official company announcements' },
        { icon: 'cpu', label: 'Technology', slug: 'technology', blurb: 'Product, startup & innovation' },
        { icon: 'heart', label: 'Health', slug: 'health', blurb: 'Healthcare, wellness & biotech' },
        { icon: 'globe', label: 'World', slug: 'world', blurb: 'Regional & international outlets' },
      ],
    },
    testimonials: {
      badge: 'Trusted by communicators',
      title: 'Teams ship announcements with confidence.',
      items: [
        { quote: 'We went from chasing journalists to watching pickups roll in. Distribution that finally feels measurable.', name: 'Priya Menon', role: 'Head of Communications, Northwind' },
        { quote: 'The category targeting put our launch in front of the exact tech desks we wanted. Coverage doubled.', name: 'Daniel Roy', role: 'PR Lead, Vela Labs' },
        { quote: 'Clean dashboard, real numbers, no fluff. Our board finally sees the reach behind every release.', name: 'Amara Okafor', role: 'Founder, BrightCircuit' },
      ],
    },
    intro: {
      badge: 'Why a modern newswire',
      title: 'Built for reach, clarity, and proof of coverage.',
      paragraphs: [
        `${brand} brings distribution, amplification, and measurement into one connected workflow so your announcements travel further with less friction.`,
        'Instead of scattering releases across disconnected inboxes and portals, every story is routed to the right desks, syndicated across partner outlets, and tracked back to verified pickups.',
        'Whether you are launching a product, sharing results, or responding to the moment, your team can move from draft to documented coverage without losing the thread.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Targeted distribution to journalists and newsrooms by category.',
        'Syndication across a vetted network of media outlets.',
        'Live coverage tracking with verified pickups and reach.',
        'A reading-first newsroom that keeps every release on brand.',
      ],
      primaryLink: { label: 'Distribute a release', href: '/create' },
      secondaryLink: { label: 'See coverage', href: '/search' },
    },
    cta: {
      badge: 'Start distributing',
      title: 'Ready to put your next announcement on the wire?',
      description: 'Create a release, choose your channels, and let the network carry it to the outlets and audiences that matter.',
      primaryCta: { label: 'Distribute a release', href: '/create' },
      secondaryCta: { label: 'Talk to our team', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'The newest releases moving across the wire.',
    },
  },
  about: {
    badge: 'Our story',
    title: `${brand} is a modern media distribution network.`,
    description: `${brand} exists to make announcements travel — from a single draft to verified coverage across journalists, newsrooms, and the audiences that matter.`,
    paragraphs: [
      'We started with a simple frustration: great stories were getting buried in crowded inboxes and clunky portals. Distribution should be measurable, targeted, and fast.',
      'Today the platform routes every release to the right desks, syndicates it across a vetted outlet network, and tracks it back to real pickups — so communicators can prove the reach behind their work.',
    ],
    values: [
      { title: 'Reach with intent', description: 'We route releases to the desks that actually cover your category, not a generic blast list.' },
      { title: 'Proof, not promises', description: 'Every distribution is tracked back to verified pickups, audience reach, and engagement.' },
      { title: 'On-brand and clear', description: 'A reading-first newsroom keeps your announcements polished wherever they land.' },
    ],
    stats: [
      { value: '12k+', label: 'Media outlets' },
      { value: '160+', label: 'Countries' },
      { value: '98%', label: 'Delivery rate' },
      { value: '24/7', label: 'Coverage tracking' },
    ],
  },
  contact: {
    eyebrow: `Contact ${brand}`,
    title: 'Tell us about your next announcement.',
    description: 'Launching a product, sharing results, or planning a campaign? Tell us what you want to distribute and we will route it through the right lane — no generic support queue.',
    formTitle: 'Send a message',
  },
  search: {
    metadata: {
      title: 'Search coverage',
      description: 'Search press releases, company news, categories, and media coverage across the newswire.',
    },
    hero: {
      badge: 'Search the newswire',
      title: 'Find releases, companies, and coverage in seconds.',
      description: 'Search by keyword, company, category, or content type to surface announcements and verified coverage from across the network.',
      placeholder: 'Search releases, companies, topics, or coverage',
    },
    resultsTitle: 'Latest across the wire',
  },
  create: {
    metadata: {
      title: 'Distribute a release',
      description: 'Create and distribute a new press release across the media network.',
    },
    locked: {
      badge: 'Newsroom access',
      title: 'Log in to distribute a release.',
      description: 'Sign in to open the publishing workspace, draft your announcement, and send it across the distribution network.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Draft and distribute your announcement.',
      description: 'Choose a channel, add the details, and prepare a clean, on-brand release with headline, summary, media, and body.',
    },
    formTitle: 'Release details',
    submitLabel: 'Send to the wire',
    successTitle: 'Release queued for distribution.',
  },
  auth: {
    login: {
      metadataDescription: `Log in to ${brand}.`,
      badge: 'Member access',
      title: 'Welcome back to the newsroom.',
      description: 'Log in to distribute releases, track coverage, and manage your announcements from one place.',
      formTitle: 'Log in',
      submitLabel: 'Continue',
      noAccount: 'No account matched those details. Create an account first, then log in.',
      success: 'Login successful. Redirecting…',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: `Create your ${brand} account.`,
      badge: 'Create account',
      title: 'Start distributing in minutes.',
      description: 'Create an account to access the publishing workspace, distribute releases, and track your coverage.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting…',
      loginCta: 'Log in',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'More releases',
      fallbackTitle: 'Release details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested releases',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit official site',
    },
  },
} as const
