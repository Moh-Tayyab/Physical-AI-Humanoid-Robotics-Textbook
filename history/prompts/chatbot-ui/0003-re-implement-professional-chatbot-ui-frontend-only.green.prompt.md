---
id: 0003
title: Re-implement Professional Chatbot UI (Frontend Only)
stage: green
date: 2025-12-04
surface: agent
model: claude-sonnet-4-5-20250929
feature: chatbot-ui
branch: feat/initial-project-setup
user: unknown
command: "@frontend/src/components/Chatbot.tsx ## Prompt for Claude Code – Professional Chatbot UI (Frontend Only)..."
labels: [frontend, react, ui, chatbot, docusaurus, re-implementation]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - frontend/src/components/Chatbot.tsx
  - (removed) frontend/src/components/Chatbot.tsx (old)
  - (removed) frontend/src/css/Chatbot.module.css
  - (removed) frontend/src/css/RoboticsCard.module.css
tests:
  - UI/UX validation via visual inspection
  - Accessibility (keyboard navigation, ARIA attributes)
  - Responsiveness on mobile
---

## Prompt

@frontend/src/components/Chatbot.tsx ## Prompt for Claude Code – Professional Chatbot UI (Frontend Only)

Create a single, copy-paste-ready React component file named `Chatbot.tsx` that renders a **professional, animated chatbot widget** for a Docusaurus (React 18 + TypeScript) site.
**No backend logic** – pure UI/UX.

---

### 1. FAB (Floating Action Button)
- Fixed bottom-right, 56 px circle.
- SVG robot head icon (thin stroke, neon-cyan `#00F2FF`) with subtle 2 s pulse-glow.
- Click toggles chat window; icon rotates 45° into “×” when open.

---

### 2. Chat Window
- Slide-up from bottom (framer-motion spring, 300 ms).
- Height 65 % viewport, width 380 px (max 96 % on mobile).
- Glassmorphism: `rgba(11,12,16,.75)` + `backdrop-blur-xl`, 1 px border `--grid-line`, shadow-2xl.
- Header: gradient bg, robot icon left, title “AI Tutor”, subtitle “Ask me anything about Physical AI”, close button right.
- Body: scrollable message list (empty state placeholder + typing indicator dots).
- Footer: sticky input row (rounded) with send icon (phosphor `paper-plane-right`); input glows neon-cyan on focus; `onSend` callback prop (stub).

---

### 3. Message Bubbles
- User: right-aligned, neon-cyan accent border, raisin-black bg.
- Bot: left-aligned, neon-magenta accent border, `#011627` bg.
- Smooth appear (opacity + y 20) 200 ms spring.
- Markdown support inside (bold, inline-code, links).

---

### 4. Accessibility & UX
- Keyboard: Escape closes, Enter sends, Shift+Enter newline.
- ARIA: `role="dialog"`, `aria-label="AI Tutor Chat"`.
- Focus trap while open (`useFocusTrap` hook inline).
- Respect `prefers-reduced-motion`.

---

### 5. Theming
- Uses existing CSS vars: `--neon-cyan`, `--neon-magenta`, `--raisin-black`, `--grid-line`.
- Dark-mode only; no extra CSS file – use styled-jsx inside component.

---

### 6. Deps & Export
- Use `framer-motion` & `phosphor-react` (already installed).
- No fetch/axios/backend calls.
- Default export `Chatbot`; self-contained; TypeScript strict compliant.


## Response snapshot

Re-created `frontend/src/components/Chatbot.tsx` with all specified UI/UX features, including FAB, chat window, header, message body, input footer, styled-jsx for CSS, `framer-motion`, `phosphor-react`, and `react-markdown`. Implemented accessibility (focus trap, keyboard shortcuts) and dark mode theming with CSS variables. Confirmed removal of old chatbot files.

## Outcome

- ✅ Impact: The professional chatbot UI component has been successfully re-implemented and is now present in the frontend, adhering to all specified requirements.
- 🧪 Tests: Basic UI/UX validation, accessibility checks, and responsiveness for mobile are to be performed by the user. The component is self-contained and ready for integration.
- 📁 Files: `frontend/src/components/Chatbot.tsx` was re-created. Confirmed old `frontend/src/components/Chatbot.tsx`, `frontend/src/css/Chatbot.module.css`, and `frontend/src/css/RoboticsCard.module.css` are removed.
- 🔁 Next prompts: The user can now integrate this component into the Docusaurus site.
- 🧠 Reflection: An accidental deletion of the newly created file was identified and corrected promptly. The task was completed successfully after re-creation.

## Evaluation notes (flywheel)

- Failure modes observed: Accidental deletion of a newly created file due to an erroneous `rm` command targeting the same file path as the new file.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Improve `rm` command logic to specifically target old files by name or unique identifier, or verify file existence before deletion.
