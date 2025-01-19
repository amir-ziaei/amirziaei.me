import { articleDb } from '~/db'
import type { Route } from './+types/article'
import { data } from 'react-router'

export function meta({ data }: Route.MetaArgs) {
  return [{ title: data.article.title }]
}

export async function loader({ params }: Route.LoaderArgs) {
  const article = articleDb.find(params.slug)
  if (!article) {
    throw data('Article not found', { status: 404 })
  }
  return { article }
}

export default function Blog({ loaderData }: Route.ComponentProps) {
  const { article } = loaderData
  return (
    <article className="p-4">
      <header className="mb-4 flex justify-between">
        <h1 className="text-lg">{article.title}</h1>
        <span>{article.createdAt.toLocaleDateString()}</span>
      </header>
      <main>
        <p>{article.content}</p>
      </main>
    </article>
  )
}
