import Link from "next/link"
import Breadcrumbs from "@/components/breadcrumbs"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Clinical AI evaluation, consulting, professional, media, and practice contact routes for Stephen McCarthy, with privacy guidance for clinical information.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <>
      <section className="page-hero section-pad-sm">
        <div className="shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <p className="eyebrow">Contact</p>
          <h1>Describe the system and the decision. Keep patient information out of the first message.</h1>
          <p className="page-deck">
            This personal website has no message form, database, or patient intake workflow. It does not collect protected health information.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell contact-grid">
          <article className="contact-card primary-contact">
            <span className="card-kicker">Clinical AI evaluation</span>
            <h2>Red team testing and benchmarking</h2>
            <p>
              For a useful initial discussion, describe the organization, system, intended clinical use,
              material being processed, current concern, preferred timing, and the decision the evaluation must support.
            </p>
            <a
              className="button primary"
              href="mailto:mccarthys11145@gmail.com?subject=Clinical%20AI%20red%20team%20inquiry"
            >
              Email Stephen
            </a>
            <p className="small-note">
              Do not attach patient records, screenshots, medication lists, transcripts, or other protected health information.
            </p>
            <div className="button-row">
              <Link className="text-link" href="/consulting">Review evaluation services <span aria-hidden="true">→</span></Link>
              <Link className="text-link" href="/psychworkflowbench">Review PsychWorkflowBench <span aria-hidden="true">→</span></Link>
            </div>
          </article>

          <article className="contact-card">
            <span className="card-kicker">Professional and media inquiries</span>
            <h2>Professional profile</h2>
            <p>
              Use LinkedIn for professional networking, commentary requests, introductions, speaking inquiries,
              medical education opportunities, or other nonclinical correspondence.
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
            <p><a href="tel:+14842730767">484 273 0767</a></p>
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
              Do not send diagnoses, medication lists, treatment records, photographs, insurance information,
              raw model inputs containing patient information, or urgent clinical questions through email or professional networking platforms.
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
