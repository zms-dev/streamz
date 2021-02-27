# Streamz

A playground project with a focus on developer expierence and operations.

## Goals

* Use VSCode and DevContainers for the developer environment
* Use Bazel for consistent builds and toolchains
* Use GitHub for CI/CD
* Use Kubernetes for deployments
* Use GCP/GKE for hosting

## Quick Start

Open the repo in VSCode and connect to the [Remote Container](https://github.com/Microsoft/vscode-remote-release) called `DevContainer`. 

Wait for Gentoo/Portage to install the base packages.

> :warning: **Note**: First build could take a while, both Bazel and the Container should be cached across rebuilds.

```shell
yarn install
```

```shell
bazel build //src:tsconfig.server.json
```

## DevContainer Features

* Gentoo Base Image
* NodeJS, Yarn, Bazel preinstalled
* Volume Mount for node_modules
* Volume Mount for Portage
* Volume Mount for Bazel cache