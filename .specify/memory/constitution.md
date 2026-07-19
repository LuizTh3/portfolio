<!--
Sync Impact Report
- Version change: template -> 1.0.0
- Ratification: initial project constitution adopted on 2026-07-19
- Added principles: I through XXXV (initial adoption)
- Added sections:
  - Purpose and Commercial Objective
  - Mandatory Quality Gates
  - Development Workflow
  - Governance
- Removed sections: none
- Templates:
  - updated: .specify/templates/plan-template.md
  - updated: .specify/templates/spec-template.md
  - updated: .specify/templates/tasks-template.md
  - not present: .specify/templates/commands/*.md
- Runtime guidance reviewed:
  - no update required: AGENTS.md
- Deferred items: none
-->

# Luiz Gustavo Software Studio Constitution

## Purpose and Commercial Objective

This project is a commercial portfolio for Luiz Gustavo and MUST position the
studio as a structure capable of transforming problems, needs, and ideas into
functional digital solutions. Its central concept is **Digital Software Factory**.
Design, content, architecture, interaction, and animation decisions MUST reinforce
that positioning.

The primary objective is to generate qualified opportunities for software
development services. The visitor journey MUST build this perception:

```text
I have a problem or an idea
        |
This professional understands my need
        |
He can design the solution
        |
He masters the necessary technologies
        |
He has experience with real projects
        |
I want to discuss my project
```

The site MUST prioritize, in order: communicating value, demonstrating capability,
presenting experience, generating trust, and facilitating contact. It MUST NOT be
designed as a traditional digital resume.

## Core Principles

### I. Value Before Technology

Primary communication MUST address client problems and desired outcomes before
mentioning implementation technologies. The required narrative order is problem,
solution, process, result, then technology. The stack MAY prove technical capacity,
but MUST NOT be the main sales argument.

### II. Software Factory as the Central Narrative

The experience MUST represent the progression from idea through understanding,
planning, architecture, development, testing, deployment, and evolution. Not every
stage must appear everywhere, but sections, copy, and motion MUST preserve a clear
sense of construction and progress. Suitable motifs include flows, lines, nodes,
connections, pipelines, build states, deployment states, and architecture.

### III. Purposeful Animation

Every animation MUST direct attention, explain a process, represent progress,
provide feedback, reinforce identity, improve comprehension or perceived quality,
or demonstrate technical skill. Decorative noise such as excessive particles,
constant glitch, code rain, random movement, persistent blinking, or purposeless
infinite loops MUST NOT be used. A small number of intentional animations is
preferred over a large number of weak effects.

### IV. Anime.js as the Primary Motion Tool

Anime.js MUST be the primary interface animation library for timelines, stagger,
SVG animation, motion paths, coordinated entrances, scroll-driven sequences,
microinteractions, and transitions. A new animation dependency requires a written
technical justification showing that Anime.js, CSS, and browser APIs cannot
reasonably meet the need.

### V. Mobile First

Every interface MUST be designed for mobile first, with vertical flow, touch,
legibility, simplicity, and low resource usage as primary constraints. Desktop MAY
add horizontal layouts, richer motion paths, hover, and mouse interactions. The
concept and complete content MUST remain equivalent across device classes even
when choreography changes.

### VI. Content Independent of Animation

All information and actions MUST remain understandable and usable when animation
JavaScript is unavailable, an animation fails, reduced motion is active, or the
device has limited performance. Animation enriches content; it MUST NOT reveal,
unlock, or explain information that has no static equivalent.

### VII. Reduced Motion

The project MUST honor `prefers-reduced-motion`. In reduced-motion mode it MUST
shorten timelines, reduce displacement, remove complex motion paths and continuous
movement, and retain only essential feedback. The resulting interface MUST remain
complete and visually coherent.

### VIII. Performance as a Functional Requirement

Performance MUST be planned and validated as product behavior. Motion SHOULD favor
`transform`, `opacity`, translation, scale, and rotation. Frequent layout reflow,
large repaints, and scroll jank MUST be avoided. Off-viewport animations MUST pause
when they provide no user value. SVG assets MUST be optimized, and infinite loops
require both a visual need and evidence that they are lightweight.

### IX. Conversion First

The primary actions are **Iniciar um projeto** and **Ver projetos**. A project-start
CTA MUST appear in the hero, after the services presentation, and at the end of the
page. Contact options MUST be obvious and reachable without searching.

### X. Clarity Above Creativity

Creative and experimental interfaces are allowed only when comprehension,
navigation, reading, accessibility, and conversion remain intact. A visitor MUST
quickly understand who Luiz Gustavo is, what he builds, how he works, what
experience he has, and how to make contact.

### XI. Terminal as Visual Language

Terminal-inspired labels and states MAY reinforce the narrative, but no important
action may require technical knowledge or command entry. Terminal language MUST
function as an understandable visual metaphor, never as a UX barrier.

### XII. Purposeful Bento Grid

Bento grids MAY organize services, technologies, projects, and professional
information when they improve hierarchy, modularity, responsiveness, and scanning.
Every card MUST have a clear informational role. Empty filler and excessive card
density MUST be avoided.

### XIII. Projects as Problems Solved

Project presentations MUST communicate context, problem, solution, technology,
and result whenever the information is available. Screenshots and stack labels
alone are insufficient because the section exists to demonstrate problem-solving
capacity.

### XIV. Supporting Technology Stack

Technologies MUST appear as infrastructure supporting solutions, preferably grouped
by responsibility such as frontend, backend, data, and infrastructure. Long logo
walls, arbitrary skill percentages, and unsupported proficiency rankings MUST NOT
be used. Services and outcomes MUST appear before the stack.

### XV. Accessible Language

Primary copy MUST be understandable to non-technical visitors. Technical terms MAY
be used in appropriately scoped detail areas, but MUST include enough context to
remain comprehensible. Outcome-oriented language is preferred over implementation
jargon.

### XVI. Consistent Visual Hierarchy

The identity MUST communicate technology, confidence, organization, modernity, and
precision through defined spacing, strong contrast, clear type hierarchy, and a
limited number of competing elements. Each section MUST have one primary focus.

### XVII. Distinct Software Studio Identity

A predominantly dark theme, subtle grids, restrained connections, and technical
typography MAY be used. Excessive cyberpunk, neon, Matrix references, unnecessary
holograms, and fictional hacker-interface styling MUST be rejected. The result MUST
feel like a modern working software studio.

### XVIII. One Primary Accent Color

The identity MUST use one primary technological accent, selected from a coherent
green, cyan, or blue-green direction. It MUST carry CTAs, active states, important
lines, indicators, and focused highlights. Additional colors MUST be semantic or
neutral and MUST NOT compete for attention.

### XIX. Functional Typography

A modern sans-serif family MUST be the primary typeface for headings, body text,
navigation, and controls. A monospace family MAY be used selectively for terminal
copy, code, status, identifiers, and technical labels, but MUST NOT become the
default page typeface.

### XX. Componentization

Repeated visual or behavioral patterns MUST become reusable React components when
that extraction reduces duplication or creates a consistent contract. Likely
shared components include buttons, section titles, project and service cards,
technology groups, status indicators, animated lines, and process steps.

### XXI. Content and Presentation Separation

Projects, services, technologies, and other repeatable content MUST be represented
as typed structured data where practical. Presentation components MUST consume
those data structures so content remains maintainable, reusable, and easy to
update.

### XXII. Animation Separation

Complex animation sequences MUST live outside the main rendering logic whenever
practical, under responsibilities such as hero, process, stack, projects, and
contact. React components MUST NOT accumulate large animation blocks when hooks or
animation modules can express the behavior more clearly.

### XXIII. Strict TypeScript

The project MUST use TypeScript with strict mode enabled. Unnecessary `any` is
prohibited. Component props, projects, services, technologies, configuration, and
external data MUST have explicit, meaningful types.

### XXIV. Mandatory Base Stack

The project baseline is React, Vite, strict TypeScript, Tailwind CSS, and Anime.js.
New dependencies MUST solve a demonstrated need and MUST NOT duplicate capabilities
already provided by this stack, CSS, or native browser APIs.

### XXV. Modular Structure

Source ownership MUST remain clear across components, sections, animations, hooks,
data, assets, styles, and pages. The exact tree MAY evolve, but content, rendering,
and animation responsibilities MUST remain logically separated.

### XXVI. Progressive Development

Implementation MUST proceed through foundation, design system, static structure,
responsiveness, animation, performance, accessibility validation, SEO, and deploy.
Accessibility requirements begin during foundation even though final validation
occurs later. Complex animation MUST NOT begin before the relevant static structure
is complete and responsive.

### XXVII. Function Before Motion

Each section MUST complete structure, content, responsiveness, and accessibility
before its main animation is applied. Reviews MUST be able to validate the section
without motion before accepting its animated state.

### XXVIII. Progressive Device Experience

Mobile MUST deliver the complete essential experience. Desktop MAY add visual
enhancements and supplementary interactions, but MUST NOT contain essential
content or actions absent from mobile.

### XXIX. No Hover Dependency

Titles, descriptions, CTAs, actions, and important information MUST remain visible
and operable without hover. Hover MAY improve desktop feedback but MUST NOT be the
only path to content or functionality.

### XXX. Structural SEO

The site MUST use semantic HTML, a valid heading hierarchy, a descriptive title
and meta description, Open Graph metadata, a favicon, `sitemap.xml`, `robots.txt`,
and descriptive copy. Relevant service terms MUST occur naturally, including
software development, systems development, web systems, process automation,
digital platforms, and custom solutions.

### XXXI. Accessibility from the Start

Every feature MUST account for color contrast, visible focus, keyboard navigation,
semantic HTML, meaningful alternative text, form labels, and reduced motion during
design and implementation. Accessibility MUST NOT be deferred as a final cosmetic
pass.

### XXXII. Clarity over Premature Abstraction

Architecture MUST remain as simple as the current product needs. Generalized
systems, abstractions, and patterns require a concrete maintenance, reuse, or
complexity benefit. Sophistication alone is not justification.

### XXXIII. Readable Code

Code MUST favor clear names, small focused components, single-purpose functions,
organized files, and explicit types where they aid understanding. Dense or clever
implementation that reduces maintainability MUST be rewritten.

### XXXIV. Technical Quality without Demo-Like UX

Technical capability MUST be demonstrated through execution quality: purposeful
motion, responsiveness, performance, interaction details, visual organization, and
strong project narratives. The visitor MUST experience a coherent service website,
not a showcase for a JavaScript library.

### XXXV. A Journey with a Beginning, Middle, and End

The homepage MUST form a complete narrative. It begins with transforming ideas into
software; develops through services, process, delivered systems, and supporting
technology; and ends with a build-complete state and a direct invitation to start a
project. Section order and transitions MUST support that arc.

## Mandatory Quality Gates

An implementation is complete only when all applicable gates pass:

- Mobile and desktop experiences are functional and contain the complete essential
  content.
- Content remains accessible and understandable without animation.
- Reduced motion is implemented and verified.
- Important content and actions do not depend on hover.
- CTAs are clear in the hero, after services, and at the page conclusion.
- Loading and interaction remain responsive without perceptible scroll jank.
- Every animation has a documented communication or feedback purpose.
- Visual hierarchy remains clear and accessible.
- Services appear before the technology stack.
- Projects explain solved problems, not only technologies.
- Contact is easy to locate and use.
- Semantic HTML, metadata, keyboard access, focus visibility, labels, and contrast
  have been reviewed.

An implementation MUST be reconsidered when it prioritizes technology over service,
harms performance for motion, confuses navigation, hides content behind interaction,
breaks on mobile, depends on hover, adds redundant libraries, overwhelms visitors
with technical detail, or compromises accessibility.

## Development Workflow

Specifications MUST define commercial value, the visitor journey, content behavior
without motion, mobile acceptance criteria, accessibility, performance, SEO, and
conversion outcomes. Plans MUST demonstrate compliance before research and again
after design.

Tasks MUST follow this delivery order:

```text
Foundation
  |
Design system
  |
Static structure and content
  |
Responsive behavior and accessibility
  |
Purposeful animation
  |
Performance validation
  |
SEO
  |
Deploy
```

Reviews MUST validate static behavior before motion, mobile completeness before
desktop enhancement, and business communication before technology presentation.
Any constitutional exception MUST be recorded in the plan's complexity tracking
table with its need, impact, and rejected simpler alternative.

## Governance

This constitution supersedes conflicting implementation preferences, design
choices, plans, and task descriptions. Every specification, plan, task list, design
review, implementation review, and release review MUST verify applicable principles
and quality gates.

Amendments require a documented proposal, a Sync Impact Report, updates to all
dependent templates and guidance, and explicit approval from the project owner.
Semantic versioning governs amendments:

- MAJOR for removing or incompatibly redefining a governing principle.
- MINOR for adding a principle or materially expanding required behavior.
- PATCH for clarifications that do not change required behavior.

The final decision test for every feature, animation, and element is:

> Does this help the visitor understand that Luiz Gustavo can transform a need into
> software and make it easier to start a project?

If the answer is no, the item MUST be removed, redesigned, or explicitly justified.

**Version**: 1.0.0 | **Ratified**: 2026-07-19 | **Last Amended**: 2026-07-19
