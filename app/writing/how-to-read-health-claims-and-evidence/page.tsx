import type { Metadata } from "next"
import Link from "next/link"
import Breadcrumbs from "@/components/breadcrumbs"
import { JsonLd } from "@/components/json-ld"

const title = "How to Read Health Claims and Evidence: Association, Causation, and Uncertainty"
const description = "A practical guide to reading health research: study design, absolute and relative risk, uncertainty, surrogate outcomes, and the limits of a single result."
const canonical = "https://www.stephenmccarthypa.com/writing/how-to-read-health-claims-and-evidence"

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/writing/how-to-read-health-claims-and-evidence", types: { "application/rss+xml": [{ url: "/feed.xml", title: "Stephen McCarthy writing" }] } },
  openGraph: { type: "article", title, description, url: canonical, publishedTime: "2026-10-08T20:00:00-04:00", authors: ["Stephen McCarthy"], images: [{ url: "/stephen-mccarthy-og.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title, description, images: ["/stephen-mccarthy-og.png"] },
}

export default function HealthEvidencePage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: title, description, url: canonical, mainEntityOfPage: canonical, datePublished: "2026-10-08", dateModified: "2026-10-08", inLanguage: "en-US", articleSection: "Reading research", author: { "@type": "Person", "@id": "https://www.stephenmccarthypa.com/#person", name: "Stephen McCarthy" } }} />
    <article>
      <header className="article-hero section-pad-sm"><div className="article-shell">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Writing", href: "/writing" }, { label: "Reading health evidence" }]} />
        <div className="article-meta top-meta"><span>Reading research</span><time dateTime="2026-10-08">October 8, 2026</time><span>Stephen McCarthy</span></div>
        <h1>{title}</h1><p className="article-deck">Keep the conclusion within the study&apos;s reach.</p>
      </div></header>
      <div className="article-shell article-layout">
        <aside className="article-aside" aria-label="Article guide"><div className="aside-card">
          <p className="aside-title">A reading checklist</p><p>Question → design → comparison → size → uncertainty → relevance.</p>
          <p>Examples are hypothetical. This is education about research, not individual medical advice.</p>
          <a href="#sources-and-review">Sources and review</a>
        </div></aside>
        <div className="article-body prose">
          <section aria-labelledby="companion-video">
            <h2 id="companion-video">Watch the companion explainer</h2>
            <p>A 4 minute, 51 second introduction to the reading method, with synthetic narration and English captions.</p>
            <video controls preload="metadata" poster="/media/health-evidence/A2-Poster.jpg" style={{width: "100%", height: "auto"}} aria-label="How to Read Health Claims and Evidence companion explainer">
              <source src="/media/health-evidence/A2-How-to-Read-Health-Evidence.mp4" type="video/mp4" />
              <track kind="captions" src="/media/health-evidence/A2-Captions.vtt" srcLang="en" label="English" default />
              Your browser does not support embedded video. <a href="/media/health-evidence/A2-How-to-Read-Health-Evidence.mp4">Download the video</a>.
            </video>
            <p><a href="/media/health-evidence/A2-Transcript.txt">Read the transcript and source list</a></p>
          </section>
          <p>Educational information about reading research. This article does not diagnose a condition or recommend a treatment for an individual.</p>
          <p>A health headline can sound precise while leaving out the information that gives it meaning. “Risk fell by half” does not tell us how common the outcome was, who was studied, or how long the study lasted. “Linked to better health” does not tell us whether one thing caused the other. A useful reading habit is to slow the claim down until those missing pieces become visible.</p>
          <p>You do not need to settle every technical debate before learning something from research. You do need to keep the conclusion within the study&#x27;s reach. The aim is a short, accurate account of what was measured, what comparison was made, and what remains uncertain. That account is more useful than a verdict that a study is simply “good” or “bad.”</p>
          <h2 id="turn-the-headline-into-a-question">Turn the headline into a question</h2>
          <p>Begin with four questions: Who was studied? What exposure or intervention was examined? What was it compared with? What outcome was measured, over what period? Write the answers in ordinary language before deciding whether the finding matters to you. NCCIH&#x27;s guide to scientific articles provides an accessible starting point for navigating a paper beyond its headline. <a href="https://www.nccih.nih.gov/health/know-science/how-to-make-sense-of-a-scientific-journal-article/overview">NCCIH guide</a></p>
          <p>Consider an invented headline: “New program improves sleep.” That could describe adults reporting better sleep after a six-week class, a comparison between two different classes, or a laboratory measurement after one night. These are different questions. A claim about a self-reported score after six weeks should not quietly become a claim about lasting relief from a diagnosed disorder.</p>
          <p>A useful first sentence in your notes might be: “The study compared this program with that alternative in this group, and measured this outcome for this long.” If the article does not supply an answer, leave the space open. Do not replace an unknown comparison with an imagined one.</p>
          <h2 id="identify-what-the-researchers-actually-did">Identify what the researchers actually did</h2>
          <p>In an observational study, researchers examine what happens without assigning the exposure of interest. They may find an association between a behavior and an outcome. People who choose that behavior may also differ in other ways that affect health. Those differences can complicate a causal interpretation. An association alone does not establish that changing the behavior will change the outcome. <a href="https://www.nih.gov/about-nih/science-health-public-trust/tools/understanding-clinical-studies">NIH explanation of clinical studies</a></p>
          <p>In a randomized trial, assignment to groups is determined by chance. This can help separate an intervention&#x27;s effect from pre-existing differences between groups. It does not make every trial reliable or every result applicable to everyone. Read what was assigned, what the comparison group received, and what information the investigators collected. NIH&#x27;s definitions also distinguish studies that prospectively assign an intervention from observational research. <a href="https://grants.nih.gov/policy-and-compliance/policy-topics/clinical-trials/clinical-trial-besh-or-observational-study-involving-humans">NIH study definitions</a></p>
          <p>The practical question is whether the design can support the claim being made. Imagine that people who voluntarily join a walking group report better mood than people who do not join. The group may differ in social contact, baseline health, available time, or motivation. That imagined comparison can raise a worthwhile research question without answering what would happen if a particular person joined. Calling the result an association preserves its value while avoiding an extra causal claim.</p>
          <h2 id="put-the-numbers-on-the-same-scale">Put the numbers on the same scale</h2>
          <p>Relative and absolute changes describe different aspects of the same comparison. A relative change compares the size of one risk with another. An absolute change describes the difference between the risks. Both become easier to understand when the denominator and time period are explicit. NCI&#x27;s screening overview explains why these forms of risk communication can create different impressions. <a href="https://www.cancer.gov/about-cancer/screening/patient-screening-overview-pdq">NCI screening overview</a></p>
          <p>Here is a hypothetical example, not a result from a real treatment study. Suppose an unwanted outcome occurs in 20 of 1,000 people in one group and 10 of 1,000 in another group over one year.</p>
          <div style={{overflowX: "auto"}}><table className="record-table"><caption>Hypothetical one-year comparison; not a treatment result</caption><thead><tr><th scope="col">Measure</th><th scope="col">Calculation</th><th scope="col">Meaning in this example</th></tr></thead><tbody><tr><td>First group&#x27;s risk</td><td>20 ÷ 1,000</td><td>2 percent over one year</td></tr><tr><td>Second group&#x27;s risk</td><td>10 ÷ 1,000</td><td>1 percent over one year</td></tr><tr><td>Absolute difference</td><td>2 percent minus 1 percent</td><td>1 percentage point, or 10 fewer per 1,000</td></tr><tr><td>Relative reduction</td><td>10 fewer ÷ 20 original outcomes</td><td>50 percent lower risk</td></tr></tbody></table></div>
          <p>“Half the risk” and “10 fewer outcomes per 1,000 people over one year” are compatible descriptions. Neither tells you, by itself, whether the intervention is worthwhile. For that, you would also need the outcome&#x27;s importance, the study&#x27;s reliability, possible harms, and the relevance of the participants to the decision.</p>
          <p>Keep comparisons symmetrical. Do not describe a possible benefit with an impressive relative percentage and a possible harm with a small-looking raw count. Translate both to the same population size and time period when the data allow it. If the necessary information is missing, say that the comparison cannot yet be made. This is a reading method, not a reason to manufacture a missing number.</p>
          <h2 id="read-uncertainty-alongside-the-estimate">Read uncertainty alongside the estimate</h2>
          <p>A result such as “10 fewer per 1,000” is an estimate. A confidence interval helps describe its statistical precision under the analysis&#x27;s assumptions. An interval that spans effects with quite different practical meanings deserves attention; the middle value is not the whole result. Cochrane&#x27;s guidance treats imprecision as one part of assessing confidence in a body of evidence, alongside bias, inconsistency, indirectness, and possible publication bias. <a href="https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-14">Cochrane Handbook, chapter 14</a></p>
          <p>A p-value is also limited. It is not the probability that the study&#x27;s conclusion is true, and it does not measure how large or useful an effect is. The American Statistical Association cautions against replacing scientific reasoning with a single threshold. Interpretation needs the study design, measurements, assumptions, and wider evidence. <a href="https://doi.org/10.1080/00031305.2016.1154108">ASA statement on p-values</a></p>
          <p>For your own notes, separate three questions: What direction does the estimate point? How large is it? How uncertain is it? That separation prevents a label such as “statistically significant” from answering a different question about practical importance. It also leaves room for an inconclusive finding to remain inconclusive, rather than treating it as proof of no effect.</p>
          <h2 id="check-whether-the-outcome-is-the-one-you-care-about">Check whether the outcome is the one you care about</h2>
          <p>Some studies measure outcomes people experience directly, such as symptoms or daily functioning. Others measure a laboratory value or another marker used to predict a clinical benefit. FDA explains that a surrogate endpoint is a substitute measure, and that the evidence supporting it depends on the particular context. A change in a marker and a demonstrated improvement in how people feel, function, or survive are different claims. <a href="https://www.fda.gov/drugs/regulatory-science-action/public-posting-comprehensive-surrogate-endpoint-table-cder-and-cber-regulated-products">FDA explanation of surrogate endpoints</a></p>
          <p>Suppose an invented report describes a lower value on a laboratory test after a program. Your reading note should name that measurement. It should not automatically say that participants felt better or lived longer. The point is to preserve the actual result, then ask what evidence connects it to the outcome of interest.</p>
          <p>The people in the study matter as well. Age, health conditions, and other eligibility rules determine who could participate. Research needs participation from varied groups to improve the usefulness of its findings. Check the study population before assuming the result fits a person or setting that was not represented. <a href="https://www.nia.nih.gov/health/clinical-trials-and-studies/what-are-clinical-trials-and-studies">National Institute on Aging guide to clinical research</a></p>
          <h2 id="look-beyond-one-result">Look beyond one result</h2>
          <p>A systematic review brings relevant studies together using an explicit method and considers their quality and findings. Its usefulness depends on the underlying evidence and the review&#x27;s methods; counting studies is not the same as weighing them. A review can reveal agreement, important differences, or questions the available research still cannot answer. <a href="https://consumers.cochrane.org/cochrane-and-systematic-reviews">Cochrane explanation of systematic reviews</a></p>
          <p>This matters when one new paper seems to reverse everything that came before it. First ask whether it studied the same question. A different population, comparison, outcome, or follow-up period may explain an apparent disagreement. Write down the difference before choosing which headline to believe. Two findings can be different without being direct contradictions.</p>
          <p>Check the source of the claim, too. MedlinePlus recommends examining who provides the information, why it was created, what evidence supports it, and when it was reviewed. Funding and commercial purpose are useful context. They are reasons to inspect the methods and presentation, rather than automatic proof that a finding is right or wrong. <a href="https://www.medlineplus.gov/evaluatinghealthinformation.html">MedlinePlus guide to evaluating health information</a></p>
          <h2 id="make-a-reading-note-you-can-use">Make a reading note you can use</h2>
          <p>Try a compact record with the study link and date, the question, the design, the participants, the main result with its denominator and time period, and the most important limitation. Add one question you would want answered before applying the finding. This is an original organizational template, not a validated scoring system or a substitute for a professional evidence review.</p>
          <p>For the invented example above, the note could read: “Two groups had outcome rates of 20 and 10 per 1,000 over one year. The absolute difference was 10 per 1,000; the relative reduction was 50 percent. I still need the study design, uncertainty, harms, and participant details.” That statement is less dramatic than the headline, but it preserves what the numbers actually establish.</p>
          <p>A trial registry can help you locate study information, but registration is not an endorsement. ClinicalTrials.gov explicitly warns that inclusion does not mean the U.S. government has reviewed or approved a study&#x27;s safety or science. <a href="https://clinicaltrials.gov/">ClinicalTrials.gov</a></p>
          <p>Bring a relevant paper and your specific questions to a qualified health professional when a finding could affect your care. A research result can inform that conversation; it cannot supply your history, preferences, or clinical assessment. The most useful outcome of careful reading is a better question and a more accurate description of what is known.</p>
          <h2 id="sources-and-review">Sources and review</h2>
          <p>The linked sources were checked on October 8, 2026. This is the source-check date, not a certification of clinical review. Numerical examples and the reading-note template are original illustrations. The article&#x27;s author role is educational; no current clinical practice, certification, or service availability is asserted.</p>
          <p><Link href="/writing">Return to the writing archive</Link></p>
        </div>
      </div>
    </article>
  </>
}
