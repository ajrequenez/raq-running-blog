import { Feed } from 'feed'
import { getAllArticles } from '@/lib/articles'

export const dynamic = 'force-static'

export async function GET() {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ajrequenez.github.io/raq-running-blog'

  let author = {
    name: 'Raq',
  }

  let feed = new Feed({
    title: "Raq's Running Blog",
    description: 'Race reports, training insights, and running adventures.',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  let articles = await getAllArticles()

  for (let article of articles) {
    let publicUrl = `${siteUrl}/articles/${article.slug}`

    feed.addItem({
      title: article.title,
      id: publicUrl,
      link: publicUrl,
      description: article.description,
      author: [{ name: article.author }],
      date: new Date(article.date),
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
