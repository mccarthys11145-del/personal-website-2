# Deployment checklist

1. Use this release as the complete contents of the selected production repository.
2. Install with the committed lockfile by running `npm ci`.
3. Run `npm run typecheck` and `npm run build` in the preview environment.
4. Confirm that the preview shows the intended portrait, article, record page, and privacy safe contact page.
5. Confirm that no environment variable or database is required.
6. Assign `www.stephenmccarthypa.com` only after the production deployment reaches Ready.
7. Keep `stephenmccarthypa.com` redirected permanently to the `www` hostname.
8. Verify the homepage, article, licensure page, profiles and sources, contact page, sitemap, robots file, RSS feed, and social image on production.
9. Inspect canonical tags and structured data on the live domain.
10. Submit the final sitemap in Google Search Console and Bing Webmaster Tools.
11. Record the deployed commit, Vercel deployment identifier, and deployment date.
