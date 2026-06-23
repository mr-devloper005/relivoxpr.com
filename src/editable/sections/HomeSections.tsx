import Link from 'next/link'
import type { CSSProperties } from 'react'
import {
  ArrowRight, ArrowUpRight, BarChart3, Briefcase, Cpu, Globe2, Heart, Megaphone,
  Newspaper, Quote, Send, Sparkles, Star, TrendingUp,
} from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'
import { CompactIndexCard, getEditableExcerpt, postHref, RailPostCard } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const featureIcons = { send: Send, megaphone: Megaphone, chart: BarChart3 } as const
const categoryIcons = { news: Newspaper, briefcase: Briefcase, megaphone: Megaphone, cpu: Cpu, heart: Heart, globe: Globe2 } as const

function delay(index: number): CSSProperties {
  return { '--reveal-delay': `${(index % 4) * 90}ms` } as CSSProperties
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const hero = pagesContent.home.hero
  const ticker = posts.slice(0, 6)

  return (
    <section className={`rally-guides relative overflow-hidden ${pal.pageBg} ${pal.pageText}`}>
      <div className="pointer-events-none absolute -right-40 -top-44 h-[34rem] w-[34rem] rounded-full bg-[var(--slot4-accent-2)] opacity-30 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-48 -left-32 h-[30rem] w-[30rem] rounded-full bg-[var(--slot4-accent)] opacity-10 blur-[130px]" />
      <div className={`relative ${dc.shell.section} pb-12 pt-16 text-center sm:pt-20 lg:pb-16 lg:pt-28`}>
        <div className="signal-rise mx-auto max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--slot4-accent-2)] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--slot4-page-text)]">
            <Sparkles className="h-3.5 w-3.5" /> {hero.badge}
          </span>
          <h1 className="mt-7 text-balance text-[2.6rem] font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            <span className="editorial-italic block font-medium tracking-[-0.01em] text-[var(--slot4-accent)]">{hero.title[0]}</span>
            <span className="mt-1 block">{hero.title.slice(1).join(' ')}</span>
          </h1>
          <p className={`mx-auto mt-6 max-w-2xl text-base leading-8 sm:text-lg ${pal.mutedText}`}>{hero.description}</p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href={hero.primaryCta.href} className="inline-flex items-center gap-2 rounded-full bg-[var(--slot4-accent-2)] px-7 py-3.5 text-sm font-bold text-[var(--slot4-page-text)] shadow-[0_14px_34px_rgba(150,200,20,0.4)] transition hover:-translate-y-0.5">
              {hero.primaryCta.label} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={hero.secondaryCta.href} className="inline-flex items-center gap-2 rounded-full border border-[var(--editable-border)] bg-[var(--slot4-surface-bg)] px-7 py-3.5 text-sm font-bold text-[var(--slot4-page-text)] transition hover:-translate-y-0.5 hover:border-[var(--slot4-accent)] hover:text-[var(--slot4-accent)]">
              {hero.secondaryCta.label} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {ticker.length ? (
          <div className="signal-rise mt-12 flex items-center gap-3 overflow-x-auto pb-2 text-left [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" style={{ animationDelay: '120ms' }}>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--slot4-accent)] px-3.5 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--slot4-accent-2)] opacity-80" /><span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--slot4-accent-2)]" /></span>
              {hero.focusLabel}
            </span>
            {ticker.map((post) => (
              <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group inline-flex shrink-0 max-w-[280px] items-center gap-2 rounded-full border border-[var(--editable-border)] bg-[var(--slot4-surface-bg)] px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5 hover:border-[var(--slot4-accent)]">
                <span className="truncate">{post.title}</span>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-[var(--slot4-accent)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        ) : null}

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[var(--editable-border)] bg-[var(--editable-border)] sm:grid-cols-4">
          {hero.stats.map((stat, index) => (
            <div key={stat.label} data-reveal style={delay(index)} className="bg-[var(--slot4-surface-bg)] px-5 py-7 text-center">
              <p className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">{stat.value}</p>
              <p className={`mt-1 text-xs font-semibold uppercase tracking-[0.12em] ${pal.softMutedText}`}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = (posts.slice(0, 8).length ? posts.slice(0, 8) : posts).slice(0, 8)
  if (!railPosts.length) return null
  return (
    <section className={pal.pageBg}>
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="flex items-end justify-between gap-6" data-reveal>
          <div>
            <p className={`${dc.type.eyebrow} ${pal.accentText} flex items-center gap-2`}><TrendingUp className="h-4 w-4" /> Latest on the wire</p>
            <h2 className={`mt-3 ${dc.type.sectionTitle}`}>Freshly distributed releases</h2>
          </div>
          <Link href={primaryRoute} className="hidden items-center gap-2 text-sm font-bold text-[var(--slot4-accent)] transition hover:gap-3 sm:inline-flex">View all <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {railPosts.map((post, index) => <RailPostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryRoute }: HomeSectionProps) {
  const features = pagesContent.home.features
  const categories = pagesContent.home.categories
  return (
    <section className={pal.pageBg}>
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="signal-on-dark relative overflow-hidden rounded-[2.5rem] bg-[var(--slot4-blue)] px-6 py-14 text-white sm:px-10 lg:px-14 lg:py-20" data-reveal>
          <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[var(--slot4-accent-2)] opacity-25 blur-[110px]" />
          <div className="relative mx-auto max-w-2xl text-center">
            <p className={`${dc.type.eyebrow} text-[var(--slot4-accent-2)]`}>{features.badge}</p>
            <h2 className={`mt-3 ${dc.type.sectionTitle}`}>{features.title}</h2>
            <p className="mt-4 text-base leading-8 text-white/75">{features.description}</p>
          </div>

          <div className="relative mt-12 grid gap-5 md:grid-cols-3">
            {features.items.map((item, index) => {
              const Icon = featureIcons[item.icon as keyof typeof featureIcons] || Send
              return (
                <div key={item.title} data-reveal style={delay(index)} className="group rounded-3xl border border-white/15 bg-white/[0.06] p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:bg-white/[0.1]">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--slot4-accent-2)] text-[var(--slot4-page-text)] transition group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="editorial-italic text-3xl text-white/25">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold tracking-[-0.02em]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-end justify-between gap-6" data-reveal>
            <div>
              <p className={`${dc.type.eyebrow} ${pal.accentText}`}>{categories.badge}</p>
              <h2 className={`mt-3 ${dc.type.sectionTitle}`}>{categories.title}</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.items.map((item, index) => {
              const Icon = categoryIcons[item.icon as keyof typeof categoryIcons] || Newspaper
              return (
                <Link key={item.slug} href={`${primaryRoute}?category=${item.slug}`} data-reveal style={delay(index)} className={`group flex items-center gap-4 rounded-2xl border ${pal.border} ${pal.surfaceBg} p-5 ${dc.motion.lift}`}>
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--slot4-accent-soft)] text-[var(--slot4-accent)] transition group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-extrabold tracking-[-0.01em] transition group-hover:text-[var(--slot4-accent)]">{item.label}</span>
                    <span className={`block text-xs ${pal.softMutedText}`}>{item.blurb}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[var(--slot4-soft-muted-text)] transition group-hover:text-[var(--slot4-accent)]" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = collected.length ? collected : posts.slice(3)
  const lead = source[0] || posts[0]
  const briefs = source.slice(1, 7)
  const testimonials = pagesContent.home.testimonials

  return (
    <section className={pal.pageBg}>
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        {lead ? (
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div data-reveal>
              <p className={`${dc.type.eyebrow} ${pal.accentText}`}>Editor&apos;s pick</p>
              <Link href={postHref(primaryTask, lead, primaryRoute)} className={`signal-on-dark group mt-4 block overflow-hidden rounded-3xl bg-[var(--slot4-dark-bg)] p-8 text-white sm:p-10 ${dc.motion.lift}`}>
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/80">{(lead.content as Record<string, unknown>)?.category as string || 'Featured release'}</span>
                <h3 className="mt-6 text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-4xl">{lead.title}</h3>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">{getEditableExcerpt(lead, 220)}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold">Read the release <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
              </Link>
            </div>
            <aside data-reveal>
              <p className={`${dc.type.eyebrow} ${pal.accentText}`}>The briefing</p>
              <h3 className={`mt-3 text-2xl font-extrabold tracking-[-0.02em]`}>Quick reads</h3>
              <div className={`mt-4 rounded-3xl border ${pal.border} ${pal.surfaceBg} p-3 ${pal.shadow}`}>
                {briefs.length ? briefs.map((post, index) => (
                  <CompactIndexCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
                )) : <p className={`px-3 py-8 text-center text-sm ${pal.softMutedText}`}>More releases are on the way.</p>}
              </div>
            </aside>
          </div>
        ) : null}

        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center" data-reveal>
            <p className={`${dc.type.eyebrow} ${pal.accentText}`}>{testimonials.badge}</p>
            <h2 className={`mt-3 ${dc.type.sectionTitle}`}>{testimonials.title}</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.items.map((item, index) => (
              <figure key={item.name} data-reveal style={delay(index)} className={`flex flex-col rounded-3xl border ${pal.border} ${pal.surfaceBg} p-7 ${pal.shadow}`}>
                <Quote className="h-8 w-8 text-[var(--slot4-accent)]" />
                <blockquote className="mt-4 flex-1 text-base leading-7 text-[var(--slot4-page-text)]">“{item.quote}”</blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-[var(--editable-border)] pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--slot4-accent-soft)] text-sm font-extrabold text-[var(--slot4-accent-strong)]">{item.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}</span>
                  <div className="min-w-0">
                    <figcaption className="truncate text-sm font-extrabold">{item.name}</figcaption>
                    <p className={`truncate text-xs ${pal.softMutedText}`}>{item.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5 text-[var(--slot4-accent-2)]">{Array.from({ length: 5 }).map((_, starIndex) => <Star key={starIndex} className="h-3.5 w-3.5 fill-current" />)}</div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  const cta = pagesContent.home.cta
  return (
    <section className={`${pal.warmBg} pb-20`}>
      <div className={dc.shell.section}>
        <div className="signal-on-dark relative overflow-hidden rounded-[2rem] bg-[var(--slot4-dark-bg)] px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-20" data-reveal>
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[var(--slot4-accent)] opacity-40 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[var(--slot4-accent-2)] opacity-30 blur-[90px]" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--slot4-accent-2)]">{cta.badge}</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-4xl lg:text-5xl">{cta.title}</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/70">{cta.description}</p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Link href={cta.primaryCta.href} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--slot4-accent-2)] px-7 py-4 text-sm font-bold text-[var(--slot4-dark-bg)] shadow-[0_14px_34px_rgba(150,200,20,0.3)] transition hover:-translate-y-0.5 lg:w-auto">{cta.primaryCta.label} <ArrowRight className="h-4 w-4" /></Link>
              <Link href={cta.secondaryCta.href} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10 lg:w-auto">{cta.secondaryCta.label}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
