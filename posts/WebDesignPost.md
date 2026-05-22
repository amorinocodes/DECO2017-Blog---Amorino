---
title: Amorino's Web Journey
date: 2026-02-16
author: Amorino Toongart
summary: Quick Dive into my Web journey this semsester
tags:
  - DECO2017
  - WebDesign
  - Planning
---
## Interpreting the Brief

The BlaBla Corp brief focuses on creating a "community hub" where users with shared interests can connect through content and interaction. Rather than simply building a generic social platform, the emphasis is on **what information is shared and how the experience keeps users engaged**.

This means the success of the application is not just based on features, but on how well it supports meaningful interaction within a specific community.

## Initial Direction

At this stage, I am exploring building a community hub centred around university societies 

This direction is interesting because:
- It already has an existing community
- Users have clear motivations to engage
- I am a involved In a lot of uni society work and community building

However, I am still considering alternatives such as:
- A community for local areas to promote social gatherings
- A broader lifestyle hub (more users, but less depth)

The trade-off here is between **depth vs scale**. A niche community may lead to stronger engagement, while a broader one may struggle to maintain meaningful interaction.

## Core Functional Requirements

Instead of listing features, I focused on what the system *needs to do*:

### Essential (Core)
- Users can create and view posts  
- Users can interact (like/comment)  
- Users can view content relevant to their community  
- Users are identifiable (linked to their account session)  

These are essential because without them, there is no real "community interaction".

### Secondary (Optional)
- Tagging or filtering posts  
- Saving or bookmarking content  
- Personalised recommendations  

These improve experience but are not required for a working prototype.

A key decision here is to **limit scope early** to ensure the system remains feasible within time constraints.

## Technical Considerations

The required tech stack (MojoJS, SQLite, HTMX) influences how I approach design.

- SQLite suggests structured data → I will likely need tables for users, posts, and interactions  
- HTMX supports dynamic updates → useful for actions like liking or commenting without full page reloads  
- MojoJS templates align well with my current blog setup → I can reuse similar templating logic  

Rather than overcomplicating the system, I plan to **keep interactions simple but responsive**.

## Constraints and Risks

Some key constraints include:
- Performance (must load under 3 seconds)
- Accessibility (AA compliance)
- No custom authentication system (handled externally)

A major risk is trying to build too many features early. To avoid this, I will prioritise **core interaction over visual complexity**.

## Evaluation Plan

To evaluate the success of the application, I plan to test:

- **Usability** → Can users easily navigate and interact?
- **Engagement** → Do users understand what to do on the platform?
- **Accessibility** → Are text, contrast, and interactions inclusive?

I will likely use:
- Simple user testing (peers)
- Observing task completion (e.g. creating a post)
- Accessibility checkers

## Next Steps

Moving forward, I will:
- Finalise the community focus
- Create a basic sitemap or wireframe
- Start mapping out data (posts, users, interactions)

This will help transition from abstract ideas into a more concrete system design.
