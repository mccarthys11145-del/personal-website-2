import Breadcrumbs from "@/components/breadcrumbs"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "Licensure",
  description: "Stephen McCarthy is licensed in Pennsylvania and Utah.",
  path: "/professional-record",
})

export default function ProfessionalRecordPage() {
  return (
    <section className="page-hero section-pad-sm">
      <div className="shell">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Licensure" }]} />
        <p className="eyebrow">Licensure</p>
        <h1>Licensed in Pennsylvania and Utah.</h1>
      </div>
    </section>
  )
}
