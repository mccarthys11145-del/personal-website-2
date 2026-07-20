import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { JsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: { absolute: "Stephen McCarthy | Physician Assistant and Mental Health Writer" },
  description:
    "Stephen McCarthy is a physician assistant in Allentown, Pennsylvania, with a clinical background in psychiatric care and addiction treatment. Read his professional record and writing on psychiatric ontology.",
  alternates: { canonical: "/" },
}

export default function HomePage() {
  const profilePageJson = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://www.stephenmccarthypa.com/#profilepage",
    url: "https://www.stephenmccarthypa.com",
    name: "Stephen McCarthy professional profile",
    dateModified: "2026-07-19",
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
            <p className="eyebrow">Physician assistant · Allentown, Pennsylvania</p>
            <h1>Clinical experience. Clear language. Claims that can be checked.</h1>
            <p className="hero-lead">
              Stephen McCarthy is a physician assistant with a clinical background in psychiatric care,
              addiction treatment, and inpatient and outpatient settings. This site separates verified
              professional facts from commentary and shows the source trail for time sensitive claims.
            </p>
            <div className="button-row">
              <Link className="button primary" href="/writing/audhd-psychiatric-ontology">
                Read the latest essay
              </Link>
              <Link className="button secondary" href="/professional-record">
                View professional record
              </Link>
            </div>
            <p className="review-note">
              Factual review completed July 19, 2026. License status can change and should be checked at the source.
            </p>
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
              <span>Physician assistant and writer</span>
            </div>
          </div>
        </div>
      </section>

      <section className="fact-band" aria-labelledby="fact-band-title">
        <div className="shell">
          <div className="section-heading compact">
            <p className="eyebrow light">A cleaner evidence trail</p>
            <h2 id="fact-band-title">What this site will and will not claim</h2>
          </div>
          <div className="fact-grid">
            <article>
              <span className="fact-number">01</span>
              <h3>Professional identity</h3>
              <p>
                Name, education, NPI, and clinical background are presented conservatively and linked to records where available.
              </p>
            </article>
            <article>
              <span className="fact-number">02</span>
              <h3>Dated license status</h3>
              <p>
                Pennsylvania and Utah license status is reported with the July 2026 lookup date and authority links.
              </p>
            </article>
            <article>
              <span className="fact-number">03</span>
              <h3>No ornamental claims</h3>
              <p>
                No invented testimonials, ratings, patient totals, media coverage, awards, or unsupported certification claims.
              </p>
            </article>
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
            “A diagnostic label may be a useful map pin. It is not automatically a bacterium, lesion, or causal mechanism.”
          </blockquote>
          <div>
            <p>
              The distinction matters because patients deserve language that clarifies what is known, what is inferred, and what remains uncertain.
            </p>
            <Link className="button secondary light-button" href="/about">About the approach</Link>
          </div>
        </div>
      </section>
    </>
  )
}
