# Luffy Sweets Contribution Framework

## Introduction

This document establishes the formal contribution guidelines for the Luffy Sweets project. It defines the standards, processes, and expectations for all contributors to ensure maintainable, high-quality collaboration.

---

## Table of Contents
1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [How to Contribute](#how-to-contribute)
   - [Reporting Bugs](#reporting-bugs)
   - [Suggesting Features](#suggesting-features)
   - [Making Code Changes](#making-code-changes)
4. [Development Process](#development-process)
5. [Style Guide](#style-guide)
6. [Commit Guidelines](#commit-guidelines)
7. [Pull Request Process](#pull-request-process)
8. [Community](#community)

---

## Code of Conduct
We expect all contributors to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before participating.

---

## Getting Started
1. Fork the repository
2. Clone your fork locally:
   ```bash
   git clone https://github.com/your-username/luffy-sweets.git

3. Install dependencies:

```bash
npm install  # or your project's install command
```
4. Create a new branch for your changes:

```bash
git checkout -b feat/your-feature-name
```

---

## How to Contribute
### Reporting bugs
1. Check existing issues to avoid duplicates.

2. Use our **Bug Report Template**.

3. Include the following details:

   - Clear description of the issue  
   - Steps to reproduce the problem  
   - Expected vs actual behavior  
   - Screenshots, if applicable

### Suggesting Features
1. Search existing feature requests first.

2. Use our [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md).

3. Explain the following in your request:

   - The problem it solves
   - Your proposed solution
   - Alternative solutions considered

### Making Code Changes

1. Ensure your branch is up-to-date:

```bash
git pull origin main
```
2. Follow our [Style Guide](src/assets/styles/variables.css).
3. Add tests for new functionality
4. Update documentation as needed

---

## Development Process

1. Write clear, modular code
2. Test your changes thoroughly
3. Run linters:
```bash
npm run lint  # or your project's lint command
```
4. Ensure all tests pass:
```bash
npm test  # or your project's test command
```

---

## Style Guide

- **JavaScript**: Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- **HTML**: Use [semantic markup](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html)
- **CSS**: Follow the [BEM naming convention](https://getbem.com/naming/)
- **Documentation**: Use [clear, concise language](https://documentation.divio.com/)

## Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification:

```text
type(scope): description
```

### Examples:
feat(menu): add vegan dessert filter
fix(cart): resolve pricing calculation error

## Pull Request Process

1. Ensure your branch is rebased on the latest `main`.

2. Fill out the [Pull Request Template](.github/PULL_REQUEST_TEMPLATE.md).

3. Request a **review from a maintainer**.

4. Address all **review comments**.

5. Once approved, your PR will be **squashed and merged**.

---

## Community

Join our community discussions:

- [GitHub Discussions](https://github.com/IamLRBA/luffy-sweets/discussions)
- [Discord Channel](https://discord.com/) 

We appreciate your contributions! 




