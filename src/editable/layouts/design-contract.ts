import type { CSSProperties } from 'react'

/**
 * Slot 4 editable design system — "Rally" theme (padelthon-inspired).
 * Editorial, sporty media-distribution UI: warm cream canvas, near-black ink,
 * a signature electric-lime highlight and a deep cobalt-blue feature accent.
 * Tokens flow through every editable page, so the whole site re-skins from here.
 */
export const editableRootStyle = {
  // contained, non-stretched layout width + hairline border (were undefined → full-bleed pages)
  '--editable-container': '1200px',
  '--editable-border': 'rgba(26,26,23,0.14)',
  '--editable-page-bg': '#f4f3ea',
  '--editable-page-text': '#1a1a17',

  '--slot4-page-bg': '#f4f3ea',
  '--slot4-page-text': '#1a1a17',
  '--slot4-panel-bg': '#eae6d9',
  '--slot4-surface-bg': '#fbfaf3',
  '--slot4-muted-text': '#56554c',
  '--slot4-soft-muted-text': '#7c7b6f',
  '--slot4-accent': '#0d1991',
  '--slot4-accent-fill': '#0d1991',
  '--slot4-accent-strong': '#0a1270',
  '--slot4-accent-soft': '#dcdffa',
  '--slot4-accent-2': '#d1f44b',
  '--slot4-accent-2-soft': '#edf9c2',
  '--slot4-dark-bg': '#16160f',
  '--slot4-dark-text': '#ffffff',
  '--slot4-media-bg': '#e6e3d6',
  '--slot4-cream': '#f4f3ea',
  '--slot4-warm': '#fbfaf3',
  '--slot4-lavender': '#0d1991',
  '--slot4-gray': '#eae6d9',
  '--slot4-ring': 'rgba(13,25,145,0.16)',
  '--slot4-blue': '#0d1991',
  '--slot4-hero-gradient': 'linear-gradient(135deg, #0d1991 0%, #2b39c8 48%, #d1f44b 130%)',
  '--slot4-body-gradient': 'linear-gradient(180deg, #f4f3ea 0%, #f4f3ea 60%, #efeddf 100%)',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  accent2Text: 'text-[var(--slot4-accent-2)]',
  accent2Bg: 'bg-[var(--slot4-accent-2)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-[var(--editable-border)]',
  darkBorder: 'border-white/15',
  shadow: 'shadow-[0_14px_40px_rgba(26,26,15,0.08)]',
  shadowStrong: 'shadow-[0_30px_80px_rgba(26,26,15,0.16)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(20,20,12,0.04),rgba(20,20,12,0.82))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-[var(--editable-container)] px-4 sm:px-6 lg:px-8',
    sectionY: 'py-14 sm:py-20 lg:py-24',
  },
  layout: {
    safeGrid: 'grid gap-6 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start',
    rail: 'flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    minRailCard: 'w-[280px] shrink-0 snap-start sm:w-[320px]',
  },
  type: {
    eyebrow: 'text-[11px] font-extrabold uppercase tracking-[0.24em]',
    heroTitle: 'text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl',
    sectionTitle: 'text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-4xl',
    body: 'text-base leading-8',
  },
  surface: {
    card: `rounded-3xl border ${editablePalette.border} ${editablePalette.surfaceBg} ${editablePalette.shadow}`,
    soft: `rounded-3xl border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    dark: `rounded-3xl ${editablePalette.darkBg} ${editablePalette.darkText}`,
  },
  button: {
    primary: `inline-flex items-center justify-center gap-2 rounded-full bg-[var(--slot4-accent-fill)] px-7 py-3.5 text-sm font-bold tracking-[0.01em] text-white shadow-[0_12px_30px_rgba(13,25,145,0.28)] transition hover:-translate-y-0.5 hover:bg-[var(--slot4-accent-strong)]`,
    secondary: `inline-flex items-center justify-center gap-2 rounded-full border border-[var(--editable-border)] bg-white px-7 py-3.5 text-sm font-bold tracking-[0.01em] text-[var(--slot4-page-text)] transition hover:-translate-y-0.5 hover:border-[var(--slot4-accent)] hover:text-[var(--slot4-accent)]`,
    accent: `inline-flex items-center justify-center gap-2 rounded-full bg-[var(--slot4-accent-2)] px-7 py-3.5 text-sm font-bold tracking-[0.01em] text-[var(--slot4-dark-bg)] shadow-[0_12px_30px_rgba(150,200,20,0.28)] transition hover:-translate-y-0.5 hover:brightness-95`,
  },
  media: {
    frame: `relative overflow-hidden rounded-2xl ${editablePalette.mediaBg}`,
    ratio: 'aspect-[4/3]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(26,26,15,0.16)]',
    fade: 'transition duration-300 hover:opacity-80',
  },
} as const

export const aiLayoutRules = [
  'All visible layout decisions belong inside src/editable; keep data, SEO, API, and route logic untouched.',
  'Use the padelthon-inspired Rally theme: a warm cream canvas, near-black editorial type, an electric-lime highlight and a deep cobalt-blue feature accent; big bold headlines with italic-serif accents and pill buttons.',
  'Keep dynamic post fetching intact and never replace backend posts with mock arrays.',
  'Use postHref() for all post links so route aliases and task-specific detail pages remain functional.',
  'Constrain content to --editable-container so pages never look stretched; lead with clear hierarchy and generous spacing.',
  'Branding must remain dynamic from SITE_CONFIG; never hardcode a reference brand name or logo.',
] as const
