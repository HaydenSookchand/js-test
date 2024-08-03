# js-test


# Test 1:
I have an application that is packaged in a Docker image and stored on ghcr.io. The application exposes a standard HTTPS webserver on port 443 and a custom TCP/IP connection on port 5001.
I want to have it deployed to Google Cloud Platform in a manner that is easy to script during a CI/CD process. The deployed version does not need to be auto-scaling or behind a firewall.

# Answer
[Broken down to tasks on Asana](https://app.asana.com/0/1207970559637903/1207970559637906)
![Alt text](https://github.com/HaydenSookchand/js-test/blob/main/screenshots/asana-board.png "Asana Board")

 ## Epic - Deploy Docker Application to Google Cloud Platform with CI/CD
I have an application that is packaged in a Docker image and stored on ghcr.io. The application exposes a standard HTTPS webserver on port 443 and a custom TCP/IP connection on port 5001.
I want to have it deployed to Google Cloud Platform in a manner that is easy to script during a CI/CD process. The deployed version does not need to be auto-scaling or behind a firewall.

--------------------
**Pre-requisites:**
(These are considered complete for the sake of this assessment)

****User Story:** Dockerize the Application**
As a developer,
I want to Dockerize the application and push the image to a container registry,
So that the application can be deployed consistently across environments.
— Create a Dockerfile for the application.
— Build and test the Docker image locally.
— Push the Docker image to GitHub Container Registry (ghcr.io).
— Validate the image in the registry.

For the purpose of this, I have added a simple one here: https://github.com/users/HaydenSookchand/packages/container/package/js-docker-test-example


---------------------------

**User Story 1: Set Up Google Cloud Environment**
As a developer,I want to set up a Google Cloud environment with necessary configurations,

So that I can deploy my Docker application to GCP.
  — Create and configure a Google Cloud project. 
  — Set up a service account with appropriate permissions. 
Where to go: https://console.cloud.google.com/
![Alt text](https://github.com/HaydenSookchand/js-test/blob/main/screenshots/gcp-home.png "Google Cloud Home")

Potential Issues:  
Misconfiguring IAM roles or permissions can lead to deployment failures. 
Requires upgrade to paid account.
Ensure that the service account has the necessary permissions, such as Compute Engine Admin and Storage Admin if using Google Cloud Storage for artifacts.

Tools: Google Cloud Console, Google Cloud SDK (gcloud).

**User Story 2:  Implement CI/CD Pipeline**
As a developer, I want to set up a CI/CD pipeline that automates the deployment of my Docker application to GCP,

So that deployments are automated and consistent.
 — Design the CI/CD pipeline workflow.
 — Implement the CI/CD pipeline using GitHub Actions (or another tool).
 — Configure environment variables and secrets.
 — Test the pipeline for successful build and deployment.
 Where to go: https://github.com/HaydenSookchand/js-test/blob/main/.github/workflows/docker-image.yml
![Alt text](https://github.com/HaydenSookchand/js-test/blob/main/screenshots/github-actions-passing.png "Github Actions Passing")

Potential Issues: 
Managing secrets and environment variables securely is crucial. Additionally, network configurations or firewalls may block the pipeline's ability to communicate with GCP.

Tools: GitHub Actions, Secrets management in GitHub, Docker, SSH for remote deployment.

**User Story 3: Deploy Application to Google Cloud**
As a developer,
I want to deploy my Docker application to a Google Compute Engine VM,
So that the application is running and accessible on GCP.
— Create a Google Compute Engine VM and deploy the Docker container.
— Set up firewall rules to allow traffic on ports 443 and 5001.
— Validate that the application is running and accessible.
Where to go: https://console.cloud.google.com/.  and https://104.154.114.249/
![Alt text](https://github.com/HaydenSookchand/js-test/blob/main/screenshots/vm.png "Configuring VM")
![Alt text](https://github.com/HaydenSookchand/js-test/blob/main/screenshots/running-app-before.png "App Before")
![Alt text](https://github.com/HaydenSookchand/js-test/blob/main/screenshots/running-app-after.png "App After")

Potential Issues: 
Networking issues, such as misconfigured firewall rules or wrong IP bindings, could prevent access to the application. Monitoring and logging should be set up to diagnose any runtime issues.

Tools: Google Compute Engine, Docker
