import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowRight, Radio, Sparkles, Target } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  const about = pagesContent.about
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)]">
        <section className="signal-on-dark relative overflow-hidden bg-[var(--slot4-dark-bg)] text-white">
          <div className="pointer-events-none absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-[var(--slot4-accent)] opacity-30 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-[26rem] w-[26rem] rounded-full bg-[var(--slot4-accent-2)] opacity-20 blur-[120px]" />
          <div className={`relative ${dc.shell.section} py-16 sm:py-20 lg:py-28`}>
            <span className="signal-rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em]"><Radio className="h-4 w-4 text-[var(--slot4-accent-2)]" /> {about.badge}</span>
            <h1 className="signal-rise mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">{about.title}</h1>
            <p className="signal-rise mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">{about.description}</p>
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/10 pt-10 sm:grid-cols-4">
              {about.stats.map((stat) => (
                <div key={stat.label} data-reveal>
                  <p className="text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/55">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${dc.shell.section} ${dc.shell.sectionY}`}>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
            <div data-reveal>
              <p className={`${dc.type.eyebrow} ${pal.accentText}`}>About {SITE_CONFIG.name}</p>
              <p className="editorial-serif mt-5 text-2xl font-semibold leading-[1.35] tracking-[-0.01em] sm:text-3xl">{about.description}</p>
              <div className="article-content mt-8 space-y-6">
                {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
            <aside data-reveal className={`rounded-3xl border ${pal.border} bg-[var(--slot4-accent-soft)] p-7 ${pal.shadow}`}>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--slot4-accent)] text-white"><Target className="h-6 w-6" /></span>
              <h3 className="mt-5 text-xl font-extrabold tracking-[-0.02em]">Our mission</h3>
              <p className={`mt-3 text-sm leading-7 ${pal.mutedText}`}>Make every announcement measurable — from a single draft to verified coverage across the outlets that matter.</p>
              <Link href="/contact" className={`${dc.button.primary} mt-6 w-full`}>Work with us <ArrowRight className="h-4 w-4" /></Link>
            </aside>
          </div>
        </section>

        <section className={pal.warmBg}>
          <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
            <div className="mx-auto max-w-2xl text-center" data-reveal>
              <p className={`${dc.type.eyebrow} ${pal.accentText}`}>What we stand for</p>
              <h2 className={`mt-3 ${dc.type.sectionTitle}`}>Principles behind every release</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {about.values.map((value, index) => (
                <div key={value.title} data-reveal style={{ '--reveal-delay': `${index * 90}ms` } as CSSProperties} className={`rounded-3xl border ${pal.border} ${pal.surfaceBg} p-8 ${pal.shadow} ${dc.motion.lift}`}>
                  <span className="text-sm font-extrabold text-[var(--slot4-accent)]">0{index + 1}</span>
                  <h3 className="mt-4 text-xl font-extrabold tracking-[-0.02em]">{value.title}</h3>
                  <p className={`mt-3 text-sm leading-7 ${pal.mutedText}`}>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${pal.warmBg} pb-20`}>
          <div className={dc.shell.section}>
            <div className="signal-on-dark relative overflow-hidden rounded-[2rem] bg-[var(--slot4-dark-bg)] px-6 py-14 text-white sm:px-12 lg:px-16" data-reveal>
              <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[var(--slot4-accent)] opacity-40 blur-[90px]" />
              <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-4xl">See what teams are distributing across the wire.</h2>
                <div className="flex flex-wrap gap-3">
                  <Link href="/search" className="inline-flex items-center gap-2 rounded-full bg-[var(--slot4-accent-2)] px-7 py-3.5 text-sm font-bold text-[var(--slot4-dark-bg)] transition hover:-translate-y-0.5">Explore coverage <ArrowRight className="h-4 w-4" /></Link>
                  <Link href="/create" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"><Sparkles className="h-4 w-4" /> Distribute now</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
