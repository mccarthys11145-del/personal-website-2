import Breadcrumbs from "@/components/breadcrumbs"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Practice contact information and privacy safe professional contact routes for Stephen McCarthy.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <>
      <section className="page-hero section-pad-sm">
        <div className="shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <p className="eyebrow">Contact</p>
          <h1>Use the right channel and keep medical information off this site.</h1>
          <p className="page-deck">
            The personal website has no message form, database, or intake workflow. It does not collect protected health information.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell contact-grid">
          <article className="contact-card primary-contact">
            <span className="card-kicker">Practice scheduling and clinical matters</span>
            <h2>Lehigh Valley Wellness</h2>
            <address>
              6081 Hamilton Boulevard, Suite 600<br />
              Allentown, Pennsylvania 18106
            </address>
            <p><a href="tel:+14843571916">484 357 1916</a></p>
            <p>Hours used for directory corrections: Monday and Thursday, 10:00 a.m. to 6:00 p.m.</p>
            <a className="button primary" href="https://lehighwellness.org/" target="_blank" rel="noopener noreferrer">
              Visit the practice website
            </a>
            <p className="small-note">Practice information reviewed July 2026. Confirm current hours and availability directly.</p>
          </article>

          <article className="contact-card">
            <span className="card-kicker">Professional and media inquiries</span>
            <h2>Professional profile</h2>
            <p>
              Use the controlled LinkedIn profile for professional networking, commentary requests, or nonclinical correspondence.
            </p>
            <a className="button secondary" href="https://www.linkedin.com/in/stephenmccarthypa" target="_blank" rel="noopener noreferrer">
              Open LinkedIn
            </a>
          </article>
        </div>
      </section>

      <section className="section-pad soft-section">
        <div className="shell privacy-panel">
          <div>
            <p className="eyebrow">Privacy</p>
            <h2>No personal health information</h2>
          </div>
          <div>
            <p>
              Do not send diagnoses, medication lists, treatment records, photographs, insurance information, or urgent clinical questions through professional networking platforms.
              For care related matters, use the practice approved channel.
            </p>
            <p>
              This website is not monitored for emergencies. Contact local emergency services when immediate safety is at risk.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
