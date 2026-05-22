---
title: APIs, dummy data, and finding the visual identity
date: 2026-03-30
author: Amorino Toongart
summary: What I learned about APIs and external integrations, and how I spent sprint 3 building out the Thai dummy database and starting on the SEAblings visual direction
tags:
  - DECO2017
  - WebDesign
  - SEAblings
  - API
  - Design
---

## The deployment and integrations lecture

Week 10 covered deployment and external integrations, which is the point in the course where the project starts feeling more real. Up until now most of the work has been local, running on localhost with test data. Thinking about how the app actually gets served, and how it talks to external services, added a layer I had not thought much about from the design side.

The part of the lecture that was most relevant to our project was the section on APIs. The core idea is that an API is the same HTTP request/response pattern you already know, but the audience is another program rather than a person. For SEAblings, the most obvious candidate for an external integration is the map. Our ingredient finder map relies on coordinates and store lookups, and a maps API is the natural way to power that in a real build.

The lecture also covered rate limits, caching, and the importance of never committing API keys to the repo. The pattern of storing keys in a config.yml file that is listed in .gitignore, and generating a default config on first startup, is something we will need to set up properly before submission. The note that deleting a key in a later commit does not remove it from earlier commits was a good reminder to be careful from the start rather than trying to clean it up after.

## What I personally worked on this week

My main contribution this sprint was completing the Thai section of our dummy database.

![Screenshot of the Thai dummy data entries in the SQLite database](./images/week10-dummy-data.png)

We needed realistic seed data to work with during development, and an empty database makes it very hard to test anything meaningfully. I built out a set of dummy entries for Thai ingredients and desserts, including things like pandan, tapioca, and glutinous rice, with associated store locations across Sydney suburbs, price ranges, and descriptions written to feel like real community submissions.

The goal was to give the database enough texture that the feed, the map, and the recipe detail screens would all look plausible when rendered with real data instead of placeholder text. It also meant thinking through the ingredient_locations table structure in practice, which confirmed that the structure Natasha documented in her week 8 post holds up when you actually try to fill it with data.

## Starting on the branding and visual direction

The other thing I started this week was the visual identity for SEAblings. The wireframes are handed off for the build, so my focus is shifting to what the app actually looks and feels like.

The design direction I am exploring is warm and grounded, something that feels connected to the food and the communities we are building for rather than generic social platform aesthetics. Colour palette, typography choices, and how the recipe card components render in full colour are all things I am working through now.

![Early SEAblings colour palette and typography explorations](./images/week10-branding-direction.png)

I also started on the user profile screen, which is one of the three main tabs in the bottom nav. The profile screen needs to handle both your own posts and your saved ingredient finds, which means it has two content modes, similar to the feed toggle between recipes and ingredient finds.

## Thinking about the map API

One thing that came out of this week's lecture that is directly relevant to our project is how to handle the map integration gracefully. The ingredient map is our core feature, which means if the map API is slow or unavailable, the app feels broken. The error handling section of the lecture was useful here: the principle of a graceful fallback rather than a crash means we should design the map screen to degrade sensibly if the external data does not load, showing a message rather than an empty white screen.

That is something worth designing for explicitly in the next round of mockup work.