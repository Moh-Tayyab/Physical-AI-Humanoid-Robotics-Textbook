<!--
Version change: 1.0.0 → 1.1.0
Modified principles: Added Code Quality Standards
Added sections: Vision, Mission, System Architecture, Book Outline, Tech Stack Policy, AI Agent Rules, Quality Standards, AI Ethics & Responsibility, Workflow Rule, Living Document Policy, Final Declaration
Removed sections: None
Templates requiring updates:
  - .specify/templates/plan-template.md: ⚠ pending
  - .specify/templates/spec-template.md: ⚠ pending
  - .specify/templates/tasks-template.md: ⚠ pending
  - .specify/templates/commands/*.md: ⚠ pending
  - README.md: ⚠ pending
  - docs/quickstart.md: ⚠ pending
Follow-up TODOs: TODO(WORKFLOW_RULE_CONTENT): Add content for Workflow Rule
-->
# AI Spec-Driven Book & Agent Lab Constitution

## Core Principles

### I. Spec-First Development
Everything starts with specs.
No Specification → No Content → No Code → No Agent
Every module, agent, or chapter must have its spec.

### II. Simplicity
- Concepts must be easy to understand.
- No unnecessary complexity.
- Beginner-friendly explanations.

### III. Developer-Focused
Target audience:
- Student Developers
- AI Hackathon Participants
- Junior AI Engineers
- Future AI Professionals

### IV. AI as a Tool
AI is an assistant, not a replacement of human reasoning.

### V. Quality Standards
Every chapter and module must include:
✅ Clear headings
✅ Diagrams / visuals
✅ Real-world examples
✅ Code snippets
✅ Exercises
✅ Mini projects
Low-quality content will be rejected.

## Vision

This project aims to build a **world-class AI Spec-Driven Technical Book and Agent Lab** that helps developers understand and build:

- Agentic AI Systems
- Spec-Driven Software
- Real-world AI Agents
- RAG-based Applications

This is not just a book, it is:
- A Knowledge Hub
- A Learning Lab
- An AI Engineering Playbook
- A Developer Training Platform

## Mission

Our mission is to:

1. Convert confusion into clarity for AI developers.
2. Teach complex topics using:
   - Simple English
   - Step-by-step breakdowns
   - Real-world code examples
3. Promote engineering-first AI instead of hype-based AI.
4. Make Spec-Driven Development a core development culture.

## System Architecture

The project consists of three main layers:

### Layer 1: Book Platform
- Built using Docusaurus
- Structured chapters and sections
- Markdown-based content

### Layer 2: AI Agent Lab
- Backend using FastAPI
- Agent system with OpenAI Agents SDK
- Vector database using Qdrant

### Layer 3: Spec Engine
- Powered by SpecifyPlus
- Responsible for:
  - Project specs
  - Agent specs
  - Prompt specs
  - Tool specs

## Book Outline

**Book Title:**
> *Agentic AI & Spec-Driven Engineering*

Planned Chapters:

1. AI Fundamentals
2. Introduction to Agentic AI
3. Spec-Driven Development
4. OpenAI Agent SDK
5. Building AI Agents
6. RAG Systems with Qdrant
7. AI for Startups
8. Hackathon Survival & Playbooks

## Tech Stack Policy

Only these tools are officially approved:

| Tool | Purpose |
|------|---------|
| Docusaurus | Book Website |
| FastAPI | API Backend |
| Qdrant | Vector Storage |
| OpenAI Agents SDK | AI Agent Development |
| UV | Environment & Package Manager |
| SpecifyPlus | Spec & Workflow System |

## AI Agent Rules

Every AI Agent must follow:

1. A written specification
2. Clearly defined purpose
3. Documented workflow
4. Validation tests

No agent will be built without a written spec.

## AI Ethics & Responsibility

This project strictly follows:

- Safe AI practices
- No harmful or misleading content
- Full transparency in AI usage
- Responsible AI education

## Code Quality Standards

Every piece of code contributed to this project must adhere to the following:

1.  **Readability & Maintainability:** Code should be clear, concise, and easy to understand by other developers. Favor explicit code over implicit, and strive for self-documenting code.
2.  **Formatting:** All code must conform to established style guides (e.g., Black for Python, Prettier for Markdown/JS/TS). Automated formatters should be used and configured for pre-commit hooks.
3.  **Linting:** Code must pass all linting checks with no warnings or errors. Linters (e.g., Pylint/Flake8 for Python, ESLint for JS/TS) should be integrated into the CI/CD pipeline.
4.  **Type Hinting:** Python code should extensively use type hints for improved readability, maintainability, and early bug detection.
5.  **Testing:** All new features and bug fixes must be accompanied by appropriate unit and, where applicable, integration tests. Tests should achieve high code coverage and ensure correctness.
6.  **Documentation:** Critical functions, classes, and modules should have clear docstrings. Complex logic should be explained with comments. API contracts must be well-documented.
7.  **Security:** Code must be written with security in mind, avoiding common vulnerabilities (e.g., SQL injection, XSS, insecure deserialization). Security reviews and static analysis should be part of the development process.
8.  **Performance:** Code should be efficient, with consideration for resource usage and execution time, especially in critical paths.


## Workflow Rule

## Workflow Rule

All development follows:

1.  **Spec-Driven Design:** Every feature, agent, or module begins with a clear, approved specification (`spec.md`).
2.  **Plan First:** Before coding, an architectural plan (`plan.md`) must be created and reviewed, detailing decisions, interfaces, and NFRs.
3.  **Task Breakdown:** Implementation is broken down into small, testable tasks (`tasks.md`), each with explicit acceptance criteria.
4.  **Test-Driven Development (TDD):** Tests are written before code, guiding implementation and ensuring correctness.
5.  **Code Review:** All code changes undergo thorough peer review to ensure quality, adherence to standards, and architectural alignment.
6.  **Continuous Integration/Continuous Deployment (CI/CD):** Automated pipelines build, test, and deploy changes, ensuring rapid feedback and consistent delivery.
7.  **Documentation:** Design decisions (ADRs), API contracts, and key system behaviors are documented as part of the development cycle.
8.  **Prompt History Records (PHRs):** Every significant interaction with AI agents is recorded as a PHR for traceability and learning.
9.  **Iterative Development:** Features are developed and released in small, incremental iterations, allowing for continuous feedback and adaptation.


## Living Document Policy

This constitution is not static.

- It will evolve weekly
- It will adapt with new learned concepts
- It will improve with feedback and progress

## Final Declaration

> This project is not designed to follow trends.
> It is designed to **create trends** in AI education and Spec-Driven development.

Signed,
**Muhammad Tayyab**
Founder — AI Spec-Driven Initiative

## Governance

This constitution supersedes all other practices; Amendments require documentation, approval, migration plan. All PRs/reviews must verify compliance; Complexity must be justified.

**Version**: 1.0.0 | **Ratified**: 2025-11-27 | **Last Amended**: 2025-11-27
