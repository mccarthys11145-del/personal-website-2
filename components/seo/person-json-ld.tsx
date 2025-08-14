
export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Stephen McCarthy",
    "jobTitle": "Physician Assistant",
    "description": "Experienced physician assistant and clinical director specializing in psychiatry, mental health, and comprehensive patient care in the Lehigh Valley region.",
    "url": "https://stephenmccarthypa.com",
    "telephone": "(484) 357‑1916",
    "sameAs": [
      "https://www.linkedin.com/in/stephenmccarthypa",
      "https://twitter.com/stephenmccarthypa"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Lehigh Valley Wellness",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6081 Hamilton Blvd, Suite 600",
        "addressLocality": "Allentown",
        "addressRegion": "PA",
        "postalCode": "18106",
        "addressCountry": "US"
      },
      "telephone": "(484) 357‑1916"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Physician Assistant Certification",
        "credentialCategory": "Professional Certification"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "name": "Master of Science",
        "educationalLevel": "Graduate",
        "educationalCredentialAwarded": "Master's Degree"
      }
    ],
    "knowsAbout": [
      "Psychiatry",
      "Mental Health",
      "Child and Adolescent Psychiatry",
      "Geriatric Psychiatry", 
      "Addiction Medicine",
      "Telehealth",
      "Healthcare"
    ],
    "award": [
      "Patients' Top Choice Award",
      "Patients Recommend Award",
      "5-Star Provider Rating - US News"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "DeSales University"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
