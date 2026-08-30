import Link from "next/link"
import Breadcrumbs from "@/components/breadcrumbs"
import { JsonLd } from "@/components/json-ld"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "Behavioral Health AI and Workflow Consulting",
  description:
    "Stephen McCarthy provides behavioral health AI review, clinical documentation analysis, workflow consulting, and patient communication review for practices and health technology teams.",
  path: "/consulting",
})

const reviewAreas = [
  "Clinical accuracy and important omissions",
  "Unsupported conclusions and internal contradictions",
  "Risk language and escalation pathways",
  "Documentation usefulness and clinician usability",
  "Patient readability and communication quality",
  "Scope boundaries and foreseeable failure modes",
]

const deliverables = [
  "A concise risk matrix",
  "Annotated findings on the submitted material",
  "Revisions to two priority prompts or templates",
  "A ranked improvement plan",
  "A thirty day implementation roadmap",
  "A forty five minute review meeting",
  "One round of written clarification",
]

export default function ConsultingPage() {
  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.stephenmccarthypa.com/consulting#service",
    name: "Behavioral Health AI and Workflow Consulting",
    url: "https://www.stephenmccarthypa.com/consulting",
    description:
      "Clinical review of behavioral health AI outputs, documentation systems, patient communication workflows, and related educational material.",
    provider: { "@id": "https://www.stephenmccarthypa.com/#person" },
    areaServed: "United States",
    serviceType: [
      "Clinical AI review",
      "Behavioral health workflow consulting",
      "Clinical documentation review",
      "Patient communication review",
    ],
  }

  return (
    <>
      <JsonLd data={serviceJson} />

      <section className="page-hero section-pad-sm">
        <div className="shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Consulting" }]} />
          <p className="eyebrow">Behavioral health AI and workflow consulting</p>
          <h1>Clinical AI and behavioral health workflows shaped by frontline psychiatric experience.</h1>
          <p className="page-deck">
            I help behavioral health practices and health technology teams review clinical AI outputs,
            improve documentation and patient communication workflows, and turn complex psychiatric information
            into clear, usable tools.
          </p>
          <div className="button-row">
            <a
              className="button primary"
              href="mailto:mccarthys11145@gmail.com?subject=Behavioral%20health%20AI%20consulting%20inquiry"
            >
              Discuss a pilot review
            </a>
            <a className="button secondary" href="#pilot-review">
              Review the pilot scope
            </a>
          </div>
        </div>
      </section>

      <section className="fact-band" aria-labelledby="consulting-proof-title">
        <div className="shell">
          <div className="section-heading compact">
            <p className="eyebrow light">Clinical judgment translated into systems</p>
            <h2 id="consulting-proof-title">A bridge between clinical care, product design, operations, and communication</h2>
          </div>
          <div className="fact-grid">
            <article>
              <span className="fact-number">01</span>
              <h3>Psychiatric experience</h3>
              <p>
                More than 11 years across inpatient care, outpatient care, addiction treatment, telehealth,
                geriatric psychiatry, medication management, and clinical leadership.
              </p>
            </article>
            <article>
              <span className="fact-number">02</span>
              <h3>Workflow experience</h3>
              <p>
                Direct experience with documentation quality, patient intake, communication systems, practice operations,
                digital tools, and clinician guided automation.
              </p>
            </article>
            <article>
              <span className="fact-number">03</span>
              <h3>Clear evidence standards</h3>
              <p>
                Recommendations distinguish observed problems, reasonable inferences, unresolved questions, and claims
                that require stronger evidence.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="problems-heading">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Problems worth reviewing</p>
            <h2 id="problems-heading">Polished output can still conceal clinical weakness.</h2>
            <p>
              A useful review asks whether the system preserves clinically important information, communicates uncertainty,
              supports the intended decision, and gives people a clear path to human intervention.
            </p>
          </div>
          <div className="card-grid three">
            <article className="plain-card">
              <span className="card-kicker">Clinical AI</span>
              <h3>Accurate language with missing substance</h3>
              <p>
                Notes, summaries, prompts, and patient messages may sound professional while omitting risk factors,
                context, competing explanations, or essential follow up.
              </p>
            </article>
            <article className="plain-card">
              <span className="card-kicker">Workflow</span>
              <h3>Information collected without a useful result</h3>
              <p>
                Intake and documentation systems can create more data while failing to improve the clinical summary,
                handoff, decision, or next action.
              </p>
            </article>
            <article className="plain-card">
              <span className="card-kicker">Communication</span>
              <h3>Words that send the wrong signal</h3>
              <p>
                Patient education and staff guidance can be technically correct yet overly reassuring, unnecessarily alarming,
                vague about uncertainty, or unclear about escalation.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad soft-section" id="pilot-review" aria-labelledby="pilot-heading">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Founding offer</p>
            <h2 id="pilot-heading">Behavioral Health AI and Workflow Review</h2>
            <p>
              A fixed scope review for a behavioral health practice, telepsychiatry organization, EHR vendor,
              documentation company, patient engagement platform, or clinical AI team.
            </p>
          </div>

          <div className="card-grid three">
            <article className="plain-card">
              <span className="card-kicker">Client input</span>
              <h3>One defined body of material</h3>
              <p>
                Submit up to 20 deidentified AI outputs, one defined clinical workflow, or one prompt, template,
                or knowledge base set.
              </p>
            </article>
            <article className="plain-card">
              <span className="card-kicker">Clinical review</span>
              <h3>Six review dimensions</h3>
              <ul>
                {reviewAreas.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
            <article className="plain-card">
              <span className="card-kicker">Client output</span>
              <h3>Actionable findings</h3>
              <ul>
                {deliverables.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          </div>

          <div className="split-callout">
            <div>
              <p className="eyebrow">Founding pilot fee</p>
              <h2>$1,500</h2>
            </div>
            <div>
              <p>
                The founding fee applies to the first three completed pilot engagements. Delivery is normally seven business days
                after complete materials are received. Scope and timing are confirmed in writing before work begins.
              </p>
              <a
                className="button primary"
                href="mailto:mccarthys11145@gmail.com?subject=Behavioral%20health%20AI%20pilot%20review"
              >
                Request a pilot discussion
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="process-heading">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Process</p>
            <h2 id="process-heading">A small engagement with a concrete decision at the end.</h2>
          </div>
          <div className="card-grid three">
            <article className="plain-card">
              <span className="card-kicker">Step 1</span>
              <h3>Define the decision</h3>
              <p>
                Clarify what is creating concern, who uses the material, what decision the review must support,
                and what would make the engagement useful.
              </p>
            </article>
            <article className="plain-card">
              <span className="card-kicker">Step 2</span>
              <h3>Review the evidence</h3>
              <p>
                Examine the submitted material against clinical purpose, internal consistency, risk, usability,
                communication quality, and stated system boundaries.
              </p>
            </article>
            <article className="plain-card">
              <span className="card-kicker">Step 3</span>
              <h3>Prioritize the changes</h3>
              <p>
                Deliver a ranked set of corrections, revised priority material, and an implementation sequence
                that separates urgent risk from later optimization.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad soft-section" aria-labelledby="boundaries-heading">
        <div className="shell privacy-panel">
          <div>
            <p className="eyebrow">Boundaries</p>
            <h2 id="boundaries-heading">Clinical review without inflated promises</h2>
          </div>
          <div>
            <p>
              Pilot materials should be deidentified unless appropriate contracts and secure data handling arrangements are in place.
              The review provides clinical and operational analysis. It is not legal advice, regulatory certification, or a guarantee
              that a system is safe, compliant, or ready for independent clinical use.
            </p>
            <p>
              The written scope defines the submitted material, deliverables, revision limit, confidentiality terms, ownership,
              payment schedule, and intended use.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad quote-section">
        <div className="shell quote-wrap">
          <blockquote>
            A clinical tool should make the important information easier to see, not merely make the output easier to read.
          </blockquote>
          <div>
            <p>
              Professional, media, speaking, and consulting inquiries may be sent by email. Do not include patient information,
              treatment records, or urgent clinical questions.
            </p>
            <div className="button-row">
              <a
                className="button secondary light-button"
                href="mailto:mccarthys11145@gmail.com?subject=Professional%20consulting%20inquiry"
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
