---
title: "Three wireframe decisions that defined the scope"
date: 2026-03-16
author: Amorino Toongart
summary: Three specific wireframe decisions (the grid feed, the map bottom sheet, and the three-tab nav) each involved explicit trade-offs between functional requirements, not just layout preferences.
tags:
  - DECO2017
  - SEAblings
  - Wireframes
  - Design
---

## Wireframes as scope decisions

This was the first proper build sprint. The group (me, Natasha, and Patricia) were working across the data model and the wireframe set simultaneously, which meant the two had to stay in sync. A wireframe that assumed a data structure the ERD did not support would create rework, so there was a lot of back-and-forth as both took shape.

My side of that forced me to make three decisions I had been leaving implicit during planning. Each one turned out to be as much about scope as about layout. Choosing one pattern over another meant committing to a particular functional priority.

## Decision one: grid versus linear feed

For my decision I wanted the recipe and ingredient feed to be a Pinterest-style grid or a linear list. A linear list gives each item more space, more metadata, and a clearer reading order. A grid delivers more content per scroll and prioritises visual browsing. The trade-off is information density against context.

I chose the grid for two reasons that come directly from the requirements. First, SEAblings users are primarily browsing to discover something: a dish they want to make, or an ingredient source they did not know existed. They are not reading items sequentially, so a grid suits that better. Second, the feed has a toggle between recipe mode and ingredient-find mode, and both content types have a strong visual component. A grid handles them consistently without requiring a layout shift between modes. The cost is that metadata needs to be highly compressed inside each card, which pushes the information hierarchy harder than a list would.

![SEAblings wireflow showing all key screens and user journeys](./assets/images/Wireflow.png)

## Decision two: map bottom sheet versus navigation

When a user taps a pin on the ingredient map, they need store information. I considered two options: navigate to a new detail page, or open a bottom sheet over the map.

Navigation to a new page breaks the spatial relationship with the map. If someone is on the map looking for a nearby ingredient source, understanding the store's location relative to the current map view is part of the decision. Navigating away removes that context. A bottom sheet keeps the map visible behind the detail panel, which preserves the user's spatial orientation.

The trade-off is depth. A bottom sheet can only surface a limited amount of information before it needs to scroll, so I had to be fairly ruthless about what it shows: store name, suburb, and an availability confirmation option. Anything more detailed would need a secondary expansion state, which adds interaction complexity. The functional priority here is orientational context over information completeness.

This decision also has a data implication. The bottom sheet can surface multiple store options for a single ingredient because ingredient locations are stored in a separate table linked to the ingredient, not embedded in a single record. If the data model had conflated ingredients with their locations, one pin could not show multiple stores without navigating to a separate list.

## Decision three: three-tab navigation

The bottom navigation bar has three tabs: Feed, Map, and Profile. The fourth option I considered was adding a dedicated Search tab. I decided against it.

Search within Feed and search within Map are structurally different operations. Feed search returns content items. Map search returns geographic results. Combining them in a single Search tab would require disambiguation UI that adds complexity without much clarity. With three tabs, the user always knows which mode they are in. Search lives as a function within each tab rather than a top-level destination.

The principle behind this is that navigation clarity depends on scope clarity. Every tab added to the bar makes the mental model more expensive for a first-time user. Three tabs at this scale is the right trade-off between feature completeness and comprehensibility.

![Recipe detail wireframe showing inline ingredient-to-map linking](./assets/images/Wireframes%20-%20Recipies:Ingredients.png)

## What connecting the recipe and map views required

The recipe detail screen needed to link from an ingredient in a recipe to the map, filtered to show only stores carrying that ingredient. Getting this right in the wireframe required actually understanding the data structure underneath it. A recipe references ingredients through a join table, and ingredient locations are attached to ingredients, not to recipes. So the path from a recipe ingredient tap to a filtered map view goes through two joins. That is not something you can draw correctly without knowing what the data model looks like.

This was the first point in the project where the wireframe and the data model had to be designed in parallel rather than sequentially.

## Project board setup

I also set up the GitHub project board this week with tickets distributed across Amorino, Natasha, and Patricia. Having the work itemised early meant the sprint had clear ownership rather than informal handoffs, which matters when the wireframe and ERD are interdependent. A ticket that blocks another one is easier to see in a board than in a chat thread.

![GitHub project board showing tickets assigned across the group](./assets/images/Github%20project%20ticketing%20system.png)

## Early visual direction

Alongside the structural work, I started putting together some visual references for the app's aesthetic direction. Nothing committed at this stage — more of a moodboard to get a feel for the palette and tone before any UI work begins. The direction I was drawn to was warm and tactile, closer to a Southeast Asian market or home kitchen than a clean SaaS product.

![Brand identity inspiration and early visual direction for SEAblings](./assets/images/Images%20of%20Brand%20idenity%20inspiration.png)
