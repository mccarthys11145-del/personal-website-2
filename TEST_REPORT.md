# Validation report

## Release tested

July 19, 2026 consolidation release

## Automated checks

1. TypeScript validation completed successfully with `npm run typecheck`.
2. The optimized production build completed successfully with `npm run build` under Next.js 16.2.10.
3. All public application routes were statically rendered.
4. Primary pages, machine readable files, images, and icons returned status 200 in the local production server.
5. Legacy page paths returned permanent redirects to their approved replacements.
6. The apex host returned a permanent redirect to `www.stephenmccarthypa.com`.
7. Canonical links matched the approved public domain on every primary page.
8. JSON LD blocks parsed successfully on every primary page.
9. Every internal navigation link resolved successfully.
10. No form element, contact API, Prisma reference, or retired practice domain remained.
11. Source scanning found no unsupported award, perfect rating, patient total, doctor honorific, or accepting new patient claim.
12. Required security headers were present.

## Visual checks

Desktop and mobile rendering were tested with Chromium at 1440 by 1000 and 390 by 844. The home page, article, licensure page, and mobile navigation showed no horizontal overflow, page errors, or console errors.

## Dependency note

The dependency set and lockfile were updated before the final content pass. A registry based audit had previously returned zero known vulnerabilities. A later repeat could not reach the package registry because DNS access was unavailable in the execution environment. No dependency changed after the successful audit.

## Deployment boundary

This report validates the supplied source in a local production build. It does not represent a live domain deployment. A Vercel preview should pass before the custom domains are moved to this release.
