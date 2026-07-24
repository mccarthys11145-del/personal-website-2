"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/professional-record", label: "Licensure" },
  { href: "/writing", label: "Writing" },
  { href: "/briefing/mental-health-theology", label: "Briefing" },
  { href: "/profiles-and-sources", label: "Sources" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Stephen McCarthy home">
          <span className="brand-mark" aria-hidden="true">SM</span>
          <span className="brand-copy">
            <strong>Stephen McCarthy</strong>
            <small>Physician assistant and writer</small>
          </span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-lines" aria-hidden="true"><i /><i /><i /></span>
          <span className="sr-only">Toggle navigation</span>
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav ${open ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              className={isActive(item.href) ? "active" : undefined}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
