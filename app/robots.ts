import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Block private dashboard panels if any
    },
    sitemap: 'https://www.gopalganjitpark.com/sitemap.xml',
  }
}