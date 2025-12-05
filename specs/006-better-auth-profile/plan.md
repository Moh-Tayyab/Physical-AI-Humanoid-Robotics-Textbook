# Implementation Plan: Better-Auth Sign-Up/Sign-In with Software & Hardware Background Capture

**Branch**: `006-better-auth-profile` | **Date**: 2025-12-06 | **Spec**: [link]

**Input**: Feature specification from `/specs/006-better-auth-profile/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Implement a user authentication system with Better-Auth that captures user background information (software skills, hardware access, and comfort level) during sign-up. This information will be stored in a user profile table and used for content personalization throughout the Physical-AI textbook and RAG chatbot.

## Technical Context

**Language/Version**: TypeScript/JavaScript, React 18.x
**Primary Dependencies**: Better-Auth v1.x, Neon Postgres, Next.js/React, Docusaurus plugin
**Storage**: Neon Postgres (user profiles), Better-Auth built-in user storage
**Testing**: Playwright for E2E testing, Jest for unit tests, ≥95% coverage
**Target Platform**: Web application frontend with Docusaurus integration
**Project Type**: Web application with authentication and profile management
**Performance Goals**: Sign-up flow completes in ≤ 45 seconds, ≥ 95% of users reach profile screen
**Constraints**: WCAG 2.2 AA compliance, keyboard navigation, focus-visible rings, no PII beyond email
**Scale/Scope**: Support 10k+ users with profile data, secure OAuth with GitHub

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Content Accuracy & Technical Rigor**: All authentication flows will follow security best practices and OAuth standards
- **Educational Clarity & Accessibility**: Sign-up flow will be accessible with proper ARIA labels and keyboard navigation
- **Consistency & Standards**: UI will follow existing design tokens (raisin-black, neon-cyan, neon-magenta)
- **Docusaurus Structure & Quality**: Integration will follow Docusaurus plugin standards
- **Code Example Quality**: Authentication code will be secure with proper validation and error handling
- **Deployment & Publishing Standards**: Authentication system will meet security standards for user data

## Project Structure

### Documentation (this feature)

```text
specs/006-better-auth-profile/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
frontend/
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── SignUpForm.tsx      # Sign-up form with background questions
│   │   │   ├── SignInForm.tsx      # Sign-in form
│   │   │   ├── ProfileForm.tsx     # Profile editing component
│   │   │   └── AuthLayout.tsx      # Authentication layout
│   │   └── ui/
│   │       ├── GlassCard.tsx       # Glassmorphism card component
│   │       └── MultiSelect.tsx     # Multi-select component for skills/hardware
│   ├── pages/
│   │   ├── signup.tsx              # Sign-up page
│   │   ├── profile.tsx             # Profile page
│   │   ├── welcome.tsx             # Welcome page after sign-up
│   │   └── api/
│   │       └── profile.ts          # API routes for profile management
│   ├── hooks/
│   │   └── useAuth.ts              # Authentication hook
│   └── contexts/
│       └── AuthContext.tsx         # Authentication context
├── better-auth/
│   ├── config.ts                   # Better-Auth configuration
│   ├── middleware.ts               # Authentication middleware
│   └── plugins/
│       └── profile-plugin.ts       # Custom plugin for profile data
└── static/
    └── icons/
        └── thin-icons-24px/        # 24px thin icons
```

**Structure Decision**: Web application frontend with authentication components integrated into Docusaurus. The structure separates authentication UI components, API routes, and context management for maintainability and reusability.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| External authentication service | Better-Auth provides secure OAuth integration with GitHub | Building custom auth system would be less secure and more time-consuming |
| Multiple data stores | Better-Auth handles user accounts, separate table for profile data | Single table would complicate user management |