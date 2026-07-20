import Link from "next/link"

export default function NotFound() {
  return (
    <section className="page-hero section-pad error-page">
      <div className="shell">
        <p className="eyebrow">404</p>
        <h1>This page has left the diagnostic manual.</h1>
        <p className="page-deck">The link may be old. The main site has been consolidated around a smaller set of source checked pages.</p>
        <Link className="button primary" href="/">Return home</Link>
      </div>
    </section>
  )
}
