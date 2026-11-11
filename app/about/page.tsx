import Image from "next/image"
import Link from "next/link"
import Breadcrumbs from "@/components/breadcrumbs"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "Physician Assistant in Allentown",
  description:
    "Stephen McCarthy is a physician assistant and clinical AI consultant in Allentown, Pennsylvania, with a background in psychiatry and clinical documentation.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <>
      <section className="page-hero section-pad-sm">
        <div className="shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <p className="eyebrow">About</p>
          <h1>Stephen McCarthy</h1>
          <p className="page-deck">
            Stephen McCarthy is a physician assistant in Allentown, Pennsylvania. His experience spans inpatient
            psychiatry, outpatient medication management, addiction treatment, and telehealth. He draws on that work
            to evaluate how AI systems document psychiatric care.
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
              In a psychiatric chart, an old medication list can outlive the prescription. A note can also carry a
              diagnosis forward for years after a clinician questioned it. McCarthy tests whether AI systems catch
              those discrepancies when they write the next note.
            </p>
            <p>
              The public <Link className="text-link" href="/psychworkflowbench">PsychWorkflowBench demonstration</Link> uses
              six synthetic cases and 71 checks. In the sample report, each finding identifies a source in the
              synthetic chart and describes what a corrected note would need to say.
            </p>
            <p>
              He writes about what psychiatric diagnoses measure, how they guide care, and what it takes to explain
              a symptom beyond naming it.
            </p>
            <p><Link className="text-link" href="/professional-record">Physician assistant licensure in Pennsylvania and Utah</Link></p>
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
              or a model configuration against cases and scoring criteria chosen for the engagement. Each finding identifies
              an error, cites its source, and describes what a corrected output must do on retest.
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
            <h2>What can a diagnosis explain?</h2>
          </div>
          <div>
            <p>
              The AuDHD essay examines what a shared label for autism and ADHD tells us about a person,
              and what evidence we still need to explain a particular symptom.
            </p>
            <Link className="button secondary" href="/writing/audhd-psychiatric-ontology">Read the essay</Link>
          </div>
        </div>
      </section>
    </>
  )
}
