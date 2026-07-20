# PrairieKey Property Management Website

Production-ready Next.js website for prairiekeypropertymgt.ca.

## Deploy through GitHub and Vercel

1. Delete the old files in the GitHub repository, or replace them with the contents of this folder.
2. Make sure `package.json`, `app`, `public`, and `next.config.mjs` are at the repository root.
3. Commit the changes.
4. Vercel should automatically redeploy.
5. In Vercel, confirm Framework Preset is **Next.js** and Root Directory is blank.
6. Visit the production domain after the deployment shows **Ready**.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Current business details

- Phone: 204-407-5757
- Website: prairiekeypropertymgt.ca
- Email: info@prairiekeypropertymgt.ca
- Address: 337 Park West Drive, Winnipeg, MB R3Y 0V9
- Service area: Winnipeg & surrounding areas

## Form note

The contact form currently opens the visitor's email application using `mailto:`. For server-side email delivery later, connect Formspree, Resend, or another form service.
