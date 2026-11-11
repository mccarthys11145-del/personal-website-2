import Image from "next/image"
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
    title: "Group home records",
    text: "Three years of copied history, pharmacy fills and administration records tell different stories about the current regimen.",
  },
  {
    title: "Medication reconciliation after discharge",
    text: "Hospital orders, pharmacy records and the patient report disagree about what was prescribed and what was taken.",
  },
  {
    title: "A visit by telephone",
    text: "The template asks for visual findings. The clinician discusses a dose change and withdraws it during the call.",
  },
  {
    title: "Six imported diagnoses",
    text: "An evaluation must distinguish historical labels from a provisional current formulation and identify what still needs assessment.",
  },
  {
    title: "Three accounts of suicide risk",
    text: "The patient, a family member and a screening questionnaire describe different time periods and perspectives. Each account needs a source and a date.",
  },
  {
    title: "Orders and unfinished care",
    text: "A specimen was never collected and a therapy visit was scheduled. The note must describe what had actually happened by the encounter date.",
  },
]

const truthState = [
  {
    label: "Current and supported",
    text: "Facts that are recent, source attributable, internally consistent, and appropriate to place in the present formulation.",
  },
  {
    label: "Historical and relevant",
    text: "Past symptoms, episodes, diagnoses, medications, and events that inform the current case without becoming current facts.",
  },
  {
    label: "Contradictory or stale",
    text: "Information that conflicts with stronger evidence, appears copied forward, or has been superseded by later records.",
  },
  {
    label: "Unknown",
    text: "Questions the model should surface rather than answer through inference, completion pressure, or diagnostic habit.",
  },
]

const modules = [
  {
    name: "Longitudinal record reconstruction",
    text: "Rebuild the present clinical state from a noisy sequence of records while preserving chronology and source boundaries.",
  },
  {
    name: "Medication reconciliation",
    text: "Identify the active regimen, remove stale entries, detect duplicates, and flag unresolved disagreement between sources.",
  },
  {
    name: "Diagnostic coherence",
    text: "Produce the most defensible current formulation while separating supported, historical, provisional, and unsupported diagnoses.",
  },
  {
    name: "Contradiction detection",
    text: "Recognize incompatible reports and data instead of silently choosing one source or blending them into false certainty.",
  },
  {
    name: "Documentation fidelity",
    text: "Generate a useful note without inventing mental status findings, history, risk statements, treatment decisions, or patient consent.",
  },
  {
    name: "Safety and escalation",
    text: "Preserve clinically important risk information and identify when missing evidence or conflict requires human review.",
  },
]

