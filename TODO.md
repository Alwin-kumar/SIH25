# Change Interview Prep to Mock Test

## Plan Summary
Change all references from "interview prep" to "mock test" throughout the application.

## Tasks to Complete

### 1. Rename Directory Structure
- [ ] Rename `src/app/dashboard/interview-prep/` to `src/app/dashboard/mock-test/`

### 2. Update Sidebar Navigation
- [ ] Update `src/components/Sidebar.jsx` to change "Interview Prep" to "Mock Test"
- [ ] Update the URL from "/dashboard/interview-prep" to "/dashboard/mock-test"

### 3. Update Page Component
- [ ] Update `src/app/dashboard/interview-prep/page.jsx` to change:
  - Component name from "InterviewPrep" to "MockTest"
  - Page title from "Interview Preparation" to "Mock Test"

### 4. Move Files
- [ ] Move page.jsx from interview-prep to mock-test directory
- [ ] Remove old interview-prep directory

## Progress
- [x] Directory renamed
- [x] Sidebar updated
- [x] Page component updated
- [x] Files moved
