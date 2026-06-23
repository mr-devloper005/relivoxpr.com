import type { Metadata } from 'next'
import Link from 'next/link'
import { Radio, Sparkles } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

const steps = [
  { title: 'Create your account', body: 'Set up access to the publishing workspace in under a minute.' },
  { title: 'Draft your release', body: 'Add your headline, summary, media, and body — kept clean and on brand.' },
  { title: 'Send it to the wire', body: 'Target the right desks and watch verified coverage roll in.' },
]

export default function SignupPage() {
  const copy = pagesContent.auth.signup
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)]">
        <section className="mx-auto w-full max-w-[var(--editable-container)] px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid overflow-hidden rounded-[2rem] border border-[var(--editable-border)] bg-white shadow-[0_30px_80px_rgba(26,26,15,0.12)] lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--slot4-accent)]">{copy.badge}</p>
              <h1 className="mt-2 text-3xl font-extrabold tracking-[-0.02em]">{copy.formTitle}</h1>
              <EditableLocalSignupForm />
              <p className="mt-6 border-t border-[var(--editable-border)] pt-6 text-sm text-[var(--slot4-muted-text)]">Already have an account? <Link href="/login" className="font-bold text-[var(--slot4-accent)] underline-offset-4 hover:underline">{copy.loginCta}</Link></p>
            </div>
            <div className="signal-on-dark relative flex flex-col justify-center overflow-hidden bg-[var(--slot4-dark-bg)] p-8 text-white sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute -right-24 -top-16 h-72 w-72 rounded-full bg-[var(--slot4-accent-2)] opacity-30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-[var(--slot4-accent)] opacity-40 blur-3xl" />
              <div className="relative signal-rise">
                <span className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em]"><Radio className="h-4 w-4 text-[var(--slot4-accent-2)]" /> {SITE_CONFIG.name}</span>
                <h2 className="mt-6 max-w-md text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">{copy.title}</h2>
                <p className="mt-5 max-w-md text-base leading-8 text-white/70">{copy.description}</p>
                <ol className="mt-8 grid gap-5">
                  {steps.map((step, index) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-extrabold text-[var(--slot4-accent-2)]">{index + 1}</span>
                      <div>
                        <p className="text-sm font-extrabold">{step.title}</p>
                        <p className="mt-1 text-sm leading-6 text-white/65">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="mt-8 inline-flex items-center gap-2 text-xs font-semibold text-white/50"><Sparkles className="h-4 w-4" /> No credit card required to start.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
