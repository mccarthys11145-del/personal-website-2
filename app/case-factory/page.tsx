import Image from "next/image"
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

const packetComponents = [
  {
    title: "Longitudinal residential records",
    text: "Several synthetic group home ISPs from different periods, with realistic repetition, changing function, and copied background material.",
  },
  {
    title: "Competing medication sources",
    text: "A current MAR, old medication lists, pharmacy history, discontinued entries, duplicate strengths, and one unresolved status conflict.",
  },
  {
    title: "Accumulated diagnosis history",
    text: "Supported, historical, provisional, overlapping, and unsupported psychiatric labels that must not simply be copied into the final note.",
  },
  {
    title: "Current interview and collateral",
    text: "Patient report, staff report, recent clinician documentation, and at least one clinically meaningful disagreement between sources.",
  },
  {
    title: "Known traps and missing facts",
    text: "Seeded stale facts, old symptoms, tempting template fields, and information the evaluated model should identify as unknown.",
  },
]

const outputs = [
  {
    label: "Source inventory",
    text: "A coded map of record types, chronology, clinical domains, contradiction potential, benchmark value, and privacy risk.",
  },
  {
    label: "Fact matrix",
    text: "Every clinically relevant fact linked to provenance, temporal status, reliability, conflict group, and current support level.",
  },
  {
    label: "Synthetic packet",
    text: "A new case that preserves the reasoning traps while changing identity, biography, dates, facilities, and distinctive narrative details.",
  },
  {
    label: "Gold clinical state",
    text: "Current medications, discontinued medications, supported diagnoses, historical diagnoses, symptoms, contradictions, unknowns, and safety facts.",
  },
  {
    label: "Gold note",
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

      <section className="page-hero benchmark-page-hero section-pad-sm">
        <div className="shell red-team-hero-grid">
          <div className="red-team-hero-copy">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Factory" }]} />
            <div className="benchmark-status">Private workflow under development</div>
            <p className="eyebrow">PsychWorkflowBench Case Factory</p>
            <h1>Turn authorized chart complexity into synthetic cases that expose clinical AI failure.</h1>
            <p className="page-deck">
              The case factory converts the reasoning structure of difficult psychiatric records into synthetic benchmark packets,
              structured truth states, gold notes, scoring rubrics, and private regression suites. It preserves the clinical puzzle
              while removing the identity and biography of any real person.
            </p>
            <div className="button-row">
              <a
                className="button primary"
                href="mailto:mccarthys11145@gmail.com?subject=Private%20benchmark%20case%20factory%20inquiry"
              >
                Discuss a private case suite
              </a>
              <Link className="button secondary" href="/psychworkflowbench">
                Review PsychWorkflowBench
              </Link>
            </div>
          </div>

          <div className="red-team-hero-art">
            <Image
              src="/psychworkflowbench-pipeline.svg"
              alt="PsychWorkflowBench pipeline from noisy psychiatric records through a model under test to a scored clinical failure map"
              width={1200}
              height={780}
              priority
              sizes="(max-width: 860px) 100vw, 46vw"
            />
          </div>
        </div>
      </section>

      <section className="fact-band" aria-labelledby="factory-proof-title">
        <div className="shell">
          <div className="section-heading compact">
            <p className="eyebrow light">Three transformations</p>
            <h2 id="factory-proof-title">Preserve the reasoning difficulty, replace the identifying story, and keep the answer key private.</h2>
          </div>
          <div className="fact-grid">
            <article>
              <span className="fact-number">01</span>
              <h3>Map the source pattern</h3>
              <p>
                Identify chronology, medication conflicts, diagnosis pileup, copied errors, collateral disagreement,
                missing information, and the clinically important facts buried in repetition.
              </p>
            </article>
            <article>
              <span className="fact-number">02</span>
              <h3>Build a synthetic twin</h3>
              <p>
                Change identity, demographics, facilities, dates, family structure, quotations, and distinctive life events
                while preserving the same reasoning traps and scoring target.
              </p>
            </article>
            <article>
              <span className="fact-number">03</span>
              <h3>Create a held out test</h3>
              <p>
                Keep the truth state, rubric, critical failure flags, and selected variants private so the evaluation measures
                system behavior rather than answer retrieval.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="factory-sequence-title">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Case factory sequence</p>
            <h2 id="factory-sequence-title">A reproducible path from authorized source material to a scorable synthetic case.</h2>
          </div>
          <div className="process-track">
            <article className="process-node">
              <h3>Inventory and code</h3>
              <p>Assign source codes, relative chronology, record type, privacy risk, contradiction potential, and benchmark value.</p>
            </article>
            <article className="process-node">
              <h3>Construct the fact matrix</h3>
              <p>Separate patient report, staff collateral, observation, prior assessment, MAR data, problem list entries, and copied text.</p>
            </article>
            <article className="process-node">
              <h3>Generate and challenge</h3>
              <p>Create a synthetic base case plus controlled variants for medication contamination, diagnosis pileup, and timeline conflict.</p>
            </article>
            <article className="process-node">
              <h3>Adjudicate and lock</h3>
              <p>Complete clinician review, privacy review, gold state, gold note, scoring rubric, and private release status.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad soft-section" aria-labelledby="packet-title">
        <div className="shell record-chaos-grid">
          <div className="record-chaos-copy">
            <p className="eyebrow">Synthetic packet design</p>
            <h2 id="packet-title">The packet should feel like a real chart without representing a real patient.</h2>
            <p>
              A difficult case needs enough redundancy and contradiction to force genuine synthesis. It also needs a stable gold state
              so different models, prompts, retrieval systems, or workflow configurations can be compared fairly.
            </p>
          </div>
          <div className="record-list">
            {packetComponents.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad benchmark-feature" aria-labelledby="factory-output-title">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Case package</p>
            <h2 id="factory-output-title">Every case should be reviewable, scorable, and usable without reopening the real source record.</h2>
          </div>
          <div className="module-grid">
            {outputs.map((item, index) => (
              <article className="module-card" key={item.label}>
                <span>OUTPUT {String(index + 1).padStart(2, "0")}</span>
                <h3>{item.label}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="review-title">
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
            <p className="eyebrow">Quality control</p>
            <h2 id="review-title">The benchmark must be difficult for the right reason.</h2>
            <p>
              Case review checks whether the dates remain internally consistent, medication doses remain plausible,
              intended contradictions survived synthesis, the gold note contains no invented findings, and the task can be scored
              without access to the real source record.
            </p>
            <p>
              Privacy review remains separate from clinical review. A synthetic case is not treated as approved for public release
              merely because it contains no direct identifier.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad soft-section" aria-labelledby="factory-boundaries-title">
        <div className="shell privacy-panel">
          <div>
            <p className="eyebrow">Privacy and research boundaries</p>
            <h2 id="factory-boundaries-title">Clinical access does not automatically authorize benchmark use.</h2>
          </div>
          <div>
            <p>
              Real records should be processed only inside an approved environment with appropriate authorization, contracts,
              data controls, and human review. Initial inquiries must not include patient records or protected health information.
            </p>
            <p>
              Public release, publication, external research, client distribution, and regulatory use are separate decisions.
              Each requires its own governance, privacy review, permissions, and validation plan.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad quote-section">
        <div className="shell quote-wrap">
          <blockquote>
            The synthetic case should preserve the trap, not the person.
          </blockquote>
          <div>
            <p>
              A private case suite can begin with one narrow workflow and a small set of clinician reviewed cases before expanding
              into a larger benchmark or continuous regression program.
            </p>
            <div className="button-row">
              <Link className="button secondary light-button" href="/consulting">Review red team services</Link>
              <Link className="text-link" href="/psychworkflowbench">Benchmark methodology <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
