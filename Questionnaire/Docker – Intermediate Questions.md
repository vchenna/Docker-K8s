Intermediate Docker Concepts:

1. How do multi-stage builds work in Docker?
Multi-stage builds let you use multiple FROM statements in a Dockerfile.

You can build your app in one stage (with heavy tools like compilers) and then copy only the final output into a smaller, cleaner image.

Benefit: Smaller, more secure images.


2. How do you optimize the size of a Docker image?
Use small base images (e.g., alpine).

Remove unnecessary files (logs, caches).

Combine commands to reduce layers.

Use multi-stage builds.

Add .dockerignore to skip unwanted files.


3. How does Docker networking work?
Docker creates a virtual network so containers can talk to each other and the outside world.

Each container gets its own IP address.

Networking is managed by drivers (bridge, host, overlay, etc.).

4. Difference between bridge, host, and overlay networks
Network Type
Bridge  --> Default for containers on one host --> 	Containers talk via a private network; external access via port mapping
Host    -->	High performance, no isolation     -->	Container shares host’s network stack (same IP/ports)
Overlay -->	Multi-host communication	       -->  Creates a distributed network across multiple Docker hosts (used in Swarm/K8s)

5. How do you inspect logs of a Docker container?
>> docker logs <container_id_or_name>
It shows stdout/stderr output of the container.

6. How do you monitor running Docker containers?
Basic: docker stats → shows CPU, memory, network usage.
Advanced: We can use tools like Prometheus, Grafana, or Docker Desktop dashboards.

7. How do you persist data across container restarts?
Use Volumes or Bind mounts.
Containers are ephemeral (data disappears when stopped), so persistent storage is needed for databases or files.

8. Difference between bind mounts and volumes
Bind Mounts:
a. Maps a host directory into container
b. Tied to host filesystem
c. Good for development (live code editing)

Volumes:
a. Managed by Docker itself
b. Portable, easier to back up
c. Good for production (data persistence)

9. How does Docker handle container isolation?
Uses Linux kernel features:

Namespaces → isolate processes, networking, users.
cgroups → limit resources (CPU, memory).

This makes containers lightweight but still separate from each other.

10. Common security risks in Docker

Running containers as root user.
Using untrusted images from Docker Hub.
Exposing sensitive data in images.
Misconfigured networking (open ports).
Not updating base images (vulnerabilities).

11. Explain the Docker build cache
Docker caches each layer of the image build.
If nothing changes in a layer, Docker reuses it instead of rebuilding.

Benefit: Faster builds.
Tip: Order Dockerfile instructions wisely (put frequently changing steps last).

12. How does Docker differ from a virtual machine (VM)?

Docker (Containers):
a. Shares host OS kernel
b. Lightweight, fast startup
c. Uses MBs of memory
d. Best for microservices

Virtual Machine (VMs):
a. Runs full OS per VM
b. Heavy, slow startup
c. Uses GBs of memory
d. Best for full OS isolation

------------

✅ In short:

Multi-stage builds → smaller images
Optimize size → alpine, cleanup, cache
Networking → bridge/host/overlay
Logs → docker logs
Monitoring → docker stats, Prometheus
Persistence → volumes/bind mounts
Isolation → namespaces + cgroups
Security risks → root, untrusted images, open ports
Build cache → speeds up builds
Docker vs VM → lightweight vs heavyweight