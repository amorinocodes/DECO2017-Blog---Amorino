---
title: "Revisiting the requirements: what changed and what held"
date: 2026-02-16
author: Amorino Toongart
summary: A final-semester look back at the initial requirements analysis, which assumptions proved correct, which needed revision, and what the process of building revealed about what the application actually needed to do.
tags:
  - DECO2017
  - SEAblings
  - Requirements
  - WebDesign
---

## What I thought the requirements were

The brief started as an ambiguity problem. "Community hub" is a category, not a specification, and I spent the first weeks working out what the application actually needed to do for a specific community before committing to anything. The core requirements I landed on were: a recipe browser, a community-maintained ingredient map, a posting mechanism for contributing finds, and persistent user profiles. The ingredient map was the load-bearing feature. Without it, SEAblings was just another recipe platform.

At that stage the requirements looked relatively clean and stable. Looking back from the other end of the semester, I can see where that initial analysis was right, where it was incomplete, and where building the application revealed requirements I had not anticipated.

## What held

The core functional requirements held. The ingredient map and the recipe browser are genuinely separate needs that serve different users in the same community. Someone sourcing a specific ingredient and someone looking for recipe inspiration are on different journeys, and the two-tab feed structure serves both without requiring a choice between them. The decision to normalise the data model, treating ingredients and locations as separate entities, proved right when the search and filter interactions were implemented. A flat model would have made the ingredient-to-map link from the recipe detail screen unreliable.

The three-tab navigation model also held. Informal user testing confirmed that first-time users could orient themselves within two minutes. The tab structure kept the mental model simple enough to be immediately comprehensible, which is what the brief's engagement requirement actually depends on.

## What the build revealed that the brief did not

Three requirements emerged during development that were not visible in the initial analysis.

The first was ingredient granularity. The brief did not specify what level of detail an "ingredient find" should capture. Building the dummy database made the answer concrete: category-level ingredients (fish sauce, galangal, coconut cream) with brand specificity in the location record description. This distinction has direct interface implications. The submission form needed a controlled ingredient vocabulary rather than a free-text field, which I had not specified in the initial wireframes.

The second was the moderation and data accuracy requirement. A community-sourced map of ingredient availability is only useful if the data is reasonably accurate and clearly dated. I had not explicitly specified what happens to stale entries, who can flag them, or how the app communicates the community-sourced nature of the data to users. This is not just a UX consideration. It is an ethical one. The application is directing people to physical locations based on reports. Stale or incorrect location data has real-world costs. The confirmation mechanism and flag mechanism I added to the pin bottom sheet were not in the original wireframes, but they should have been.

The third was the list view as an accessibility requirement. I initially designed the ingredient map as the primary interface, with a list view as a secondary option. Understanding WCAG 2.1's requirements for content that relies solely on spatial or visual interaction made the list view a required alternative, not an optional enhancement. The map is the richer experience; the list is the accessible baseline. Both need to be independently functional.

![Requirements evolution from initial analysis to final implementation](./images/webdesign-requirements-evolution.png)

## What I would do differently

The most significant gap in the initial requirements analysis was treating the data model as a backend concern to be resolved separately from the interface design. The Week 9 experience, where the normalised data model changed the wireframes, showed that they need to be developed in parallel. The wireframes assumed certain queries were possible that would not have been with the flat model. Getting the data model right earlier would have reduced rework.

The second gap was not specifying moderation from the start. Community-sourced content platforms have moderation requirements that are as important as creation requirements. Treating submission as the primary operation and curation as an optional feature was the wrong framing. Both are load-bearing for the application to function as intended.
