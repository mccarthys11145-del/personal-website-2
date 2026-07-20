import type { Metadata } from "next"

const siteName = "Stephen McCarthy"
const rssAlternate = {
  "application/rss+xml": [{ url: "/feed.xml", title: "Stephen McCarthy writing" }],
}
const socialImage = {
  url: "/stephen-mccarthy-og.png",
  width: 1200,
  height: 630,
  alt: "Stephen McCarthy, physician assistant and writer",
}

type PageMetadataOptions = {
  title: string
  description: string
  path: `/${string}`
}

export function createPageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  const socialTitle = `${title} | ${siteName}`

  return {
    title,
    description,
    alternates: {
      canonical: path,
      types: rssAlternate,
    },
    openGraph: {
      type: "website",
      url: path,
      siteName,
      title: socialTitle,
      description,
      images: [socialImage],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/stephen-mccarthy-og.png"],
    },
  }
}
