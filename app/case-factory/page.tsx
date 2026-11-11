import Link from "next/link"
import Breadcrumbs from "@/components/breadcrumbs"
import { JsonLd } from "@/components/json-ld"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "Private Clinical AI Benchmark Case Factory",
  description:
    "A clinician guided workflow for converting authorized psychiatric source patterns into synthetic benchmark cases, structured truth states, scoring rubrics, and private regression suites.",
  path: "/case-factory",
})

const outputs = [
  {
    label: "Source inventory",
    text: "A coded map of record types, chronology, clinical domains, known conflicts and privacy considerations.",
  },
  {
    label: "Fact matrix",
    text: "The source and date for each fact, along with what is current, what conflicts and what is uncertain.",
  },
  {
    label: "Synthetic packet",
    text: "A new case that preserves the reasoning traps while changing identity, biography, dates, facilities, and distinctive narrative details.",
  },
  {
    label: "Reference clinical state",
    text: "Current medications, discontinued medications, supported diagnoses, historical diagnoses, symptoms, contradictions, unknowns, and safety facts.",
  },
  {
    label: "Reference note",
    text: "A concise current psychiatric note written only from the structured truth state, without invented examination findings or obsolete chart content.",
  },
  {
    label: "Scoring rubric",
    text: "Case specific scoring criteria, forbidden elements, critical failure flags, and clinician review requirements.",
  },
]

export default function CaseFactoryPage() {
  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.stephenmccarthypa.com/case-factory#service",
    name: "Private Clinical AI Benchmark Case Factory",
    url: "https://www.stephenmccarthypa.com/case-factory",
    description:
      "Clinician guided development of synthetic behavioral health benchmark cases, structured truth states, scoring rubrics, and private regression suites.",
    provider: { "@id": "https://www.stephenmccarthypa.com/#person" },
    areaServed: "United States",
    serviceType: [
      "Synthetic psychiatric benchmark case development",
      "Clinical AI regression suite design",
      "Longitudinal record synthesis evaluation design",
      "Clinician authored scoring rubric development",
    ],
  }

  return (
    <>
      <JsonLd data={serviceJson} />

      <section className="page-hero benchmark-page-hero section-pad-sm" id="service">
        <div className="shell red-team-hero-grid">
          <div className="red-team-hero-copy">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Factory" }]} />
            <p className="eyebrow">PsychWorkflowBench Case Factory · In development</p>
            <h1>Private test cases for psychiatric documentation.</h1>
            <p className="page-deck">
              Build synthetic records around a problem your system needs to handle, such as a medication order that conflicts
              with what staff administered. Pair each case with a private reference answer and a rule for judging the note.
            </p>
            <div className="button-row">
              <a className="button primary" href="mailto:mccarthys11145@gmail.com?subject=Private%20benchmark%20case%20factory%20inquiry">Discuss a private case suite</a>
              <a className="button secondary" href="/psychworkflowbench/sample.html">See the public sample</a>
            </div>
          </div>
          <aside className="contact-card" aria-labelledby="factory-example">
            <p className="eyebrow">An example from the public suite</p>
            <h2 id="factory-example">Does a pharmacy fill mean the patient took the drug?</h2>
            <p>
              In case 001, olanzapine was stopped in February 2025 and no longer appeared on the administration record.
              A later pharmacy fill created a discrepancy. Listing the medication as current lost that distinction.
            </p>
            <a className="text-link" href="/psychworkflowbench/sample.html#case-001">Read the source references and retest criterion <span aria-hidden="true">→</span></a>
          </aside>
        </div>
      </section>

      <section className="section-pad soft-section" aria-labelledby="factory-sequence-title">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Case design</p>
            <h2 id="factory-sequence-title">How a private case is built</h2>
          </div>
          <div className="process-track">
            <article className="process-node">
              <h3>Define the question</h3>
              <p>Identify the task, records available at the encounter and discrepancy the system should recognize.</p>
            </article>
            <article className="process-node">
              <h3>Write the source packet</h3>
              <p>Construct fictional events, dates and records. Keep patient report, staff observations, orders and administration records distinguishable.</p>
            </article>
            <article className="process-node">
              <h3>Write the reference</h3>
              <p>Specify the facts the records support, the uncertainties the note should retain and the assertions that would count as errors.</p>
            </article>
            <article className="process-node">
              <h3>Review and reserve</h3>
              <p>Check the clinical reasoning, privacy and scoring rules. Keep the reference and reserved variants separate from the inputs shown to the system being tested.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="factory-output-title">
        <div className="shell record-chaos-grid">
          <div className="record-chaos-copy">
            <p className="eyebrow">Case package</p>
            <h2 id="factory-output-title">What a reviewer works from</h2>
            <p>
              Each target claim needs a source. Before locking a case, reviewers check the dates, medication doses and
              intended disagreements, then verify that the synthetic packet contains enough information to score the task.
              Missing information can itself be the intended finding.
            </p>
          </div>
          <div className="record-list">
            {outputs.map((item) => (
              <article key={item.label}>
                <h3>{item.label}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad soft-section" aria-labelledby="factory-boundaries-title">
        <div className="shell privacy-panel">
          <div>
            <p className="eyebrow">Discuss a workflow</p>
            <h2 id="factory-boundaries-title">Describe the problem without sending a chart.</h2>
          </div>
          <div>
            <p>
              For the first email, name the documentation task and the kind of error you need to test. Use fictional
              examples and keep patient records and protected health information out of the message.
            </p>
            <p>
              Work drawing on real records requires authorization, an approved environment, appropriate agreements,
              data controls and human review. Clinical review and privacy review address different questions.
              Public release, research and distribution require separate decisions.
            </p>
            <div className="button-row">
              <Link className="button primary" href="/consulting#pilot-review">Review private pilot scope</Link>
              <Link className="button secondary" href="/psychworkflowbench">Benchmark methodology</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
