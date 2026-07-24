import Link from "next/link"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <div className="footer-brand">Stephen McCarthy</div>
          <p className="footer-summary">
            A source based professional profile and writing archive focused on psychiatric language,
            clinical reasoning, and the difference between naming a pattern and explaining it.
          </p>
        </div>

        <div>
          <h2>Explore</h2>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/professional-record">Licensure</Link></li>
            <li><Link href="/writing">Writing</Link></li>
            <li><Link href="/briefing/mental-health-theology">Producer briefing</Link></li>
            <li><Link href="/profiles-and-sources">Profiles and sources</Link></li>
          </ul>
        </div>

        <div>
          <h2>Practice information</h2>
          <p>Lehigh Valley Wellness</p>
          <p>6081 Hamilton Boulevard, Suite 600</p>
          <p>Allentown, Pennsylvania 18106</p>
          <p><a href="tel:+14843571916">484 357 1916</a></p>
        </div>
      </div>

      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} Stephen McCarthy.</p>
        <p>This personal site does not provide medical advice or collect medical information.</p>
      </div>
    </footer>
  )
}
