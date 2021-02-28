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

```shell
yarn install
```

```shell
bazel run //src/frontend/client:dev_server
```

```shell
yarn frontend::devserver
````

## TODO

* [ ] Absolute imports that work with bazel, eslint, and intellisense
* [ ] Default index.ts imports
* [ ] Angualr material themeing

## Issues

* [ ] Upgrade from NgRx v9 to v11 ([rules_nodejs/issues/2320](https://github.com/bazelbuild/rules_nodejs/issues/2320))

## References

* [flolu/fullstack-bazel](https://github.com/flolu/fullstack-bazel)
* [bazelbuild/rules_nodejs/examples/angular](https://github.com/bazelbuild/rules_nodejs/tree/stable/examples/angular)