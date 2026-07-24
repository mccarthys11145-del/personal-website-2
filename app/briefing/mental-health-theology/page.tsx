import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Breadcrumbs from "@/components/breadcrumbs"
import { JsonLd } from "@/components/json-ld"

const title = "Mental Health Is the New Theology of the West"
const description =
  "A producer briefing by Stephen McCarthy on psychiatric classification, diagnostic reification, construct expansion, commercial authority, and political medicalization."
const path = "/briefing/mental-health-theology"
const canonical = `https://www.stephenmccarthypa.com${path}`

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
    modifiedTime: "2026-07-23T00:00:00-04:00",
    authors: ["Stephen McCarthy"],
    section: "Producer briefing",
    tags: [
      "psychiatric ontology",
      "diagnostic reification",
      "mental health culture",
      "clinical reasoning",
    ],
    images: [
      {
        url: "/mental-health-theology-og.png",
        width: 1200,
        height: 630,
        alt: "Mental Health Is the New Theology of the West — producer briefing by Stephen McCarthy",
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
  "What exactly is a psychiatric disorder when the diagnosis is constructed from symptoms and judgment?",
  "When does a useful classification become a fictional causal entity?",
  "How do associated research findings become new symptoms and diagnostic evidence?",
  "Can a disorder be underdiagnosed when the correct prevalence depends upon a judgment of impairment?",
  "How did therapeutic language become a moral code that governs who may speak?",
  "Can psychiatric medications be useful without validating the disease story attached to the diagnosis?",
]

const sources = [
  {
    type: "Classification standard",
    label: "American Psychiatric Association — DSM overview",
    href: "https://www.psychiatry.org/psychiatrists/practice/dsm",
  },
  {
    type: "Conceptual anchor",
    label: "Hyman — The Diagnosis of Mental Disorders: The Problem of Reification",
    href: "https://pubmed.ncbi.nlm.nih.gov/17716032/",
  },
  {
    type: "Conceptual anchor",
    label: "Kendell and Jablensky — Validity and Utility of Psychiatric Diagnoses",
    href: "https://pubmed.ncbi.nlm.nih.gov/12505793/",
  },
  {
    type: "Causal explanation",
    label: "Maung — Diagnosis and Causal Explanation in Psychiatry",
    href: "https://www.sciencedirect.com/science/article/pii/S136984861630067X",
  },
  {
    type: "Differential diagnosis",
    label: "CDC — Diagnosing ADHD",
    href: "https://www.cdc.gov/adhd/signs-symptoms/index.html",
  },
  {
    type: "Associated feature",
    label: "Willcutt et al. — Executive-function theory of ADHD meta-analysis",
    href: "https://pubmed.ncbi.nlm.nih.gov/15950006/",
  },
  {
    type: "Associated feature",
    label: "Beheshti et al. — Emotion dysregulation in adult ADHD meta-analysis",
    href: "https://pubmed.ncbi.nlm.nih.gov/32164655/",
  },
  {
    type: "Research construct",
    label: "Hupfeld et al. — Living “in the zone”: hyperfocus in adult ADHD",
    href: "https://pubmed.ncbi.nlm.nih.gov/30267329/",
  },
  {
    type: "Marketing specimen",
    label: "eCare — ADHD and autism masterclass public page",
    href: "https://www.ecarebehavioralinstitute.com/courses/misdiagnosed-adhd-autism-masterclass-differential-diagnosis-neuro-affirming-interventions-rv/",
  },
  {
    type: "Marketing specimen",
    label: "eCare — Hidden Narcissistic Wounds Masterclass public page",
    href: "https://webinar.ecarebehavioralinstitute.com/narcissistic-masterclass-47-lta-b",
  },
  {
    type: "Methods specimen",
    label: "Morning Consult and The Trevor Project — Issues Impacting LGBTQ Youth",
    href: "https://www.thetrevorproject.org/wp-content/uploads/2023/01/Issues-Impacting-LGBTQ-Youth-MC-Poll_Public-2.pdf",
  },
  {
    type: "Long-form video",
    label: "PHA-001 — Diagnostic Fan Fiction",
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
    dateModified: "2026-07-23",
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

  return (
    <>
      <JsonLd data={pageJson} />

      <header className="briefing-hero">
        <div className="shell">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Producer briefing" },
            ]}
          />

          <nav className="briefing-jump-nav" aria-label="Briefing sections">
            <a href="#argument">Argument</a>
            <a href="#exhibits">Exhibits</a>
            <a href="#limits">Limits</a>
            <a href="#sources">Evidence</a>
            <a href="#questions">Questions</a>
            <a href="#about">About</a>
          </nav>

          <div className="briefing-hero-grid">
            <div>
              <p className="eyebrow">A briefing for a long-form conversation</p>
              <h1>Mental health is the new theology of the West.</h1>
              <p className="briefing-hero-deck">
                How descriptive psychiatric classifications can become causal stories, identities,
                moral authority, and a commercial system.
              </p>
              <p className="briefing-byline">
                Stephen McCarthy · Physician Assistant working in psychiatry · Allentown, Pennsylvania
              </p>
              <div className="button-row">
                <a className="button primary" href="#opening">
                  Watch the 90-second opening
                </a>
                <a className="button secondary" href="#exhibits">
                  Review the evidence
                </a>
              </div>
              <p className="review-note">
                Sources and public examples reviewed July 23, 2026. Arguments are identified as arguments.
              </p>
            </div>

            <aside className="briefing-premise" aria-label="Argument summary">
              <span className="card-kicker">The argument in one sentence</span>
              <p>
                Psychiatry creates classifications from observations, then public culture treats those
                classifications as invisible causes—and builds identities, markets, and moral authority around them.
              </p>
              <dl>
                <div>
                  <dt>Clinical error</dt>
                  <dd>Classification becomes cause</dd>
                </div>
                <div>
                  <dt>Cultural result</dt>
                  <dd>Identity becomes authority</dd>
                </div>
                <div>
                  <dt>Standard</dt>
                  <dd>State only what the evidence permits</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </header>

      <section className="briefing-scope-strip" aria-label="Scope of the argument">
        <div className="shell">
          <p>
            <strong>Suffering is real. Diagnosis can be useful. Medication can help.</strong>
            <span>The question is what the label actually explains.</span>
          </p>
        </div>
      </section>

      <section className="briefing-editorial-fit" aria-labelledby="editorial-fit-heading">
        <div className="shell briefing-editorial-fit-grid">
          <p className="eyebrow">Why this fits TCN</p>
          <div>
            <h2 id="editorial-fit-heading">An adjacent inquiry into therapeutic authority.</h2>
            <p>
              <em>The Religion Business</em> examines what happens when belief becomes institutional authority
              and a commercial product. This briefing extends that inquiry to therapeutic culture, where
              descriptive classifications can acquire causal, moral, and commercial force.
            </p>
          </div>
        </div>
      </section>

      <section className="briefing-video-section section-pad-sm" id="opening" aria-labelledby="opening-heading">
        <div className="shell briefing-video-grid">
          <div className="briefing-video-frame">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/mental-health-theology-opening-poster.png"
              aria-label="Stephen McCarthy — captioned 90-second opening excerpt"
            >
              <source src="/mental-health-theology-opening.mp4" type="video/mp4" />
              <track
                kind="captions"
                src="/mental-health-theology-opening.vtt"
                srcLang="en"
                label="English"
              />
              Your browser does not support embedded video.{" "}
              <a href="/mental-health-theology-opening.mp4">Download the captioned opening</a>.
            </video>
          </div>
          <div className="briefing-video-copy">
            <p className="eyebrow light">90-second opening · captioned</p>
            <h2 id="opening-heading">When diagnosis becomes unfalsifiable.</h2>
            <p>
              The written opening states the central claim. McCarthy then argues that masking, autistic
              burnout, and “hidden ADHD” can absorb evidence that should test a diagnosis—and asks what
              people are being invited to “open up” into.
            </p>
            <blockquote>
              “If nothing can prove your conclusions wrong, then you are doing theology.”
            </blockquote>
            <a
              className="text-link briefing-light-link"
              href="https://www.youtube.com/watch?v=PmZEHOUVZ9Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch the full 7:44 advisory <span aria-hidden="true">→</span>
            </a>
            <p className="briefing-video-disclosure">
              The required opening text is followed by excerpts from 05:48–06:23 and 07:01–07:44 of{" "}
              <em>PHA-001: Diagnostic Fan Fiction</em>. Both transitions are marked by brief fades.
            </p>
            <details className="briefing-transcript">
              <summary>Read the 90-second transcript</summary>
              <div>
                <p>
                  The West did not become less religious. It changed religions. Mental health now supplies
                  invisible causes, authorized interpreters, confession, redemption, ritual language, and moral
                  exclusion. The clinical error beneath it is simple: psychiatry creates a label from symptoms
                  and then says that the label caused the symptoms.
                </p>
                <p>
                  Nothing can suggest that this diagnosis is wrong. The course arrives with the conclusion
                  and then makes everything else point towards it. The person doesn&apos;t meet the criteria for
                  autism. Well, they&apos;re masking it. If the antidepressant didn&apos;t work, then it&apos;s autistic
                  burnout. And if the patient has a lot of anxiety, well, that&apos;s hidden ADHD.
                </p>
                <p>
                  This is not competent diagnosis or clinical reasoning, and if nothing can prove your conclusions
                  wrong, then you are doing theology. This is religion. And honestly, these courses do feel more
                  like religious experiences.
                </p>
                <p>
                  But opening up into what? Opening up into a field where the experts and clinicians think that
                  disorders are hiding behind symptoms like goblins in the attic, a field where ADHD and autism
                  become master keys for depression, anxiety symptoms, personality disorders, and any kind of
                  treatment resistance, any kind of medication failure or therapy failure.
                  This is not mental health care. This is brain rot. You do not need more news articles, more people,
                  more posters telling men to open up this month. We need better clinical reasoning when they do,
                  and that&apos;s why mental health is getting stupid and we need to start pushing back.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="section-pad briefing-argument" id="argument" aria-labelledby="argument-heading">
        <div className="article-shell briefing-argument-layout">
          <aside className="briefing-argument-aside" aria-label="Briefing notes">
            <div className="aside-card">
              <p className="aside-title">Document</p>
              <p>Producer briefing</p>
            </div>
            <div className="aside-card">
              <p className="aside-title">Core distinction</p>
              <p>Description, classification, and explanation are different jobs.</p>
            </div>
            <div className="aside-card">
              <p className="aside-title">Reading standard</p>
              <p>Every exhibit includes the strongest defense and the narrowest conclusion.</p>
            </div>
          </aside>

          <div className="article-body prose briefing-prose">
            <p className="eyebrow">Concise written thesis</p>
            <h2 id="argument-heading">The classification became the cause.</h2>
            <p className="lead-paragraph">
              To say that mental health has become the new theology of the West is not to say that
              suffering is imaginary or that clinicians are priests. It is a structural analogy.
            </p>
            <p>
              A theology offers an account of invisible causes, a vocabulary for interpreting ordinary
              events, authorized interpreters, rituals of confession and redemption, and rules for separating
              the enlightened from the dangerous. Parts of popular mental-health culture increasingly perform
              those functions.
            </p>
            <p>
              Its language now reaches far beyond the clinic. A diagnosis can reorganize a biography,
              recast a relationship, explain a conflict, establish an identity, and authorize moral judgments
              about who is safe, validating, healed, or harmful. “Opening up” can become a duty; “processing”
              can become a rite; affirmation can become a test of virtue. Disagreement is no longer merely
              disagreement. It can be redescribed as invalidation, trauma, or evidence that the dissenter is unsafe.
            </p>
            <h3 className="briefing-thesis-subhead">Classification and cause</h3>
            <p>
              The argument begins when a descriptive classification is treated as if it caused the observations
              used to assign it. Many common psychiatric diagnoses are assigned from patterns of reported
              experience, observed behavior, time course, exclusions, and judgments of impairment. Those
              classifications can be useful. They allow clinicians
              to communicate, organize evidence, estimate risk, select treatments, and make services available.
              But a useful classification is not automatically an independently existing cause.
            </p>

            <div className="briefing-logic" role="figure" aria-label="The circular explanation">
              <div>
                <span>Inattention + duration + impairment</span>
                <b aria-hidden="true">→</b>
                <span>ADHD classification</span>
              </div>
              <div>
                <span>ADHD classification</span>
                <b aria-hidden="true">⇢</b>
                <span>Cause of inattention?</span>
              </div>
              <p>The second arrow requires independent causal evidence.</p>
            </div>

            <p>
              Consider ADHD. Inattention helps define the diagnosis. If the diagnosis is then invoked as the
              explanation for the same inattention—“the person cannot concentrate because they have ADHD”—the
              label has been asked to do more work than the assessment established. It may summarize a pattern
              and correlate with other findings. It does not, by itself, identify the mechanism producing poor
              concentration in a particular person. Sleep loss, depression, anxiety, medication effects, substance
              use, medical illness, developmental traits, stress, and environment still have to be considered.
            </p>
            <h3 className="briefing-thesis-subhead">How categories expand</h3>
            <p>
              The same reversal can drive construct expansion. Researchers may begin with people already assigned a
              label and identify an average associated feature. Public educators can then convert the association into
              “what the disorder looks like,” then into a mechanism, then into another clue that someone has the disorder.
              Executive-function problems, emotional dysregulation, and hyperfocus may all be legitimate subjects
              of research. But an associated feature does not become a diagnostic criterion or causal explanation
              simply because it appears more often in a classified group.
            </p>
            <p>
              In the interpretive pattern at issue, once the boundary between criterion, association, and mechanism
              dissolves, almost any observation can confirm the favored story. Poor concentration points to ADHD; intense concentration becomes ADHD hyperfocus.
              Social difficulty points to autism; social competence becomes masking. Strong emotion and numbness both
              become dysregulation. Treatment response confirms the diagnosis; treatment nonresponse reveals the
              “hidden” diagnosis. The framework becomes difficult to disconfirm because contrary evidence is absorbed
              as further proof.
            </p>
            <h3 className="briefing-thesis-subhead">From interpretation to market</h3>
            <p>
              This is where the theology becomes a business. Continuing-education companies and masterclasses sell
              training to identify diagnoses or patterns described as masked, subtle, or hidden beneath familiar
              presentations: ADHD or autism misattributed to anxiety, depression, or personality disorders, and
              “narcissistic abuse” framed through hidden wounds and manipulation. The claim here must remain precise.
              A public advertisement proves what is being marketed. It does not prove everything taught inside a paid
              course, presenter intent, or patient harm. The specimen is the advertised reasoning, not the seller.
            </p>
            <p>
              The same pattern enters politics when psychological language is treated as causal evidence. A survey can
              legitimately show that respondents report a negative mental-health impact and attribute it to debates about restrictive laws.
              Those reports matter. But self-attribution is not an independent clinical measure, and it does not by itself
              establish deterioration, magnitude of clinical change, or causation. A political judgment can be reasonable while the medical
              claim remains methodologically unproven.
            </p>
            <h3 className="briefing-thesis-subhead">What better reasoning requires</h3>
            <p>
              The cost of this error is not merely philosophical. When the label becomes the explanation, clinicians may
              stop asking what is actually producing or maintaining the person&apos;s distress. When every contradiction can
              be renamed as masking, trauma, or hidden pathology, differential diagnosis gives way to confirmation.
              When a classification becomes an identity and a moral status, revision can feel like betrayal rather than
              better reasoning.
            </p>
            <p>
              A more defensible model is more modest. Begin with symptoms, time course, context, impairment,
              developmental history, sleep, medical contributors, substances, medication effects, relationships, environment,
              and competing hypotheses. Ask what evidence would make the preferred diagnosis less likely. Use a disorder
              label when it improves communication or care, but do not confuse the label with the mechanism that still needs
              to be found.
            </p>
            <p>
              This argument does not require denying psychiatric suffering, rejecting diagnosis, or opposing medication.
              Suffering is real. Diagnoses can have practical value. Medications can help. Group associations can be genuine
              and clinically useful. None of those facts licenses a descriptive category to become an invisible causal agent,
              an all-purpose identity, or an unquestionable moral authority.
            </p>
            <p>
              Parts of Western public culture have built institutions, markets, identities, and rules of belonging
              around mental-health language. The question is not whether mental-health care should disappear.
              The question is whether a field meant to relieve suffering can recover the humility to distinguish what it has
              observed, what it has classified, what it has inferred, and what it actually knows.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad briefing-exhibits-section" id="exhibits" aria-labelledby="exhibits-heading">
        <div className="shell">
          <div className="section-heading left briefing-section-heading">
            <p className="eyebrow">Four clean exhibits</p>
            <h2 id="exhibits-heading">Four ways classification is asked to explain more than it establishes.</h2>
            <p>
              Each exhibit separates what the source establishes, the strongest reasonable defense,
              and the narrowest conclusion the evidence permits.
            </p>
          </div>

          <div className="briefing-exhibit-stack">
            <article className="briefing-exhibit">
              <div className="briefing-exhibit-number">
                <span className="sr-only">Exhibit </span>01
              </div>
              <div className="briefing-exhibit-copy">
                <p className="eyebrow">Classification → causal agent</p>
                <h3>When ADHD is used to explain the symptom that helped establish it.</h3>
                <p>
                  ADHD is identified through a pattern that includes persistent inattention and/or
                  hyperactivity-impulsivity, considered alongside development, setting, impairment,
                  and alternative explanations. A circular move occurs if inattention helps establish
                  ADHD and the label is then offered, without independent causal evidence, as the reason
                  for the same inattention.
                </p>
                <div className="briefing-defense-grid">
                  <div>
                    <span>Strongest defense</span>
                    <p>
                      ADHD may refer to a real, incompletely understood syndrome and can predict clinically relevant outcomes.
                    </p>
                  </div>
                  <div>
                    <span>Narrow conclusion</span>
                    <p>
                      A diagnosis can organize observations. The diagnosis alone is not a patient-specific causal explanation.
                    </p>
                  </div>
                </div>
                <p className="briefing-source-line">
                  Source anchors:{" "}
                  <a
                    href="https://www.psychiatry.org/psychiatrists/practice/dsm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    APA DSM overview
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.cdc.gov/adhd/signs-symptoms/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CDC diagnostic guidance
                  </a>, and{" "}
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/17716032/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hyman on diagnostic reification
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
                  The diagram moves from observations—including inattention, anxiety, mood change, and relationship
                  conflict—to labels such as ADHD, autism, and personality disorder. Its “goblin error” is the extra
                  step in which the label is then treated as the hidden cause of the same observations. A classification
                  can summarize observations; the extra causal arrow needs extra evidence.
                </figcaption>
              </figure>
            </article>

            <article className="briefing-exhibit">
              <div className="briefing-exhibit-number">
                <span className="sr-only">Exhibit </span>02
              </div>
              <div className="briefing-exhibit-copy">
                <p className="eyebrow">Construct expansion</p>
                <h3>How association can become trait, mechanism, and diagnostic clue.</h3>
                <p>
                  Executive dysfunction, emotional dysregulation, and hyperfocus may be valid research constructs
                  or associated features. That does not automatically make them formal criteria, unique to ADHD,
                  or proof of a single cause.
                </p>
                <div className="briefing-defense-grid">
                  <div>
                    <span>Strongest defense</span>
                    <p>
                      Criteria are not exhaustive, and associated features can improve recognition and formulation.
                    </p>
                  </div>
                  <div>
                    <span>Narrow conclusion</span>
                    <p>
                      The status of a claim must survive its translation from research into public education.
                    </p>
                  </div>
                </div>
                <p className="briefing-source-line">
                  Research anchors:{" "}
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/15950006/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    executive-function meta-analysis
                  </a>,{" "}
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/32164655/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    emotion-dysregulation meta-analysis
                  </a>, and{" "}
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/30267329/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    hyperfocus study
                  </a>. These establish group-level associations or reported experiences—not formal criteria,
                  universality, or a patient-specific cause.
                </p>
              </div>
              <div className="briefing-chain" role="figure" aria-label="Proposed construct expansion chain">
                <span>Classified cohort</span>
                <b aria-hidden="true">→</b>
                <span>Average association</span>
                <b aria-hidden="true">→</b>
                <span>“ADHD trait”</span>
                <b aria-hidden="true">→</b>
                <span>Proposed mechanism</span>
                <b aria-hidden="true">→</b>
                <span>New diagnostic clue</span>
                <p>
                  This is a proposed translation to audit, not a finding established by the studies above.
                  Each arrow is a new proposition and needs its own evidence.
                </p>
              </div>
            </article>

            <article className="briefing-exhibit">
              <div className="briefing-exhibit-number">
                <span className="sr-only">Exhibit </span>03
              </div>
              <div className="briefing-exhibit-copy">
                <p className="eyebrow">Commercial theology</p>
                <h3>Marketing promises access to what ordinary assessment may miss.</h3>
                <p>
                  eCare&apos;s current catalog markets training to recognize ADHD and autism in presentations
                  described as masked, subtle, or co-occurring, and to avoid misattributing them to anxiety,
                  depression, or personality disorders. A separate sponsored post addresses “narcissistic abuse
                  clients.” It is a commercially marketed interpretive style—the credentialed expert sees what
                  ordinary assessment supposedly misses.
                </p>
                <div className="briefing-marketing-quotes">
                  <blockquote>“Masked, subtle, or co-occurring” presentations</blockquote>
                  <blockquote>“What your narcissistic abuse client rehearses in the mirror.”</blockquote>
                </div>
                <div className="briefing-defense-grid">
                  <div>
                    <span>Strongest defense</span>
                    <p>
                      Advertising compresses nuance. The live ADHD page says the training does not replace
                      standardized diagnostic procedures, formal training, or supervised experience.
                    </p>
                  </div>
                  <div>
                    <span>Narrow conclusion</span>
                    <p>
                      The public marketing uses the category “narcissistic abuse client” before the public material
                      shows how that category is operationalized, and it sells recognition of hidden patterns. It does
                      not show whether or how the paid course distinguishes reported abuse from diagnosis of an absent
                      third party.
                    </p>
                  </div>
                </div>
                <p className="briefing-source-line">
                  Public specimens:{" "}
                  <a
                    href="https://www.ecarebehavioralinstitute.com/courses/misdiagnosed-adhd-autism-masterclass-differential-diagnosis-neuro-affirming-interventions-rv/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    eCare ADHD/autism masterclass page
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://webinar.ecarebehavioralinstitute.com/narcissistic-masterclass-47-lta-b"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hidden Narcissistic Wounds Masterclass
                  </a>. The sponsored-post capture comes from the project source archive.
                </p>
              </div>
              <figure className="briefing-ad-figure">
                <Image
                  src="/ecare-narcissistic-abuse-ad.png"
                  alt="Sponsored eCare Behavioral Health Institute post marketing nine continuing-education credits on narcissistic abuse for 47 dollars"
                  width={1075}
                  height={1478}
                  sizes="(max-width: 900px) 90vw, 32vw"
                />
                <figcaption>
                  This exhibit evaluates the public marketing language, not undisclosed paid-course content.
                </figcaption>
              </figure>
            </article>

            <article className="briefing-exhibit briefing-methods-exhibit">
              <div className="briefing-exhibit-number">
                <span className="sr-only">Exhibit </span>04
              </div>
              <div className="briefing-exhibit-copy">
                <p className="eyebrow">Political medicalization</p>
                <h3>What a perception poll can—and cannot—establish.</h3>
                <p>
                  In an online Morning Consult poll, 86% of the sampled trans and/or non-binary subgroup
                  selected a negative response when asked how recent debates about state laws restricting
                  transgender rights had affected their mental health. The poll records respondents&apos; self-reported
                  negative perceived impact. It does not independently measure clinical change or identify a causal effect.
                </p>
                <div className="briefing-defense-grid">
                  <div>
                    <span>What it establishes</span>
                    <p>
                      Respondents in the subgroup selected negative answers to a question about perceived impact.
                    </p>
                  </div>
                  <div>
                    <span>What it does not establish alone</span>
                    <p>
                      Clinical deterioration, magnitude of clinical change, or an independently identified causal effect.
                    </p>
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
                <p className="briefing-poll-label">
                  of the sampled trans and/or non-binary subgroup selected a negative response
                </p>
                <blockquote>
                  “How have recent debates about state laws restricting the rights of transgender people impacted your mental health?”
                </blockquote>
                <dl>
                  <div>
                    <dt>Mode</dt>
                    <dd>Online poll</dd>
                  </div>
                  <div>
                    <dt>Full sample</dt>
                    <dd>716 LGBTQ youth, ages 13–24</dd>
                  </div>
                  <div>
                    <dt>Field dates</dt>
                    <dd>Oct. 23–Nov. 2, 2022</dd>
                  </div>
                  <div>
                    <dt>Full-sample margin</dt>
                    <dd>±4 percentage points</dd>
                  </div>
                  <div>
                    <dt>Subgroup size</dt>
                    <dd>Not reported</dd>
                  </div>
                  <div>
                    <dt>Subgroup margin</dt>
                    <dd>Not reported</dd>
                  </div>
                </dl>
                <p className="briefing-poll-note">
                  The ±4-point margin applies to the full sample. Participant attribution is evidence; it is not,
                  by itself, a causal design.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad briefing-limits" id="limits" aria-labelledby="limits-heading">
        <div className="shell briefing-limits-grid">
          <div>
            <p className="eyebrow light">What I am not claiming</p>
            <h2 id="limits-heading">Precision is the argument.</h2>
            <p>
              The critique is aimed at explanatory overreach, not at patients, the reality of distress,
              or the practical work of care.
            </p>
          </div>
          <ul>
            <li>Psychiatric suffering is real.</li>
            <li>Diagnosis can have practical value.</li>
            <li>Medication can help.</li>
            <li>Group associations can be legitimate and useful findings.</li>
            <li>ADHD, autism, masking, missed diagnosis, trauma, and abuse are not inventions.</li>
            <li>
              “Theology” is an analogy for authority, ritual, unfalsifiability, and commerce—not a claim
              that every clinician shares a creed or that religion is pathological.
            </li>
          </ul>
        </div>
        <div className="shell briefing-limits-statement">
          None of those facts permits a descriptive label to become an invisible causal entity.
        </div>
      </section>

      <section className="section-pad briefing-sources" id="sources" aria-labelledby="sources-heading">
        <div className="shell">
          <div className="section-heading left briefing-section-heading">
            <p className="eyebrow">Evidence standard</p>
            <h2 id="sources-heading">Evidence anchors and public specimens.</h2>
            <p>
              These links anchor the conceptual literature, diagnostic guidance, marketing examples, and
              poll methods used above. Named examples are specimens; the institutional reasoning error is the subject.
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
            Public web examples and poll metadata last checked July 23, 2026. A marketing page establishes
            what is being marketed; it is not a substitute for reviewing an entire paid course.
          </p>
        </div>
      </section>

      <section className="section-pad briefing-questions-section" id="questions" aria-labelledby="questions-heading">
        <div className="shell briefing-questions-grid">
          <div>
            <p className="eyebrow">Six proposed interview questions</p>
            <h2 id="questions-heading">A conversation built to go past the slogan.</h2>
            <p>
              Each question opens a different layer of the same problem: what kind of thing a diagnosis is,
              what it can explain, and what follows when the culture treats it as more than the evidence established.
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
            <p className="briefing-about-role">Physician Assistant working in psychiatry · Allentown, Pennsylvania</p>
            <div className="prose">
              <p>
                Stephen McCarthy is a Physician Assistant working in psychiatry with approximately eleven years
                of clinical experience. He writes and speaks as ThePsychPA about diagnostic standards, clinical
                reasoning, psychiatric language, and the movement of professional ideas into popular culture and
                public policy. His focus is the gap between useful clinical description and unsupported causal
                explanation: what a diagnosis records, what evidence can establish, and what remains unknown.
                His target is not patients, treatment, or the reality of suffering, but conceptual overreach by
                institutions and educators. He is based in Allentown, Pennsylvania.
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
              Professional and media correspondence is routed through the controlled LinkedIn profile.
              Clinical matters belong with the practice channel on the <Link href="/contact">contact page</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
