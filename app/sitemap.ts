import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.gopalganjitpark.com'

  // Dynamic system paths matching your app structure
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/courses',
    '/courses/ccc',
    '/courses/o-level',
    '/courses/kyp'
  ]

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }))
}