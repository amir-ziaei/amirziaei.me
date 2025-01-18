import type { Route } from './+types/blog'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Amir Ziaei Blog' }]
}

export default function Blog() {
  return <h1>Blog</h1>
}
