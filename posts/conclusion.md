---
title: "That's all folks!"
date: 2026-06-09
author: Amorino Toongart
summary: A final reflection on SEAblings covering performance, user experience, functional requirements, and lessons learned across the semester.
featured: true
tags:
  - DECO2017
  - SEAblings
  - Reflection
  - Testing
  - Accessibility
---

and That's all folks! Advanced Web Design has come to an end and while I am pleased to now be entering a break I will miss this class and all the things we did! Here is my final refelcion on SEAblings and how we went!

## Performance

We ran a Lighthouse audit which returned a performance score of 91, which we were pleased with. First Contentful Paint came in at 0.5 seconds, Speed Index matched it, and Total Blocking Time was 0 milliseconds. These results reflect decisions made early in the project — HTMX handles partial page updates rather than full re-renders, and SQLite responds quickly at prototype scale. The architecture choices paid off in ways that are measurable.

The one metric that dragged the score down was Largest Contentful Paint at 2.0 seconds. The audit also flagged that 81.6% of the CSS file goes unused on the homepage, and 83.6% of the HTMX library goes unused on any given page. Both are consequences of writing one shared stylesheet across all pages — a pragmatic call for a small team moving quickly, but one I would revisit with more time. Code splitting or deferred loading would bring LCP down without touching anything structural.

The Best Practices score of 78 was flagged because the app runs over HTTP rather than HTTPS at the time of testing, a direct result of auditing against a local development server that would resolve automatically in production.

<!-- EVIDENCE: Screenshot of Lighthouse audit scores (all four category scores visible) -->

## User Experience

We ran two think-aloud sessions across three tasks: browsing the feed, posting a recipe, and finding an ingredient on the map. P1 completed all three tasks but surfaced three issues — CTA hierarchy confusion, an icon-heavy interface that made action buttons hard to distinguish, and a "post a tip" destination that felt unexpected. P1 rated the app 3 out of 5. P2 completed all tasks independently and rated it 5 out of 5, though that result is worth reading carefully. P2 appeared comfortable with technology and moved through the interface with a confidence that may not reflect the broader target audience, making the score more a reflection of prior experience than a clean validation of the design.

Following testing we acted on all three issues before running the audit. CTA hierarchy was revised, the icon to text balance was adjusted, and the post a tip destination was redirected. Festival cards were also updated with images, making them considerably more legible. The accessibility score of 87 reflects the app after these changes.

<!-- EVIDENCE: Screenshot of the updated feed or festival cards showing the visual improvements post-testing -->

The contrast failures that remained are a direct consequence of the palette I chose. Rose milk tea works as a decorative accent but does not carry readable text when used as a background — the active nav link sits at a contrast ratio of 2.83:1 against a required 4.5:1. The touch target failures on the "Find ingredients" and "Post yours" card links, measuring 21.8px against a 24px minimum, connect directly to P1's confusion at those same interaction points.

<!-- EVIDENCE: Screenshot of Lighthouse accessibility flagged items showing the contrast and touch target failures -->

## Critical Reflection and Improvement Planning

The clearest pattern looking back is that we came in with an ambitious sense of what SEAblings could be and spent much of the semester making peace with what it needed to be. The core features all shipped, but the depth of interactivity we imagined early on did not fully materialise.

The colour palette decision is the most concrete example of a locally reasonable choice with consequences I did not anticipate. Rose milk tea felt right at the brand level and I stand by the visual identity, but applying it as a background for active navigation states created contrast failures I would have caught earlier with a systematic check during the design phase rather than after.

What I am genuinely proud of is how the team held together. Merging code across three people, keeping the visual language consistent, and arriving at something that feels coherent rather than assembled did not happen automatically. That coherence shows in the final product.

If I had more time the first priority would be the open store search flow, connecting the ingredient map to an external places API so users who find no results have somewhere to go. After that, the step by step recipe posting form — the current single page layout feels more like data entry than a community contribution.

<!-- EVIDENCE: Screenshot of the ingredient map showing an empty state (no results for a searched ingredient) -->

## Functional Requirements

All four core requirements from A1 shipped: recipe feed, recipe posting, ingredient finder map, and user profiles. But shipping a feature and fulfilling a requirement are not always the same thing.

The requirements were well defined at a surface level. What they did not capture was the depth of experience within each feature. Recipe navigation is the clearest example — the feed works and basic filtering exists, but users cannot move between related recipes or explore by ingredient the way a genuine community platform would support. The requirement was written at a surface level and we built to that surface level.

The ingredient map had a similar gap. We specified that users could find ingredient locations but never defined what happens when no community entries exist yet for a given ingredient. That edge case only became visible in use. The post a tip concept shifted most significantly — what started as a lighter contribution mechanic was rescoped after testing revealed the destination felt unclear. That ambiguity should have been resolved in the requirement, not during development.

<!-- EVIDENCE: Screenshot of the recipe feed or profile page showing the shipped state of core features -->

## Looking Back

SEAblings is not the application I pictured at the start of semester, and I mean that in both directions. Some things turned out better than I expected — the visual identity feels genuinely considered, the performance held up under audit, and the team produced something coherent under real constraints. Other things fell short of what I had imagined, and the gap between the depth of interactivity we planned and what we shipped is something I will carry into the next project.

Overall this class was a very rewarding experience. I want to thank Joel for being such a cool tutor and my group mates Natasha and Patricia for putting up with me and getting the job done together. I learned a lot about the behind the scenes and the actual functionality of creating a website, I improved my teamwork and after this course am confident in web design and hope to use what I learned in the workforce in the future. And who knows, maybe during the holidays we get SEAblings up and running again — I know I want to cook some more Southeast Asian food while on break!