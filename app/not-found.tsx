import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Page not found",
  description: "Find the homepage and current pages on the Stephen McCarthy website.",
  robots: { index: false, follow: true },
  openGraph: null,
  twitter: null,
}

export default function NotFound() {
  return (
    <section className="page-hero section-pad error-page">
      <div className="shell">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="page-deck">You can find the current pages through the main navigation.</p>
        <Link className="button primary" href="/">Return home</Link>
      </div>
    </section>
  )
}
