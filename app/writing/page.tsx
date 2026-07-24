import Image from "next/image"
import Link from "next/link"
import Breadcrumbs from "@/components/breadcrumbs"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "Writing",
  description:
    "Essays by Stephen McCarthy on psychiatric ontology, diagnostic language, AuDHD, clinical reasoning, and evidence.",
  path: "/writing",
})

export default function WritingPage() {
  return (
    <>
      <section className="page-hero section-pad-sm">
        <div className="shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Writing" }]} />
          <p className="eyebrow">Writing</p>
          <h1>Where labels end and explanations begin.</h1>
          <p className="page-deck">
            Essays on psychiatric classification, evidence, diagnostic reification, and the practical consequences of confusing a name with a mechanism.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell writing-list">
          <article className="article-card featured-article-card">
            <Image
              className="article-card-graphic"
              src="/mental-health-theology-og.png"
              alt="Mental Health Is the New Theology of the West producer briefing"
              width={1200}
              height={630}
              sizes="(max-width: 860px) 100vw, 42vw"
            />
            <div className="article-card-content">
              <div className="article-meta">
                <span>Producer briefing</span>
                <time dateTime="2026-07-23">July 23, 2026</time>
                <span>Video and source guide</span>
              </div>
              <h2>
                <Link href="/briefing/mental-health-theology">
                  Mental Health Is the New Theology of the West
                </Link>
              </h2>
              <p>
                A producer briefing that separates the reality of suffering from the claim that a diagnostic
                label explains it, with exhibits, a captioned opening video, and linked source material.
              </p>
              <div className="tag-row" aria-label="Topics">
                <span>Diagnostic reification</span>
                <span>Mental-health culture</span>
                <span>Clinical reasoning</span>
              </div>
              <Link className="text-link" href="/briefing/mental-health-theology">
                Read the producer briefing <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>

          <article className="article-card featured-article-card">
            <Image
              className="article-card-graphic"
              src="/evidence-map.svg"
              alt="Diagram connecting observed facts, source records, classification, and independent evidence to a clinical question"
              width={960}
              height={620}
              sizes="(max-width: 860px) 100vw, 42vw"
            />
            <div className="article-card-content">
              <div className="article-meta">
                <span>Psychiatric ontology</span>
                <time dateTime="2026-07-19">July 19, 2026</time>
                <span>14 minute read</span>
              </div>
              <h2>
                <Link href="/writing/audhd-psychiatric-ontology">
                  AuDHD, psychiatric ontology, and the difference between naming and explaining
                </Link>
              </h2>
              <p>
                AuDHD can be useful shorthand for the co occurrence of autism and ADHD. It does not, by itself, establish a third disease entity or a causal mechanism.
                The article develops a broader argument: a diagnosis may classify a symptom pattern, but the label alone cannot explain the symptoms used to create it.
              </p>
              <div className="tag-row" aria-label="Topics">
                <span>AuDHD</span>
                <span>Diagnosis</span>
                <span>Reification</span>
                <span>Clinical reasoning</span>
              </div>
              <Link className="text-link" href="/writing/audhd-psychiatric-ontology">
                Read the essay <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section-pad soft-section">
        <div className="shell split-callout">
          <div>
            <p className="eyebrow">Publication standard</p>
            <h2>Useful beats frequent</h2>
          </div>
          <div>
            <p>
              New work is published when it makes a distinct argument, identifies its sources, separates fact from inference, and avoids patient specific advice.
              Thin SEO filler has been politely escorted from the building.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
