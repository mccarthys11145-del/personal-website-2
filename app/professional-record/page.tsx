import Breadcrumbs from "@/components/breadcrumbs"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "Physician Assistant Licensure",
  description: "Find the state registers for the physician assistant credentials of Stephen Thomas McCarthy in Pennsylvania and Utah.",
  path: "/professional-record",
})

export default function ProfessionalRecordPage() {
  return (
    <>
      <header className="page-hero section-pad-sm">
        <div className="shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Licensure" }]} />
          <p className="eyebrow">Professional record</p>
          <h1>Physician assistant licensure</h1>
          <p className="page-deck">
            The Pennsylvania and Utah licensing boards publish current credential status.
            Search their registers under Stephen Thomas McCarthy.
          </p>
        </div>
      </header>
      <section className="section-pad">
        <div className="shell">
          <div className="section-heading compact"><h2>State licensing records</h2></div>
          <div className="link-card-grid">
            <a className="link-card" href="https://www.pa.gov/services/dos/verify-a-professional-or-occupational-license">
              <span>
                <strong>Pennsylvania</strong>{" "}
                <small>Search the Pennsylvania Licensing System for medical physician assistant license MA057132.</small>
              </span>
              <span aria-hidden="true">↗</span>
            </a>
            <a className="link-card" href="https://secure.utah.gov/llv/search/index.html">
              <span>
                <strong>Utah</strong>{" "}
                <small>The May 2026 renewal identifies this physician assistant credential by core number 14178827 and profession code 1206.</small>
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
