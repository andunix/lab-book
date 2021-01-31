# Kubernetes

## Installation

### kubectl

```sh
brew install kubectl
kubectl version --client
```

### minikube

```sh
brew install minikube
minikube start --driver=virtualbox
minikube status
minikube stop
minikube start
```

### helm

```sh
brew install helm
```

### kubeapps

```sh
helm repo add bitnami https://charts.bitnami.com/bitnami
kubectl create namespace kubeapps
helm install kubeapps --namespace kubeapps bitnami/kubeapps --set useHelm3=true

kubectl create serviceaccount kubeapps-operator
kubectl create clusterrolebinding kubeapps-operator --clusterrole=cluster-admin --serviceaccount=default:kubeapps-operator
kubectl get secret $(kubectl get serviceaccount kubeapps-operator -o jsonpath='{range .secrets[*]}{.name}{"\n"}{end}' | grep kubeapps-operator-token) -o jsonpath='{.data.token}' -o go-template='{{.data.token | base64decode}}' && echo

kubectl port-forward -n kubeapps svc/kubeapps 8888:80
```

http://localhost:8888/

## Links

- https://kubernetes.io/docs/tasks/tools/install-minikube/
- https://training.play-with-kubernetes.com/kubernetes-workshop/

## Begriffe

### Cluster
Ein Cluster sind alle verbundene Nodes zusammen.

### Container

### Deployment
Ein Deployment ist die Vorgabe, welche Pods laufen sollen.

### Master
Es gibt einen Master pro Cluster.
Der Master nimmt die Befehle von `kubectl` entgegen und verteilt Anweisungen an die Nodes des Clusters.

### Node
Eine Node ist eine Installation von Kubernetes.

### Pod
Ein Pod ist eine Zusammenstellung von mehreren Containern und deren Resourcen.

### Resource
Eine Resource ist der persistente Speicher der Container eines Pods.

### Service
Ein Service ist die Zusammenstellung der über die Nodes vertileten Kopien eine Pods.

## Befehle

```sh
kubectl create deployment hello-node --image=k8s.gcr.io/echoserver:1.4
kubectl get pods
kubectl get events
kubectl config view
kubectl expose deployment hello-node --type=LoadBalancer --port=8080
kubectl get pod,svc -n kube-system
kubectl delete service hello-node
kubectl delete deployment hello-node
```

```sh
kubectl get services
kubectl get deployments
kubectl get pods
kubectl get events
kubectl config view
```
