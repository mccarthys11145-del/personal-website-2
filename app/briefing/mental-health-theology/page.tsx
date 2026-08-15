import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Breadcrumbs from "@/components/breadcrumbs"
import { JsonLd } from "@/components/json-ld"

const title = "Mental Health Is the New Theology of the West"
const description =
  "A concise producer briefing by Stephen McCarthy on how psychiatric labels can become causal stories, identities, markets, and moral authority."
const path = "/briefing/mental-health-theology"
const canonical = `https://www.stephenmccarthypa.com${path}`
const publishedVideoUrl = ""

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "article",
    url: canonical,
    title,
    description,
    publishedTime: "2026-07-23T00:00:00-04:00",
    modifiedTime: "2026-08-15T00:00:00-04:00",
    authors: ["Stephen McCarthy"],
    section: "Producer briefing",
    tags: [
      "psychiatric classification",
      "diagnostic reification",
      "mental health culture",
      "clinical reasoning",
    ],
    images: [
      {
        url: "/mental-health-theology-og.png",
        width: 1200,
        height: 630,
        alt: "Mental Health Is the New Theology of the West",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/mental-health-theology-og.png"],
  },
}

const interviewQuestions = [
  "What does a psychiatric diagnosis explain beyond the observations used to assign it?",
  "When does a useful classification become a fictional causal entity?",
  "How do associated research findings become new symptoms and diagnostic clues?",
  "Why is the public meaning of trauma much broader than the event standard for PTSD?",
  "How did therapeutic language acquire moral and institutional authority?",
]

const sources = [
  {
    type: "Classification standard",
    label: "American Psychiatric Association: DSM overview",
    href: "https://www.psychiatry.org/psychiatrists/practice/dsm",
  },
  {
    type: "Conceptual anchor",
    label: "Hyman: The Problem of Reification",
    href: "https://pubmed.ncbi.nlm.nih.gov/17716032/",
  },
  {
    type: "Conceptual anchor",
    label: "Kendell and Jablensky: Validity and Utility of Psychiatric Diagnoses",
    href: "https://pubmed.ncbi.nlm.nih.gov/12505793/",
  },
  {
    type: "Causal explanation",
    label: "Maung: Diagnosis and Causal Explanation in Psychiatry",
    href: "https://www.sciencedirect.com/science/article/pii/S136984861630067X",
  },
  {
    type: "Diagnostic guidance",
    label: "CDC: Diagnosing ADHD",
    href: "https://www.cdc.gov/adhd/signs-symptoms/index.html",
  },
  {
    type: "Syndrome definition",
    label: "Singer et al.: The Sepsis 3 consensus definitions",
    href: "https://jamanetwork.com/journals/jama/fullarticle/2492881",
  },
  {
    type: "Trauma definition",
    label: "SAMHSA: Trauma and Violence",
    href: "https://www.samhsa.gov/mental-health/trauma-violence",
  },
  {
    type: "PTSD standard",
    label: "National Center for PTSD: DSM criteria",
    href: "https://www.ptsd.va.gov/professional/treat/essentials/dsm5_ptsd.asp",
  },
  {
    type: "Associated feature",
    label: "Willcutt et al.: Executive function and ADHD",
    href: "https://pubmed.ncbi.nlm.nih.gov/15950006/",
  },
  {
    type: "Associated feature",
    label: "Beheshti et al.: Emotion dysregulation and adult ADHD",
    href: "https://pubmed.ncbi.nlm.nih.gov/32164655/",
  },
  {
    type: "Research construct",
    label: "Hupfeld et al.: Hyperfocus in adult ADHD",
    href: "https://pubmed.ncbi.nlm.nih.gov/30267329/",
  },
  {
    type: "Marketing specimen",
    label: "eCare: ADHD and autism masterclass",
    href: "https://www.ecarebehavioralinstitute.com/courses/misdiagnosed-adhd-autism-masterclass-differential-diagnosis-neuro-affirming-interventions-rv/",
  },
  {
    type: "Marketing specimen",
    label: "eCare: Hidden Narcissistic Wounds Masterclass",
    href: "https://webinar.ecarebehavioralinstitute.com/narcissistic-masterclass-47-lta-b",
  },
  {
    type: "Methods specimen",
    label: "Morning Consult and The Trevor Project poll",
    href: "https://www.thetrevorproject.org/wp-content/uploads/2023/01/Issues-Impacting-LGBTQ-Youth-MC-Poll_Public-2.pdf",
  },
  {
    type: "Long form video",
    label: "PHA 001: Diagnostic Fan Fiction",
    href: "https://www.youtube.com/watch?v=PmZEHOUVZ9Q",
  },
]

