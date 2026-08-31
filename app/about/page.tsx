import Image from "next/image"
import Link from "next/link"
import Breadcrumbs from "@/components/breadcrumbs"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "About",
  description:
    "About Stephen McCarthy, a physician assistant and clinical AI red team consultant based in Allentown, Pennsylvania, with more than 11 years of psychiatric clinical experience.",
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
            Stephen Thomas McCarthy is a physician assistant and clinical AI red team consultant based in Allentown, Pennsylvania.
            His background includes inpatient and outpatient psychiatric care, addiction treatment, medication management,
            telehealth, clinical leadership, documentation review, and work with diverse patient populations.
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
              from DeSales University. His clinical work has centered on the practical problems of psychiatric assessment,
              medication management, impairment, documentation quality, longitudinal record review, and care coordination.
            </p>
            <p>
              His consulting work applies frontline psychiatric judgment to clinical AI systems. The current focus is red team testing
              and benchmarking of longitudinal record synthesis, medication reconciliation, diagnostic coherence, contradiction handling,
              documentation fidelity, unsupported assertions, and safety behavior.
            </p>
            <p>
              PsychWorkflowBench is the working name for an evaluation framework under development. It is designed to test whether a system
              can turn noisy psychiatric records into a coherent current representation without copying obsolete information or inventing details.
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
              <span className="card-kicker">Source state</span>
              <h3>Current, historical, contradictory, unknown</h3>
              <p>
                Reviews begin by separating what is current and supported from what is old, copied, conflicting, or unresolved.
              </p>
            </article>
            <article className="plain-card">
              <span className="card-kicker">Clinical review</span>
              <h3>Observation before conclusion</h3>
              <p>
                Findings distinguish what the submitted material shows, what can reasonably be inferred,
                what remains uncertain, and what the system must not invent.
              </p>
            </article>
            <article className="plain-card">
              <span className="card-kicker">Communication</span>
              <h3>Arguments labeled as arguments</h3>
              <p>
                Reports and essays distinguish a thesis from a verified fact, cite their sources,
                and make uncertainty visible rather than decorative.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell split-callout">
          <div>
            <p className="eyebrow">Clinical AI evaluation</p>
            <h2>Red team testing and benchmarking</h2>
          </div>
          <div>
            <p>
              Private evaluations can test one defined behavioral health workflow, a set of deidentified model outputs,
              or a model configuration against clinician authored cases and scoring criteria. The result is a severity ranked failure map,
              source linked findings, remediation priorities, and objective retest criteria.
            </p>
            <div className="button-row">
              <Link className="button primary" href="/consulting">Review evaluation services</Link>
              <Link className="button secondary" href="/psychworkflowbench">Review PsychWorkflowBench</Link>
            </div>
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