const metrics = [
  {
    name: "Fact fidelity",
    text: "Supported source facts preserved accurately in the final output.",
  },
  {
    name: "Temporal fidelity",
    text: "Current, historical, discontinued, and uncertain information kept distinct.",
  },
  {
    name: "Medication reconciliation accuracy",
    text: "Correct active medications retained and obsolete entries excluded.",
  },
  {
    name: "Diagnostic coherence",
    text: "Current diagnostic formulation supported by the supplied evidence.",
  },
  {
    name: "Contradiction and unknown handling",
    text: "Conflicting accounts and unanswered questions that remain visible in the note.",
  },
  {
    name: "Unsupported detail rate",
    text: "Share of seeded opportunities where the note asserted an unsupported detail.",
  },
  {
    name: "Legacy error propagation",
    text: "Deliberately stale or incorrect chart content carried into the output.",
  },
  {
    name: "Clinically relevant recall",
    text: "Important current information retained after compression.",
  },
  {
    name: "Critical failure rate",
    text: "Share of decided critical probes that failed. Unresolved probes are reported separately.",
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

      <section className="page-hero benchmark-page-hero section-pad-sm">
        <div className="shell red-team-hero-grid">
          <div className="red-team-hero-copy">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "PsychWorkflowBench" }]} />
            <div className="benchmark-status">Version 0.1.0 · Demonstration</div>
            <p className="eyebrow">PsychWorkflowBench</p>
            <h1>Can a psychiatric note keep the record straight?</h1>
            <p className="page-deck">
              Six synthetic cases and 71 scoring questions test whether a note preserves what matters at the time of the visit.
              The sample failure map traces errors in deliberately constructed notes back to the record.
            </p>
            <div className="button-row">
              <a className="button primary" href="/psychworkflowbench/sample.html">Read the sample failure map</a>
              <Link className="button secondary" href="/consulting#pilot-review">Explore the private pilot</Link>
            </div>
          </div>

          <div className="red-team-hero-art">
            <Image
              src="/psychworkflowbench-pipeline.svg"
              alt="PsychWorkflowBench diagram showing noisy psychiatric records, a model under test, and a clinical failure map"
              width={1200}
              height={780}
              priority
              sizes="(max-width: 860px) 100vw, 46vw"
            />
          </div>
        </div>
      </section>

      <section className="section-pad soft-section" aria-labelledby="case-heading">
        <div className="shell record-chaos-grid">
          <div className="record-chaos-copy">
            <p className="eyebrow">The six cases</p>
            <h2 id="case-heading">What belongs in the note today?</h2>
            <p>
              Each case supplies records for one dated encounter. A scoring question checks whether the note kept a
              required fact, introduced an unsupported claim, or preserved an important discrepancy or unknown.
            </p>
            <p>
              An AI reviewer scored 29 checks as passes and 41 as failures. One critical judgment remains open.
              The reference answers and all 70 decided judgments await clinician review. The notes were written for this
              demonstration. Testing a model or vendor product is a separate step.
            </p>
            <a className="text-link" href="/psychworkflowbench/sample.html">
              See the evidence for each case <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="record-list">
            {cases.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="truth-heading">
        <div className="shell benchmark-definition">
          <div>
            <p className="eyebrow">Reference answers</p>
            <h2 id="truth-heading">Score against a structured truth state before judging the prose.</h2>
            <p>
              The reference for each case records what the sources establish at the encounter date, where they disagree,
              and what remains unknown. The demonstration uses provisional references drafted with AI.
            </p>
          </div>
          <div className="truth-state-grid">
            {truthState.map((item) => (
              <article className="truth-state-card" key={item.label}>
                <span>{item.label}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad benchmark-feature" aria-labelledby="modules-heading">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Benchmark modules</p>
            <h2 id="modules-heading">One record packet can expose several distinct clinical capabilities.</h2>
            <p>
              Module level scoring prevents a strong writing style from hiding weak chronology, medication reconciliation,
              diagnostic reasoning, or safety behavior.
            </p>
          </div>
          <div className="module-grid">
            {modules.map((module, index) => (
              <article className="module-card" key={module.name}>
                <span>MODULE {String(index + 1).padStart(2, "0")}</span>
                <h3>{module.name}</h3>
                <p>{module.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="trace-heading">
        <div className="shell benchmark-feature-grid">
          <div className="benchmark-visual">
            <Image
              src="/clinical-ai-failure-map.svg"
              alt="Diagram showing noisy records converted into a clinician truth state and then a sentence level scored clinical note"
              width={960}
              height={620}
              sizes="(max-width: 860px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="eyebrow">Sentence level traceability</p>
            <h2 id="trace-heading">Every important sentence should have a source, a status, and a reason to be present.</h2>
            <p>
              A generated note can be reviewed sentence by sentence against the truth state. Supported statements pass.
              Uncertain statements should retain uncertainty. Unsupported statements receive a failure label and severity.
              Important missing facts are scored as omissions rather than disappearing into an overall impression.
            </p>
            <p>
              The resulting report can distinguish model failures from retrieval failures, prompt failures,
              workflow design failures, and simple absence of necessary source information.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad soft-section" aria-labelledby="metrics-heading">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Signature metrics</p>
            <h2 id="metrics-heading">Measure what survives, what mutates, and what appears from nowhere.</h2>
          </div>
          <div className="metric-chip-grid">
            {metrics.map((metric, index) => (
              <article className="metric-chip" key={metric.name}>
                <span>Metric {String(index + 1).padStart(2, "0")}</span>
                <h3>{metric.name}</h3>
                <p>{metric.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="sequence-heading">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Evaluation sequence</p>
            <h2 id="sequence-heading">A reproducible path from source packet to remediation.</h2>
          </div>
          <div className="process-track">
            <article className="process-node">
              <h3>Construct the case</h3>
              <p>Define source documents, seeded traps, intended clinical task, and the information that must remain unknown.</p>
            </article>
            <article className="process-node">
              <h3>Create the truth state</h3>
              <p>Map current facts, historical facts, contradictions, stale entries, supported diagnoses, and current medications.</p>
            </article>
            <article className="process-node">
              <h3>Run blinded outputs</h3>
              <p>Test models or product configurations under the same instructions, context limits, tools, and output requirements.</p>
            </article>
            <article className="process-node">
              <h3>Score and retest</h3>
              <p>Classify failures, assign severity, recommend changes, and rerun the same suite to detect improvement or regression.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad soft-section" aria-labelledby="principles-heading">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Design principles</p>
            <h2 id="principles-heading">Useful evaluation requires more than a public leaderboard.</h2>
          </div>
          <div className="benchmark-principles">
            <article className="benchmark-principle">
              <h3>Private cases reduce benchmark gaming</h3>
              <p>
                The public methodology can remain inspectable while client specific cases and a rotating private suite preserve a meaningful test.
              </p>
            </article>
            <article className="benchmark-principle">
              <h3>Critical failures remain visible</h3>
              <p>
                A high average score cannot erase an invented medication, missed risk factor, false current diagnosis, or unsupported treatment claim.
              </p>
            </article>
            <article className="benchmark-principle">
              <h3>Human plus AI can be tested separately</h3>
              <p>
                The framework can compare clinician alone, model alone, and clinician with model performance when the study design supports it.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="status-heading">
        <div className="shell pilot-panel">
          <div>
            <span className="pilot-label">Current status</span>
            <strong className="pilot-price">v0.1.0</strong>
            <p>Six synthetic cases · November 2026</p>
          </div>
          <div>
            <h2 id="status-heading">A private pilot tests one documentation workflow.</h2>
            <p>
              The sample shows the report format. A pilot applies the scoring method to a specified system and
              documents the source evidence and retest criterion for each finding.
            </p>
            <a
              className="button secondary light-button"
              href="mailto:mccarthys11145@gmail.com?subject=PsychWorkflowBench%20private%20pilot"
            >
              Discuss a private pilot
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad quote-section">
        <div className="shell quote-wrap">
          <blockquote>
            A useful clinical benchmark should punish the model for preserving the wrong history as aggressively as it rewards fluent prose.
          </blockquote>
          <div>
            <p>
              Initial inquiries should describe the system and intended use without including patient records or protected health information.
            </p>
            <div className="button-row">
              <Link className="button secondary light-button" href="/consulting">Red team services</Link>
              <Link className="text-link" href="/contact">Contact options <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
