import Link from "next/link"
import Breadcrumbs from "@/components/breadcrumbs"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "Professional Profiles",
  description: "Find Stephen McCarthy’s professional profiles, physician assistant background, and clinical AI consulting work in Allentown, Pennsylvania.",
  path: "/profiles-and-sources",
})

const profiles = [
  {
    name: "LinkedIn",
    description: "Professional profile",
    href: "https://www.linkedin.com/in/stephenmccarthypa",
  },
  {
    name: "About.me",
    description: "Identity profile",
    href: "https://about.me/stephen_mccarthy_pa",
  },
  {
    name: "Doximity",
    description: "Clinician profile",
    href: "https://www.doximity.com/pub/stephen-mccarthy-pa-5ad36978",
  },
  {
    name: "Lehigh Valley Wellness",
    description: "Practice website",
    href: "https://lehighwellness.org/",
  },
]

export default function SourcesPage() {
  return (
    <>
      <section className="page-hero section-pad-sm">
        <div className="shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Profiles" }]} />
          <p className="eyebrow">Profiles</p>
          <h1>Stephen McCarthy’s professional profiles.</h1>
          <p className="page-deck">
            Find Stephen McCarthy’s professional profiles and the Lehigh Valley Wellness website.
            For his physician assistant background, psychiatric experience, and clinical AI consulting work in
            Allentown, Pennsylvania, read{" "}
            <Link className="text-link" href="/about">About Stephen McCarthy</Link>.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <div className="section-heading compact">
            <p className="eyebrow">Featured link</p>
            <h2>Read the latest producer briefing.</h2>
          </div>
          <div className="link-card-grid">
            <Link className="link-card" href="/briefing/mental-health-theology">
              <span>
                <strong>Mental Health Is the New Theology of the West</strong>{" "}
                <small>Producer briefing · video, exhibits, and sources</small>
              </span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="section-heading compact">
            <p className="eyebrow">Professional links</p>
            <h2>Profiles and practice.</h2>
          </div>
          <div className="link-card-grid">
            {profiles.map((profile) => (
              <a className="link-card" href={profile.href} key={profile.href} target="_blank" rel="noopener noreferrer">
                <span>
                  <strong>{profile.name}</strong>{" "}
                  <small>{profile.description}</small>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
