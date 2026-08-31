import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { JsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: { absolute: "Stephen McCarthy | Clinical AI Red Team Consultant" },
  description:
    "Stephen McCarthy is a physician assistant and clinical AI red team consultant in Allentown, Pennsylvania, focused on behavioral health benchmarking, psychiatric record synthesis, documentation fidelity, and clinical reasoning.",
  alternates: { canonical: "/" },
}

export default function HomePage() {
  const profilePageJson = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://www.stephenmccarthypa.com/#profilepage",
    url: "https://www.stephenmccarthypa.com",
    name: "Stephen McCarthy professional profile",
    dateModified: "2026-08-31",
    inLanguage: "en-US",
    mainEntity: { "@id": "https://www.stephenmccarthypa.com/#person" },
    isPartOf: { "@id": "https://www.stephenmccarthypa.com/#website" },
  }

  return (
    <>
      <JsonLd data={profilePageJson} />
      <section className="hero section-pad">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Physician assistant · Clinical AI red team consultant · Allentown, Pennsylvania</p>
            <h1>Stress test clinical AI against the records it will actually encounter.</h1>
            <p className="hero-lead">
              Stephen McCarthy is a physician assistant with more than 11 years of psychiatric clinical experience.
              He evaluates behavioral health AI systems for longitudinal record synthesis, medication reconciliation,
              diagnostic coherence, documentation fidelity, unsupported assertions, and safety failures.
            </p>
            <div className="button-row">
              <Link className="button primary" href="/consulting">
                Explore clinical AI testing
              </Link>
              <Link className="button secondary" href="/psychworkflowbench">
                See PsychWorkflowBench
              </Link>
            </div>
          </div>

          <div className="portrait-panel">
            <div className="portrait-frame">
              <Image
                src="/stephen-mccarthy-portrait.webp"
                alt="Stephen McCarthy"
                width={840}
                height={960}
                priority
                sizes="(max-width: 900px) 86vw, 38vw"
              />
            </div>
            <div className="portrait-caption">
              <span>Stephen McCarthy</span>
              <span>Physician assistant, clinical AI evaluator, and writer</span>
            </div>
          </div>
        </div>
      </section>

      <section className="fact-band" aria-labelledby="fact-band-title">
        <div className="shell">
          <div className="section-heading compact">
            <p className="eyebrow light">A cleaner evidence trail</p>
            <h2 id="fact-band-title">Clinical credibility without ornamental claims</h2>
          </div>
          <div className="fact-grid">
            <article>
              <span className="fact-number">01</span>
              <h3>Frontline psychiatric experience</h3>
              <p>
                More than 11 years across inpatient care, outpatient care, addiction treatment, telehealth,
                geriatric psychiatry, medication management, and clinical leadership.
              </p>
            </article>
            <article>
              <span className="fact-number">02</span>
              <h3>Workflow and documentation focus</h3>
              <p>
                Clinical review centered on the facts that survive or mutate as records become summaries,
                notes, prompts, templates, and automated workflows.
              </p>
            </article>
            <article>
              <span className="fact-number">03</span>
              <h3>No invented proof</h3>
              <p>
                No fabricated testimonials, client outcomes, benchmark results, certifications, awards,
                safety guarantees, or unsupported deployment claims.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad red-team-home-section" aria-labelledby="red-team-home-title">
        <div className="shell red-team-home-grid">
          <div className="red-team-home-copy">
            <p className="eyebrow">Clinical AI red teaming</p>
            <h2 id="red-team-home-title">Can the system survive a psychiatric chart full of old diagnoses, duplicate medications, and conflicting records?</h2>
            <p>
              Custom evaluations use realistic longitudinal record packets and clinician authored truth states to expose stale chart propagation,
              medication reconciliation errors, temporal confusion, unsupported mental status findings, missing safety information,
              and diagnostic lists that grow without becoming coherent.
            </p>
            <div className="button-row">
              <Link className="button primary" href="/consulting">Review the service</Link>
              <Link className="button secondary" href="/psychworkflowbench">Review the methodology</Link>
            </div>
          </div>
          <div className="red-team-home-art">
            <Image
              src="/clinical-ai-failure-map.svg"
              alt="Clinical AI failure map tracing noisy psychiatric records into a structured truth state and a scored generated note"
              width={960}
              height={620}
              sizes="(max-width: 860px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section-pad featured-writing">
        <div className="shell feature-grid">
          <div>
            <p className="eyebrow">Evaluation framework</p>
            <h2>PsychWorkflowBench</h2>
          </div>
          <div>
            <p className="feature-deck">
              A clinician authored framework under development for testing longitudinal psychiatric record synthesis,
              medication reconciliation, diagnostic coherence, contradiction handling, documentation fidelity, and safety.
            </p>
            <Link className="text-link" href="/psychworkflowbench">
              Explore PsychWorkflowBench <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad featured-writing">
        <div className="shell feature-grid">
          <div>
            <p className="eyebrow">Producer briefing · August 15, 2026</p>
            <h2>Mental Health Is the New Theology of the West</h2>
          </div>
          <div>
            <p className="feature-deck">
              A source led producer briefing on diagnostic reification, commercialized mental health language,
              and the difference between describing distress and claiming to explain it.
            </p>
            <Link className="text-link" href="/briefing/mental-health-theology">
              Read the producer briefing <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad featured-writing">
        <div className="shell feature-grid">
          <div>
            <p className="eyebrow">Featured writing · July 19, 2026</p>
            <h2>AuDHD, psychiatric ontology, and the difference between naming and explaining</h2>
          </div>
          <div>
            <p className="feature-deck">
              A diagnosis can organize observations without explaining their cause. This essay examines AuDHD as shorthand,
              the difference between a syndrome and a pathogen, and the circularity that appears when a label is treated as
              the cause of the very symptoms used to assign it.
            </p>
            <Link className="text-link" href="/writing/audhd-psychiatric-ontology">
              Read the essay <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad reasoning-graphic-section" aria-labelledby="reasoning-graphic-title">
        <div className="shell reasoning-graphic-grid">
          <div className="reasoning-graphic-copy">
            <p className="eyebrow">A practical visual guide</p>
            <h2 id="reasoning-graphic-title">Three jobs, not one shortcut.</h2>
            <p>
              Good clinical language starts by recording what is present. A category may then help organize that record,
              while explanation remains a separate question for evidence to answer.
            </p>
            <Link className="text-link" href="/writing/audhd-psychiatric-ontology">
              See the distinction in the essay <span aria-hidden="true">→</span>
            </Link>
          </div>
          <Image
            className="reasoning-graphic"
            src="/clinical-reasoning.svg"
            alt="Diagram showing observation, classification, and explanation as separate stages of clinical reasoning"
            width={960}
            height={620}
            sizes="(max-width: 860px) 100vw, 48vw"
          />
        </div>
      </section>

      <section className="section-pad principles-section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Clinical reasoning</p>
            <h2>Three distinctions worth protecting</h2>
            <p>
              The goal is not to deny suffering. It is to keep description, classification, and causal explanation from melting into one word.
            </p>
          </div>
          <div className="card-grid three">
            <article className="plain-card">
              <span className="card-kicker">Observation</span>
              <h3>Describe before explaining</h3>
              <p>
                What is happening, when does it occur, how severe is it, and what function is impaired? Those questions come before the label.
              </p>
            </article>
            <article className="plain-card">
              <span className="card-kicker">Classification</span>
              <h3>Utility is not the same as validity</h3>
              <p>
                A diagnosis can help communication, access, and treatment planning without proving that it is a discrete disease entity.
              </p>
            </article>
            <article className="plain-card">
              <span className="card-kicker">Explanation</span>
              <h3>A label is not its own mechanism</h3>
              <p>
                Causal claims need evidence beyond the criteria used to assign the diagnosis. Otherwise the explanation simply walks in a circle.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad quote-section">
        <div className="shell quote-wrap">
          <blockquote>
            A clinical note should be concise because the evidence has been organized, not because the difficult facts disappeared.
          </blockquote>
          <div>
            <p>
              The same standard applies to clinical AI: preserve what matters, expose what conflicts, and never manufacture certainty to complete a template.
            </p>
            <div className="button-row">
              <Link className="button secondary light-button" href="/consulting">Clinical AI testing</Link>
              <Link className="text-link" href="/about">About the approach <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
