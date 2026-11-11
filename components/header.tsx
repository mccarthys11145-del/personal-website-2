"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

const navigation = [
  { href: "/about", label: "About" },
  { href: "/consulting", label: "AI testing" },
  { href: "/psychworkflowbench", label: "Benchmark" },
  { href: "/professional-record", label: "Licensure" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const pathname = usePathname()
  const menu = useRef<HTMLDetailsElement>(null)
  const trigger = useRef<HTMLElement>(null)

  useEffect(() => {
    const closeMenu = () => {
      if (menu.current) menu.current.open = false
    }
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !menu.current?.contains(event.target)) closeMenu()
    }
    document.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("popstate", closeMenu)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("popstate", closeMenu)
    }
  }, [])

  const links = navigation.map(({ href, label }) => {
    const isPage = pathname === href
    const isSection = pathname.startsWith(`${href}/`) ||
      (href === "/writing" && pathname.startsWith("/briefing/")) ||
      (href === "/consulting" && pathname === "/case-factory")
    return (
      <Link
        key={href}
        href={href}
        className={isPage || isSection ? "active" : undefined}
        aria-current={isPage ? "page" : isSection ? "location" : undefined}
      >
        {label}
      </Link>
    )
  })

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-current={pathname === "/" ? "page" : undefined}>
          <span className="brand-mark" aria-hidden="true">SM</span>{" "}
          <span className="brand-copy">
            <strong>Stephen McCarthy</strong>{" "}
            <small>Physician assistant and consultant</small>
          </span>
          <span className="sr-only">Home</span>
        </Link>

        <nav className="primary-nav desktop-navigation" aria-label="Primary">
          {links}
        </nav>

        <details
          className="mobile-navigation"
          ref={menu}
          onKeyDown={(event) => {
            if (event.key === "Escape" && event.currentTarget.open) {
              event.preventDefault()
              event.currentTarget.open = false
              trigger.current?.focus()
            }
          }}
          onBlur={(event) => {
            if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) {
              event.currentTarget.open = false
            }
          }}
          onClick={(event) => {
            if (event.target instanceof Element && event.target.closest("a")) event.currentTarget.open = false
          }}
        >
          <summary className="menu-button" ref={trigger}>
            <span className="menu-lines" aria-hidden="true"><i /><i /><i /></span>
            <span className="sr-only">Main menu</span>
          </summary>
          <nav className="primary-nav" aria-label="Primary">
            {links}
          </nav>
        </details>
      </div>
    </header>
  )
}
