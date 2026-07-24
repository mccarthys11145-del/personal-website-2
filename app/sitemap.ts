import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.stephenmccarthypa.com"
  const lastModified = new Date("2026-07-19T00:00:00-04:00")

  return [
    { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/professional-record`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/writing`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${base}/writing/audhd-psychiatric-ontology`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${base}/briefing/mental-health-theology`,
      lastModified: new Date("2026-07-23T00:00:00-04:00"),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    { url: `${base}/profiles-and-sources`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ]
}
