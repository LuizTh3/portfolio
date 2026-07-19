# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]

**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

[Extract from feature spec: primary requirement + technical approach from research]

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript (strict mode)

**Primary Dependencies**: React, Vite, Tailwind CSS, Anime.js

**Storage**: [N/A or describe the demonstrated need]

**Testing**: [unit/integration/e2e tooling and manual accessibility checks]

**Target Platform**: Modern mobile and desktop browsers

**Project Type**: Responsive commercial portfolio website

**Performance Goals**: [measurable loading, responsiveness, and animation targets]

**Constraints**: Mobile first; content works without animation; reduced motion;
no hover dependency; semantic HTML; visible keyboard focus

**Scale/Scope**: [sections, content collections, routes, and supported viewports]

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Commercial value**: Does the feature communicate a client problem, solution,
  process, or result before implementation technology?
- **Narrative**: Does it reinforce the Digital Software Factory journey and the
  homepage's beginning, middle, and end?
- **Conversion**: Are `Iniciar um projeto`, `Ver projetos`, and contact paths clear
  at the required points?
- **Mobile completeness**: Is the essential experience complete on mobile before
  desktop-only enhancements?
- **Static-first behavior**: Is all content understandable without Anime.js or other
  animation JavaScript?
- **Motion purpose**: Does every proposed animation have an explicit communication
  or feedback purpose, use Anime.js/CSS/native APIs, and avoid unnecessary loops?
- **Reduced motion**: Is `prefers-reduced-motion` behavior specified?
- **Performance**: Are off-viewport pauses, efficient properties, asset weight, and
  measurable loading/interaction targets addressed?
- **Accessibility**: Are semantic HTML, heading order, contrast, keyboard operation,
  focus visibility, labels, alternative text, and touch behavior addressed?
- **Content hierarchy**: Do services precede stack, and do projects show context,
  problem, solution, technology, and result?
- **Architecture**: Is TypeScript strict, is content structured as typed data, and
  are complex animations separated from component rendering?
- **SEO**: Are metadata, Open Graph, favicon, sitemap, robots, and descriptive
  service language included where applicable?
- **Dependency discipline**: Is every added dependency necessary and non-redundant?

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output (/speckit-plan command)
├── data-model.md        # Phase 1 output (/speckit-plan command)
├── quickstart.md        # Phase 1 output (/speckit-plan command)
├── contracts/           # Phase 1 output (/speckit-plan command)
└── tasks.md             # Phase 2 output (/speckit-tasks command - NOT created by /speckit-plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
# [REMOVE IF UNUSED] Option 1: Single project (DEFAULT)
src/
├── models/
├── services/
├── cli/
└── lib/

tests/
├── contract/
├── integration/
└── unit/

# [REMOVE IF UNUSED] Option 2: Web application (when "frontend" + "backend" detected)
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/
└── tests/

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
└── tests/

# [REMOVE IF UNUSED] Option 3: Mobile + API (when "iOS/Android" detected)
api/
└── [same as backend above]

ios/ or android/
└── [platform-specific structure: feature modules, UI flows, platform tests]
```

**Structure Decision**: [Document the selected structure and reference the real
directories captured above]

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
