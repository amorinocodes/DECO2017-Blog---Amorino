---
title: Wireframes first, code second
date: 2026-03-16
author: Amorino Toongart
summary: How I approached the wireframes for SEAblings and what the modular design lecture changed about how I think about components
tags:
  - DECO2017
  - WebDesign
  - SEAblings
  - Wireframes
---

## Where I was at

Coming into week 8, the group had settled on the SEAblings concept and I had taken ownership of the wireframe side of the project. My main job this sprint was to translate what we had agreed on in planning into actual screen designs that the rest of the group could build from.

The lecture this week was on modular design and flexible systems, which ended up being very relevant to what I was trying to do, even though wireframing is more of a design task than a code task. The idea of components as self-contained, reusable parts that plug into a shared system is exactly how I was trying to approach the screens. A recipe card on the feed should behave the same way whether it appears in the Pinterest-style grid, in a search result, or as a featured item on the welcome screen. Define it once, use it everywhere.

## What I actually built

![SEAblings wireframe overview showing all key screens](./assets/images/Wireflow.png)

My wireframe set covers the main user journeys for SEAblings. The key screens I focused on were:

The welcome and featured screen, which is the entry point to the app. Rather than dumping users straight into a feed with no context, there is a curated section at the top that surfaces seasonal or popular content first.

The feed screen uses a Pinterest-style grid layout. The decision to go with a grid rather than a linear feed came from thinking about how people browse food and dessert content. A grid lets you see more at once, and it suits the visual nature of the content. The feed has a toggle between recipes and ingredient finds so users can switch modes without navigating away.

The map screen is the core feature. Pins on the map represent store locations for specific ingredients. Tapping a pin opens a bottom sheet rather than navigating to a new page, which keeps the user spatially anchored on the map while they read the details. This interaction pattern came from thinking about how someone would actually use the map while in a suburb, phone in hand, looking for pandan leaves.

The posting flow is accessed through a bottom navigation bar rather than a menu. There are three tabs: Feed, Map, and Profile. Keeping it to three was a deliberate decision to avoid the nav getting cluttered.

The recipe detail page includes inline linking from ingredients to their store locations on the map. This is the connection that makes the ingredient map feel integrated rather than bolted on.

![Recipe detail wireframe showing inline ingredient to store linking](./assets/images/Wireframes%20-%20Recipies:Ingredients.png)

## Setting up the project board

This week I also set up the GitHub project board for the group. We are using it as our ticketing system so that work is visible and distributed clearly. Each ticket can be assigned to me (Amorino), Natasha, or Patricia, and we use the standard columns: backlog, in progress, in review, done.

The reason I wanted to get this sorted in week 8 is that sprint 1 without a proper board was a bit loose. People were working but it was not always clear what was blocked, what was done, or what to pick up next. The board fixes that.

![GitHub project board showing tickets assigned across Amorino, Natasha, and Patricia](./images/week8-project-board.png)

## How the lecture connected

The modular design lecture reinforced something I had already been doing intuitively in the wireframes but had not framed clearly. Design systems define the shared rules that keep components consistent. When I decide what a recipe card looks like, I am effectively making a design system decision, because that card will appear in multiple contexts. If the card is designed once with clear constraints, the person coding it only needs to build it once and can reuse it across the feed, the search results, and the featured section.

The flip side, which the Project Ara example in the lecture made clear, is that modularity is a goal not a guarantee. You can design things to be modular on paper and still end up with components that are tightly coupled in practice. That is a risk we will need to watch as we move into the build.