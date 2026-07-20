import Image from "next/image"
import Link from "next/link"
import Breadcrumbs from "@/components/breadcrumbs"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "About",
  description:
    "About Stephen McCarthy, a physician assistant based in Allentown, Pennsylvania, with clinical experience in psychiatric care and addiction treatment.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <>
      <section className="page-hero section-pad-sm">
        <div className="shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <p className="eyebrow">About</p>
          <h1>A professional profile with fewer adjectives and more receipts.</h1>
          <p className="page-deck">
            Stephen Thomas McCarthy is a physician assistant based in Allentown, Pennsylvania. His background includes
            inpatient and outpatient psychiatric care, addiction treatment, medication management, and work with diverse patient populations.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell about-grid">
          <div className="about-image">
            <Image
              src="/stephen-mccarthy-portrait.webp"
              alt="Stephen McCarthy"
              width={840}
              height={960}
              sizes="(max-width: 800px) 90vw, 34vw"
            />
          </div>
          <div className="prose intro-prose">
            <h2>Background</h2>
            <p>
              McCarthy earned a Master of Science in Physician Assistant Studies and a Bachelor of Science in Medical Studies
              from DeSales University. His clinical work has centered on mental health settings and the practical problems of
              assessment, medication management, impairment, and care coordination.
            </p>
            <p>
              The current writing project focuses on psychiatric language: what diagnoses measure, what they help clinicians do,
              and what they cannot explain without independent causal evidence. The central concern is precision, not denial.
              Symptoms, distress, and impairment can be real even when the ontology of a diagnostic category remains unsettled.
            </p>
            <p>
              This site uses the role description “physician assistant.” It does not use the title “doctor,” and it does not infer
              current certification, employment, specialty credentials, federal registration, or prescribing authority from an NPI or directory listing.
            </p>
            <Link className="text-link" href="/professional-record">
              Review the dated professional record <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad soft-section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Editorial method</p>
            <h2>Separate the layers</h2>
          </div>
          <div className="card-grid three">
            <article className="plain-card">
              <span className="card-kicker">Stable facts</span>
              <h3>Identity and education</h3>
              <p>
                Durable information is stated plainly and repeated consistently across the site and controlled profiles.
              </p>
            </article>
            <article className="plain-card">
              <span className="card-kicker">Time sensitive facts</span>
              <h3>Status with a date</h3>
              <p>
                License and practice information includes a review date because a status without a date can become stale camouflage.
              </p>
            </article>
            <article className="plain-card">
              <span className="card-kicker">Commentary</span>
              <h3>Arguments labeled as arguments</h3>
              <p>
                Essays distinguish a thesis from a verified fact, cite their sources, and make uncertainty visible rather than decorative.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell split-callout">
          <div>
            <p className="eyebrow">Current focus</p>
            <h2>Psychiatric ontology without the fog machine</h2>
          </div>
          <div>
            <p>
              The newest essay argues that a syndrome label may be useful while remaining different from an independently observed disease process.
              It uses AuDHD to show why co occurrence, classification, and causation must not be collapsed into a single word.
            </p>
            <Link className="button primary" href="/writing/audhd-psychiatric-ontology">Read the essay</Link>
          </div>
        </div>
      </section>
    </>
  )
}
