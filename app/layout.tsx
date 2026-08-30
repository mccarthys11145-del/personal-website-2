import type { Metadata, Viewport } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { SiteJsonLd } from "@/components/json-ld"

const siteUrl = "https://www.stephenmccarthypa.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Stephen McCarthy | Physician Assistant and Behavioral Health Consultant",
    template: "%s | Stephen McCarthy",
  },
  description:
    "Source based professional profile, behavioral health consulting, and writing by Stephen McCarthy, a physician assistant in Allentown, Pennsylvania, focused on clinical AI, psychiatric care, documentation, workflow design, and clinical reasoning.",
  applicationName: "Stephen McCarthy",
  authors: [{ name: "Stephen McCarthy", url: siteUrl }],
  creator: "Stephen McCarthy",
  publisher: "Stephen McCarthy",
  category: "Professional profile and consulting",
  keywords: [
    "Stephen McCarthy physician assistant",
    "Stephen McCarthy PA",
    "behavioral health AI consultant",
    "clinical AI review",
    "psychiatric documentation review",
    "behavioral health workflow consulting",
    "psychiatric ontology",
    "mental health diagnosis",
    "Allentown physician assistant",
  ],
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "Stephen McCarthy writing" }],
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Stephen McCarthy",
    title: "Stephen McCarthy | Physician Assistant and Behavioral Health Consultant",
    description:
      "Behavioral health AI and workflow consulting, clinical experience, source checked professional facts, and writing on psychiatric language and clinical reasoning.",
    images: [
      {
        url: "/stephen-mccarthy-og.png",
        width: 1200,
        height: 630,
        alt: "Stephen McCarthy, physician assistant and behavioral health consultant",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stephen McCarthy | Physician Assistant and Behavioral Health Consultant",
    description:
      "Behavioral health AI and workflow consulting, clinical experience, and source checked writing on psychiatric language and clinical reasoning.",
    images: ["/stephen-mccarthy-og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#12202b",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteJsonLd />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
