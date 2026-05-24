---
title: "He thinks he's the Thinker"
date: 2026-05-01
author: Amorino Toongart
summary: Working from finalised ERD revealed a requirement that had been implicit in the wireframes. This week also brought the evaluation plan together and surfaced some privacy decisions the group had not explicitly made yet.
tags:
  - DECO2017
  - SEAblings
  - Data
  - Wireframes
---

## Working from the ERD

We completed the ERD at the end of last week. Five tables: users, recipes, ingredients, recipe_ingredients, and ingredient_locations. The key structural decision was separating ingredients from their locations so that a single ingredient entity can have multiple store pins, and adding a new store location automatically surfaces in every recipe that uses that ingredient.

My job this week was to refine the wireframes against that structure, specifically the recipe detail screen, which needed to link from an ingredient in a recipe to the map filtered to stores carrying that ingredient. Getting that interaction right required me to actually understand the join path: recipe references ingredients through recipe_ingredients, and store availability is attached to ingredients via ingredient_locations. So the path from a recipe ingredient tap to a filtered map view crosses two joins.

That is not something you can draw correctly without knowing what sits underneath. The wireframe I had from week 8 assumed a flatter structure, and it needed updating once the ERD was finalised.

![SEAblings ERD showing the full data model for the application](./assets/images/ERD%20SEABLINGS.png)

## What the data separation revealed about the requirement

Going through the ERD in detail sharpened something I had left vague in the requirements. The application is not a list of ingredient finds. It is a database of ingredient availability that a community collaboratively maintains. Those sound similar but the functional implications are different.

A list of finds grows indefinitely and goes stale at the edges. A database of availability is something that gets updated, confirmed, and flagged. The requirement is not "let users submit ingredient finds" but "let users maintain a live map of ingredient availability." The submission form is just the interface for that requirement.

This distinction changes the scope. If the core requirement is maintenance rather than submission, then a mechanism for confirming or flagging stale entries matters as much as the creation flow. I added an availability confirmation option to the map pin bottom sheet and a thumbs-up that refreshes the "last confirmed" date on an ingredient_location record because the requirement now explicitly needs it.

![Ingredient and store location relationship in the data model](./assets/images/Ingredients:StoreERD.png)

## Evaluation plan

We finalised the evaluation plan this week. It covers three areas. Usability: think-aloud sessions with three to five South East Asian students, recruited from the target community. Performance: Lighthouse audits targeting under one second load time. Accessibility: WAVE and axe DevTools audits against WCAG 2.1 AA.

The think-aloud method suits this use case because the key interactions (browsing the map, contributing an ingredient find) involve decisions that are hard to observe in silence. A participant who silently completes a task tells you whether the task is completable. A participant who thinks aloud tells you what they expected to find and where they looked first, which is the information that drives interface improvements.

## Data responsibility

The group also worked through the privacy and data handling questions that had been left open. Session handling goes through BlaBla Corp's existing login system, which means we are not storing passwords directly. The session cookie is strictly necessary for the app to function, so no consent banner is required under current requirements unless we add analytics later, at which point that changes.

I learnt that although not the flashiest decisions these are important things to think about especially when building real life projects for clients.

## Accessibility implications for the posting flow

I also reviewed the accessibility implications of the posting flow and the colour approach this week. The map pin model is entirely visual: you see pins, you tap one, you get a bottom sheet. A screen reader user cannot navigate a map by spatial exploration.

The implication is that the ingredient availability data must be accessible through a non-map interface as well. Content cannot rely solely on visual position or spatial interaction, which means the list view and the map view need to be two independent surfaces for the same data. Planning for that now is way cheaper than retrofitting it later.

For colour contrast, the warm palette direction I had started sketching needed to be checked against AA thresholds before it was committed. Brown text on cream surfaces passes at the values I was working with, but it is a narrower margin than black-on-white and needs to be tested rather than assumed.

![Posting flow wireframe showing form structure and bottom navigation](./assets/images/Wireframes%20-%20Post:Profile%20.png)
