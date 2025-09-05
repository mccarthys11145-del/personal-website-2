export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Stephen McCarthy, PA-C",
    "url": "https://stephenmccarthypa.com/",
    "jobTitle": "Physician Assistant (PA-C) | Psychiatry & Addiction Medicine",
    "image": "https://stephenmccarthypa.com/images/headshot.jpg",
    "telephone": "(484) 357-1916",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Allentown",
      "addressRegion": "PA",
      "postalCode": "18106",
      "streetAddress": "6081 Hamilton Blvd, Ste 600"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "DeSales University"
    },
    "sameAs": [
      "https://www.linkedin.com/in/stephen-mccarthypa",
      "https://www.doximity.com/pub/stephen-mccarthy-pa",
      "https://www.healthgrades.com/providers/stephen-mccarthy-xylmbxj",
      "https://about.me/stephen_mccarthy_pa",
      "https://doctor.webmd.com/doctor/stephen-mccarthy-...",
      "https://care.healthline.com/provider/stephen-mccarthy-pa-c-allentown-pa",
      "https://health.usnews.com/doctors/stephen-mccarthy-..."
    ],
    "description": "Board-certified Physician Assistant specializing in psychiatry, addiction medicine and medical weight management serving Allentown & Lehigh Valley."
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

