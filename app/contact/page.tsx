import Breadcrumbs from "@/components/breadcrumbs"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Consulting, professional, media, and practice contact routes for Stephen McCarthy, with privacy guidance for clinical information.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <>
      <section className="page-hero section-pad-sm">
        <div className="shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <p className="eyebrow">Contact</p>
          <h1>Choose the right channel and keep medical information off this site.</h1>
          <p className="page-deck">
            This personal website has no message form, database, or patient intake workflow. It does not collect protected health information.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell contact-grid">
          <article className="contact-card primary-contact">
            <span className="card-kicker">Consulting inquiries</span>
            <h2>Behavioral health AI and workflow review</h2>
            <p>
              For clinical AI review, documentation analysis, workflow consulting, patient communication review,
              speaking, or medical education inquiries, send a concise description of the organization, problem,
              intended decision, and desired timing.
            </p>
            <a
              className="button primary"
              href="mailto:mccarthys11145@gmail.com?subject=Behavioral%20health%20consulting%20inquiry"
            >
              Email Stephen
            </a>
            <p className="small-note">
              Do not attach patient records or include protected health information in an initial inquiry.
            </p>
          </article>

          <article className="contact-card">
            <span className="card-kicker">Professional and media inquiries</span>
            <h2>Professional profile</h2>
            <p>
              Use LinkedIn for professional networking, commentary requests, introductions, or other nonclinical correspondence.
            </p>
            <a className="button secondary" href="https://www.linkedin.com/in/stephenmccarthypa" target="_blank" rel="noopener noreferrer">
              Open LinkedIn
            </a>
          </article>

          <article className="contact-card">
            <span className="card-kicker">Practice scheduling and clinical matters</span>
            <h2>Lehigh Valley Wellness</h2>
            <address>
              6081 Hamilton Boulevard, Suite 600<br />
              Allentown, Pennsylvania 18106
            </address>
            <p><a href="tel:+14843571916">484 357 1916</a></p>
            <p>Hours used for directory corrections: Monday and Thursday, 10:00 a.m. to 6:00 p.m.</p>
            <a className="button secondary" href="https://lehighwellness.org/" target="_blank" rel="noopener noreferrer">
              Visit the practice website
            </a>
            <p className="small-note">Practice information reviewed July 2026. Confirm current hours and availability directly.</p>
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
              Do not send diagnoses, medication lists, treatment records, photographs, insurance information, or urgent clinical questions through email or professional networking platforms.
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
