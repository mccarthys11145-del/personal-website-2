import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.stephenmccarthypa.com"
  const currentRevision = new Date("2026-11-10T00:00:00-05:00")

  return [
    { url: `${base}/writing/how-to-read-health-claims-and-evidence`, lastModified: currentRevision, changeFrequency: "yearly", priority: 0.9 },
    { url: `${base}/`, lastModified: currentRevision, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, lastModified: currentRevision, changeFrequency: "yearly", priority: 0.8 },
    {
      url: `${base}/consulting`,
      lastModified: currentRevision,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${base}/psychworkflowbench`,
      lastModified: currentRevision,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${base}/psychworkflowbench/sample.html`,
      lastModified: currentRevision,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/case-factory`,
      lastModified: currentRevision,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { url: `${base}/professional-record`, lastModified: currentRevision, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/writing`, lastModified: currentRevision, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${base}/writing/audhd-psychiatric-ontology`,
      lastModified: currentRevision,
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${base}/briefing/mental-health-theology`,
      lastModified: currentRevision,
      changeFrequency: "yearly",
      priority: 0.9,
    },
    { url: `${base}/profiles-and-sources`, lastModified: currentRevision, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: currentRevision, changeFrequency: "monthly", priority: 0.75 },
  ]
}
