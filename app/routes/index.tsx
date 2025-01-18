import type { Route } from './+types/index'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Amir Ziaei' }]
}

export default function Home() {
  return <h1>Welcome to my page!</h1>
}
