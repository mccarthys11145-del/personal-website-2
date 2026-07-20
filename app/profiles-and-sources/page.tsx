import Breadcrumbs from "@/components/breadcrumbs"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "Profiles",
  description: "Professional profiles for Stephen McCarthy.",
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
          <h1>Professional profiles.</h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <div className="link-card-grid">
            {profiles.map((profile) => (
              <a className="link-card" href={profile.href} key={profile.href} target="_blank" rel="noopener noreferrer">
                <span>
                  <strong>{profile.name}</strong>
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
