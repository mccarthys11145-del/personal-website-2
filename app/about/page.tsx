import Image from "next/image"
import Link from "next/link"
import Breadcrumbs from "@/components/breadcrumbs"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "About",
  description:
    "About Stephen McCarthy, a physician assistant and behavioral health consultant based in Allentown, Pennsylvania, with clinical experience in psychiatric care, addiction treatment, clinical AI review, and workflow development.",
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
            Stephen Thomas McCarthy is a physician assistant and behavioral health consultant based in Allentown, Pennsylvania.
            His background includes inpatient and outpatient psychiatric care, addiction treatment, medication management,
            clinical leadership, documentation review, and work with diverse patient populations.
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
              assessment, medication management, impairment, documentation quality, and care coordination.
            </p>
            <p>
              His consulting work applies frontline psychiatric judgment to clinical AI outputs, documentation systems,
              patient communication, prompts, templates, and behavioral health workflows. The aim is to identify clinically
              important omissions, unsupported conclusions, unclear escalation pathways, and systems that collect information
              without improving the decision or next action.
            </p>
            <p>
              His writing focuses on psychiatric language: what diagnoses measure, what they help clinicians do,
              and what they cannot explain without independent causal evidence. The central concern is precision, not denial.
              Symptoms, distress, and impairment can be real even when the ontology of a diagnostic category remains unsettled.
            </p>
            <p>Stephen McCarthy is licensed in Pennsylvania and Utah.</p>
          </div>
        </div>
      </section>

      <section className="section-pad soft-section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Professional method</p>
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
              <span className="card-kicker">Clinical review</span>
              <h3>Observation before conclusion</h3>
              <p>
                Reviews distinguish what the submitted material shows, what can reasonably be inferred, what remains uncertain,
                and what requires additional evidence.
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
            <p className="eyebrow">Consulting</p>
            <h2>Behavioral health AI and workflow review</h2>
          </div>
          <div>
            <p>
              The founding consulting offer reviews a defined set of deidentified clinical AI outputs, one behavioral health workflow,
              or one prompt, template, or knowledge base set. The engagement produces a risk matrix, annotated findings,
              revised priority material, and an implementation roadmap.
            </p>
            <Link className="button primary" href="/consulting">Review the consulting offer</Link>
          </div>
        </div>
      </section>

      <section className="section-pad soft-section">
        <div className="shell split-callout">
          <div>
            <p className="eyebrow">Current writing focus</p>
            <h2>Psychiatric ontology without the fog machine</h2>
          </div>
          <div>
            <p>
              The newest essay argues that a syndrome label may be useful while remaining different from an independently observed disease process.
              It uses AuDHD to show why co occurrence, classification, and causation must not be collapsed into a single word.
            </p>
            <Link className="button secondary" href="/writing/audhd-psychiatric-ontology">Read the essay</Link>
          </div>
        </div>
      </section>
    </>
  )
}
