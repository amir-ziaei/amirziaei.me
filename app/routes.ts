import {
  type RouteConfig,
  index,
  prefix,
  route,
} from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  ...prefix('blog', [
    index('routes/blog.tsx'),
    route(':slug', 'routes/article.tsx'),
  ]),
] satisfies RouteConfig
