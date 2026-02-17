# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**3D Animated Portfolio Website** - A modern, immersive web experience featuring native 3D graphics via Google's model-viewer web component, smooth animations, and responsive design built on React 18 + Vite.

### Tech Stack
- **Framework**: React 18.2.19 with modern hooks (createRoot API)
- **Build Tool**: Vite 4.2.1
- **Styling**: Tailwind CSS v3.4.11 (fully configured)
- **Routing**: React Router DOM v6.30.0 with named exports
- **3D Graphics**: Google `<model-viewer>` web component (HTML/CSS only - NO Three.js/Canvas)
- **Animations**: @react-spring/web for HTML element animations
- **CSS Processing**: PostCSS with autoprefixer
- **Development Server**: Port 3003 (configurable in vite.config.js)

### Constraint
Protocol rule #10 - All 3D content must use HTML/CSS-only approach via model-viewer. Do not add Three.js, Canvas, or WebGL-based 3D implementations.

## Current Implementation Status

**✅ PROJECT COMPLETE** - Full portfolio site with 3D, pages, animations, and responsive design

### Core Features
- ✅ React Router v6.30.0 with 4 routes: `/home`, `/about`, `/projects`, `/contact`
- ✅ Tailwind CSS v3.4.11 fully configured with responsive design
- ✅ 3D model viewer using Google `<model-viewer>` (HTML/CSS only)
- ✅ Model: `public/models/fantasy-cottage.glb` with auto-rotate, camera controls
- ✅ Fullscreen hero with dramatic lighting (`shadow-intensity="2.5"`, `exposure="0.4"`)

### Pages Implemented

**Home (`/home`)** - Composite scene: sky background, island with cottage (interactive), plane floating above, hero text "BIJOY KHIANG", auto-rotate toggle, CV download button

**About (`/about`)** - Hero section, bio grid, skills (8 animated bars), experience timeline (3 positions), tech stack cloud (15 items), blog (3 posts), CTA section

**Projects (`/projects`)** - Filterable grid (6 categories), project cards with modal popups, animated transitions, category badges and tech tags

**Contact (`/contact`)** - Contact details, social links, validated contact form with success animation, gradient CTA

### Design System
- White backgrounds, dark text, cyan/purple gradient accents
- Consistent animations using @react-spring/web
- Mobile-first responsive layouts with Tailwind breakpoints
- Navigation highlighting based on active route
- CV download modal with PDF preview functionality
- Hero branding: "BIJOY KHIANG"

## Development Commands

```bash
# Development
npm run dev                    # Start dev server on http://localhost:3003
npm run build                  # Create production build in dist/
npm run preview                # Preview production build (port 4175)

# Dependencies
npm install                    # Install all dependencies
npm update                     # Update dependencies to latest compatible versions
npm outdated                   # Check for outdated packages
```

### Configuration Files
- `vite.config.js` - Vite configuration (port: 3003, React plugin)
- `tailwind.config.js` - Tailwind content paths for scanning
- `postcss.config.js` - PostCSS with autoprefixer
- `index.html` - Entry HTML with model-viewer CDN script

## Architecture Patterns

### Component Structure
```
src/
├── main.jsx              # React entry: createRoot + BrowserRouter
├── App.jsx               # Main layout: navigation + Routes container
├── index.css             # Tailwind directives + global styles
├── components/
│   └── ThreeDScene.jsx   # Model-viewer wrapper with hero overlay
└── pages/
    ├── About.jsx         # Biography and skills
    ├── Projects.jsx      # Filterable project grid
    └── Contact.jsx       # Contact form and info
```

### Routing (React Router v6+)
Uses named exports only:
```javascript
import { BrowserRouter, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom'
```
Routes defined in `App.jsx:66-77` with wildcard redirect to `/home`.

### 3D Implementation
**ThreeDScene.jsx** uses Google's `<model-viewer>` web component:
- Full viewport coverage, white background
- Model: `/models/fantasy-cottage.glb`
- Features: `camera-controls`, `auto-rotate`, `shadow-intensity="2.5"`, `exposure="0.4"`
- Hero text overlay uses `@react-spring/web` for entrance animations
- No Three.js, no Canvas API, no WebGL

### Styling (Tailwind CSS)
- Configured to scan: `./index.html`, `./src/**/*.{js,ts,jsx,tsx}`
- Custom classes in `@layer components` in `index.css`
- Responsive breakpoints: `sm`, `md`, `lg`, `xl`
- Extensive use of gradients, backdrop blur, and transitions

## Important Notes

### Navigation Duplication
`ThreeDScene.jsx` (lines 8-29) includes its own navigation bar, while `App.jsx` (lines 14-63) provides the main navigation. This creates duplicate nav bars on the home page. Consider consolidating to have a single navigation component.

### Unused Dependencies
`package.json` includes `@react-three/*`, `three`, and `gsap` but these are not currently used. They may be leftovers from earlier iterations. The project uses model-viewer (HTML/CSS) instead. Consider removing unused dependencies to reduce bundle size.

### Model File
The 3D model `public/models/fantasy-cottage.glb` must exist in the public folder. The `public/` directory is served as-is by Vite.

### Port Configuration
Default port is 3003. If unavailable, modify `vite.config.js:7`:
```javascript
server: { port: 3003, open: true }
```

## Emergency Procedures

### If Development Server Fails
1. Check if port 3003 is in use
2. Verify dependencies: `npm install`
3. Check Node.js version: should be 18+ for React 18
4. Review browser console for errors
5. Ensure `index.html` includes model-viewer script

### If 3D Model Not Rendering
1. Check browser WebGL support
2. Verify model file exists: `public/models/fantasy-cottage.glb`
3. Check browser console for model-viewer errors
4. Verify CDN script loads in `index.html:8`

### If Tailwind Styles Missing
1. Verify `index.css` includes Tailwind directives
2. Check `tailwind.config.js` content paths include `src/`
3. Restart dev server (Vite hot reload should pick up changes)

### If Browser Extension Errors Appear
Console errors from `content.js`, `i18next`, or `Fatkun` are from browser extensions, not your code. Test in Incognito mode or disable extensions to verify your app works correctly.

## Documentation System

Project documentation is maintained in `/docs`:

- **goal.md** - Vision, success criteria, technical specs, phases
- **projectmemory.md** - Session continuity tracker, current status
- **steps.md** - Chronological implementation log
- **decisions.md** - Technical decisions and issue resolutions
- **protocol.md** - Mandatory workflow rules (do not modify)
- **transcript.md** - Tutorial notes and learning resources

**Important**: Always read `docs/protocol.md` before making changes. Follow the mandatory workflow: ask approval, document tasks, update projectmemory.md and steps.md after completing work.

## Quick Reference

- **Entry point**: `src/main.jsx:7` - createRoot + BrowserRouter
- **Routes**: `src/App.jsx:66` - Routes component with 4 paths
- **3D Canvas**: `src/components/ThreeDScene.jsx:33` - model-viewer element
- **Animations**: `src/components/ThreeDScene.jsx:54-100` - @react-spring/web usage
- **Navigation**: `src/App.jsx:14-63` (main), `src/components/ThreeDScene.jsx:8-29` (duplicate)
- **Config**: `vite.config.js:4` (plugins), `tailwind.config.js:3` (content paths)

---

**Remember**: Always follow `docs/protocol.md`. Update projectmemory.md and steps.md after completing tasks. Ask for approval before making any changes.
