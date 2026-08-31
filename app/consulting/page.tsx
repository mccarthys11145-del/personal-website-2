import Image from "next/image"
import Link from "next/link"
import Breadcrumbs from "@/components/breadcrumbs"
import { JsonLd } from "@/components/json-ld"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "Clinical AI Red Team Testing and Benchmarking",
  description:
    "Independent behavioral health AI red team testing, model benchmarking, longitudinal psychiatric record synthesis evaluation, and clinical failure analysis by Stephen McCarthy, PA-C.",
  path: "/consulting",
})

const failureModes = [
  {
    title: "Legacy chart propagation",
    text: "Old diagnoses, discontinued medications, copied errors, and stale history are promoted into the current note as though they remain active.",
  },
  {
    title: "Medication reconciliation failure",
    text: "Duplicate strengths, discontinued medications, obsolete pharmacy lists, and conflicting MAR entries survive the synthesis process.",
  },
  {
    title: "Diagnostic incoherence",
    text: "Accumulated labels such as schizophrenia, bipolar disorder, schizoaffective disorder, and depression are repeated without a defensible current formulation.",
  },
  {
    title: "Temporal confusion",
    text: "Historical symptoms, old collateral, and past hospital findings are written as present tense facts without source or date boundaries.",
  },
  {
    title: "Unsupported documentation",
    text: "The model invents mental status findings, risk statements, family history, adherence, or other details that were never supplied.",
  },
  {
    title: "Clinical compression loss",
    text: "The output becomes shorter and more polished while omitting the facts that actually matter for safety, continuity, and decision making.",
  },
]

const metrics = [
  {
    name: "Temporal fidelity",
    text: "Whether current, historical, discontinued, and uncertain facts remain correctly separated.",
  },
  {
    name: "Medication accuracy",
    text: "Whether the final output identifies the active regimen and excludes stale or duplicate entries.",
  },
  {
    name: "Diagnostic coherence",
    text: "Whether the formulation is supported by the supplied record rather than inherited from the problem list.",
  },
  {
    name: "Contradiction handling",
    text: "Whether conflicting sources are surfaced, attributed, and resolved only when the evidence permits.",
  },
  {
    name: "Unsupported assertion rate",
    text: "How often the system adds clinical facts, findings, or certainty that do not exist in the source material.",
  },
  {
    name: "Legacy error propagation",
    text: "How often deliberately stale or incorrect chart content survives into the generated note.",
  },
  {
    name: "Clinically relevant recall",
    text: "Whether the important current symptoms, risks, medications, and uncertainties survive compression.",
  },
  {
    name: "Critical failure rate",
    text: "The frequency of errors with plausible safety, treatment, handoff, or deployment consequences.",
  },
]

const services = [
  {
    title: "Benchmark audit",
    text: "Run a system against a fixed psychiatric task suite and return dimension scores, failure cases, and a prioritized remediation map.",
    note: "Best for an initial reliability baseline",
  },
  {
    title: "Custom red team audit",
    text: "Build adversarial cases around the actual product, workflow, prompts, data format, and known risk surface.",
    note: "Best for predeployment stress testing",
  },
  {
    title: "Model selection evaluation",
    text: "Compare candidate models and configurations on the same clinical workload instead of relying on general benchmark scores.",
    note: "Best before procurement or architecture decisions",
  },
  {
    title: "Remediation retest",
    text: "Rerun the same cases after prompt, workflow, retrieval, or model changes and quantify which failures improved or regressed.",
    note: "Best after engineering changes",
  },
  {
    title: "Continuous clinical evaluation",
    text: "Maintain a private regression suite for major model, prompt, workflow, and knowledge base updates.",
    note: "Best for production systems",
  },
]

const pilotIncludes = [
  "One defined behavioral health workflow or up to 20 deidentified outputs",
  "One model, prompt configuration, or existing system under test",
  "A clinician authored scoring rubric tailored to the intended use",
  "Sentence level findings linked to source evidence",
  "A severity ranked failure map",
  "A concise remediation plan and retest criteria",
  "A forty five minute findings review",
]

