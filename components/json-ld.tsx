type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}

export function SiteJsonLd() {
  const base = "https://www.stephenmccarthypa.com"
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${base}/#website`,
      url: base,
      name: "Stephen McCarthy",
      description:
        "Professional profile, clinical AI red team testing, behavioral health benchmarking, and writing by Stephen McCarthy, a physician assistant based in Allentown, Pennsylvania.",
      inLanguage: "en-US",
      publisher: { "@id": `${base}/#person` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${base}/#person`,
      name: "Stephen Thomas McCarthy",
      alternateName: "Stephen McCarthy",
      url: base,
      image: `${base}/stephen-mccarthy-portrait.webp`,
      jobTitle: ["Physician Assistant", "Clinical AI Red Team Consultant"],
      knowsAbout: [
        "Psychiatric care",
        "Clinical AI red team testing",
        "Behavioral health AI benchmarking",
        "Longitudinal psychiatric record synthesis",
        "Medication reconciliation evaluation",
        "Clinical documentation fidelity",
        "Diagnostic coherence",
        "Behavioral health workflows",
        "Psychiatric language and clinical reasoning",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "DeSales University",
      },
      identifier: {
        "@type": "PropertyValue",
        propertyID: "NPI",
        value: "1912308743",
      },
      sameAs: [
        "https://www.linkedin.com/in/stephenmccarthypa",
        "https://about.me/stephen_mccarthy_pa",
        "https://www.doximity.com/pub/stephen-mccarthy-pa-5ad36978",
        "https://npiregistry.cms.hhs.gov/provider-view/1912308743",
      ],
      description:
        "Physician assistant and clinical AI red team consultant with more than 11 years of psychiatric clinical experience across inpatient care, outpatient care, addiction treatment, telehealth, medication management, documentation review, and workflow development.",
    },
  ]

  return <JsonLd data={data} />
}
