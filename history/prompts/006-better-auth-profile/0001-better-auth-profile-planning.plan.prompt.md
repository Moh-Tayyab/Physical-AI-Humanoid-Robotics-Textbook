---
id: 0001
title: Better Auth Profile Planning
stage: plan
date_iso: '2025-12-06'
surface: agent
model: claude-sonnet-4-5-20250929
feature: 006-better-auth-profile
branch: feat/006-better-auth-profile
user: Claude
command: /sp.plan
labels:
  - auth
  - better-auth
  - profile
  - planning
  - docusaurus
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml: |
  - specs/006-better-auth-profile/plan.md
  - specs/006-better-auth-profile/research.md
  - specs/006-better-auth-profile/data-model.md
  - specs/006-better-auth-profile/quickstart.md
  - specs/006-better-auth-profile/contracts/api-spec.md
  - CLAUDE.md
tests_yaml: |
  - None
---

# Better Auth Profile Planning

## Prompt Text

```
Bonus Feature: Better-Auth Sign-Up / Sign-In with Software & Hardware Background Capture
(50 hackathon bonus points)

Audience: Learners accessing the Physical-AI textbook & RAG chatbot
Goal: Collect self-reported software + hardware background at sign-up to power downstream content personalisation (chapter difficulty, code examples, hardware warnings).

Business Rules
1. Only e-mail + password or GitHub OAuth (no social other than GitHub).
2. During sign-up collect:
   a. Software background (multi-select) – Python, ROS 2, C++, PyTorch, LLM, None
   b. Hardware access (multi-select) – Jetson, RealSense, Unitree, None
   c. Comfort level – 1-5 Likert (1 = beginner … 5 = expert)
3. Store answers in Neon Postgres `user_profile` table linked to Better-Auth `user.id`.
4. Profile optional post-sign-up; skip allowed (default to beginner / no hardware).
5. No PII beyond e-mail; anonymised UUID for analytics.
6. Provide `.env.example` with `BETTER_AUTH_SECRET`, `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`.
7. Expose `GET /api/profile` (own profile only) and `PUT /api/profile` (update); returns 401 if not authenticated.
8. Client-side redirect flow: `/signup` → questions → `/welcome` → textbook home.
9. UI kit: reuse existing design tokens (raisin-black, neon-cyan, neon-magenta); glassmorphism card, 24 px thin icons.
10. Accessibility: WCAG 2.2 AA, keyboard navigable, focus-visible ring.

Success Criteria
- Sign-up → profile questions → dashboard completes in ≤ 45 seconds (playwright timer).
- ≥ 95 % of new users reach profile screen (no drop-off due to UX bug).
- Data correctly persisted and retrievable via `/api/profile` (automated test).
- No secrets committed; CI passes lint + build.

Constraints
- Stack: Better-Auth v1.x, Neon Postgres, Next-JS/React (or Docusaurus plugin), Tailwind-like styled-jsx.
- Delivery: 1 week (parallel to RAG backend).
- Word limit: 3 000–5 000 for accompanying markdown documentation.

Not Building
- Multi-language onboarding (Urdu bonus separate)
- Paid SSO providers (Google, Microsoft)
- Admin dashboard for user management
```

## Response Text

Executed the planning process for the Better-Auth profile feature, creating all required planning artifacts:

1. Created `specs/006-better-auth-profile/plan.md` with complete implementation plan including technical context, constitution check, and project structure
2. Created `specs/006-better-auth-profile/research.md` with technology decisions and rationale
3. Created `specs/006-better-auth-profile/data-model.md` with complete database schema and API data models
4. Created `specs/006-better-auth-profile/quickstart.md` with setup and integration instructions
5. Created `specs/006-better-auth-profile/contracts/api-spec.md` with complete API specification
6. Updated `CLAUDE.md` to include new technologies and recent changes

The plan follows all constitution principles and provides a complete roadmap for implementing the Better-Auth authentication system with profile capture functionality.

## Outcome

✅ Planning completed successfully:
  • All required planning artifacts created in specs/006-better-auth-profile/
  • Implementation plan with technical context and architecture
  • Data models for user profiles with proper validation
  • API contracts and quickstart guide
  • Agent context updated with new technologies
  • Constitution compliance verified