export default function ConsultingPage() {
  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.stephenmccarthypa.com/consulting#service",
    name: "Clinical AI Red Team Testing and Benchmarking",
    url: "https://www.stephenmccarthypa.com/consulting",
    description:
      "Independent clinician led testing of behavioral health AI systems for longitudinal record synthesis, documentation fidelity, medication reconciliation, diagnostic coherence, safety, and workflow reliability.",
    provider: { "@id": "https://www.stephenmccarthypa.com/#person" },
    areaServed: "United States",
    serviceType: [
      "Clinical AI red team testing",
      "Behavioral health AI benchmarking",
      "Longitudinal psychiatric record synthesis evaluation",
      "Clinical documentation failure analysis",
      "Model selection evaluation",
    ],
    offers: {
      "@type": "Offer",
      name: "Founding clinical AI red team pilot",
      price: "1500",
      priceCurrency: "USD",
      availability: "https://schema.org/LimitedAvailability",
    },
  }

  return (
    <>
      <JsonLd data={serviceJson} />

      <section className="page-hero red-team-hero section-pad-sm">
        <div className="shell red-team-hero-grid">
          <div className="red-team-hero-copy">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Consulting" }]} />
            <p className="eyebrow">Clinical AI red team testing and benchmarking</p>
            <h1>Stress test the system before the psychiatric chart does.</h1>
            <p className="page-deck">
              I evaluate behavioral health AI systems against realistic longitudinal records, adversarial clinical scenarios,
              and clinician authored scoring rubrics to identify hallucinations, stale chart propagation, medication errors,
              diagnostic incoherence, and safety failures before deployment.
            </p>
            <div className="button-row">
              <a
                className="button primary"
                href="mailto:mccarthys11145@gmail.com?subject=Clinical%20AI%20red%20team%20inquiry"
              >
                Request a red team discussion
              </a>
              <Link className="button secondary" href="/psychworkflowbench">
                Explore PsychWorkflowBench
              </Link>
            </div>
            <p className="status-line">
              <span className="status-dot" aria-hidden="true" />
              Private custom evaluations are available while the public benchmark methodology is under development.
            </p>
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

      <section className="fact-band" aria-labelledby="evaluation-proof-title">
        <div className="shell">
          <div className="section-heading compact">
            <p className="eyebrow light">A clinician built evaluation layer</p>
            <h2 id="evaluation-proof-title">General benchmark scores do not reveal whether a system can survive the actual psychiatric record.</h2>
          </div>
          <div className="fact-grid">
            <article>
              <span className="fact-number">01</span>
              <h3>Real workflow pressure</h3>
              <p>
                Cases are built around longitudinal records, conflicting sources, old medication entries, accumulated diagnoses,
                copied documentation, and incomplete current information.
              </p>
            </article>
            <article>
              <span className="fact-number">02</span>
              <h3>Clinician truth state</h3>
              <p>
                Each case separates current supported facts, historical facts, contradictions, stale entries, uncertainties,
                and information that the model must not invent.
              </p>
            </article>
            <article>
              <span className="fact-number">03</span>
              <h3>Decision ready findings</h3>
              <p>
                The result is not merely a score. Every important failure is linked to source evidence, severity,
                likely root cause, remediation, and retest criteria.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="chart-heading">
        <div className="shell record-chaos-grid">
          <div className="record-chaos-copy">
            <p className="eyebrow">The core stress test</p>
            <h2 id="chart-heading">Can the system reconstruct the present clinical state from years of chart sediment?</h2>
            <p>
              The difficult task is not recalling a DSM fact. It is deciding what remains current after multiple group home ISPs,
              hospital records, progress notes, medication administration records, pharmacy lists, collateral reports,
              and legacy diagnoses are placed in the same packet.
            </p>
            <p>
              A strong system should compress that packet into a useful current representation without resurrecting discontinued medication,
              treating historical symptoms as present, copying every inherited diagnosis, or manufacturing a complete mental status examination.
            </p>
          </div>

          <div className="record-list" aria-label="Examples of realistic chart contamination">
            <article>
              <h3>Multiple group home ISPs</h3>
              <p>Repeated background material, different dates, changing staff observations, and copied functional descriptions.</p>
            </article>
            <article>
              <h3>Medication lists with fossils</h3>
              <p>Duplicate strengths, old prescriptions, discontinued medications, and disagreement between the MAR and the chart list.</p>
            </article>
            <article>
              <h3>Diagnosis accumulation</h3>
              <p>Schizophrenia, bipolar disorder, schizoaffective disorder, depression, anxiety, and unspecified psychosis carried together.</p>
            </article>
            <article>
              <h3>Conflicting patient and staff reports</h3>
              <p>Current denials, recent collateral, historical symptoms, and uncertain timelines that require attribution rather than silent selection.</p>
            </article>
            <article>
              <h3>Unsupported note completion</h3>
              <p>Pressure to fill appearance, eye contact, speech, orientation, memory, insight, judgment, and risk fields that were never observed.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad soft-section" aria-labelledby="failure-heading">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Failure modes</p>
            <h2 id="failure-heading">The output can be fluent and still be clinically untrustworthy.</h2>
            <p>
              Red team cases are designed to reveal where polished language conceals temporal confusion, inherited chart error,
              missing information, or unsupported certainty.
            </p>
          </div>
          <div className="evaluation-grid">
            {failureModes.map((item, index) => (
              <article className="evaluation-card" key={item.title}>
                <span className="evaluation-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad benchmark-feature" aria-labelledby="benchmark-heading">
        <div className="shell benchmark-feature-grid">
          <div className="benchmark-visual">
            <Image
              src="/clinical-ai-failure-map.svg"
              alt="Clinical AI evaluation diagram tracing noisy psychiatric records into a clinician truth state and a sentence level scored note"
              width={960}
              height={620}
              sizes="(max-width: 860px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="eyebrow">PsychWorkflowBench</p>
            <h2 id="benchmark-heading">A working framework for longitudinal psychiatric reasoning, documentation, and safety.</h2>
            <p>
              PsychWorkflowBench is the working name for a clinician authored evaluation framework under development.
              The framework is designed to test real psychiatric workflow performance rather than exam style medical recall.
            </p>
            <div className="benchmark-module-list" aria-label="PsychWorkflowBench modules">
              <span>Record synthesis</span>
              <span>Medication reconciliation</span>
              <span>Diagnostic coherence</span>
              <span>Temporal fidelity</span>
              <span>Documentation fidelity</span>
              <span>Safety and escalation</span>
            </div>
            <p>
              Custom private cases can be built around a client system now. Public benchmark publication, validation,
              and any research use remain separate later phases.
            </p>
            <Link className="text-link" href="/psychworkflowbench">
              Review the methodology <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="metrics-heading">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">What gets measured</p>
            <h2 id="metrics-heading">A score should reveal the anatomy of failure.</h2>
            <p>
              Overall performance is useful only when the buyer can see which clinical capability failed,
              how often it failed, and whether the failure matters for the intended use.
            </p>
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

      <section className="section-pad soft-section" aria-labelledby="services-heading">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Evaluation services</p>
            <h2 id="services-heading">From one focused audit to a private regression program.</h2>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <strong>{String(index + 1).padStart(2, "0")}</strong>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <small>{service.note}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" id="pilot-review" aria-labelledby="pilot-heading">
        <div className="shell pilot-panel">
          <div>
            <span className="pilot-label">Founding red team pilot</span>
            <strong className="pilot-price">$1,500</strong>
            <p>Limited to the first three completed pilot engagements.</p>
          </div>
          <div>
            <h2 id="pilot-heading">A fixed scope first test with a concrete engineering decision at the end.</h2>
            <ul>
              {pilotIncludes.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p>
              Normal delivery is seven business days after complete materials are received. Custom multi model comparisons,
              larger case suites, deployment validation programs, and formal research studies are scoped separately.
            </p>
            <a
              className="button secondary light-button"
              href="mailto:mccarthys11145@gmail.com?subject=Founding%20clinical%20AI%20red%20team%20pilot"
            >
              Discuss a pilot
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="process-heading">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Process</p>
            <h2 id="process-heading">Define the risk, build the cases, map the failures, retest the fix.</h2>
          </div>
          <div className="process-track">
            <article className="process-node">
              <h3>Map the intended use</h3>
              <p>Define the users, input material, clinical purpose, system boundary, and decision the evaluation must support.</p>
            </article>
            <article className="process-node">
              <h3>Build the truth state</h3>
              <p>Create structured current facts, historical facts, contradictions, uncertainties, and prohibited unsupported claims.</p>
            </article>
            <article className="process-node">
              <h3>Run and classify failures</h3>
              <p>Score outputs, trace errors to source evidence, assign severity, and identify likely prompt, retrieval, model, or workflow causes.</p>
            </article>
            <article className="process-node">
              <h3>Prioritize and retest</h3>
              <p>Deliver remediation priorities and objective criteria for confirming that the next version improved without creating regression.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad soft-section" aria-labelledby="boundaries-heading">
        <div className="shell privacy-panel">
          <div>
            <p className="eyebrow">Boundaries</p>
            <h2 id="boundaries-heading">Independent risk discovery, not decorative certification.</h2>
          </div>
          <div>
            <p>
              Initial inquiries must not contain patient records or protected health information. Evaluation material should be synthetic
              or properly deidentified unless appropriate contracts, secure systems, permissions, and data handling arrangements are in place.
            </p>
            <p>
              The service provides clinical and operational analysis. It is not legal advice, regulatory certification,
              formal validation, or a guarantee that a system is safe, compliant, or ready for independent clinical use.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad quote-section">
        <div className="shell quote-wrap">
          <blockquote>
            The question is not whether the note sounds clinical. The question is whether every important sentence survives contact with the record.
          </blockquote>
          <div>
            <p>
              Send a concise description of the system, intended use, material being processed, current concern,
              and the decision the evaluation must support. Do not attach patient material to an initial email.
            </p>
            <div className="button-row">
              <a
                className="button secondary light-button"
                href="mailto:mccarthys11145@gmail.com?subject=Clinical%20AI%20evaluation%20inquiry"
              >
                Email Stephen
              </a>
              <Link className="text-link" href="/about">
                Review the professional background <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
