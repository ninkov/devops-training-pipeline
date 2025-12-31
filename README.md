# devops-training-pipeline

🧭 Roadmap Status 

## Roadmap
- [x] Level 1: Local App + Docker
- [ ] Level 2: GitHub Actions (CI)
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
