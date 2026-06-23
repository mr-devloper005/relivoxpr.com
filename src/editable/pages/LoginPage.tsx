import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Radio } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Log in', description: pagesContent.auth.login.metadataDescription })
}

const perks = ['Distribute to 12k+ outlets', 'Live coverage tracking', 'Category-targeted reach']

export default function LoginPage() {
  const copy = pagesContent.auth.login
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)]">
        <section className="mx-auto w-full max-w-[var(--editable-container)] px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid overflow-hidden rounded-[2rem] border border-[var(--editable-border)] bg-white shadow-[0_30px_80px_rgba(26,26,15,0.12)] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="signal-on-dark relative flex flex-col justify-center overflow-hidden bg-[var(--slot4-dark-bg)] p-8 text-white sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--slot4-accent)] opacity-40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-[var(--slot4-accent-2)] opacity-30 blur-3xl" />
              <div className="relative signal-rise">
                <span className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em]"><Radio className="h-4 w-4 text-[var(--slot4-accent-2)]" /> {copy.badge}</span>
                <h1 className="mt-6 max-w-md text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">{copy.title}</h1>
                <p className="mt-5 max-w-md text-base leading-8 text-white/70">{copy.description}</p>
                <ul className="mt-8 grid gap-3">
                  {perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-3 text-sm font-semibold text-white/85"><CheckCircle2 className="h-5 w-5 text-[var(--slot4-accent-2)]" /> {perk}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--slot4-accent)]">{SITE_CONFIG.name}</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.02em]">{copy.formTitle}</h2>
              <EditableLocalLoginForm />
              <p className="mt-6 border-t border-[var(--editable-border)] pt-6 text-sm text-[var(--slot4-muted-text)]">New here? <Link href="/signup" className="font-bold text-[var(--slot4-accent)] underline-offset-4 hover:underline">{copy.createCta}</Link></p>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
