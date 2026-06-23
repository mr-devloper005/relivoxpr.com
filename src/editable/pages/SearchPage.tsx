import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Filter, Search, SlidersHorizontal } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { fetchSiteFeed } from '@/lib/site-connector'
import { buildPostUrl, getPostTaskKey } from '@/lib/task-data'
import { getMockPostsForTask } from '@/lib/mock-posts'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import type { SitePost } from '@/lib/site-connector'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'

export const revalidate = 3

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/search',
    title: pagesContent.search.metadata.title,
    description: pagesContent.search.metadata.description,
  })
}

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, ' ')
const compactText = (value: unknown) => typeof value === 'string' ? stripHtml(value).replace(/\s+/g, ' ').trim().toLowerCase() : ''
const getContent = (post: SitePost) => post.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
const compactRaw = (value: unknown) => typeof value === 'string' ? value.trim() : ''
const summaryOf = (post: SitePost) => post.summary || compactRaw(getContent(post).description) || compactRaw(getContent(post).excerpt) || ''
const categoryOf = (post: SitePost) => compactRaw(getContent(post).category) || post.tags?.[0] || 'Newswire'

const matches = (post: SitePost, query: string, category: string, task: string) => {
  const content = getContent(post)
  const typeText = compactText(content.type)
  if (typeText === 'comment') return false
  const derivedTask = getPostTaskKey(post) || typeText
  if (task && derivedTask !== task) return false
  const categoryText = compactText(content.category)
  const tagsText = compactText(Array.isArray(post.tags) ? post.tags.join(' ') : '')
  if (category && !(categoryText || tagsText).includes(category)) return false
  if (!query) return true
  return [post.title, post.summary, content.description, content.body, content.excerpt, content.category, Array.isArray(post.tags) ? post.tags.join(' ') : '']
    .some((value) => compactText(value).includes(query))
}

function SearchResultCard({ post, index }: { post: SitePost; index: number }) {
  const task = getPostTaskKey(post) as TaskKey | null
  const href = task ? buildPostUrl(task, post.slug) : `/media-distribution/${post.slug}`
  const summary = summaryOf(post)
  const taskLabel = SITE_CONFIG.tasks.find((item) => item.key === task)?.label || 'Post'

  return (
    <Link href={href} data-reveal style={{ '--reveal-delay': `${(index % 3) * 80}ms` } as CSSProperties} className={`group flex flex-col rounded-3xl border ${pal.border} ${pal.surfaceBg} p-6 ${pal.shadow} ${dc.motion.lift}`}>
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center rounded-full bg-[var(--slot4-accent-soft)] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[var(--slot4-accent-strong)]">{taskLabel}</span>
        <span className={`text-[11px] font-extrabold uppercase tracking-[0.12em] ${pal.softMutedText}`}>{categoryOf(post)}</span>
      </div>
      <h2 className="mt-4 line-clamp-3 text-xl font-extrabold leading-snug tracking-[-0.02em] transition group-hover:text-[var(--slot4-accent)]">{post.title}</h2>
      {summary ? <p className={`mt-3 line-clamp-3 flex-1 text-sm leading-7 ${pal.mutedText}`}>{summary}</p> : <span className="flex-1" />}
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--slot4-accent)]">Open result <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
    </Link>
  )
}

export default async function SearchPage({ searchParams }: { searchParams?: Promise<{ q?: string; category?: string; task?: string; master?: string }> }) {
  const resolved = (await searchParams) || {}
  const query = (resolved.q || '').trim()
  const normalized = query.toLowerCase()
  const category = (resolved.category || '').trim().toLowerCase()
  const task = (resolved.task || '').trim().toLowerCase()
  const useMaster = resolved.master !== '0'
  const feed = await fetchSiteFeed(useMaster ? 1000 : 300, useMaster ? { fresh: true, category: category || undefined, task: task || undefined } : undefined)
  const posts = feed?.posts?.length ? feed.posts : useMaster ? [] : SITE_CONFIG.tasks.filter((item) => item.enabled).flatMap((item) => getMockPostsForTask(item.key))
  const results = posts.filter((post) => matches(post, normalized, category, task)).slice(0, normalized ? 80 : 36)
  const enabledTasks = SITE_CONFIG.tasks.filter((item) => item.enabled)
  const hero = pagesContent.search.hero

  return (
    <EditableSiteShell>
      <main className="min-h-screen bg-[var(--slot4-page-bg)]">
        <section className="signal-on-dark relative overflow-hidden bg-[var(--slot4-dark-bg)] text-white">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[var(--slot4-accent)] opacity-30 blur-[110px]" />
          <div className={`relative ${dc.shell.section} py-14 sm:py-16 lg:py-20`}>
            <span className="signal-rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em]"><Search className="h-4 w-4 text-[var(--slot4-accent-2)]" /> {hero.badge}</span>
            <h1 className="signal-rise mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">{hero.title}</h1>
            <p className="signal-rise mt-5 max-w-2xl text-base leading-8 text-white/70">{hero.description}</p>

            <form action="/search" className="mt-8 rounded-3xl border border-white/12 bg-white/[0.06] p-3 backdrop-blur sm:p-4">
              <input type="hidden" name="master" value="1" />
              <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2.5">
                <Search className="h-5 w-5 text-white/55" />
                <input name="q" defaultValue={query} placeholder={hero.placeholder} className="min-w-0 flex-1 bg-transparent text-base font-semibold text-white outline-none placeholder:text-white/45" />
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
                <label className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2.5">
                  <Filter className="h-4 w-4 text-white/50" />
                  <input name="category" defaultValue={category} placeholder="Category" className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-white outline-none placeholder:text-white/45" />
                </label>
                <label className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2.5">
                  <SlidersHorizontal className="h-4 w-4 text-white/50" />
                  <select name="task" defaultValue={task} className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-white outline-none [&>option]:text-black">
                    <option value="">All content types</option>
                    {enabledTasks.map((item) => <option key={item.key} value={item.key}>{item.label}</option>)}
                  </select>
                </label>
                <button className="rounded-2xl bg-[var(--slot4-accent-2)] px-7 py-3 text-sm font-bold text-[var(--slot4-dark-bg)] transition hover:-translate-y-0.5" type="submit">Search</button>
              </div>
            </form>
          </div>
        </section>

        <section className={`${dc.shell.section} ${dc.shell.sectionY}`}>
          <div className="flex flex-wrap items-end justify-between gap-4" data-reveal>
            <div>
              <p className={`${dc.type.eyebrow} ${pal.softMutedText}`}>{results.length} results</p>
              <h2 className={`mt-2 ${dc.type.sectionTitle}`}>{query ? `Results for “${query}”` : pagesContent.search.resultsTitle}</h2>
            </div>
            <Link href="/" className={dc.button.secondary}>Back to home</Link>
          </div>

          {results.length ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((post, index) => <SearchResultCard key={post.id || post.slug} post={post} index={index} />)}
            </div>
          ) : (
            <div className={`mt-8 rounded-3xl border border-dashed ${pal.border} ${pal.surfaceBg} p-12 text-center`}>
              <Search className="mx-auto h-8 w-8 text-[var(--slot4-accent)]" />
              <p className="mt-4 text-2xl font-extrabold tracking-[-0.02em]">No matching coverage found.</p>
              <p className={`mt-2 text-sm ${pal.mutedText}`}>Try a different keyword, content type, or category.</p>
            </div>
          )}
        </section>
      </main>
    </EditableSiteShell>
  )
}
