# Protocol - 3D Animated Portfolio Website

## Development Workflow Rules

This project follows a strict protocol-based approach to ensure consistency, quality, and project continuity.

### Core Principles
1. **Documentation First**: All changes must be documented before implementation
2. **Approval Required**: Always ask approval before executing any task
3. **Incremental Changes**: Do not change files completely - complete tasks as instructed
4. **Status Tracking**: Always create and show a to-do list with status
5. **Issue Communication**: Inform about any issues found in files
6. **Session Continuity**: After completing each task, update projectmemory.md by getting approval from me to document the tasks you completed by considering if somehow session end by seeing the projectmemory.md you will remember from where to start the session task.
7. **Decision Tracking**: Update decisions.md after making technical decisions
8. **Step Documentation**: Always update steps.md after finishing every task, get approval first.
9. **Major Milestone Documentation**: When major project phases are completed (such as React foundation setup), update CLAUDE.md to reflect the current project status and completed work.
10. **HTML/CSS Only for 3D**: The project uses Sketchfab iframes for all 3D content. Do not add new React Three Fiber, Three.js, or Canvas-based 3D code. All 3D elements must be embedded via iframe or HTML/CSS alternatives.

## Task Execution Protocol

### Before Starting Any Task
1. Read current documentation files to understand project state
2. Check projectmemory.md for session continuity
3. Review decisions.md for previous technical decisions
4. Update steps.md with planned approach (get approval first)

### During Task Execution
1. Ask approval before making any changes
2. Make incremental, focused changes
3. Test changes thoroughly
4. Document any issues encountered
5. Update status in real-time

### After Task Completion
1. Update projectmemory.md with completed work
2. Update decisions.md if new technical decisions were made
3. Update steps.md with completed steps
4. Check if any follow-up tasks are needed

## File Update Requirements

### projectmemory.md
- Update with completed work summary
- Include current project status
- Add session continuity information
- Document key learnings and decisions

### steps.md
- Add new steps with chronological order
- Include detailed descriptions of actions taken
- Document command outputs and results
- Show status for each step (Complete/Pending)

### decisions.md
- Document all technical decisions made
- Include rationale for each decision
- Track issue resolutions
- Note any alternative approaches considered

### protocol.md
- This file - contains workflow rules
- Should not be modified without team approval

## Quality Assurance Standards

### Code Quality
- Follow React best practices
- Use proper TypeScript (if applicable)
- Ensure proper error handling
- Maintain clean, readable code

### Performance Standards
- Target 60fps animations
- Optimize 3D rendering
- Implement responsive design
- Ensure fast loading times (< 3 seconds)

### Documentation Standards
- Clear, concise documentation
- Proper markdown formatting
- Include relevant code examples
- Track all changes and decisions

## Development Commands Reference

### Development Workflow
```bash
# Start development server on port 3007
npm run dev

# Build for production
npm run build

# Preview production build on port 4175
npm run preview

# Check for outdated packages
npm outdated

# Update dependencies
npm update
```

### Testing (when configured)
```bash
# Run tests
npm test

# Run unit tests
npm run test:unit

# Run end-to-end tests
npm run test:e2e
```

### Code Quality
```bash
# Run ESLint
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Run TypeScript type checking
npm run type-check
```

## Project Status Tracking

### Current Status: **React Project Foundation Complete**
- ✅ React + Vite setup with package.json
- ✅ Core dependencies installed
- ✅ React Router implemented
- ✅ Tailwind CSS configured (downgraded to v3.4.x)
- ✅ Configuration files created (tailwind.config.js, postcss.config.js)
- ✅ Project structure organized
- ✅ Documentation system established (goal.md, projectmemory.md, steps.md, decisions.md, protocol.md, transcript.md)
- ✅ Protocol rules updated with session approval requirements
- ✅ CLAUDE.md updated with project overview and development guidelines
- ✅ Development server configured and running on port 3007
- ✅ Preview server available on port 4175

### Next Development Phase
1. Complete Tailwind CSS setup (add directives to index.css, configure content paths)
2. Set up 3D scene with React Three Fiber
3. Add animations (Framer Motion or GSAP)
4. Implement responsive design with Tailwind
5. Build project components and 3D elements
6. Add portfolio content and sections
7. Implement smooth page transitions and micro-interactions

## Emergency Procedures

### If Development Server Fails
1. Check package.json for correct scripts
2. Verify all dependencies are installed
3. Check for port conflicts (port 3007 is currently configured)
4. Review console errors
5. Ensure preview server on port 4175 is working correctly

### If Configuration Issues Arise
1. Check decisions.md for previous solutions
2. Review protocol.md for setup guidelines
3. Document the issue in decisions.md
4. Seek approval for resolution approach

## Project Communication

### Status Updates
- Always provide clear status updates
- Use checklists for task completion
- Include links to relevant files
- Document any blockers or issues

### Decision Documentation
- Clearly explain rationale for decisions
- Document alternative approaches considered
- Include technical specifications
- Note any trade-offs made

## Final Notes

This protocol ensures:
- Consistent development approach
- Clear project documentation
- Effective team communication
- Quality code and performance
- Successful project completion