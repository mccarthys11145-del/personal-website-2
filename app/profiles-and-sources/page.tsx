import Breadcrumbs from "@/components/breadcrumbs"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "Profiles and Sources",
  description:
    "Controlled profiles and authoritative sources used to verify professional facts about Stephen McCarthy.",
  path: "/profiles-and-sources",
})

const profiles = [
  {
    name: "LinkedIn",
    description: "Controlled professional profile",
    href: "https://www.linkedin.com/in/stephenmccarthypa",
  },
  {
    name: "About.me",
    description: "Controlled identity profile",
    href: "https://about.me/stephen_mccarthy_pa",
  },
  {
    name: "Doximity",
    description: "Controlled clinician profile pending duplicate cleanup",
    href: "https://www.doximity.com/pub/stephen-mccarthy-pa-5ad36978",
  },
  {
    name: "Lehigh Valley Wellness",
    description: "Canonical practice website",
    href: "https://lehighwellness.org/",
  },
]

const sources = [
  {
    name: "NPI Registry",
    description: "National provider identifier 1912308743",
    href: "https://npiregistry.cms.hhs.gov/provider-view/1912308743",
  },
  {
    name: "Pennsylvania PALS",
    description: "Pennsylvania professional license lookup",
    href: "https://www.pals.pa.gov/pages/default.html",
  },
  {
    name: "Utah DOPL",
    description: "Utah license lookup and verification",
    href: "https://secure.utah.gov/llv/search/index.html",
  },
  {
    name: "Federal Register",
    description: "Official DEA Decision and Order published September 3, 2024",
    href: "https://www.federalregister.gov/documents/2024/09/03/2024-19730/stephen-mccarthy-pa-decision-and-order",
  },
  {
    name: "Third Circuit opinion, July 21, 2025",
    description: "Official court disposition in case 24 2704",
    href: "https://www2.ca3.uscourts.gov/opinarch/242704np.pdf",
  },
  {
    name: "Third Circuit opinion, March 27, 2026",
    description: "Official precedential opinion concerning counsel conduct",
    href: "https://www2.ca3.uscourts.gov/opinarch/242704p.pdf",
  },
]

export default function SourcesPage() {
  return (
    <>
      <section className="page-hero section-pad-sm">
        <div className="shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Profiles and sources" }]} />
          <p className="eyebrow">Profiles and sources</p>
          <h1>One identity, one canonical site, and a visible evidence trail.</h1>
          <p className="page-deck">
            Controlled profiles point back to this site. Time sensitive claims point outward to the authority responsible for them.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <div className="section-heading left">
            <p className="eyebrow">Controlled profiles</p>
            <h2>Primary identity assets</h2>
          </div>
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

      <section className="section-pad soft-section">
        <div className="shell">
          <div className="section-heading left">
            <p className="eyebrow">Authoritative sources</p>
            <h2>Records used by this site</h2>
          </div>
          <div className="link-card-grid">
            {sources.map((source) => (
              <a className="link-card" href={source.href} key={source.href} target="_blank" rel="noopener noreferrer">
                <span>
                  <strong>{source.name}</strong>
                  <small>{source.description}</small>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell source-policy">
          <div>
            <p className="eyebrow">Claim policy</p>
            <h2>Three bins, no confetti cannon</h2>
          </div>
          <div className="prose">
            <h3>Stable identity facts</h3>
            <p>Name, NPI, and education are treated as durable facts and corrected when an authoritative source changes.</p>
            <h3>Time sensitive professional facts</h3>
            <p>License, practice, certification, service, and availability statements require a dated check. Stale status is not recycled as current fact.</p>
            <h3>Historical and contextual facts</h3>
            <p>Regulatory and court materials are linked with date and scope. They are not hidden, inflated, or reassigned to the wrong subject.</p>
          </div>
        </div>
      </section>
    </>
  )
}
