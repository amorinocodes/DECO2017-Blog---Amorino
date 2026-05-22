---
title: "Testing from the couch"
date: 2026-04-06
author: Amorino Toongart
summary: Before testing, I had to define what done looked like. The session validated the three-tab navigation and revealed an underspecified requirement about feed disambiguation. This post also sets out the formal evaluation plan.
tags:
  - DECO2017
  - SEAblings
  - Testing
  - Design
---

## Defining success before testing

This week I missed class for the first time this semester but it meant I actually had uninterrupted time at home to sit with the project, which in some ways was more productive than a normal week. The informal peer testing session was the first time people who had never seen the app tried to use it. Before asking anyone to open it, I had to answer a prior question: what am I actually testing for, and what does a good result look like?

Not all features were ready. The Unsplash images are not loading in the deployed environment, some recipe fields display in the wrong order, and the festive collections banner is unfinished. Putting users in front of surface-level breakage would generate feedback about rendering bugs, not about the design decisions I need to evaluate. I scoped the session to two complete journeys: finding a recipe, and finding a store for a specific ingredient. Everything else was out of scope for this round.

This is basically backwards design in practice. If you do not define the evidence you are looking for before running the test, any feedback is potentially valid and you cannot prioritise it. The risk of informal testing without that framing is that you walk away with a list of things people noticed rather than an answer to a specific question.

![Profile page with recipe feed rendering correctly](./images/week11-profile-feed.png)

## What the testing confirmed and what it revealed

The good news is that the navigation model held up. All participants understood within roughly two minutes what the app was for and how to navigate between the feed and the map. This validates the three-tab bottom nav decision from the earlier wireframe work. A more complex navigation structure would not have served users who are seeing the interface for the first time.

The feedback that came up consistently was about card differentiation in the mixed feed. When recipe cards and ingredient-find cards appear in the same grid, some testers were not immediately sure which type they were looking at. The feed toggle exists, but in practice the grid can surface mixed content in certain states, and the visual distinction between card types was not strong enough.

This is a functional requirement I had underspecified. I had assumed the toggle was sufficient disambiguation. The testing showed that card-level visual differentiation is also necessary, not just a stylistic preference but a genuine requirement for the feed to be usable when content types mix.

![Festive collections banner on the feed showing seasonal recipes](./images/week11-festive-collections.png)

## Formal evaluation plan

The informal session answered specific questions but is not sufficient for submission. The formal evaluation plan is structured around three areas.

![SEAblings evaluation plan showing the testing and audit framework](./assets/images/SEABLINGS-Evaluation%20Plan.png)

**Usability**: A think-aloud protocol with five participants recruited from the target community, people who cook Southeast Asian food and source ingredients in Australian cities. Five participants is the standard minimum for qualitative usability testing and is sufficient to identify the most significant usability problems. The think-aloud method suits this use case because the key interactions (browsing the map, contributing an ingredient find) involve decisions that are hard to observe in silence.

**Accessibility**: A WAVE audit and manual keyboard navigation check of the posting flow and the ingredient submission form. The target is WCAG 2.1 Level AA compliance. The map interaction is the most complex accessibility challenge. As I noted in an earlier post, the list view must be a fully functional alternative, not a fallback, and the keyboard navigation audit needs to confirm that the list path is operable without a pointer device.

**Data accuracy**: The ingredient availability data in SEAblings is community-submitted, which creates a moderation responsibility that is not fully specified yet. Who can flag or remove inaccurate entries? How does the app communicate to users that entries are community-sourced and may be out of date? This is a functional requirement that still needs defining, and also an ethical one. The app is directing people to physical stores based on community reports. Publishing inaccurate or stale location information has real-world consequences for users who travel to a suburb based on a pin.

The moderation model needs to be specified before the app can be considered complete. The minimum viable version is a combination of the availability confirmation mechanism (users can thumbs-up a location to refresh its last-confirmed date) and a flag mechanism (users can mark an entry as likely out of date). Both need to be backed by a clear content policy in the user-facing interface.
