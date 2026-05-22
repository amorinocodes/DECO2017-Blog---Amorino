---
title: Designing data through a wireframer's eyes
date: 2026-03-23
author: Amorino Toongart
summary: What the designing data lecture meant for my wireframes, and how thinking about evaluation changed the screens I was drawing
tags:
  - DECO2017
  - WebDesign
  - SEAblings
  - Wireframes
  - Data
---

## Sprint 2 and what changed

Week 9 is build sprint 2, which the course framing describes as the point to review your data needs and restructure the model if necessary. My contribution this sprint stayed on the design and wireframe side, but the designing data lecture had a real impact on how I thought about a few of the screens I was still refining.

The core idea from the lecture was that data design is not just a backend concern. The shape of your data determines what is possible in the interface. If you store things badly, or conflate things that should be separate, the UI eventually hits a wall. Natasha covered the ERD and the decision to separate ingredients from locations in her post this week, so I will not repeat all of that, but seeing the final data model made me go back and check that my wireframes were actually consistent with it.

The map pin detail screen is the clearest example. The bottom sheet I designed shows store name, suburb, and a "still available" confirmation option. Those map directly onto the ingredient_locations table fields that Natasha and Patricia worked out. If I had designed that screen assuming the ingredient and the location were one thing, it would not fit the model. The fact that they sit in separate tables means the bottom sheet can surface multiple store options for the same ingredient, which is actually more useful.

## Refining the recipe detail screen

The screen I spent the most time on this week was the recipe detail page.

![Recipe detail screen iterations showing the ingredient to map linking flow](./assets/images/Wireframes%20-%20Recipies:Ingredients.png)

The inline ingredient-to-store linking is the feature that connects the recipe side of the app to the map side, and getting that interaction right in the wireframe took a few iterations.

The way it works in the wireframe: each ingredient listed in a recipe is a tappable element. Tapping it does not navigate away from the recipe. Instead it opens the map in a bottom sheet, filtered to show only stores that carry that ingredient. This uses the recipe_ingredients join table as the bridge between the recipe and the ingredient_locations data.

Getting this right in the wireframe required actually understanding the data structure. A recipe references ingredients through a join table, and ingredient locations are attached to ingredients, not to recipes. So the path from a recipe ingredient tap to a filtered map view goes through two joins. That is not something you can draw correctly without knowing what is behind it.

## Evaluation and accessibility in the design

The evaluation framing the group is using (think-aloud sessions, Lighthouse, WAVE) also shaped some of my wireframe decisions this week. Knowing that accessibility is going to be audited against WCAG 2.1 AA before submission made me go back through the screens and check a few things.

Colour contrast is something I have to be more deliberate about in the next phase when I move from wireframes to actual visual design. Greyscale wireframes do not surface contrast problems. The plan to use WAVE and axe DevTools will catch issues I cannot see at the wireframe stage, but it is better to start with accessible colour choices than to fix them at the end.

The keyboard navigation requirement also matters for the posting flow. The bottom nav approach works well on mobile but I need to make sure the post creation form is fully operable without a pointer, which is something to carry into the higher fidelity mockup work.

![Posting flow wireframe showing bottom nav and form structure](./assets/images/Wireframes%20-%20Post:Profile%20.png)

## What is next

My focus going into week 10 is starting the visual layer: colour palette, typography, and the user profile screens. The wireframes are solid enough to hand off for the build and I want to get the branding direction locked in so the coded screens have something to reference.