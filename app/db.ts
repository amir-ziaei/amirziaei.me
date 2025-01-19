type Article = {
  title: string
  slug: string
  content: string
  createdAt: Date
}

const articles: Array<Article> = [
  {
    title: 'Hello world!',
    slug: 'hello-world',
    content: 'This is my first blog post, Internet!',
    createdAt: new Date('2025-01-19'),
  },
]

const sortedArticles = articles.sort(
  (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
)

export const articleDb = {
  all() {
    return sortedArticles
  },
  find(slug: string) {
    return sortedArticles.find(article => article.slug === slug)
  },
}
