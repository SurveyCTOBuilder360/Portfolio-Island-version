# AGENTS.md - Developer Guide for Portfolio-Island-Version

## Project Overview
- **Type**: 3D Animated Portfolio Website (React 18 + Vite + Tailwind CSS)
- **Entry**: `src/main.jsx` → `src/App.jsx` → Pages/Components
- **Port**: 3003 (configured in `vite.config.js`)
- **Note**: No testing or linting infrastructure configured yet

---

## Build & Development Commands

### Development
```bash
npm run dev          # Start dev server on http://localhost:3003
```

### Production
```bash
npm run build        # Create optimized build in dist/
npm run preview      # Preview production build on port 4175
```

### Testing & Linting
**NOT CURRENTLY CONFIGURED** - No test files, Jest/Vitest, or ESLint in this project.

To run a single test when configured:
```bash
npm test             # Run all tests
npm test -- --run   # Run once (Vitest)
npm run test:unit    # Run unit tests only
```

For linting (when configured):
```bash
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix linting issues
```

---

## Code Style Guidelines

### Language
- JavaScript ES6+ (no TypeScript)
- React 18.2.19 with `createRoot` API

### Imports (React Router v6)
Use **named exports only**:
```javascript
import { BrowserRouter, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom'
```

### File Structure
```
src/
├── main.jsx          # Entry: createRoot + BrowserRouter
├── App.jsx           # Layout + Routes
├── index.css         # Tailwind + custom styles
├── contexts/         # React Context (ThemeContext.jsx)
├── components/       # Reusable UI components
│   ├── ThreeDScene.jsx
│   ├── ThemeSwitcher.jsx
│   └── MobileMenu.jsx
└── pages/            # Route pages
    ├── About.jsx
    ├── Projects.jsx
    └── Contact.jsx
```

### Naming Conventions
- **Components**: PascalCase (`ThreeDScene.jsx`, `ThemeSwitcher.jsx`)
- **Files**: kebab-case (`project-memory.md`, but `.jsx` files use PascalCase)
- **CSS Classes**: Tailwind classes preferred; custom classes use kebab-case
- **Constants**: SCREAMING_SNAKE_CASE for config values

### Styling
- **Tailwind CSS v3.4.11** - Primary styling approach
- Tailwind directives in `index.css`:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- Custom classes in `@layer components`
- Gradients: `bg-gradient-to-r from-cyan-500 to-purple-600`
- Animations: Use `@react-spring/web` for complex animations
- Custom `@keyframes` in `index.css` for simple animations

### React Patterns
- Functional components with hooks
- Local `useState` for component state
- Context (`ThemeContext.jsx`) for global state
- `@react-spring/web` for spring physics animations:
  ```javascript
  const props = useSpring({ opacity: 1, y: 0, from: { opacity: 0, y: 50 } })
  ```

### 3D Implementation (HTML/CSS Only)
- **CRITICAL**: Use only Google's `<model-viewer>` web component
- **NEVER** use Three.js, Canvas, or WebGL directly
- Models in `public/models/*.glb`
- Configuration: `camera-controls`, `auto-rotate`, `shadow-intensity`, `exposure`

### Error Handling
- Client-side form validation with error message display
- Console errors from browser extensions (i18next, Fatkun) - ignore these
- Test in Incognito mode to verify app without extension interference

---

## Key Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.js` | Vite config (port 3003, React plugin) |
| `tailwind.config.js` | Tailwind content paths |
| `postcss.config.js` | PostCSS + autoprefixer |
| `index.html` | Entry HTML with model-viewer CDN |

---

## Common Tasks

### Adding a New Page
1. Create component in `src/pages/`
2. Add route in `App.jsx:66-77`:
   ```javascript
   <Route path="/new-page" element={<NewPage />} />
   ```

### Adding a 3D Model
1. Place GLB file in `public/models/`
2. Add `<model-viewer>` in `ThreeDScene.jsx` with z-index layering

### Theme Changes
- Edit `src/contexts/ThemeContext.jsx`
- Theme options: Light (Cyan/Blue), Dark (Navy/Gold), Professional (Emerald/Teal)

---

## Important Notes

- **Navigation**: Main nav in `App.jsx:14-63`. There's a duplicate in `ThreeDScene.jsx` - fix by removing it.
- **Model-viewer**: Loaded from Google CDN in `index.html:8`
- **Build Issue**: If build fails on Netlify, ensure `autoprefixer` is in devDependencies
- **Responsive**: Use Tailwind breakpoints (`sm`, `md`, `lg`, `xl`)

---

## Protocol Compliance
This project follows a strict protocol-based approach. See `docs/protocol.md` for detailed workflow rules.

### Key Protocol Rules
1. **Documentation First**: Document changes before implementation
2. **Approval Required**: Ask approval before executing any task
3. **Incremental Changes**: Do not change files completely
4. **Status Tracking**: Create and show a to-do list with status
5. **Issue Communication**: Inform about any issues found
6. **Session Continuity**: Update `projectmemory.md` after completing tasks
7. **Decision Tracking**: Update `decisions.md` after technical decisions
8. **Step Documentation**: Update `steps.md` after finishing every task

### Required File Updates After Tasks
- **projectmemory.md**: Completed work summary, session continuity info
- **steps.md**: Chronological steps with status (Complete/Pending)
- **decisions.md**: Technical decisions, rationale, issue resolutions

### 3D Implementation Rule
**CRITICAL**: Use only Google's `<model-viewer>` web component or Sketchfab iframes. Never use Three.js, Canvas, or WebGL directly. Models in `public/models/*.glb`.
