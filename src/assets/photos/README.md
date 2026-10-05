# Photos

The photos here were taken from the business's current website. Add new project and team photos to this folder (JPG, PNG, WebP or AVIF).
Astro resizes them, converts them to AVIF/WebP and lazy-loads them automatically.

Then point the matching entry at the file name:

| Photo | Where to set it |
| --- | --- |
| Project cards (home + projects page) | `photo` on each project in `src/data/projects.ts` |
| Service page hero photos | `photo.file` on each service in `src/data/services.ts` |
| Home hero photo | `file` on the `<Photo>` in `src/components/home/Hero.astro` |
| Team photo (About page) | `file` on the `<Photo>` in `src/pages/about.astro` |

Example: save `switchboard-upgrade.jpg` here, then in `src/data/projects.ts` add
`photo: 'switchboard-upgrade.jpg'` to the switchboard project and update its `alt`
text so it describes what the photo shows.

Use landscape photos at least 1600px wide where possible.
