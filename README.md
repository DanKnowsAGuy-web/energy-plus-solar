# Energy Plus: Solar Vendor Landing Page

Conversion-focused landing page for Energy Plus, aimed at **solar vendors and
installers**. The pitch: lead with efficiency to cut a building's load 20–30%,
which shrinks the solar array, lowers the price, speeds the payback, and opens a
Phase-1 profit center, so the vendor closes more solar by making it accessible.
Built with [Astro](https://astro.build).

**Live:** https://danknowsaguy-web.github.io/energy-plus-solar/

This is a standalone repository, independent of the hotel-operator site
(`energy-plus-hotels`). Some visual/credibility components (the engineer bio,
proof carousel, HVAC stack, harmonizer, team) are shared in spirit with that
site but maintained here on their own.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Deploy

The live site is served from the `gh-pages` branch (the built `dist/` output).
After editing source on `main`, publish an update with:

```bash
npm run deploy
```

This builds the site and force-pushes `dist/` to `gh-pages`. GitHub Pages is
configured to serve that branch at the root.

## Follow-ups

- The interactive savings **calculator** from the operator site was not ported;
  a vendor version should model array-kW saved, system-cost reduction,
  payback-months shaved, and vendor margin.
- Case-study data lives in `src/components/Proof.astro`.
