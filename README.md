# playwright-boilerplate

A boilerplate for playwright e2e tests with gherkin

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/playwright-boilerplate.git

# Install dependencies
npm install
```

## Project Structure

```
├── tests/
│   ├── features/          # Gherkin feature files
│   ├── step_definitions/ # Step definitions
│   │   ├── common/      # Common steps and hooks
│   │   ├── components/  # Component-specific steps
│   │   └── pages/      # Page object models
│   └── types/          # TypeScript type definitions
├── cucumber.json       # Cucumber configuration
├── playwright.config.ts # Playwright configuration
└── tsconfig.json      # TypeScript configuration
```

## Available Scripts

```bash
# Run tests
npm test

# Run tests with HTML report
npm run test:report

# Generate HTML report only
npm run test:report:html

# Generate JSON report only
npm run test:report:json
```
