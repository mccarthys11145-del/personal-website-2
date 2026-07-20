import Breadcrumbs from "@/components/breadcrumbs"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "Professional Record",
  description:
    "Dated professional record for Stephen McCarthy, including NPI, Pennsylvania and Utah license lookups, education, practice information, and official public record context.",
  path: "/professional-record",
})

const licenses = [
  {
    jurisdiction: "Pennsylvania",
    credential: "Physician Assistant",
    number: "MA057132",
    status: "Active",
    checked: "July 2026",
    href: "https://www.pals.pa.gov/pages/default.html",
    source: "Pennsylvania PALS",
  },
  {
    jurisdiction: "Utah",
    credential: "Physician Assistant",
    number: "14178827-1206",
    status: "Active",
    checked: "July 2026",
    href: "https://secure.utah.gov/llv/search/index.html",
    source: "Utah DOPL",
  },
  {
    jurisdiction: "Utah",
    credential: "Controlled Substance License",
    number: "14178827-8906",
    status: "Active",
    checked: "July 2026",
    href: "https://secure.utah.gov/llv/search/index.html",
    source: "Utah DOPL",
  },
]

export default function ProfessionalRecordPage() {
  return (
    <>
      <section className="page-hero section-pad-sm">
        <div className="shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Professional record" }]} />
          <p className="eyebrow">Professional record</p>
          <h1>Current status, historical records, and the exact scope of each claim.</h1>
          <p className="page-deck">
            Last reviewed July 19, 2026. License status is time sensitive. Follow the authority link for the current result.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <div className="section-heading left">
            <p className="eyebrow">Current licensing</p>
            <h2>Dated authority checks</h2>
          </div>
          <div className="record-table-wrap">
            <table className="record-table">
              <thead>
                <tr>
                  <th>Jurisdiction</th>
                  <th>Credential</th>
                  <th>Number</th>
                  <th>Status</th>
                  <th>Checked</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                {licenses.map((license) => (
                  <tr key={`${license.jurisdiction}-${license.number}`}>
                    <td>{license.jurisdiction}</td>
                    <td>{license.credential}</td>
                    <td>{license.number}</td>
                    <td><span className="status-chip">{license.status}</span></td>
                    <td>{license.checked}</td>
                    <td>
                      <a href={license.href} target="_blank" rel="noopener noreferrer">
                        {license.source}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="notice">
            <strong>Scope note.</strong> A state license does not establish current NCCPA certification, current employment,
            specialty status, federal controlled substance registration, or prescribing authority. This site makes none of those claims.
          </div>
        </div>
      </section>

      <section className="section-pad soft-section">
        <div className="shell record-columns">
          <div>
            <p className="eyebrow">Identity</p>
            <h2>Professional identifier</h2>
            <dl className="definition-list">
              <div>
                <dt>Full name</dt>
                <dd>Stephen Thomas McCarthy</dd>
              </div>
              <div>
                <dt>NPI</dt>
                <dd>
                  <a href="https://npiregistry.cms.hhs.gov/provider-view/1912308743" target="_blank" rel="noopener noreferrer">
                    1912308743
                  </a>
                </dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>Master of Science in Physician Assistant Studies and Bachelor of Science in Medical Studies, DeSales University</dd>
              </div>
            </dl>
            <p className="small-note">
              An NPI is a national identifier. It is not proof of current licensure, certification, employment, specialty, or prescribing authority.
            </p>
          </div>

          <div>
            <p className="eyebrow">Practice reference</p>
            <h2>Directory correction standard</h2>
            <dl className="definition-list">
              <div>
                <dt>Practice</dt>
                <dd><a href="https://lehighwellness.org/" target="_blank" rel="noopener noreferrer">Lehigh Valley Wellness</a></dd>
              </div>
              <div>
                <dt>Address</dt>
                <dd>6081 Hamilton Boulevard, Suite 600, Allentown, Pennsylvania 18106</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd><a href="tel:+14843571916">484 357 1916</a></dd>
              </div>
              <div>
                <dt>Hours used for corrections</dt>
                <dd>Monday and Thursday, 10:00 a.m. to 6:00 p.m.</dd>
              </div>
            </dl>
            <p className="small-note">Practice information reviewed July 2026. Confirm directly before relying on hours or availability.</p>
          </div>
        </div>
      </section>

      <section className="section-pad record-history">
        <div className="shell">
          <div className="section-heading left">
            <p className="eyebrow">Official public record context</p>
            <h2>Dates and subjects should not be blended together</h2>
            <p>
              These records are linked because transparent context is stronger than evasive copy. The summaries identify the subject and scope without rewriting the record.
            </p>
          </div>

          <div className="timeline">
            <article>
              <time dateTime="2024-09-03">September 3, 2024</time>
              <h3>DEA Decision and Order</h3>
              <p>
                The official order concerns revocation of a federal controlled substance registration and denial of pending applications to modify or renew it.
              </p>
              <a href="https://www.federalregister.gov/documents/2024/09/03/2024-19730/stephen-mccarthy-pa-decision-and-order" target="_blank" rel="noopener noreferrer">
                Read the Federal Register record
              </a>
            </article>

            <article>
              <time dateTime="2025-07-21">July 21, 2025</time>
              <h3>Third Circuit review</h3>
              <p>
                The United States Court of Appeals for the Third Circuit denied the petition for review of the DEA order.
              </p>
              <a href="https://www2.ca3.uscourts.gov/opinarch/242704np.pdf" target="_blank" rel="noopener noreferrer">
                Read the court opinion
              </a>
            </article>

            <article>
              <time dateTime="2026-03-27">March 27, 2026</time>
              <h3>Third Circuit counsel opinion</h3>
              <p>
                A separate precedential opinion addresses sanctions against attorney Daniel Pallen for submitting unverified AI generated authorities.
                The sanction addressed counsel, not Stephen McCarthy.
              </p>
              <a href="https://www2.ca3.uscourts.gov/opinarch/242704p.pdf" target="_blank" rel="noopener noreferrer">
                Read the precedential opinion
              </a>
            </article>
          </div>

          <div className="notice subdued">
            This page is a factual index, not legal advice or an argument about the merits. Corrections are welcome when accompanied by an authoritative source.
          </div>
        </div>
      </section>
    </>
  )
}
