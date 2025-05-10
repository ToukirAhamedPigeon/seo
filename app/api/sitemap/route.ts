// Create a dynamic sitemap.xml API route (SSR)
// In Next.js (App Router or Pages Router), create an endpoint like this:

// /app/api/sitemap/route.ts (App Router)

// Then in robots.txt, point to this dynamic sitemap:

// Sitemap: https://www.domain.com/api/sitemap

// Benefit:
// Always reflects latest DB data, no need to redeploy.

// Works well for programmatic SEO.

// Sitemap URL Limits
// Yes, there are limitations according to the Google Sitemap protocol:

// ✅ Max 50,000 URLs per sitemap file

// ✅ Max 50 MB uncompressed

// If you exceed this, create a sitemap index that links to multiple sitemap files (e.g., /sitemap-1.xml, /sitemap-2.xml).

// Bonus Tip: Cache for Performance
// If the DB is large, cache the generated sitemap for a short period (e.g., 1 hour) using headers or middleware, so it doesn’t hammer your database.

// import { NextResponse } from 'next/server'

// export async function GET() {
//   const baseUrl = 'https://www.domain.com'

//   // 1. Fetch locations and food names from DB
//   const data = await fetchYourLocationFoodListFromDB()

//   const urls = data.map(({ location, food }) => {
//     return `${baseUrl}/${location}/${food}`
//   })

//   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//   ${urls
//     .map(
//       url => `
//     <url>
//       <loc>${url}</loc>
//     </url>`
//     )
//     .join('')}
// </urlset>`

//   return new NextResponse(sitemap, {
//     headers: {
//       'Content-Type': 'application/xml',
//     },
//   })
// }
