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
  "A 45 minute findings review",
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

      <section className="page-hero red-team-hero section-pad-sm" id="service">
        <div className="shell red-team-hero-grid">
          <div className="red-team-hero-copy">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Consulting" }]} />
            <p className="eyebrow">Clinical AI consulting</p>
            <h1>Test your psychiatric documentation system.</h1>
            <p className="page-deck">
              I review generated notes against the records that produced them. Your team sees which passages change the clinical
              history, omit a risk signal or turn an unverified detail into a charted fact, and what to check after a fix.
            </p>
            <div className="button-row">
              <a className="button primary" href="#pilot-review">See the $1,500 pilot</a>
              <a className="button secondary" href="/psychworkflowbench/sample.html">Read a sample report</a>
            </div>
          </div>
          <div className="red-team-hero-art">
            <Image
              src="/psychworkflowbench-pipeline.svg"
              alt="Evaluation workflow from dated psychiatric source records through a system under test to an error report."
              width={1200}
              height={780}
              priority
              sizes="(max-width: 860px) 100vw, 46vw"
            />
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
            <h2 id="pilot-heading">What the pilot includes</h2>
            <ul>{pilotIncludes.map((item) => <li key={item}>{item}</li>)}</ul>
            <p>
              Normal delivery is seven business days after complete materials are received. Larger suites, comparisons
              across several models, deployment validation programs and formal research studies are scoped separately.
            </p>
            <p>
              In your initial email, describe the workflow, the configuration and the decision you need to make.
              Please leave out patient information and attachments containing clinical records.
            </p>
            <a
              className="button secondary light-button"
              href="mailto:mccarthys11145@gmail.com?subject=Founding%20clinical%20AI%20red%20team%20pilot"
            >Email Stephen about the pilot</a>
          </div>
        </div>
      </section>

      <section className="section-pad soft-section" aria-labelledby="benchmark-heading">
        <div className="shell benchmark-definition">
          <div>
            <p className="eyebrow">Sample deliverable</p>
            <h2 id="benchmark-heading">What an engineering team can retest</h2>
            <p>
              One sample note reported a normal blood count. The source showed that the test was ordered and the specimen
              was never collected. The retest asks whether the revised note preserves that distinction.
            </p>
            <a className="text-link" href="/psychworkflowbench/sample.html#case-006">Read the finding and source references <span aria-hidden="true">→</span></a>
          </div>
          <div className="record-list">
            <article>
              <h3>Public benchmark sample</h3>
              <p>Six synthetic cases, 71 scoring questions and nine measures. The example notes were constructed. An AI judge scored them, and the references and judgments await clinician review.</p>
              <p><Link href="/psychworkflowbench">Explore the cases and scoring method</Link></p>
            </article>
            <article>
              <h3>Pilot using entirely synthetic material</h3>
              <p>For one workflow and one baseline configuration, review up to 20 synthetic outputs. This version has its own deposit terms, delivery conditions and inquiry form.</p>
              <p><a href="/pwb-pilot.html">Read the synthetic pilot terms and prepare an inquiry</a></p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="services-heading">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Other engagements</p>
            <h2 id="services-heading">Choose the evaluation that fits the decision.</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <small>{service.note}</small>
              </article>
            ))}
          </div>
          <div className="button-row">
            <Link className="text-link" href="/case-factory">How private test cases are designed <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section-pad soft-section" aria-labelledby="boundaries-heading">
        <div className="shell privacy-panel">
          <div>
            <p className="eyebrow">Before sharing material</p>
            <h2 id="boundaries-heading">Start with a description of the workflow.</h2>
          </div>
          <div>
            <p>
              Use synthetic or properly deidentified material for evaluation. Work involving patient information requires
              appropriate agreements, secure systems, permissions and data handling arrangements before transfer.
              The synthetic pilot accepts entirely fictional material only.
            </p>
            <p>
              Findings apply to the agreed inputs and configuration. Legal opinions, regulatory certification,
              formal validation and guarantees of deployment safety are outside the scope of this service.
            </p>
            <div className="button-row">
              <a className="button primary" href="mailto:mccarthys11145@gmail.com?subject=Clinical%20AI%20evaluation%20inquiry">Email Stephen</a>
              <Link className="button secondary" href="/about">Professional background</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
