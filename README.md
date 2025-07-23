# ws-one

https://github.com/settings/applications/new

Homepage URL: http://localhost:3000

Authorization callback URL: http://localhost:7007/api/auth/github/handler/frame

Client ID
Ov23licvqQGELkb6QcV4

Client secrets
ba536403dfcd3ad12f47607356b2bec24b68f713



brew install minikube
minikube start

kubectl get pods -A

minikube stop

kubectl create namespace backstage

kubectl apply -f k8s/namespace.yaml

echo -n "backstage" | base64
YmFja3N0YWdl

kubectl apply -f k8s/postgres-secrets.yaml

kubectl apply -f k8s/postgres-storage.yaml

kubectl apply -f k8s/postgres.yaml

kubectl get pods --namespace=backstage

kubectl exec -it --namespace=backstage postgres-adarfa -- /bin/bash

export HTTP_PROXY=http://proxy.company.com:8080
export HTTPS_PROXY=https://secure-proxy.company.com:8080
export NO_PROXY=localhost,internal.company.com
export GLOBAL_AGENT_HTTP_PROXY=${HTTP_PROXY}
export GLOBAL_AGENT_HTTPS_PROXY=${HTTPS_PROXY}
export GLOBAL_AGENT_NO_PROXY=${NO_PROXY}
export YARN_HTTP_PROXY=${HTTP_PROXY} # optional
export YARN_HTTPS_PROXY=${HTTPS_PROXY} #optional