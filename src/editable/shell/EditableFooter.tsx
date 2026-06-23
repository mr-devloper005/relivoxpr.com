'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()
  const columns = globalContent.footer?.columns || []

  return (
    <footer className="signal-on-dark mt-auto bg-[var(--slot4-dark-bg)] text-white">
      <div className="mx-auto w-full max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_.7fr_.7fr_.9fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--slot4-accent)] text-white"><img src="/favicon.ico" alt="Logo" className="h-10 w-10" /></span>
              <span className="editorial-brand text-2xl font-extrabold">{SITE_CONFIG.name}</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">{globalContent.footer?.description || SITE_CONFIG.description}</p>
            <form action="/signup" className="mt-7 flex max-w-sm overflow-hidden rounded-full border border-white/15 bg-white/5 p-1">
              <input name="email" type="email" placeholder="Email for distribution updates" className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/40" />
              <button className="rounded-full bg-[var(--slot4-accent-2)] px-5 py-2.5 text-sm font-bold text-[var(--slot4-dark-bg)] transition hover:brightness-95">Join</button>
            </form>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/45">{column.title}</h3>
              <div className="mt-5 grid gap-3">
                {column.links.map((link) => (
                  <Link key={`${column.title}-${link.href}-${link.label}`} href={link.href} className="text-sm font-semibold text-white/75 transition hover:text-[var(--slot4-accent-2)]">{link.label}</Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/45">Account</h3>
            <div className="mt-5 grid gap-3">
              {session ? (
                <>
                  <Link href="/create" className="group inline-flex items-center justify-between text-sm font-semibold text-white/75 transition hover:text-[var(--slot4-accent-2)]">Publish<ArrowRight className="h-4 w-4" /></Link>
                  <button onClick={logout} className="inline-flex items-center justify-between text-left text-sm font-semibold text-white/75 transition hover:text-[var(--slot4-accent-2)]">Logout<ArrowRight className="h-4 w-4" /></button>
                </>
              ) : (
                <>
                  <Link href="/login" className="group inline-flex items-center justify-between text-sm font-semibold text-white/75 transition hover:text-[var(--slot4-accent-2)]">Log in<ArrowRight className="h-4 w-4" /></Link>
                  <Link href="/signup" className="group inline-flex items-center justify-between text-sm font-semibold text-white/75 transition hover:text-[var(--slot4-accent-2)]">Get started<ArrowRight className="h-4 w-4" /></Link>
                </>
              )}
              <Link href="/contact" className="group inline-flex items-center justify-between text-sm font-semibold text-white/75 transition hover:text-[var(--slot4-accent-2)]">Contact<ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[var(--editable-container)] flex-col items-center justify-between gap-3 px-4 py-6 text-xs font-semibold text-white/45 sm:flex-row sm:px-6 lg:px-8">
          <span>© {year} {SITE_CONFIG.name}. {globalContent.footer?.bottomNote}</span>
          <span className="text-white/35">{globalContent.site?.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
