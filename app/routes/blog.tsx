import { Link } from 'react-router'
import type { Route } from './+types/blog'
import { articleDb } from '~/db'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Amir Ziaei Blog' }]
}

export async function loader({}: Route.LoaderArgs) {
  const articles = articleDb.all()
  return { articles }
}

export default function Blog({ loaderData }: Route.ComponentProps) {
  const { articles } = loaderData
  return (
    <>
      {articles.map(article => (
        <article key={article.slug} className="border-b-2  px-4 py-2">
          <Link to={`/blog/${article.slug}`}>
            <div className="flex justify-between">
              <h2>{article.title}</h2>
              <span>{article.createdAt.toLocaleDateString()}</span>
            </div>
          </Link>
        </article>
      ))}
    </>
  )
}
