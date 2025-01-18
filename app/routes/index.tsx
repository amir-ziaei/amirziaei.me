import type { Route } from './+types/index'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Amir Ziaei' }]
}

export default function Index() {}
