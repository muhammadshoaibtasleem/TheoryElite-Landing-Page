import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog — Theory Elite",
  description:
    "Study tips, exam strategies, and business knowledge to help you ace your exams. From the team behind Theory Elite.",
};

const posts = [
  {
    slug: "why-gamified-learning-works",
    title: "Why Gamified Learning Works: The Science Behind Theory Elite",
    excerpt:
      "Research shows gamification increases retention by up to 40%. Here's how Theory Elite uses streaks, XP, and battles to make studying stick.",
    category: "Learning Science",
    date: "Feb 15, 2026",
    readTime: "5 min read",
    color: "from-purple-primary/20 to-purple-primary/5",
    border: "border-purple-primary/20",
  },
  {
    slug: "top-10-marketing-concepts",
    title: "Top 10 Marketing Concepts Every Business Student Must Know",
    excerpt:
      "From the 4Ps to brand equity, these are the foundational marketing concepts that appear in every exam. Quiz yourself after reading.",
    category: "Marketing",
    date: "Feb 10, 2026",
    readTime: "7 min read",
    color: "from-blue-primary/20 to-blue-primary/5",
    border: "border-blue-primary/20",
  },
  {
    slug: "how-to-study-for-mba-exams",
    title: "How to Study for MBA Exams: A Complete Guide",
    excerpt:
      "Stop re-reading textbooks. Active recall, spaced repetition, and practice testing are proven to work better. Here's your study plan.",
    category: "Study Tips",
    date: "Feb 5, 2026",
    readTime: "8 min read",
    color: "from-green-500/20 to-green-500/5",
    border: "border-green-500/20",
  },
  {
    slug: "quiz-battles-vs-solo-study",
    title: "Quiz Battles vs Solo Study: Which Is More Effective?",
    excerpt:
      "Competitive learning activates different parts of the brain. We break down when to battle and when to study solo for maximum results.",
    category: "Learning Science",
    date: "Jan 28, 2026",
    readTime: "4 min read",
    color: "from-gold-primary/20 to-gold-primary/5",
    border: "border-gold-primary/20",
  },
  {
    slug: "consumer-behavior-cheat-sheet",
    title: "Consumer Behavior Cheat Sheet: Key Models & Theories",
    excerpt:
      "Maslow's hierarchy, the buyer decision process, cognitive dissonance — all the consumer behavior models summarized in one place.",
    category: "Consumer Behavior",
    date: "Jan 20, 2026",
    readTime: "6 min read",
    color: "from-pink-500/20 to-pink-500/5",
    border: "border-pink-500/20",
  },
  {
    slug: "building-study-streak",
    title: "How to Build a 30-Day Study Streak (And Why It Matters)",
    excerpt:
      "Consistency beats intensity. Learn how daily 10-minute study sessions outperform weekend cramming — and how streaks keep you accountable.",
    category: "Study Tips",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    color: "from-orange-500/20 to-orange-500/5",
    border: "border-orange-500/20",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Nav */}
      <nav className="h-16 border-b border-white/5 flex items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/app-icon.png"
            alt="Theory Elite"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="font-bold text-white text-lg">Theory Elite</span>
        </a>
        <span className="text-text-tertiary text-sm ml-3 hidden sm:inline">
          / Blog
        </span>
        <div className="flex-1" />
        <a
          href="/"
          className="text-text-secondary text-sm hover:text-white transition-colors"
        >
          Home
        </a>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-primary text-xs font-semibold uppercase tracking-widest mb-3">
            BLOG
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Study smarter, not harder
          </h1>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Tips, strategies, and business knowledge to help you ace your exams.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className={`group bg-gradient-to-br ${post.color} rounded-2xl border ${post.border} p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
            >
              {/* Category + Date */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  {post.category}
                </span>
                <span className="text-text-tertiary text-xs">
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-white text-lg font-bold leading-snug mb-3 group-hover:text-purple-light transition-colors">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span className="text-text-tertiary text-xs">{post.date}</span>
                <span className="text-purple-light text-xs font-medium group-hover:translate-x-1 transition-transform">
                  Coming soon &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 py-12 rounded-2xl bg-bg-card border border-white/5">
          <h3 className="text-white text-xl font-bold mb-2">
            Want more study content?
          </h3>
          <p className="text-text-secondary text-sm mb-6">
            Download Theory Elite and get daily challenges, flashcards, and quiz
            battles.
          </p>
          <a
            href="/#download"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-primary text-white text-sm font-semibold hover:shadow-lg hover:shadow-purple-primary/25 transition-all duration-200"
          >
            Download Free
          </a>
        </div>
      </div>
    </main>
  );
}
