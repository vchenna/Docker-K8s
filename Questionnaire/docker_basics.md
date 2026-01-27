Docker – Basic Questions

1. What is Docker and why is it used?
Docker is a tool that lets us package an app with everything it needs (code, libraries, settings) into a container.

It’s used because containers run the same everywhere—on our laptop, server, or cloud—solving the “works on my machine” problem.

2. What is a Docker image?
A Docker image is like a blueprint or recipe for our app.

It contains the app code plus all dependencies.

you can think of it as a frozen snapshot of our app.

3. What is a Docker container?
A container is a running instance of an image.

If the image is the recipe, the container is the actual dish cooked and served.

4. What is a Dockerfile?
A Dockerfile is a text file with instructions to build a Docker image.

Example: “Start with Ubuntu, install Python, copy my app code, run it.”

5. Difference between Docker image and container
Docker Image:
a. Blueprint/recipe
b. Static (doesn’t change)
c. Built once

Docker Container:
a. Running instance
b. Dynamic (can start/stop)
c. Can be created many times

6. What are Docker layers?
When building an image, Docker creates layers for each instruction in the Dockerfile.

Layers make builds faster and efficient because unchanged parts are reused.

Example: If we only change app code, Docker won’t rebuild the OS layer.

Eg: => => exporting layers
 => => exporting manifest sha256:ebe4b344bc9b3deabddbed4e1324dab450f336933e29c2369134317d3ce60034  
 => => exporting config sha256:4c019ac3843659ef9148cf2add13ef13fce8a56904d1c831f6775a563dbbfba5 
 => => exporting attestation manifest sha256:32a2eafb90a7e301fb19ea48b56f443ef20280d1d641bbe52fc42c5083ed0b63  
 => => exporting manifest list sha256:3394d1e4f3267898c2043148f5d9535d47420f66daf4603755615d3628541c8f

7. What is Docker Hub?
Docker Hub is an online registry where we can find and share Docker images.

Example: GitHub for code/documentation, but for images we use Docker.

8. Purpose of docker run?
Docker run --> starts a container from an image.

Example: docker run nginx → runs an Nginx web server container.

9. What is a Docker volume?
A volume is storage that lives outside the container.

Used to save data (like databases) so it doesn’t disappear when the container stops.

10. Difference between COPY and ADD in Dockerfile
COPY → Copies files from our computer into the image.

ADD → Does the same but also supports extra features (like downloading from URLs or extracting archives).

Best practice: We must use COPY unless you need ADD’s special features.

11. Purpose of CMD in Dockerfile
CMD sets the default command to run when the container starts.

Example: CMD ["python", "app.py"] → runs our app by default.

12. Purpose of ENTRYPOINT in Dockerfile
ENTRYPOINT defines the main command that always runs.

CMD can add arguments to ENTRYPOINT.

Example: ENTRYPOINT = “python”, CMD = “app.py” → runs python app.py.

13. What is Docker Compose?
Docker Compose is a tool to run multi-container apps using a single YAML file.

Example: One container for our app, one for the database, one for caching—all started together.

14. Difference between Docker Compose and Kubernetes
Docker Compose:
a. Local/mid-scale
b. Simple YAML file
c. Good for dev/test

Kubernetes:
a. Large-scale production
b. Complex orchestration system
c. Good for scaling, auto-healing, cloud-native apps


15. What is a base image?
A base image is the starting point for our Dockerfile.

Example: FROM ubuntu:20.04 → Ubuntu is the base image.

Note: We can also use scratch (empty base) to build from nothing.

16. Common Dockerfile Best Practices:
Use small base images (like alpine) to reduce size.

Use COPY instead of ADD unless needed.

Combine commands with && to reduce layers.

Keep secrets out of Dockerfiles.

Use .dockerignore to avoid copying unnecessary files.

Pin versions (e.g., python:3.9) for consistency.

Run apps as non-root user for security.


In Short:
---------------
Docker = containerization tool

Image = blueprint

Container = running app

Dockerfile = recipe to build image

Volumes = persistent storage

Compose = multi-container setup

Kubernetes = large-scale orchestration




