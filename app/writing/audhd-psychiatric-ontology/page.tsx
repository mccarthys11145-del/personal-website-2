import type { Metadata } from "next"
import Link from "next/link"
import Breadcrumbs from "@/components/breadcrumbs"
import { JsonLd } from "@/components/json-ld"

const title = "AuDHD, Psychiatric Ontology, and the Difference Between Naming and Explaining"
const description =
  "A critique of diagnostic reification: AuDHD can be useful shorthand, but a psychiatric label cannot serve as the cause of the symptoms used to define it without independent causal evidence."
const canonical = "https://www.stephenmccarthypa.com/writing/audhd-psychiatric-ontology"

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/writing/audhd-psychiatric-ontology",
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "Stephen McCarthy writing" }],
    },
  },
  openGraph: {
    type: "article",
    url: canonical,
    title,
    description,
    publishedTime: "2026-07-19T00:00:00-04:00",
    modifiedTime: "2026-07-19T00:00:00-04:00",
    authors: ["Stephen McCarthy"],
    section: "Psychiatric ontology",
    tags: ["AuDHD", "psychiatric diagnosis", "ontology", "reification", "clinical reasoning"],
    images: [
      {
        url: "/stephen-mccarthy-og.png",
        width: 1200,
        height: 630,
        alt: "Stephen McCarthy, physician assistant and writer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/stephen-mccarthy-og.png"],
  },
}

const references = [
  {
    label: "American Psychiatric Association. When Autism and ADHD Occur Together. July 17, 2025.",
    href: "https://www.psychiatry.org/news-room/apa-blogs/when-autism-and-adhd-occur-together",
  },
  {
    label: "American Psychiatric Association. About DSM 5 TR.",
    href: "https://www.psychiatry.org/psychiatrists/practice/dsm/about-dsm",
  },
  {
    label: "National Institute of Mental Health. About Research Domain Criteria.",
    href: "https://www.nimh.nih.gov/research/research-funded-by-nimh/rdoc/about-rdoc",
  },
  {
    label: "Hyman SE. The Diagnosis of Mental Disorders: The Problem of Reification. Annual Review of Clinical Psychology. 2010;6:155 to 179.",
    href: "https://pubmed.ncbi.nlm.nih.gov/17716032/",
  },
  {
    label: "Kendell R, Jablensky A. Distinguishing Between the Validity and Utility of Psychiatric Diagnoses. American Journal of Psychiatry. 2003;160:4 to 12.",
    href: "https://pubmed.ncbi.nlm.nih.gov/12505793/",
  },
  {
    label: "Cuthbert BN, Insel TR. Toward the Future of Psychiatric Diagnosis: The Seven Pillars of RDoC. BMC Medicine. 2013;11:126.",
    href: "https://pubmed.ncbi.nlm.nih.gov/23672542/",
  },
  {
    label: "Borsboom D. A Network Theory of Mental Disorders. World Psychiatry. 2017;16:5 to 13.",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5269502/",
  },
  {
    label: "Maung HH. Diagnosis and Causal Explanation in Psychiatry. Studies in History and Philosophy of Biological and Biomedical Sciences. 2016;60:15 to 24.",
    href: "https://www.sciencedirect.com/science/article/pii/S136984861630067X",
  },
]

