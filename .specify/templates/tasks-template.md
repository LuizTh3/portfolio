---

description: "Task list template for feature implementation"
---

# Tasks: [FEATURE NAME]

**Input**: Design documents from `/specs/[###-feature-name]/`

**Prerequisites**: plan.md (required), spec.md (required for user stories),
research.md, data-model.md, contracts/

**Validation**: Include the automated and manual checks required by the feature
specification. Mobile, desktop, keyboard, reduced-motion, static-content,
performance, and conversion acceptance criteria are mandatory when applicable.

**Organization**: Tasks are grouped by user story so each story can be implemented,
tested, and delivered independently.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel because it touches different files and has no
  incomplete dependencies.
- **[Story]**: User story identifier such as US1, US2, or US3.
- Every task MUST include an exact file path.

## Path Conventions

The portfolio uses a single React application rooted at `src/`:

```text
src/
|-- components/
|-- sections/
|-- animations/
|-- hooks/
|-- data/
|-- assets/
|-- styles/
`-- pages/
```

<!--
  ============================================================================
  IMPORTANT: The tasks below are examples only.

  The /speckit-tasks command MUST replace them with tasks derived from:
  - prioritized user stories and requirements in spec.md
  - technical decisions and Constitution Check in plan.md
  - content models and contracts

  Preserve the constitutional order within each relevant story:
  typed content -> static structure -> responsive behavior -> accessibility
  -> animation -> reduced motion -> performance -> conversion validation.
  ============================================================================
-->

## Phase 1: Setup

**Purpose**: Establish the mandatory project baseline and quality tooling.

- [ ] T001 Verify React, Vite, Tailwind CSS, and Anime.js dependencies in package.json
- [ ] T002 Enable strict TypeScript in tsconfig.json
- [ ] T003 [P] Configure linting and formatting
- [ ] T004 [P] Configure automated test tooling required by the plan
- [ ] T005 [P] Establish accessibility and reduced-motion test helpers

---

## Phase 2: Design System and Foundation

**Purpose**: Establish the visual, content, accessibility, and technical foundation
before animated feature work.

**CRITICAL**: No user story animation begins until this phase is complete.

- [ ] T006 Define color, spacing, typography, focus, and control tokens in src/styles/
- [ ] T007 [P] Create shared Button component in src/components/Button.tsx
- [ ] T008 [P] Create shared SectionTitle component in src/components/SectionTitle.tsx
- [ ] T009 [P] Create shared StatusIndicator in src/components/StatusIndicator.tsx
- [ ] T010 Define shared content types in src/data/types.ts
- [ ] T011 Establish semantic landmarks and heading hierarchy in src/pages/
- [ ] T012 Implement mobile-first layout primitives in src/styles/
- [ ] T013 Establish animation modules and hooks under src/animations/ and src/hooks/

**Checkpoint**: The foundation works on mobile and desktop without animation.

---

## Phase 3: User Story 1 - [Title] (Priority: P1)

**Goal**: [Value delivered to the visitor]

**Independent Test**: [How to validate this story on its own]

### Validation for User Story 1

> Define acceptance checks before implementation. Automate them where practical.

- [ ] T014 [P] [US1] Add static-content and semantic structure checks in [path]
- [ ] T015 [P] [US1] Add mobile, desktop, keyboard, and touch checks in [path]
- [ ] T016 [P] [US1] Add reduced-motion and animation-failure checks in [path]

### Implementation for User Story 1

- [ ] T017 [P] [US1] Define typed content in src/data/[content].ts
- [ ] T018 [US1] Implement static semantic structure in src/sections/[section].tsx
- [ ] T019 [US1] Complete responsive behavior in src/sections/[section].tsx
- [ ] T020 [US1] Verify accessibility without animation
- [ ] T021 [US1] Implement purposeful motion in src/animations/[animation].ts
- [ ] T022 [US1] Pause off-viewport motion and implement reduced-motion behavior
- [ ] T023 [US1] Validate CTA visibility and conversion path

**Checkpoint**: User Story 1 is independently usable with and without animation.

---

## Phase 4: User Story 2 - [Title] (Priority: P2)

**Goal**: [Value delivered to the visitor]

**Independent Test**: [How to validate this story on its own]

### Validation for User Story 2

- [ ] T024 [P] [US2] Add mobile, desktop, keyboard, and reduced-motion checks in [path]
- [ ] T025 [P] [US2] Add independent user-journey acceptance check in [path]

### Implementation for User Story 2

- [ ] T026 [P] [US2] Define typed content in src/data/[content].ts
- [ ] T027 [US2] Implement static semantic structure in src/sections/[section].tsx
- [ ] T028 [US2] Complete responsive behavior and verify accessibility
- [ ] T029 [US2] Add purposeful animation in src/animations/[animation].ts
- [ ] T030 [US2] Add reduced-motion and off-viewport behavior
- [ ] T031 [US2] Integrate with US1 without hiding essential content

**Checkpoint**: User Stories 1 and 2 remain independently usable.

---

## Phase 5: User Story 3 - [Title] (Priority: P3)

**Goal**: [Value delivered to the visitor]

**Independent Test**: [How to validate this story on its own]

### Validation for User Story 3

- [ ] T032 [P] [US3] Add mobile, desktop, keyboard, and reduced-motion checks in [path]
- [ ] T033 [P] [US3] Add independent user-journey acceptance check in [path]

### Implementation for User Story 3

- [ ] T034 [P] [US3] Define typed content in src/data/[content].ts
- [ ] T035 [US3] Implement static semantic structure in src/sections/[section].tsx
- [ ] T036 [US3] Complete responsive behavior and verify accessibility
- [ ] T037 [US3] Add purposeful animation in src/animations/[animation].ts
- [ ] T038 [US3] Add reduced-motion and off-viewport behavior

**Checkpoint**: All selected user stories are independently usable.

---

## Final Phase: Performance, SEO, and Release Quality

**Purpose**: Validate the complete commercial journey and cross-cutting quality
gates.

- [ ] TXXX Validate layouts at defined mobile and desktop viewports
- [ ] TXXX Validate keyboard navigation, focus visibility, labels, and contrast
- [ ] TXXX Validate `prefers-reduced-motion` and disabled-animation behavior
- [ ] TXXX Pause unnecessary off-viewport motion and inspect scroll performance
- [ ] TXXX Optimize responsive images, fonts, SVG, and production bundle
- [ ] TXXX Add title, description, Open Graph, favicon, sitemap, and robots
- [ ] TXXX Verify services precede stack and projects describe solved problems
- [ ] TXXX Verify CTAs in hero, after services, and at the page conclusion
- [ ] TXXX Validate contact paths and external links
- [ ] TXXX Run production build and quickstart validation

---

## Dependencies and Execution Order

- Setup has no feature dependencies.
- Design System and Foundation depends on Setup and blocks story animation work.
- User stories depend on the shared foundation and follow business priority.
- Each story defines acceptance checks before implementation.
- Typed content precedes presentation components.
- Static structure, responsive behavior, and accessibility precede animation.
- Reduced-motion and performance behavior accompany every animation.
- The final phase depends on all selected user stories.

## Implementation Strategy

1. Complete Setup and Foundation.
2. Deliver User Story 1 as the independently testable MVP.
3. Validate it on mobile, desktop, keyboard, reduced motion, and static mode.
4. Add later stories in priority order without breaking earlier journeys.
5. Apply final performance, SEO, conversion, and release gates.

## Notes

- `[P]` tasks use different files and have no incomplete dependencies.
- `[Story]` labels preserve traceability to spec.md.
- A story is incomplete until its static, responsive, accessible, animated, and
  reduced-motion states satisfy its acceptance criteria.
- Record constitutional exceptions in the plan's Complexity Tracking table.
- Avoid vague tasks, hidden content, hover-only behavior, redundant dependencies,
  and animation without a stated purpose.
