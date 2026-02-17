# Decision Log

## Date: 2025-02-17

---

### Issue #1: Tailwind CSS v4 Setup Incompatibility

**Issue:**
- Initially installed Tailwind CSS v4.1.18
- Attempted to run `npx tailwindcss init -p` command
- Command failed with error: "npm error could not determine executable to run"
- Reason: Tailwind CSS v4 has a completely different setup process than v3; the `init` command does not work the same way

**Options Considered:**
- **Option A:** Downgrade to Tailwind CSS v3 (standard setup with `init -p`)
- **Option B:** Set up Tailwind CSS v4 (requires different configuration: install `@tailwindcss/postcss` plugin, different CSS syntax)

**Decision:**
Downgrade to Tailwind CSS v3 (Option A)

**Rationale:**
- More stable and widely used with extensive documentation
- Simpler setup process with `npx tailwindcss init -p`
- Better compatibility with existing React + Vite starter templates
- Familiar configuration syntax

**Action Taken:**
- Uninstalled Tailwind CSS v4
- Installed Tailwind CSS v3.4.x (`npm install tailwindcss@^3.4.0`)
- Successfully ran `npx tailwindcss init -p` to generate config files
- Created `tailwind.config.js` and `postcss.config.js`

**Status:** ✓ Resolved

---

### Issue #2: (Future issues will be documented here)

**Status:** Pending additional issues

---

## Decision Summary

| Issue | Decision Made | Date |
|-------|---------------|------|
| Tailwind v4 vs v3 setup | Downgrade to v3 | 2025-02-17 |
| | | |

---

## How to Use This Log
- Document every major issue encountered during the project
- Record the options considered and the decision rationale
- Refer back when troubleshooting or onboarding new team members
- Update when revisiting previous decisions
