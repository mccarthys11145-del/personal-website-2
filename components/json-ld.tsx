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
      description: "Professional profile and writing by Stephen McCarthy, a physician assistant based in Allentown, Pennsylvania.",
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
      jobTitle: "Physician Assistant",
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
      description: "Physician assistant with clinical experience in psychiatric care, addiction treatment, and inpatient and outpatient settings. Writer on diagnostic language and psychiatric ontology.",
    },
  ]

  return <JsonLd data={data} />
}
