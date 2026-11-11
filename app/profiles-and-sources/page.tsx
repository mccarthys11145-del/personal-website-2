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
    name: "Doximity",
    description: "Clinician profile",
    href: "https://www.doximity.com/pub/stephen-mccarthy-pa-11423bed",
  },
  {
    name: "Lehigh Valley Wellness",
    description: "Practice website",
    href: "https://lehighwellness.org/",
  },
  {
    name: "National Provider Identifier Registry",
    description: "Federal provider identifier 1912308743",
    href: "https://npiregistry.cms.hhs.gov/provider-view/1912308743",
  },
  {
    name: "About.me",
    description: "Identity profile",
    href: "https://about.me/stephen_mccarthy_pa",
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
            These profiles cover McCarthy’s clinical background and practice. For state credentials,
            see the <Link className="text-link" href="/professional-record">licensure page</Link>.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <div className="section-heading compact">
            <h2>Profiles and practice</h2>
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
