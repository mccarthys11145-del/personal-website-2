import styles from "./home.module.css"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { JsonLd } from "@/components/json-ld"
import { createPageMetadata } from "@/lib/site-metadata"

const title = "Stephen McCarthy | Psychiatry and Clinical AI Evaluation"
const description =
  "Stephen McCarthy is a physician assistant in Allentown, Pennsylvania. Explore his work testing psychiatric documentation systems and his writing on clinical evidence."

const homeMetadata = createPageMetadata({ title, description, path: "/" })
export const metadata: Metadata = {
  ...homeMetadata,
  title: { absolute: title },
  openGraph: { ...homeMetadata.openGraph, title },
  twitter: { ...homeMetadata.twitter, title },
}

const writing = [
  {
    href: "/writing/how-to-read-health-claims-and-evidence",
    title: "How to Read Health Claims and Evidence",
    text: "A worked example of what changes when a study reports absolute risk alongside relative risk.",
    kind: "Research guide",
  },
  {
    href: "/briefing/mental-health-theology",
    title: "Mental Health Is the New Theology of the West",
    text: "A filmed argument about the authority that psychiatric language has acquired in public life.",
    kind: "Video briefing",
  },
  {
    href: "/writing/audhd-psychiatric-ontology",
    title: "AuDHD, Psychiatric Ontology, and the Difference Between Naming and Explaining",
    text: "What a shared diagnostic label tells us about two people, and what it leaves open.",
    kind: "Essay",
  },
]

export default function HomePage() {
  const profile = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://www.stephenmccarthypa.com/#profilepage",
    url: "https://www.stephenmccarthypa.com/",
    name: "Stephen McCarthy",
    dateModified: "2026-11-10",
    inLanguage: "en-US",
    mainEntity: { "@id": "https://www.stephenmccarthypa.com/#person" },
    isPartOf: { "@id": "https://www.stephenmccarthypa.com/#website" },
  }

  return (
    <>
      <JsonLd data={profile} />
      <section className={styles.intro} aria-labelledby="profile-name">
        <div className={`shell ${styles.profileGrid}`}>
          <div>
            <p className="eyebrow">Physician assistant · Allentown, Pennsylvania</p>
            <h1 id="profile-name">Stephen McCarthy</h1>
            <p className={styles.lead}>I practice psychiatry and test the AI systems that write clinical notes.</p>
            <p className={styles.summary}>
              I bring more than 11 years of psychiatric experience to documentation review. A medication can stay on a
              chart long after someone stops taking it. I test whether a system carries that mistake into the next note.
            </p>
            <div className="button-row">
              <a className="button primary" href="/psychworkflowbench/sample.html">Read the sample report</a>
              <Link className="button secondary" href="/about">Clinical background</Link>
            </div>
          </div>
          <Image className={styles.portrait} src="/stephen-mccarthy-portrait.webp" alt="Stephen McCarthy"
            width={840} height={960} priority sizes="(max-width: 720px) 90vw, (max-width: 1100px) 39vw, 430px" />
        </div>
      </section>

      <section className={styles.work} aria-labelledby="bench-title">
        <div className={`shell ${styles.workGrid}`}>
          <div>
            <p className="eyebrow">Clinical AI evaluation</p>
            <h2 id="bench-title">PsychWorkflowBench</h2>
            <p>Six synthetic psychiatric cases test whether a note keeps track of what happened, when it happened,
              and who reported it. The demonstration scores 71 questions across six constructed notes.</p>
            <div className={styles.workLinks}>
              <Link href="/psychworkflowbench">Explore the benchmark</Link>
              <Link href="/consulting#pilot-review">Commission a private evaluation</Link>
            </div>
          </div>
          <figure className={styles.excerpt}>
            <figcaption>From the sample report · Case 006</figcaption>
            <blockquote>“CBC within normal limits.”</blockquote>
            <p>The chart contained a blood count order. The specimen was never collected.
              The example note turned an order into a result.</p>
            <a href="/psychworkflowbench/sample.html#case-006">Read the case finding <span aria-hidden="true">→</span></a>
          </figure>
        </div>
      </section>

      <section className={styles.writing} aria-labelledby="selected-writing">
        <div className="shell">
          <div className={styles.sectionHeading}>
            <h2 id="selected-writing">Selected writing</h2>
            <Link href="/writing">Writing archive <span aria-hidden="true">→</span></Link>
          </div>
          <div className={styles.selection}>
            {writing.map((item) => (
              <article key={item.href}>
                <p className="eyebrow">{item.kind}</p>
                <h3><Link href={item.href}>{item.title}</Link></h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
