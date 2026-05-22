---
title: "What the data model forced me to rethink"
date: 2026-03-23
author: Amorino Toongart
summary: Separating ingredients from ingredient locations in the ERD revealed a requirement that had been implicit. The app is a database of availability, not a list of finds, and that distinction changed both the scope and the interface design.
tags:
  - DECO2017
  - SEAblings
  - Data
  - Wireframes
---

## The design problem with a flat model

The first data model I sketched treated a "find" as a single record: ingredient name, store name, suburb, availability status, and a description. This is intuitive if you think about the app as a submission form. Someone finds pandan at a store, they post it, it shows up on the map as a pin.

The problem appears when you try to query it. If a user taps an ingredient in a recipe and wants to see where to buy it, the query has to scan every record and match on a text string. The same ingredient appears across many records, one per store, per user submission, potentially per week if multiple people report the same find. That is brittle and leads to inconsistent search results. More critically, it makes the ingredient-to-map link from the recipe detail screen unreliable: tapping "galangal" might surface six different records for the same store depending on how the name was entered.

Normalising the model (ingredients as their own table, locations as a join between ingredients and stores) makes the query a clean join and makes the ingredient the stable reference point. The recipe detail link works correctly because ingredients are uniquely identified entities, not duplicated text strings.

![SEAblings ERD showing the full data model for the application](./assets/images/ERD%20SEABLINGS.png)

## What the data separation revealed about the requirement

Getting to that normalised model forced me to sharpen the requirements statement. The application is not a list of ingredient finds. It is a database of ingredient availability that a community collaboratively maintains. Those sound similar but they have different functional implications.

A list of finds grows indefinitely and goes stale at the edges. A database of availability is something that is updated, confirmed, and flagged. The requirement is not "let users submit ingredient finds" but "let users maintain a live map of ingredient availability." The submission form is just the interface for that requirement, not the requirement itself.

This distinction changed the scope. If the functional requirement is maintenance rather than submission, then a mechanism for confirming or flagging stale entries is as important as a mechanism for creating new ones. That is an update operation that was not in my wireframes. I added an availability confirmation option to the map pin bottom sheet, a simple thumbs-up that refreshes the "last confirmed" date on an ingredient_location record, because the requirement now explicitly needs it.

![Ingredient and store location relationship in the data model](./assets/images/Ingredients:StoreERD.png)

## The accessibility implication

This week I also started thinking about the map interaction for users who do not use pointer-based navigation. The map pin model is entirely visual: you see pins, you tap one, you get a bottom sheet. A screen reader user has no way to navigate a map by spatial exploration.

The implication is that the ingredient availability data must also be accessible through a non-map interface, a list or a search that returns the same location information. This is not a nice-to-have for accessibility compliance. WCAG 2.1 Success Criterion 2.1.1 (Keyboard) and the broader intent of SC 1.3.3 (Sensory Characteristics) establish that content cannot rely solely on visual position or interaction. The map is the primary interface, but it cannot be the only one.

This adds a functional requirement I had not explicitly stated: the list view and the map view are two surfaces for the same data, and both must work independently. The map is the richer experience; the list is the accessible baseline. Planning for that now is cheaper than retrofitting it after implementation.

![Posting flow wireframe showing form structure and bottom navigation](./assets/images/Wireframes%20-%20Post:Profile%20.png)

## What this changed about the wireframes

The posting flow wireframe needed updating once the data model was clear. The submission form for an ingredient find asks for the ingredient (selected from the ingredients table, not free text), the store (with postcode), and an optional description. The controlled vocabulary for ingredients is what makes the search and map filtering reliable. If users can enter "pandan" or "pandan leaves" or "bai toey" as free text, the data fragments immediately.

Requiring users to select from a controlled list is a constraint that feels more limiting in the submission flow than a free-text field, but it is the constraint that makes the rest of the application work.
