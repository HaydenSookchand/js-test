# js-test


# Test 1:
I have an application that is packaged in a Docker image and stored on ghcr.io. The application exposes a standard HTTPS webserver on port 443 and a custom TCP/IP connection on port 5001.
I want to have it deployed to Google Cloud Platform in a manner that is easy to script during a CI/CD process. The deployed version does not need to be auto-scaling or behind a firewall.

# Answer
Broken down to tasks on Asana. https://app.asana.com/0/1207970559637903/1207970559637906

****Epic** Deploy Docker Application to Google Cloud Platform with CI/CD**
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


---------------------------

**User Story 1: Set Up Google Cloud Environment**
As a developer,
I want to set up a Google Cloud environment with necessary configurations,
So that I can deploy my Docker application to GCP.
  — Create and configure a Google Cloud project. 
  — Set up a service account with appropriate permissions. 

**User Story 2: Deploy Application to Google Cloud**
As a developer,
I want to deploy my Docker application to a Google Compute Engine VM,
So that the application is running and accessible on GCP.
— Create a Google Compute Engine VM and deploy the Docker container.
— Set up firewall rules to allow traffic on ports 443 and 5001.
— Validate that the application is running and accessible.



