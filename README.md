# devops-training-pipeline

A hands-on DevOps learning project built step by step to demonstrate how a modern CI/CD pipeline is designed, secured, and automated using industry best practices.

This repository focuses on **learning by building**, not shortcuts.

---

## 🎯 Project Goal

The goal of this project is to build a **production-style CI/CD pipeline from scratch**, covering:

- Application containerization with Docker
- Continuous Integration with GitHub Actions
- Secure authentication between GitHub and AWS using OIDC (no secrets)
- Infrastructure provisioning with Terraform
- Cloud deployment on AWS
- Domain and HTTPS configuration

Each step is completed incrementally and documented clearly.

---

## 🧭 Roadmap & Progress

[x] Level 1: Local App + Docker
[x] Level 2: GitHub Actions (CI)
[x] Level 3: AWS Authentication (OIDC, no secrets)
[~] Level 4: Terraform (ECR in progress, ECS & ALB next)
[ ] Level 5: Domain + HTTPS (Porkbun + ACM)

## 🧱 Level 1 — Local Application & Docker

### ✅ What Was Implemented

- Created a minimal **Node.js “Hello” application**
- Added a `Dockerfile` to containerize the application
- Built the Docker image locally
- Ran the container with correct port mapping
- Resolved real-world setup issues:
  - Docker credential helper problems on macOS
  - Dockerfile typos and build errors
  - Port conflicts on `3000`

### 🎯 Result

- Application runs successfully inside a Docker container
- Accessible locally at:



http://localhost:3001 or http://localhost:3000

Docker environment verified and stable
✔️ Confirms the application is container-ready and suitable for CI/CD automation.

## 🔁 Level 2 — Continuous Integration (GitHub Actions)

### ✅ What Was Implemented

Created a dedicated CI workflow using GitHub Actions

🔔 Workflow Triggers

push to main

pull_request

🛠 CI Pipeline Steps

Checkout repository

Setup Node.js

Install dependencies using npm ci

Run tests using npm test

## 🎯 Result

CI runs automatically on every change

All checks pass successfully

Code quality is validated before any deployment step

✔️ Ensures early feedback and safe iteration.

## 🔐 Level 3 — Secure AWS Authentication (OIDC, No Secrets)

### ✅ What Was Implemented


Created an OIDC Identity Provider in AWS IAM for GitHub Actions

Created a dedicated IAM Role for deployments

Configured a strict trust relationship:

Only this repository

Only the main branch

Connected GitHub Actions to AWS without storing credentials

Verified authentication using:


```bash
aws sts get-caller-identity 
```
## 🔒 Why This Matters

No long-lived AWS access keys

Uses short-lived, temporary credentials

Follows AWS & GitHub security best practices

Production-grade authentication model

✔️ Establishes a secure foundation for automated deployments.
