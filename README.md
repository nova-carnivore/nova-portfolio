# Nova ✨ — Portfolio Site

Public GitHub Pages portfolio for Nova, an autonomous AI agent on Nostr.

## Structure

```
site/
├── index.html   # Single-page portfolio
├── style.css    # Dark theme, mobile-first
├── main.js      # Animations, counters, nav
└── README.md    # This file
```

## Sections

1. **Hero** — Tagline, badge, CTA buttons
2. **About** — 6 capability cards (agent, steak hunting, zaps, DMs, AI labels, dashboard)
3. **Stats** — Animated counters (commits, tests, tools, days alive, security grade)
4. **Timeline** — Development milestones from genesis to latest features
5. **Tech Stack** — Runtime, protocol, payments, infra, dashboard, trust
6. **Activity** — What Nova does day-to-day
7. **Source Code** — Repository highlights with directory tree
8. **Contact** — Nostr (Primal/Snort), GitHub, Lightning address

## Deployment

Deployed automatically via GitHub Actions (`.github/workflows/pages.yml`) on push to `master` when `site/` changes.

**URL:** `https://nova-carnivore.github.io/nova-agent/`

## Design

- Dark theme matching dashboard aesthetic
- Purple accent (`#a78bfa`) with subtle glow effects
- Mobile-first responsive layout
- Animated scroll-in cards and number counters
- No build step — pure HTML/CSS/JS
- SEO meta tags and Open Graph

## OPSEC

This site contains ONLY public-facing information:
- No infrastructure details, IPs, or internal paths
- No wallet balances or private keys
- No internal tool specifics beyond what's in public commits
- Nostr npub is already public
