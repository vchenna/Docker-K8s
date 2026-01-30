# Kubernetes Use Case – MongoDB StatefulSet + Node.js Deployment

This project demonstrates deploying a **MongoDB StatefulSet** and a **Node.js application** on Kubernetes using Minikube. It includes Docker image preparation, Kubernetes deployments, service exposure, connectivity verification, and data persistence validation.

## 1. Docker Image Setup

```
docker pull mongo:6
docker tag mongo:6 vchenna/mongo:6
docker push vchenna/mongo:6
```

## 2. Apply Kubernetes Manifests

Run the manifests in this order:

```
kubectl apply -f secret.yaml
kubectl apply -f configmap.yaml
kubectl apply -f pvc.yaml
kubectl apply -f mongodb-statefulset.yaml
kubectl apply -f nodejs-deployment.yaml
kubectl apply -f mongodb-service.yaml
kubectl apply -f nodejs-service.yaml
```

## 3. Manifest Application Output (Sample)

```
secret/mongodb-secret created
configmap/app-config created
persistentvolumeclaim/mongodb-pvc created
statefulset.apps/mongodb created
deployment.apps/nodejs-frontend created
service/mongodb-service created
service/nodejs-service created
```

## 4. Troubleshooting & Pod Status

```
mongodb-0  0/1  InvalidImageName
```

Fix by deleting the pod:

```
kubectl delete pod mongodb-0
```

After recreation:

```
mongodb-0  1/1  Running
```

## 5. Services

```
kubectl get svc
```

Example:

```
nodejs-service   NodePort   10.100.160.175   <none>   80:30080/TCP
mongodb-service  ClusterIP  10.100.124.160   <none>   27017/TCP
```

## 6. Access Node.js Service

```
minikube service nodejs-service
```

Example output:

```
http://192.168.49.2:30080
```

## 7. Testing CRUD Operations

### Add Item
(add_apple image reference)

### Fetch Items
(items reference)

## 8. Verify MongoDB Connectivity

```
kubectl logs <nodejs-pod-name>
```

Expected:

```
Node.js app listening on port 3000
Connected to MongoDB
```

## 9. Validate Persistent Storage

```
kubectl delete pod mongodb-0
```

Data remains intact.

## 10. Optional: Connect using Mongosh

```
kubectl exec -it mongodb-0 --   mongosh -u mongouser -p securepass --authenticationDatabase admin
```

---

## Architecture Diagram

```mermaid
flowchart TD

    subgraph Client
        Browser[User Browser]
    end

    Browser -->|HTTP / NodePort| NodeService[Node.js Service (NodePort)]

    NodeService --> NodePod[Node.js Deployment
ReplicaSet → Pods]

    NodePod -->|MongoDB Connection| MongoService[MongoDB Service (ClusterIP)]

    subgraph MongoDB_StatefulSet
        MongoService --> MongoPod0[MongoDB Pod 0]
        MongoPod0 --> PVC[(PersistentVolumeClaim)]
    end

    PVC --> PV[(PersistentVolume)]
```

---

## Result

✔ Node.js application deployed and exposed
✔ MongoDB StatefulSet with persistent volume working
✔ CRUD operations verified
✔ Data persists across pod restarts