export default function MentalHealthTheologyBriefingPage() {
  const pageJson = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    datePublished: "2026-07-23",
    dateModified: "2026-08-15",
    inLanguage: "en-US",
    isPartOf: { "@id": "https://www.stephenmccarthypa.com/#website" },
    author: { "@id": "https://www.stephenmccarthypa.com/#person" },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://www.stephenmccarthypa.com/mental-health-theology-og.png",
      width: 1200,
      height: 630,
    },
    about: [
      "Psychiatric classification",
      "Diagnostic reification",
      "Clinical reasoning",
      "Mental health culture",
    ],
  }

  const videoJson = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${canonical}#final-video-object`,
    name: `${title}: Final TCN Submission`,
    description:
      "Stephen McCarthy presents a concise argument about diagnostic reification, category expansion, and therapeutic authority.",
    thumbnailUrl: ["https://www.stephenmccarthypa.com/mental-health-theology-final-poster.jpg"],
    uploadDate: "2026-08-15T00:00:00-04:00",
    duration: "PT2M29S",
    contentUrl: "https://www.stephenmccarthypa.com/mental-health-theology-final.mp4",
    inLanguage: "en-US",
    isFamilyFriendly: true,
    creator: { "@id": "https://www.stephenmccarthypa.com/#person" },
    isPartOf: { "@id": `${canonical}#webpage` },
    ...(publishedVideoUrl ? { sameAs: publishedVideoUrl } : {}),
  }

  return (
    <>
      <JsonLd data={pageJson} />
      <JsonLd data={videoJson} />

      <header className="briefing-hero">
        <div className="shell">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Producer briefing" },
            ]}
          />

          <nav className="briefing-jump-nav" aria-label="Briefing sections">
            <a href="#final-video">Video</a>
            <a href="#argument">Argument</a>
            <a href="#exhibits">Evidence</a>
            <a href="#limits">Limits</a>
            <a href="#sources">Sources</a>
            <a href="#questions">Questions</a>
            <a href="#about">About</a>
          </nav>

          <div className="briefing-hero-grid">
            <div>
              <p className="eyebrow">Producer briefing</p>
              <h1>Mental health is the new theology of the West.</h1>
              <p className="briefing-hero-deck">
                Psychiatry uses labels to describe patterns of symptoms. Public culture increasingly treats
                those labels as hidden causes, personal identities, and moral authority. This page explains
                the jump.
              </p>
              <p className="briefing-byline">
                Stephen McCarthy · Physician Assistant working in psychiatry · Allentown, Pennsylvania
              </p>
              <div className="button-row">
                <a className="button primary" href="#final-video">
                  Watch the submission
                </a>
                <a className="button secondary" href="#argument">
                  Read the argument
                </a>
              </div>
              <p className="review-note">
                Condensed August 15, 2026 for faster reading and clearer review.
              </p>
            </div>

            <aside className="briefing-premise" aria-label="Argument summary">
              <span className="card-kicker">The whole argument</span>
              <p>
                A label can describe a pattern. It cannot explain that pattern without evidence beyond the
                observations used to create it.
              </p>
              <dl>
                <div>
                  <dt>Useful</dt>
                  <dd>A label can organize a pattern</dd>
                </div>
                <div>
                  <dt>Error</dt>
                  <dd>The pattern is treated as its own cause</dd>
                </div>
                <div>
                  <dt>Result</dt>
                  <dd>The label gains explanatory and moral power</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </header>

      <section className="briefing-scope-strip" aria-label="Scope of the argument">
        <div className="shell">
          <p>
            <strong>Suffering is real. Diagnosis can help. Medication can work.</strong>
            <span>A useful classification is still not a causal mechanism.</span>
          </p>
        </div>
      </section>

      <section
        className="briefing-video-section section-pad-sm"
        id="final-video"
        aria-labelledby="final-video-heading"
      >
        <div className="shell briefing-video-grid">
          <div className="briefing-video-frame">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/mental-health-theology-final-poster.jpg"
              aria-label="Stephen McCarthy final Mental Health Is the New Theology of the West submission"
            >
              <source src="/mental-health-theology-final.mp4" type="video/mp4" />
              <track
                kind="captions"
                src="/mental-health-theology-final.vtt"
                srcLang="en"
                label="English"
                default
              />
              Your browser does not support embedded video.{" "}
              <a href="/mental-health-theology-final.mp4">Download the video</a>.
            </video>
          </div>
          <div className="briefing-video-copy">
            <p className="eyebrow light">Final TCN submission · 2:29</p>
            <h2 id="final-video-heading">The case in 2 minutes and 29 seconds.</h2>
            <p>
              The video begins with the sepsis analogy, moves through continuing education advertising and
              the expanding meaning of trauma, then shows how a clinical vocabulary can become a belief
              system.
            </p>
            <blockquote>
              “A classification is not a pathogen.”
            </blockquote>
            {publishedVideoUrl ? (
              <a
                className="text-link briefing-light-link"
                href={publishedVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch on YouTube <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section-pad briefing-argument" id="argument" aria-labelledby="argument-heading">
        <div className="article-shell briefing-argument-layout">
          <aside className="briefing-argument-aside" aria-label="Briefing notes">
            <div className="aside-card">
              <p className="aside-title">Core distinction</p>
              <p>Description, classification, and explanation are different jobs.</p>
            </div>
            <div className="aside-card">
              <p className="aside-title">Main analogy</p>
              <p>A syndrome does not identify its particular cause.</p>
            </div>
            <div className="aside-card">
              <p className="aside-title">Standard</p>
              <p>Say only what the evidence permits.</p>
            </div>
          </aside>

          <div className="article-body prose briefing-prose">
            <p className="eyebrow">My argument</p>
            <h2 id="argument-heading">Psychiatry often mistakes a description for an explanation.</h2>
            <p className="lead-paragraph">
              My claim is narrow. Many psychiatric diagnoses summarize what a person reports and what a
              clinician observes. The label is then used to explain those same observations.
            </p>
            <p>
              That is where the theology comparison begins. A theology explains visible events through
              invisible forces, gives authority to interpreters, and supplies a moral vocabulary. Popular
              mental health language now often does this. A label can rewrite a biography. Therapy words
              can decide who is healed, unsafe, toxic, or disordered. Even disagreement can be treated as
              proof of pathology.
            </p>

            <h3 className="briefing-thesis-subhead">The key error</h3>
            <p>
              A diagnosis can be useful. It can organize information, guide care, support research, and
              unlock services. But usefulness is not causation. Many diagnoses are built from symptoms,
              duration, exclusions, and impairment. The label does not, by itself, identify what produced
              the pattern in this person.
            </p>

            <div className="briefing-logic" role="figure" aria-label="Syndrome and cause comparison">
              <div>
                <span>Observed findings</span>
                <b aria-hidden="true">→</b>
                <span>Syndrome or classification</span>
              </div>
              <div>
                <span>Syndrome or classification</span>
                <b aria-hidden="true">⇢</b>
                <span>Specific cause?</span>
              </div>
              <p>The second arrow requires evidence that did not come from the label itself.</p>
            </div>

            <p>
              Sepsis shows the error. It is a syndrome, not a specific infection. Meeting sepsis criteria
              does not identify the organism or source. Diagnosing a particular bacterial infection from
              sepsis criteria alone would confuse the syndrome with its cause.
            </p>
            <p>
              Yet the same reasoning appears when inattention helps establish ADHD and ADHD is then given
              as the reason for the inattention. The label may still be useful. It simply has not answered
              the causal question. Sleep loss, anxiety, depression, medication effects, substance use,
              medical illness, development, and environment still matter.
            </p>

            <h3 className="briefing-thesis-subhead">How the category grows</h3>
            <p>
              Research finds group differences. Public education turns them into traits. Social media turns
              them into diagnostic clues. Executive dysfunction, emotional dysregulation, and hyperfocus
              are legitimate subjects of study. A group association is not automatically a formal criterion,
              a unique feature, or a personal cause.
            </p>
            <p>
              Poor concentration points to ADHD. Intense concentration becomes hyperfocus. Social difficulty
              points to autism. Social competence becomes masking. A theory that explains every possible
              observation no longer risks being wrong.
            </p>

            <h3 className="briefing-thesis-subhead">How the language gains authority</h3>
            <p>
              Trauma shows how a category can swell. PTSD Criterion A requires exposure to death, threatened
              death, serious injury, or sexual violence. SAMHSA uses a much broader public health definition:
              an event, series of events, or circumstances experienced as physically or emotionally harmful
              or life threatening, with lasting adverse effects.
            </p>
            <p>
              The definitions are not equivalent. The SAMHSA definition does not require death, serious
              injury, sexual violence, catastrophe, or a comparable external event. Because emotional harm
              is defined through the person’s experience rather than an external event threshold, the
              eligible class can include any negative experience that is experienced as emotionally harmful
              and produces lasting adverse effects. The broad concept can then borrow the medical seriousness
              of PTSD even when the event would not qualify for PTSD.
            </p>
            <p>
              Hidden pathology also sells. Courses promise to reveal masked autism, missed ADHD, narcissistic
              wounds, and abuse patterns that ordinary assessment supposedly overlooks. Some courses may be
              careful. The public sales pitch still rewards one answer: the real cause is hidden, and the
              trained interpreter can see it.
            </p>

            <h3 className="briefing-thesis-subhead">What better reasoning looks like</h3>
            <p>
              The answer is not to abolish diagnosis. It is to put the label back in its place. Start with
              symptoms, time course, context, impairment, development, sleep, medical factors, substances,
              medication effects, relationships, environment, and competing explanations. Ask what would
              make the favored explanation wrong. Use the label when it helps. Keep searching for the cause.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad briefing-exhibits-section" id="exhibits" aria-labelledby="exhibits-heading">
        <div className="shell">
          <div className="section-heading left briefing-section-heading">
            <p className="eyebrow">Five checks</p>
            <h2 id="exhibits-heading">Five places where the evidence stops before the story does.</h2>
            <p>
              These examples show the exact point where a useful observation becomes a larger claim.
            </p>
          </div>

          <div className="briefing-exhibit-stack">
            <article className="briefing-exhibit">
              <div className="briefing-exhibit-number">
                <span className="sr-only">Exhibit </span>01
              </div>
              <div className="briefing-exhibit-copy">
                <p className="eyebrow">Label versus mechanism</p>
                <h3>ADHD is not an explanation for inattention.</h3>
                <p>
                  ADHD is assigned from a pattern that includes symptoms, persistence, setting, impairment,
                  development, and exclusions. The circular move begins when the label is used as the cause
                  of the same observations without independent evidence.
                </p>
                <div className="briefing-defense-grid">
                  <div>
                    <span>What the label can do</span>
                    <p>Support communication, research, prognosis, treatment selection, and access to care.</p>
                  </div>
                  <div>
                    <span>What it cannot do alone</span>
                    <p>Identify the mechanism producing the symptoms in one person.</p>
                  </div>
                </div>
                <p className="briefing-source-line">
                  Source anchors:{" "}
                  <a href="https://jamanetwork.com/journals/jama/fullarticle/2492881" target="_blank" rel="noopener noreferrer">
                    the Sepsis 3 consensus definition
                  </a>,{" "}
                  <a href="https://www.cdc.gov/adhd/signs-symptoms/index.html" target="_blank" rel="noopener noreferrer">
                    CDC diagnostic guidance
                  </a>, and{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/17716032/" target="_blank" rel="noopener noreferrer">
                    Hyman on reification
                  </a>.
                </p>
              </div>
              <figure className="briefing-exhibit-figure">
                <Image
                  src="/diagnostic-goblin-error.png"
                  alt="Diagram showing symptoms moving to a diagnostic label, followed by an unsupported leap from the label to a hidden cause"
                  width={1920}
                  height={1080}
                  sizes="(max-width: 900px) 94vw, 38vw"
                />
                <figcaption>
                  The unsupported step is not observation to classification. It is classification to hidden cause.
                </figcaption>
              </figure>
            </article>

            <article className="briefing-exhibit">
              <div className="briefing-exhibit-number">
                <span className="sr-only">Exhibit </span>02
              </div>
              <div className="briefing-exhibit-copy">
                <p className="eyebrow">Construct expansion</p>
                <h3>Group averages can become diagnostic fan fiction.</h3>
                <p>
                  A feature found more often in a diagnosed group can be real and useful. It does not follow
                  that the feature is universal, unique to the disorder, a formal criterion, or evidence of
                  one cause.
                </p>
                <div className="briefing-defense-grid">
                  <div>
                    <span>Reasonable defense</span>
                    <p>Formal criteria do not describe every clinically relevant feature.</p>
                  </div>
                  <div>
                    <span>Necessary limit</span>
                    <p>Every move from association to trait, mechanism, or diagnostic proof needs new evidence.</p>
                  </div>
                </div>
                <p className="briefing-source-line">
                  Research anchors:{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/15950006/" target="_blank" rel="noopener noreferrer">
                    executive function
                  </a>,{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/32164655/" target="_blank" rel="noopener noreferrer">
                    emotion dysregulation
                  </a>, and{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/30267329/" target="_blank" rel="noopener noreferrer">
                    hyperfocus
                  </a>.
                </p>
              </div>
              <div className="briefing-chain" role="figure" aria-label="Construct expansion chain">
                <span>Diagnosed group</span>
                <b aria-hidden="true">→</b>
                <span>Average association</span>
                <b aria-hidden="true">→</b>
                <span>Disorder trait</span>
                <b aria-hidden="true">→</b>
                <span>Mechanism</span>
                <b aria-hidden="true">→</b>
                <span>New diagnostic clue</span>
                <p>Each arrow is a new claim. None is automatic.</p>
              </div>
            </article>

            <article className="briefing-exhibit">
              <div className="briefing-exhibit-number">
                <span className="sr-only">Exhibit </span>03
              </div>
              <div className="briefing-exhibit-copy">
                <p className="eyebrow">Category expansion</p>
                <h3>Trauma is doing two different jobs.</h3>
                <p>
                  PTSD uses a narrow event requirement. SAMHSA uses a broad public health definition based
                  on experienced harm and lasting effects. Both can serve a purpose. They should not be
                  treated as interchangeable.
                </p>
                <div className="briefing-defense-grid">
                  <div>
                    <span>PTSD Criterion A</span>
                    <p>Death, threatened death, serious injury, or sexual violence.</p>
                  </div>
                  <div>
                    <span>SAMHSA definition</span>
                    <p>Experienced physical or emotional harm, or life threat, followed by lasting adverse effects.</p>
                  </div>
                </div>
                <p className="briefing-source-line">
                  Compare{" "}
                  <a href="https://www.ptsd.va.gov/professional/treat/essentials/dsm5_ptsd.asp" target="_blank" rel="noopener noreferrer">
                    the PTSD event standard
                  </a>{" "}
                  with{" "}
                  <a href="https://www.samhsa.gov/mental-health/trauma-violence" target="_blank" rel="noopener noreferrer">
                    the SAMHSA definition
                  </a>.
                </p>
              </div>
              <div className="briefing-poll-card" aria-label="Trauma definition comparison">
                <span className="briefing-poll-stat">A ≠ B</span>
                <p className="briefing-poll-label">A broad public health category is not a PTSD event criterion.</p>
                <blockquote>
                  The wider the category becomes, the more important it is to state which definition is being used.
                </blockquote>
              </div>
            </article>

            <article className="briefing-exhibit">
              <div className="briefing-exhibit-number">
                <span className="sr-only">Exhibit </span>04
              </div>
              <div className="briefing-exhibit-copy">
                <p className="eyebrow">Market and authority</p>
                <h3>Hidden pathology is a good product.</h3>
                <p>
                  Public continuing education pages market expertise in masked or missed ADHD and autism,
                  as well as hidden narcissistic wounds and narcissistic abuse. The advertisements establish
                  what is being sold: access to patterns that ordinary assessment may miss.
                </p>
                <div className="briefing-defense-grid">
                  <div>
                    <span>Reasonable defense</span>
                    <p>Advertising compresses nuance, and missed diagnoses are possible.</p>
                  </div>
                  <div>
                    <span>Narrow conclusion</span>
                    <p>The public market rewards interpretive frameworks built around concealed pathology.</p>
                  </div>
                </div>
                <p className="briefing-source-line">
                  Public specimens:{" "}
                  <a
                    href="https://www.ecarebehavioralinstitute.com/courses/misdiagnosed-adhd-autism-masterclass-differential-diagnosis-neuro-affirming-interventions-rv/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ADHD and autism masterclass
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://webinar.ecarebehavioralinstitute.com/narcissistic-masterclass-47-lta-b"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hidden Narcissistic Wounds Masterclass
                  </a>.
                </p>
              </div>
              <figure className="briefing-ad-figure">
                <Image
                  src="/ecare-narcissistic-abuse-ad.png"
                  alt="Sponsored continuing education post about narcissistic abuse"
                  width={1075}
                  height={1478}
                  sizes="(max-width: 900px) 90vw, 32vw"
                />
                <figcaption>
                  This exhibit addresses the public marketing language, not undisclosed course content or presenter intent.
                </figcaption>
              </figure>
            </article>
          </div>

          <article className="briefing-exhibit briefing-methods-exhibit">
            <div className="briefing-exhibit-number">
              <span className="sr-only">Methods note </span>05
            </div>
            <div className="briefing-exhibit-copy">
              <p className="eyebrow">Perception versus causation</p>
              <h3>A perception poll measures perception.</h3>
              <p>
                In a Morning Consult poll, 86 percent of the sampled trans and nonbinary subgroup selected
                a negative response when asked how debates over restrictive state laws affected their mental
                health. The result records self reported attribution. It does not independently measure
                clinical change or isolate causation.
              </p>
              <div className="briefing-defense-grid">
                <div>
                  <span>What it establishes</span>
                  <p>Many respondents perceived a negative effect and said so.</p>
                </div>
                <div>
                  <span>What it does not establish alone</span>
                  <p>Magnitude of clinical change, diagnosis, or an independently identified causal effect.</p>
                </div>
              </div>
              <p className="briefing-source-line">
                Original source:{" "}
                <a
                  href="https://www.thetrevorproject.org/wp-content/uploads/2023/01/Issues-Impacting-LGBTQ-Youth-MC-Poll_Public-2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Morning Consult and The Trevor Project polling presentation
                </a>.
              </p>
            </div>
            <div className="briefing-poll-card" aria-label="Poll methods summary">
              <span className="briefing-poll-stat">86%</span>
              <p className="briefing-poll-label">selected a negative response</p>
              <dl>
                <div>
                  <dt>Mode</dt>
                  <dd>Online poll</dd>
                </div>
                <div>
                  <dt>Full sample</dt>
                  <dd>716 LGBTQ youth, ages 13 to 24</dd>
                </div>
                <div>
                  <dt>Field dates</dt>
                  <dd>October 23 to November 2, 2022</dd>
                </div>
                <div>
                  <dt>Subgroup size</dt>
                  <dd>Not reported</dd>
                </div>
              </dl>
            </div>
          </article>
        </div>
      </section>

      <section className="section-pad briefing-limits" id="limits" aria-labelledby="limits-heading">
        <div className="shell briefing-limits-grid">
          <div>
            <p className="eyebrow light">What this argument does not claim</p>
            <h2 id="limits-heading">The target is the causal story, not the patient.</h2>
            <p>
              The critique concerns what labels are allowed to explain. It is not an argument against
              patients, treatment, or the reality of distress.
            </p>
          </div>
          <ul>
            <li>Psychiatric suffering is real.</li>
            <li>Diagnosis can have practical value.</li>
            <li>Medication can help.</li>
            <li>Group associations can be legitimate findings.</li>
            <li>Missed diagnosis, trauma, and abuse can occur.</li>
            <li>Theology is an analogy for authority, ritual, belief, and commerce.</li>
          </ul>
        </div>
        <div className="shell briefing-limits-statement">
          A useful label is still not an invisible causal agent.
        </div>
      </section>

      <section className="section-pad briefing-sources" id="sources" aria-labelledby="sources-heading">
        <div className="shell">
          <div className="section-heading left briefing-section-heading">
            <p className="eyebrow">Sources</p>
            <h2 id="sources-heading">Conceptual anchors and public specimens.</h2>
            <p>
              The conceptual literature supports the distinction between classification and cause. The
              advertisements and poll show how claims are presented in public.
            </p>
          </div>
          <div className="briefing-source-grid">
            {sources.map((source) => (
              <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer">
                <span>{source.type}</span>
                <strong>{source.label}</strong>
                <b aria-hidden="true">↗</b>
              </a>
            ))}
          </div>
          <p className="briefing-verification-note">
            A public advertisement establishes what is marketed. It does not establish the full content of
            a paid course, the intent of its presenter, or patient harm.
          </p>
        </div>
      </section>

      <section className="section-pad briefing-questions-section" id="questions" aria-labelledby="questions-heading">
        <div className="shell briefing-questions-grid">
          <div>
            <p className="eyebrow">Interview questions</p>
            <h2 id="questions-heading">Five questions worth asking on camera.</h2>
            <p>
              The conversation begins with a simple distinction: what has been observed, what has been
              classified, and what has actually been explained?
            </p>
          </div>
          <ol className="briefing-questions">
            {interviewQuestions.map((question, index) => (
              <li key={question}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{question}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad briefing-about" id="about" aria-labelledby="about-heading">
        <div className="shell briefing-about-grid">
          <div className="briefing-about-image">
            <Image
              src="/stephen-mccarthy-portrait.webp"
              alt="Stephen McCarthy"
              width={840}
              height={960}
              sizes="(max-width: 800px) 86vw, 32vw"
            />
          </div>
          <div>
            <p className="eyebrow">About the proposed guest</p>
            <h2 id="about-heading">Stephen McCarthy</h2>
            <p className="briefing-about-role">
              Physician Assistant working in psychiatry · Allentown, Pennsylvania
            </p>
            <div className="prose">
              <p>
                Stephen McCarthy is a Physician Assistant with approximately eleven years of clinical
                experience. He writes as ThePsychPA about diagnostic standards, psychiatric language,
                clinical reasoning, and the movement of professional ideas into public culture. His focus
                is the gap between a useful description and an unsupported explanation.
              </p>
            </div>
            <div className="button-row">
              <a
                className="button primary"
                href="https://www.linkedin.com/in/stephenmccarthypa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request a conversation
              </a>
              <Link className="button secondary" href="/professional-record">
                Review professional record
              </Link>
            </div>
            <p className="small-note">
              Media correspondence is routed through LinkedIn. Clinical matters belong with the practice
              channel on the <Link href="/contact">contact page</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
