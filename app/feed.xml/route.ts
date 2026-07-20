export const dynamic = "force-static"

const base = "https://www.stephenmccarthypa.com"

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Stephen McCarthy Writing</title>
    <link>${base}/writing</link>
    <description>Essays on psychiatric ontology, diagnostic language, and clinical reasoning.</description>
    <language>en-us</language>
    <lastBuildDate>Sun, 19 Jul 2026 04:00:00 GMT</lastBuildDate>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml" />
    <item>
      <title>AuDHD, Psychiatric Ontology, and the Difference Between Naming and Explaining</title>
      <link>${base}/writing/audhd-psychiatric-ontology</link>
      <guid isPermaLink="true">${base}/writing/audhd-psychiatric-ontology</guid>
      <pubDate>Sun, 19 Jul 2026 04:00:00 GMT</pubDate>
      <description>A critique of diagnostic reification and circular explanation.</description>
    </item>
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