export default function AudhdOntologyPage() {
  const articleJson = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: canonical,
    url: canonical,
    datePublished: "2026-07-19",
    dateModified: "2026-07-19",
    inLanguage: "en-US",
    articleSection: "Psychiatric ontology",
    keywords: ["AuDHD", "psychiatric ontology", "diagnostic reification", "mental disorder", "causal explanation"],
    author: {
      "@type": "Person",
      "@id": "https://www.stephenmccarthypa.com/#person",
      name: "Stephen McCarthy",
    },
    publisher: {
      "@type": "Person",
      "@id": "https://www.stephenmccarthypa.com/#person",
      name: "Stephen McCarthy",
    },
    image: "https://www.stephenmccarthypa.com/stephen-mccarthy-og.png",
  }

  return (
    <>
      <JsonLd data={articleJson} />
      <article>
        <header className="article-hero section-pad-sm">
          <div className="article-shell">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Writing", href: "/writing" },
                { label: "AuDHD and psychiatric ontology" },
              ]}
            />
            <div className="article-meta top-meta">
              <span>Psychiatric ontology</span>
              <time dateTime="2026-07-19">July 19, 2026</time>
              <span>Stephen McCarthy</span>
            </div>
            <h1>{title}</h1>
            <p className="article-deck">
              Mental suffering is real. A diagnostic label can be useful. Neither point turns the label into a bacterium, lesion, or independent causal mechanism.
            </p>
          </div>
        </header>

        <div className="article-shell article-layout">
          <aside className="article-aside" aria-label="Article summary">
            <div className="aside-card">
              <p className="aside-title">Thesis in one sentence</p>
              <p>
                A diagnosis can classify a pattern, but the label alone cannot cause the criteria from which it was inferred.
              </p>
            </div>
            <div className="aside-card">
              <p className="aside-title">Important distinction</p>
              <p>
                This is a critique of explanation, not a claim that symptoms, impairment, autism, or ADHD are imaginary.
              </p>
            </div>
          </aside>

          <div className="article-body prose">
            <p className="lead-paragraph">
              The term <em>AuDHD</em> has become a compact way to describe the co occurrence of autism and attention deficit hyperactivity disorder.
              The American Psychiatric Association uses the term in patient facing material while still describing autism and ADHD as two diagnoses that may occur together.
              That makes AuDHD useful shorthand. It does not automatically make AuDHD a third disease entity, a unified mechanism, or an explanation for every difficulty attributed to it.
            </p>

            <p>
              The larger issue is psychiatric ontology: what sort of thing is a diagnosis? Is it a discovered disease process, a statistical pattern,
              a practical category, a latent construct, a network of interacting symptoms, or some mixture of these? The answer can vary by diagnosis and by the evidence available.
              Trouble begins when one answer is assumed without being stated.
            </p>

            <h2 id="three-levels">Three levels that should not be collapsed</h2>
            <p>Clinical language often moves through three different jobs:</p>
            <ol>
              <li><strong>Description:</strong> identifying reported experiences, observed behavior, timing, severity, context, and impairment.</li>
              <li><strong>Classification:</strong> deciding that the pattern meets criteria for a named category.</li>
              <li><strong>Explanation:</strong> identifying a process that produced or maintains the pattern.</li>
            </ol>
            <p>
              A diagnosis can succeed at classification while leaving explanation incomplete. This is not unusual or scandalous. Medicine often works with syndromes before mechanisms are fully known.
              The error is not uncertainty. The error is smuggling an explanation into a label and then speaking as though the mechanism has already been discovered.
            </p>

            <div className="logic-box" role="figure" aria-label="Circular diagnostic explanation">
              <div><span>Observed criteria</span><b>→</b><span>Diagnostic label</span></div>
              <div><span>Diagnostic label</span><b>→</b><span>Observed criteria</span></div>
              <p>The second arrow adds causal information only when independent evidence supports it.</p>
            </div>

            <h2 id="circle">Why the label cannot be its own cause</h2>
            <p>
              Suppose a diagnosis is assigned because a person shows a defined cluster of inattention, impulsivity, hyperactivity, developmental history, and impairment.
              It may be concise and clinically useful to say that the person has ADHD. But when asked why the person is inattentive, saying “because of ADHD” can become circular
              if ADHD in that conversation means nothing more than the same pattern of inattention and related criteria.
            </p>
            <p>
              The structure is simple: the symptoms are used to infer the diagnosis, and then the diagnosis is invoked as the cause of the symptoms.
              The vocabulary has changed, but the information has not. A causal explanation requires something more: a specified mechanism, a developmental process,
              an experimentally supported model, a medical condition, a pharmacologic effect, a sleep disorder, an environmental contingency, or another independently supported factor.
            </p>
            <p>
              Steven Hyman described the danger of reification: treating useful diagnostic constructs as though they were already established natural entities.
              Robert Kendell and Assen Jablensky made a related distinction between the utility of psychiatric diagnoses and their validity as disease entities.
              A category can earn its keep without earning every ontological claim made on its behalf.
            </p>

            <h2 id="bacterium">Mental illness is not a bacterial infection</h2>
            <p>
              A bacterial infection offers a clean contrast. The organism can often be detected independently through culture, molecular testing, microscopy, or another assay.
              The causal claim does not depend only on naming fever, pain, inflammation, and fatigue. The suspected agent exists as evidence outside the symptom list,
              and interventions can test the causal model.
            </p>
            <p>
              Most psychiatric diagnoses are not established in that way. They are generally inferred from patterns of report, behavior, course, context, exclusion, and impairment.
              That does not make them fake. Blood pressure is also a measurement rather than a microbe. Pain is real without a single pain particle. The point is narrower:
              one should not talk as though every psychiatric label denotes an independently observed pathogen merely because the grammar of diagnosis makes it sound that way.
            </p>
            <p>
              One useful model is to treat many psychiatric diagnoses as compound measurements. A rule combines several observations into a classification that may predict course,
              correlate with biological findings, or guide care. The classification can be informative without becoming the hidden object that generated every input.
              The score is not automatically the source of the measurements used to calculate it.
            </p>
            <blockquote>
              A syndrome may be clinically useful and still be a compound measurement rather than a discovered causal object.
            </blockquote>

            <h2 id="audhd">What AuDHD does and does not establish</h2>
            <p>
              AuDHD can communicate that a person meets criteria for both autism and ADHD, or that both frameworks are relevant to the clinical picture.
              That shorthand may help people describe overlapping difficulties, find communities, request accommodations, or organize treatment questions.
            </p>
            <p>It does not establish, by itself, that:</p>
            <ul>
              <li>there is one unified disease process producing every feature;</li>
              <li>the combination forms a new formal diagnosis with validated boundaries;</li>
              <li>every difficulty commonly discussed online is a criterion of autism or ADHD;</li>
              <li>co occurrence explains the causal path from biology and environment to an individual symptom;</li>
              <li>a treatment response confirms the ontology of the label.</li>
            </ul>
            <p>
              Co occurrence is an observation about classification. It may generate useful causal hypotheses, but it is not itself the causal proof.
              The APA notes that an individual may receive both diagnoses. That is compatible with using AuDHD as shorthand and with remaining careful about what the shorthand explains.
            </p>

            <h2 id="definition-drift">Definition drift is not discovery</h2>
            <p>
              AuDHD becomes less useful when the shorthand turns into a funnel through which nearly any experience is interpreted. Feeling different, intense interests,
              information heavy conversation, variable attention, sensory preferences, or a poor response to one medication may all be clinically relevant.
              None becomes a formal diagnostic criterion merely because it fits a compelling narrative.
            </p>
            <p>
              Neurodivergence is an umbrella term, not a single diagnosis. If autism is quietly broadened until it means the entire umbrella, and ADHD is quietly broadened
              until it means any executive difficulty, then combining them creates a category with no stable boundary. Its apparent explanatory power grows because the definitions have expanded,
              not because a new causal entity has been demonstrated.
            </p>
            <p>
              This is also a measurement problem. A useful diagnostic construct should identify which observations count, which do not, and what alternatives must be considered.
              A construct that absorbs every confirming anecdote and treats every mismatch as hidden presentation becomes difficult to test. Social resonance may explain why a story spreads.
              It does not validate the story as a diagnosis or mechanism.
            </p>

            <h2 id="real">The suffering can be real even when the ontology is unsettled</h2>
            <p>
              Critiques of psychiatric categories are often misheard as claims that people are inventing their symptoms. That is a false choice.
              Distress, executive difficulty, sensory overload, social confusion, sleep disruption, impulsive behavior, restricted patterns, and functional impairment can all be real.
              The ontological question asks what kind of explanatory object the diagnosis is, not whether the person is suffering.
            </p>
            <p>
              In fact, clearer ontology can protect patients. It reduces the temptation to force every problem through one label, overlook medical and environmental contributors,
              or treat a population average as the causal story of an individual. It also makes room for uncertainty without converting uncertainty into dismissal.
            </p>

            <h2 id="useful">What diagnoses are still good for</h2>
            <p>Diagnostic categories can provide substantial practical value. They can:</p>
            <ul>
              <li>compress a complex pattern into a shared clinical vocabulary;</li>
              <li>support communication among patients, clinicians, schools, insurers, and researchers;</li>
              <li>guide risk assessment, accommodations, and reasonable treatment trials;</li>
              <li>organize research samples and epidemiologic data;</li>
              <li>help people recognize that their difficulties are shared rather than uniquely personal failures.</li>
            </ul>
            <p>
              NIMH created the Research Domain Criteria framework precisely because categorical diagnoses are useful in clinical systems but can be limiting as units of causal research.
              RDoC is not a replacement diagnostic manual. It is an attempt to study psychological and biological systems across conventional category boundaries.
              That distinction captures the central point: clinical utility and causal explanation are related, but they are not identical.
            </p>

            <h2 id="questions">Better questions after the diagnosis</h2>
            <p>A label should open inquiry rather than close it. Useful next questions include:</p>
            <ul>
              <li>Which specific experiences or behaviors are causing impairment?</li>
              <li>When did they begin, and what is the developmental course?</li>
              <li>Which settings amplify or reduce them?</li>
              <li>What roles do sleep, substances, medication, pain, medical illness, stress, learning demands, and relationships play?</li>
              <li>Are symptoms interacting with one another in a self sustaining network?</li>
              <li>Which intervention changes which target, and what does that result actually demonstrate?</li>
            </ul>
            <p>
              Network theories of psychopathology offer one alternative to the hidden disease model. On that view, symptoms may influence one another directly:
              insomnia worsens concentration, concentration failures create stress, stress worsens sleep, and the loop becomes self sustaining.
              This model will not explain every case, but it shows why a diagnostic pattern need not require one invisible common cause.
            </p>

            <h2 id="language">A more honest clinical sentence</h2>
            <p>Instead of saying:</p>
            <p className="sentence-example weak">“The disorder causes the symptoms.”</p>
            <p>one can say:</p>
            <p className="sentence-example strong">
              “The observed pattern meets criteria for this diagnosis. The diagnosis helps organize care. The causes of the individual features may be multiple and require separate evidence.”
            </p>
            <p>
              That sentence is less magical and more useful. It preserves the diagnosis without pretending that naming has completed the science.
            </p>

            <h2 id="conclusion">Conclusion</h2>
            <p>
              AuDHD is a compact name for a clinically and personally meaningful overlap. It can be useful without becoming a new bacterium.
              Autism and ADHD diagnoses can organize observations, guide services, and support treatment. They should not be used as self validating causal agents.
            </p>
            <p>
              The rule is simple: a label can summarize the evidence used to assign it. To explain that evidence, it must bring something independent to the table.
              Otherwise the diagnosis has not answered the question. It has only repeated it in a white coat.
            </p>

            <div className="author-note">
              <h2>Author note</h2>
              <p>
                Stephen McCarthy is a physician assistant with clinical experience in psychiatric settings. This article is conceptual commentary for general education.
                It is not medical advice, a diagnostic assessment, or a recommendation to begin, stop, or change treatment.
              </p>
            </div>

            <section className="references" aria-labelledby="references-heading">
              <h2 id="references-heading">References</h2>
              <ol>
                {references.map((reference) => (
                  <li key={reference.href}>
                    <a href={reference.href} target="_blank" rel="noopener noreferrer">{reference.label}</a>
                  </li>
                ))}
              </ol>
            </section>

            <div className="article-footer-nav">
              <Link className="button secondary" href="/writing">Back to writing</Link>
              <Link className="button primary" href="/professional-record">Licensure</Link>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
