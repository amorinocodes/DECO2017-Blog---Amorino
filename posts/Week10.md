---
title: "What building the seed database revealed"
date: 2026-03-30
author: Amorino Toongart
summary: Building the Thai dummy data turned out to be a form of requirements testing. Ingredient granularity was a design decision I had left open, and the API dependency issue changed how I think about the map's role in the app.
tags:
  - DECO2017
  - SEAblings
  - API
  - Data
---

## Seed data as requirements testing

The usual reason for building dummy data is to have something to render during development. But building the Thai section of the SEAblings ingredient database this week turned out to be a form of requirements testing. The moment I had to write actual entries (ingredient name, store name, suburb, price range, last confirmed date, description) I had to answer questions the requirements document had left open.

The biggest one was ingredient granularity. How specific should entries be? Fish sauce is a broad category, but the type and brand matter for Thai cooking. Tiparos Pla Sauce and Megachef fish sauce perform differently in recipes, and a platform that listed them as the same ingredient would not serve cooks who know the difference. At the same time, separating every brand into its own ingredient entry would fragment the map: a single store would generate dozens of pins for products that are functionally related.

![Thai dummy data entries in the SQLite database](./assets/images/Thai%20SQL%20dummy%20data.png)

The decision I settled on was category-level ingredients (fish sauce, oyster sauce, pandan extract) with brand and product specificity held in the description field on the ingredient_location record. This keeps the search and filter experience coherent at the ingredient level while preserving the nuance that community members actually need. The trade-off is that the description field becomes load-bearing. It's not just a label — it's actually part of what makes the data useful. That has implications for the submission form: the description prompt needs to guide users to enter the right kind of detail, not just an optional note.

## The API dependency problem

The deployment and integrations lecture this week surfaced a problem I had not thought through carefully: API dependency as a reliability risk. The ingredient map is the most important feature of SEAblings. If the Maps API is unavailable, slow, or rate-limited, the core feature becomes unusable. That's a fragility that needs a design response, not just an implementation workaround.

The standard response is graceful degradation: show something useful rather than a broken page. For SEAblings, the useful fallback is the ingredient-location list view that I had already decided needed to exist for accessibility reasons. If the map fails to load, a user can still search for "tamarind paste" and get a list of stores. The list view is not a backup. It is a full alternative interface to the same data.

This has an architectural implication. If the list view is genuinely independent of the map, the ingredient data model must be solid enough to drive a search and display result without the map rendering at all. That is a stronger requirement than "the list view exists." It means the list view needs to be designed and built to be fully functional, not just a placeholder behind the map.

## What this means for scope

Treating the list view as a required interface rather than an optional fallback adds scope I had not planned for. But it also provides a useful forcing function: if the ingredient data works in a plain search list, the data model is sound. If the list view cannot produce useful results, the map is hiding a data problem rather than solving a requirement.

The festive collections feature, which surfaces seasonal recipes based on upcoming cultural events, is in a different category. It is a meaningful enhancement to the discovery experience but it is not load-bearing for the core use case. A user who wants to cook a specific dish and find the ingredients does not need the festive collections banner. It is an optional feature that should not receive scope priority over getting the core map and list views working correctly.

## Branding direction

The other thing that came out of this week was a first pass at the colour palette. I had been putting off visual design decisions until the data model was stable, but building the seed data and seeing the app render actual content made the visual direction feel more urgent. Abstract palettes are easy. Palettes that have to work against real content with real hierarchy constraints are harder.

The direction I landed on was built around warmth and familiarity. Southeast Asian home cooking has a particular texture to it. The markets are warm and chaotic, the ingredients are vivid, the cooking is tactile. A palette built on blues and cool neutrals would look clean in a design system but feel wrong in context.

The background is a very soft off-white, closer to condensed milk than to pure white. Warm but not aggressive. `#FDF6EE`. Surfaces layer on top in a slightly more saturated mango cream, `#FAE3B8`, which gives cards and panels a natural warmth without needing a shadow to separate them from the background.

The primary accent is rose milk tea pink, `#E07A8F`. It was the first colour that felt unambiguously right. It is warm, it reads clearly as interactive, and it connects to the drinks and desserts of the region without being literal. Buttons, links, and focus states.

The secondary accent is a papaya orange, `#E8A87C`. This one is used for badges and tags rather than primary actions. It is less assertive than the rose but still carries enough saturation to stand out against the cream surfaces.

Text is where the palette makes its biggest departure from convention. Instead of near-black, body text is a deep reddish cinnamon brown, `#6B4226`. At first that felt risky. Brown text is easy to do badly. But against the cream backgrounds it has enough contrast for legibility while feeling warmer than grey ever would. Headings use the same value. Muted text, labels, and metadata use a lighter version of the same family, `#A0704A`.

The border colour, `#F0D9B5`, is barely darker than the surfaces. It reads as a soft edge rather than a hard boundary, which fits the tactile quality I was aiming for.

![Early SEAblings colour palette and typography explorations](./assets/images/Final%20Colour%20Scheme%20of%20App.png)

The palette as a system is deliberate: everything sits within a narrow warm range from cream to cinnamon brown, with the rose and papaya as the only cool-to-vivid exceptions. That constraint is what makes it feel coherent rather than just warm-ish. The risk is that it can flatten contrast if values are not managed carefully, especially on card backgrounds where the surface and the text are both in the brown family.

## API security

One practical point worth recording: the deployment lecture's guidance about never committing API keys applies from the beginning of the project, not from submission. I set up the config.yml pattern with a gitignored default immediately rather than at the end. Removing sensitive data from git history retroactively is significantly harder than not adding it in the first place.
