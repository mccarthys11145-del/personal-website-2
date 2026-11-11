import Link from "next/link"
import Breadcrumbs from "@/components/breadcrumbs"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Contact Stephen McCarthy about clinical AI evaluation, writing, or speaking. Find appointment and practice contact information for Lehigh Valley Wellness.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <>
      <section className="page-hero section-pad-sm">
        <div className="shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <h1>Contact Stephen</h1>
          <p className="page-deck">For consulting or writing, use the professional contacts below.
            For appointments or questions about your care, contact Lehigh Valley Wellness directly.</p>
        </div>
      </section>

      <div className="shell contact-directory">
        <section className="contact-entry" aria-labelledby="consulting-contact">
          <div><p className="eyebrow">Consulting</p><h2 id="consulting-contact">Clinical AI evaluation</h2></div>
          <div>
            <p>Tell me what your system writes, who uses the note, and which decision the evaluation should help you make.
              A brief description is enough for a first conversation. Please keep patient information out of your email.</p>
            <a className="contact-address" href="mailto:mccarthys11145@gmail.com?subject=Clinical%20AI%20evaluation">mccarthys11145@gmail.com</a>
            <p className="contact-related"><Link href="/consulting#pilot-review">Review pilot scope and pricing</Link></p>
          </div>
        </section>

        <section className="contact-entry" aria-labelledby="press-contact">
          <div><p className="eyebrow">Professional inquiries</p><h2 id="press-contact">Writing and speaking</h2></div>
          <div>
            <p>For commentary, interviews, medical education, or speaking, include the topic, audience, and any deadline.</p>
            <a href="https://www.linkedin.com/in/stephenmccarthypa">Contact Stephen on LinkedIn</a>
          </div>
        </section>

        <section className="contact-entry" id="practice" aria-labelledby="practice-contact">
          <div><p className="eyebrow">Patient care</p><h2 id="practice-contact">Lehigh Valley Wellness</h2></div>
          <div>
            <p>Call the practice or visit its website for appointments, current hours, and questions about your care.</p>
            <address>6081 Hamilton Boulevard, Suite 600<br />Allentown, Pennsylvania 18106</address>
            <p className="practice-phone"><a href="tel:+14842730767">(484) 273 0767</a></p>
            <a className="button primary" href="https://lehighwellness.org/">Visit Lehigh Valley Wellness</a>
            <p className="contact-emergency">For an immediate emergency, call 911.</p>
          </div>
        </section>
      </div>
    </>
  )
}
