---
title: Amorino's Web Journey
date: 2026-02-16
author: Amorino Toongart
summary: Quick dive into my web journey this semester
tags:
  - DECO2017
  - WebDesign
  - Planning
---
## Interpreting the Brief

The BlaBla Corp brief is about building a "community hub" where users with shared interests can connect through content and interaction. Rather than just building a generic social platform, the focus is on **what gets shared and how the experience keeps users engaged**.

That means success isn't just about features — it's about how well the app actually supports interaction within a specific community.

## Initial Direction

At this stage, I'm exploring building a community hub centred around university societies.

I'm drawn to it because:
- It already has an existing community
- Users have clear motivations to engage
- I'm already involved in a lot of uni society work and community building

Still considering some alternatives though:
- A community for local areas to promote social gatherings
- A broader lifestyle hub (more users, but less depth)

The trade-off is **depth vs scale**. A niche community tends to lead to stronger engagement, while a broader one can struggle to maintain anything meaningful.

## Core Functional Requirements

Instead of just listing features, I focused on what the app actually *needs to do*:

### Essential (Core)
- Users can create and view posts  
- Users can interact (like/comment)  
- Users can view content relevant to their community  
- Users are identifiable (linked to their account session)  

Without these, there's no real "community interaction" — they're non-negotiable.

### Secondary (Optional)
- Tagging or filtering posts  
- Saving or bookmarking content  
- Personalised recommendations  

These would improve the experience but aren't needed for a working prototype.

The main call here is to **keep the scope tight early** so it stays manageable within the time constraints.

## Technical Considerations

The required tech stack (MojoJS, SQLite, HTMX) shapes how I'm approaching the design.

- SQLite suggests structured data → I'll likely need tables for users, posts, and interactions  
- HTMX supports dynamic updates → useful for things like liking or commenting without full page reloads  
- MojoJS templates align well with my current blog setup → I can reuse similar templating logic  

Rather than overcomplicating things, I want to **keep interactions simple but responsive**.

## Constraints and Risks

Key constraints:
- Performance (must load under 3 seconds)
- Accessibility (AA compliance)
- No custom authentication system (handled externally)

The main risk is feature creep early on. To avoid that, I'm prioritising **core interaction over visual flair**.

## Evaluation Plan

To evaluate how the app is going, I'll test:

- **Usability** → Can users easily navigate and interact?
- **Engagement** → Do users understand what to do on the platform?
- **Accessibility** → Are text, contrast, and interactions inclusive?

I'll probably use:
- Simple user testing (peers)
- Observing task completion (e.g. creating a post)
- Accessibility checkers

## Next Steps

- Finalise the community focus
- Create a basic sitemap or wireframe
- Start mapping out data (posts, users, interactions)

That should help turn the abstract ideas into something more concrete.
