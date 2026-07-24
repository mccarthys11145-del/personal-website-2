# Stephen McCarthy professional website

This repository contains the consolidated production site for `www.stephenmccarthypa.com`.

## Editorial standard

The site provides a concise professional profile and writing archive.

## Privacy and contact design

The personal site has no intake form, database, or contact API. It does not collect medical information or protected health information. Practice inquiries are directed to the confirmed practice website and telephone number.

## Local development

```bash
npm install
npm run typecheck
npm run build
npm run dev
```

## Validation

See `TEST_REPORT.md` for the completed build, route, content, structured data, and responsive rendering checks.

## Deployment

1. Connect this repository to the selected Vercel production project.
2. Require a successful preview build before merging.
3. Assign both custom domains only after the production deployment reaches Ready.
4. Keep `www.stephenmccarthypa.com` canonical and redirect the apex domain to `www`.
5. Verify the sitemap, robots file, canonical tags, redirects, structured data, and priority pages after deployment.
6. Follow `DEPLOYMENT_CHECKLIST.md` and record the deployed commit and deployment identifier.

## Priority pages

* `/`
* `/about`
* `/professional-record`
* `/writing`
* `/writing/audhd-psychiatric-ontology`
* `/briefing/mental-health-theology`
* `/profiles-and-sources`
* `/contact`
