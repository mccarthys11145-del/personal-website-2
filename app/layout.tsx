import type { Metadata, Viewport } from "next"
import "./globals.css"
import "./clinical-ai.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { SiteJsonLd } from "@/components/json-ld"

const siteUrl = "https://www.stephenmccarthypa.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Stephen McCarthy | Clinical AI Red Team Consultant",
    template: "%s | Stephen McCarthy",
  },
  description:
    "Source based professional profile, clinical AI red team testing, behavioral health benchmarking, and writing by Stephen McCarthy, a physician assistant in Allentown, Pennsylvania.",
  applicationName: "Stephen McCarthy",
  authors: [{ name: "Stephen McCarthy", url: siteUrl }],
  creator: "Stephen McCarthy",
  publisher: "Stephen McCarthy",
  category: "Clinical AI evaluation and professional profile",
  keywords: [
    "Stephen McCarthy physician assistant",
    "Stephen McCarthy PA",
    "clinical AI red team testing",
    "behavioral health AI benchmarking",
    "psychiatric AI evaluation",
    "PsychWorkflowBench",
    "longitudinal psychiatric record synthesis",
    "clinical documentation fidelity",
    "medication reconciliation benchmark",
    "behavioral health workflow consulting",
    "psychiatric ontology",
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
    title: "Stephen McCarthy | Clinical AI Red Team Consultant",
    description:
      "Clinical AI red team testing and behavioral health benchmarking grounded in frontline psychiatric experience, plus source checked writing on clinical reasoning.",
    images: [
      {
        url: "/stephen-mccarthy-og.png",
        width: 1200,
        height: 630,
        alt: "Stephen McCarthy, physician assistant and clinical AI red team consultant",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stephen McCarthy | Clinical AI Red Team Consultant",
    description:
      "Clinical AI red team testing, behavioral health benchmarking, frontline psychiatric experience, and source checked writing on clinical reasoning.",
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
