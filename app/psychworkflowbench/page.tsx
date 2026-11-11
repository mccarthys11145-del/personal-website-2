import Link from "next/link"
import Breadcrumbs from "@/components/breadcrumbs"
import { JsonLd } from "@/components/json-ld"
import { createPageMetadata } from "@/lib/site-metadata"

const description =
  "Explore six synthetic psychiatric cases and 71 scoring questions. The sample failure map shows how documentation errors are traced to the record."

export const metadata = createPageMetadata({
  title: "PsychWorkflowBench",
  description,
  path: "/psychworkflowbench",
})

const cases = [
  {
    id: "001",
    title: "Group home records",
    text: "Three years of copied history, pharmacy fills and administration records tell different stories about the current regimen.",
  },
  {
    id: "002",
    title: "Medication reconciliation after discharge",
    text: "Hospital orders, pharmacy records and the patient report disagree about what was prescribed and what was taken.",
  },
  {
    id: "003",
    title: "A visit by telephone",
    text: "The template asks for visual findings. The clinician discusses a dose change and withdraws it during the call.",
  },
  {
    id: "004",
    title: "Six imported diagnoses",
    text: "An evaluation must distinguish historical labels from a provisional current formulation and identify what still needs assessment.",
  },
  {
    id: "005",
    title: "Three accounts of suicide risk",
    text: "The patient, a family member and a screening questionnaire describe different time periods and perspectives. Each account needs a source and a date.",
  },
  {
    id: "006",
    title: "Orders and unfinished care",
    text: "A specimen was never collected and a therapy visit was scheduled. The note must describe what had actually happened by the encounter date.",
  },
]

export default function PsychWorkflowBenchPage() {
  const creativeWorkJson = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": "https://www.stephenmccarthypa.com/psychworkflowbench#framework",
    name: "PsychWorkflowBench",
    url: "https://www.stephenmccarthypa.com/psychworkflowbench",
    description,
    version: "0.1.0",
    creator: { "@id": "https://www.stephenmccarthypa.com/#person" },
    inLanguage: "en-US",
    keywords: [
      "clinical AI benchmarking",
      "psychiatric record synthesis",
      "behavioral health AI evaluation",
      "clinical AI red teaming",
      "medical documentation fidelity",
    ],
  }

  return (
    <>
      <JsonLd data={creativeWorkJson} />

      <section className="page-hero benchmark-page-hero section-pad-sm" id="framework">
        <div className="shell red-team-hero-grid">
          <div className="red-team-hero-copy">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "PsychWorkflowBench" }]} />
            <p className="eyebrow">PsychWorkflowBench · v0.1.0</p>
            <h1>Can a psychiatric note keep the record straight?</h1>
            <p className="page-deck">
              Six synthetic cases test whether a note preserves the source, timing and certainty of clinical information.
              The public failure map shows how individual passages in six constructed notes scored against 71 questions.
            </p>
            <div className="button-row">
              <a className="button primary" href="/psychworkflowbench/sample.html">Read the sample failure map</a>
              <Link className="button secondary" href="/consulting#pilot-review">See the private pilot</Link>
            </div>
          </div>
          <aside className="contact-card" aria-labelledby="example-title">
            <p className="eyebrow">From the sample · Case 002</p>
            <h2 id="example-title">“Lithium level 0.9 mEq/L, therapeutic.”</h2>
            <p>
              The value came from an inpatient draw on September 9, when the dose was 1200 mg.
              The follow up labs had yet to be drawn. The sample note makes the old result sound current.
            </p>
            <a className="text-link" href="/psychworkflowbench/sample.html#case-002">Inspect this finding <span aria-hidden="true">→</span></a>
          </aside>
        </div>
      </section>

      <section className="section-pad soft-section" aria-labelledby="case-heading">
        <div className="shell record-chaos-grid">
          <div className="record-chaos-copy">
            <p className="eyebrow">Case index</p>
            <h2 id="case-heading">Six encounters, six ways a note can mislead.</h2>
            <p>
              Each case has a dated encounter and several source documents. Select a case to see a passage from the example note,
              the records used to judge it and the criterion for a corrected note.
            </p>
            <p>
              The notes were written for this demonstration. Claude scored 29 checks as passes and 41 as failures.
              One critical judgment remains open. The AI drafted references and all 70 decided judgments await clinician review.
              The sample contains no results from a model or vendor under test.
            </p>
            <a className="text-link" href="/psychworkflowbench/sample.html#review">Read the scoring review notes <span aria-hidden="true">→</span></a>
          </div>
          <div className="record-list">
            {cases.map((item) => (
              <article key={item.id}>
                <h3><a href={`/psychworkflowbench/sample.html#case-${item.id}`}>{item.title}</a></h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="metrics-heading">
        <div className="shell benchmark-definition">
          <div>
            <p className="eyebrow">Scoring method</p>
            <h2 id="metrics-heading">What counts as a failure?</h2>
            <p>
              The reference records what the packet establishes at the encounter date. Each question asks about a specific
              claim, omission or unresolved discrepancy in the note. Each failure has a severity and a retest criterion.
            </p>
            <a className="text-link" href="/psychworkflowbench/sample.html#metrics">View the nine measures and their denominators <span aria-hidden="true">→</span></a>
          </div>
          <div className="record-list">
            <article><h3>A required fact was omitted</h3><p>The source supports a fact that belongs in the note, such as which dose the patient reports actually taking.</p></article>
            <article><h3>An unsupported claim was added</h3><p>The note adds a finding the source cannot establish, such as eye contact during a telephone visit.</p></article>
            <article><h3>A conflict or unknown was lost</h3><p>The note silently selects one account or makes an open question sound settled.</p></article>
          </div>
        </div>
      </section>

      <section className="section-pad soft-section" aria-labelledby="pilot-heading">
        <div className="shell privacy-panel">
          <div>
            <p className="eyebrow">Private evaluation</p>
            <h2 id="pilot-heading">Test one documentation workflow.</h2>
          </div>
          <div>
            <p>
              A private pilot reviews a specified system against its inputs. The findings identify the affected passage,
              the source evidence and what to check after a change. Describe your workflow and the decision you need to make.
              Keep patient records out of the initial inquiry.
            </p>
            <div className="button-row">
              <Link className="button primary" href="/consulting#pilot-review">See pilot scope and pricing</Link>
              <Link className="button secondary" href="/case-factory">How private cases are designed</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
