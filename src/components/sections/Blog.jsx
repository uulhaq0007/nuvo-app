import { Cross } from '../ui/Decor'
import Reveal from '../ui/Reveal'
import { posts } from '../../data/app'

export default function Blog() {
  return (
    <section id="blog" className="section relative overflow-hidden">
      <Cross className="right-[7%] bottom-[22%] h-7 w-7" />

      <div className="container relative">
        <div className="text-center">
          <Reveal>
            <h2 className="sec-title">From The Nuvo Journal</h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="sec-lead">
              Research notes, security explainers and design decisions — written by the people who actually built the
              thing.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 120} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-soft">
                <a
                  href="#blog"
                  onClick={(e) => e.preventDefault()}
                  className="relative block overflow-hidden"
                  aria-label={post.title}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </a>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-brand-grad px-4 py-1 text-[12px] font-semibold text-white">
                      {post.date}
                    </span>
                    <span className="rounded-full bg-haze px-3 py-1 text-[12px] font-medium text-grape">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-[19px] font-bold leading-snug">
                    <a
                      href="#blog"
                      onClick={(e) => e.preventDefault()}
                      className="text-ink transition-colors duration-300 group-hover:text-brand"
                    >
                      {post.title}
                    </a>
                  </h3>

                  <p className="mt-3 flex-1 text-[15px]">{post.excerpt}</p>

                  <div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="h-10 w-10 rounded-full object-cover"
                      loading="lazy"
                    />
                    <span>
                      <span className="block font-display text-[14px] font-semibold text-ink">{post.author}</span>
                      <span className="block text-[12px]">{post.role}</span>
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
