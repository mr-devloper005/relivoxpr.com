'use client'

import { Clock, FileText, Mail, MapPin, Megaphone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'

const desks = [
  { icon: Megaphone, title: 'Distribution & PR', body: 'Plan a launch, schedule a release, or discuss targeted media campaigns.' },
  { icon: FileText, title: 'Newsroom desk', body: 'Story ideas, corrections, embargoes, and coverage questions.' },
  { icon: Mail, title: 'General support', body: 'Account help, billing, and anything else about the platform.' },
]

const facts = [
  { icon: Clock, label: 'Avg. response', value: 'Under 4 hours' },
  { icon: MapPin, label: 'Coverage', value: '160+ countries' },
]

export default function ContactPage() {
  const contact = pagesContent.contact
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)]">
        <section className={`${dc.shell.section} py-14 sm:py-16 lg:py-20`}>
          <div className="max-w-3xl" data-reveal>
            <p className={`${dc.type.eyebrow} ${pal.accentText}`}>{contact.eyebrow}</p>
            <h1 className={`mt-4 ${dc.type.heroTitle}`}>{contact.title}</h1>
            <p className={`mt-5 max-w-2xl text-base leading-8 ${pal.mutedText} sm:text-lg`}>{contact.description}</p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <aside className="grid gap-4" data-reveal>
              {desks.map((desk) => (
                <div key={desk.title} className={`flex gap-4 rounded-3xl border ${pal.border} ${pal.surfaceBg} p-6 ${pal.shadow} ${dc.motion.lift}`}>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--slot4-accent-soft)] text-[var(--slot4-accent)]"><desk.icon className="h-5 w-5" /></span>
                  <div>
                    <h2 className="text-lg font-extrabold tracking-[-0.01em]">{desk.title}</h2>
                    <p className={`mt-1.5 text-sm leading-7 ${pal.mutedText}`}>{desk.body}</p>
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-2 gap-4">
                {facts.map((fact) => (
                  <div key={fact.label} className={`rounded-3xl border ${pal.border} bg-[var(--slot4-accent-soft)] p-5`}>
                    <fact.icon className="h-5 w-5 text-[var(--slot4-accent)]" />
                    <p className="mt-3 text-lg font-extrabold tracking-[-0.02em]">{fact.value}</p>
                    <p className={`text-xs font-semibold uppercase tracking-[0.1em] ${pal.softMutedText}`}>{fact.label}</p>
                  </div>
                ))}
              </div>
            </aside>

            <div className={`rounded-[2rem] border ${pal.border} ${pal.surfaceBg} p-6 ${pal.shadowStrong} sm:p-9`} data-reveal>
              <p className={`${dc.type.eyebrow} ${pal.accentText}`}>{contact.formTitle}</p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.02em]">Let&apos;s get your story moving</h2>
              <EditableContactLeadForm />
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
