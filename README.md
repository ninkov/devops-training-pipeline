# devops-training-pipeline

🧭 Roadmap Status 

## Roadmap
- [x] Level 1: Local App + Docker
- [x] Level 2: GitHub Actions (CI)
- [ ] Level 3: AWS Authentication (OIDC, least privilege)
- [ ] Level 4: Terraform (ECR, ECS Fargate, ALB)
- [ ] Level 5: Domain + HTTPS (Porkbun + ACM)


## ✅ Level 1 Completed — Local App + Docker

### What was accomplished

At this stage, a minimal training application was successfully prepared for CI/CD by containerizing it with Docker.

The following steps were completed:

- Created a minimal **Node.js “Hello” application**
- Added a **Dockerfile** to containerize the app
- Built the Docker image locally
- Ran the container with proper port mapping
- Resolved real-world issues during setup:
  - Docker credential helper problems on macOS
  - Dockerfile typo and build errors
  - Local port conflicts (`3000` already in use)

### Result

- The application runs successfully inside a Docker container
- The app is accessible locally via the browser:

http://localhost:3001

- Docker environment is verified and stable

This confirms that the project is **container-ready** and prepared for automated pipelines.

### Next Step

➡️ **Level 2: GitHub Actions — Continuous Integration (CI)**  
Set up an automated CI workflow to install dependencies and run tests on every push or pull request.

### Date 06.01.2026
## ✅ Level 2–4 Progress Summary: CI + Secure AWS Authentication

### Level 2 — Continuous Integration (GitHub Actions)

At this stage, a fully working **CI pipeline** was implemented using GitHub Actions.

What was completed:
- Created a dedicated CI workflow (`ci.yml`)
- Automatically triggered on:
  - push to `main`
  - pull requests
- CI steps include:
  - Repository checkout
  - Node.js setup
  - Dependency installation (`npm ci`)
  - Test execution (`npm test`)

✅ Result:
- CI pipeline runs successfully
- All checks pass automatically on every change
- The repository is protected by automated validation

---

### Level 3 — AWS Authentication with OIDC (No Secrets)

To prepare for secure deployments, **GitHub Actions was connected to AWS using OIDC** (OpenID Connect).

What was completed:
- Created an **OIDC Identity Provider** in AWS IAM for GitHub Actions
- Created a dedicated **IAM Role** for GitHub deployments
- Configured a strict **trust relationship**:
  - Only this repository
  - Only the `main` branch
- Avoided all long-lived AWS credentials (no access keys, no secrets)

Why this matters:
- Uses **short-lived, temporary credentials**
- Follows AWS and GitHub **security best practices**
- Production-ready authentication model

---

### Level 4 (Part 1) — GitHub → AWS Auth Test Workflow

A separate deployment workflow was introduced to validate AWS authentication.

What was completed:
- Created a dedicated deployment workflow (`deploy.yml`)
- Added explicit workflow permissions:
  - `id-token: write`
  - `contents: read`
- Configured GitHub Actions to assume the AWS IAM role via OIDC
- Verified authentication using:



✅ Result:
- GitHub Actions successfully authenticated to AWS
- IAM role was assumed without secrets
- AWS account identity was confirmed from the pipeline

---

### Key Takeaways

- CI and deployment workflows are **cleanly separated**
- GitHub → AWS authentication uses **modern, secure OIDC**
- No credentials are stored in GitHub secrets
- The project now has a **production-grade CI/CD foundation**

---

### Next Steps

➡️ **Level 4 (Part 2): Terraform + AWS Infrastructure**
- Create ECR repository
- Push Docker images from GitHub Actions
- Provision ECS / infrastructure using Terraform
