workspace(
    name = "streamz",
    managed_directories = {
        "@npm": ["node_modules"],
    },
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# ==============================================================================
# Skylib
# ==============================================================================

http_archive(
    name = "bazel_skylib",
    sha256 = "1c531376ac7e5a180e0237938a2536de0c54d93f5c278634818e0efc952dd56c",
    urls = [
        "https://github.com/bazelbuild/bazel-skylib/releases/download/1.0.3/bazel-skylib-1.0.3.tar.gz",
        "https://mirror.bazel.build/github.com/bazelbuild/bazel-skylib/releases/download/1.0.3/bazel-skylib-1.0.3.tar.gz",
    ],
)

load("@bazel_skylib//:workspace.bzl", "bazel_skylib_workspace")

bazel_skylib_workspace()

# ==============================================================================
# NodeJS
# ==============================================================================

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "bfacf15161d96a6a39510e7b3d3b522cf61cb8b82a31e79400a84c5abcab5347",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/3.2.1/rules_nodejs-3.2.1.tar.gz"],
)

load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

load("@npm//@bazel/protractor:package.bzl", "npm_bazel_protractor_dependencies")

npm_bazel_protractor_dependencies()

# ==============================================================================
# SASS
# ==============================================================================

http_archive(
    name = "io_bazel_rules_sass",
    sha256 = "5d831bfe2822a7ed9c38ec6c592ca0e1a7b875f6ade04bc892649bf125e86caf",
    strip_prefix = "rules_sass-1.32.8",
    urls = ["https://github.com/bazelbuild/rules_sass/archive/1.32.8.tar.gz"],
)

load("@io_bazel_rules_sass//:package.bzl", "rules_sass_dependencies")

rules_sass_dependencies()

load("@io_bazel_rules_sass//:defs.bzl", "sass_repositories")

sass_repositories()

# ==============================================================================
# Webtesting
# ==============================================================================

http_archive(
    name = "io_bazel_rules_webtesting",
    sha256 = "9bb461d5ef08e850025480bab185fd269242d4e533bca75bfb748001ceb343c3",
    urls = ["https://github.com/bazelbuild/rules_webtesting/releases/download/0.3.3/rules_webtesting.tar.gz"],
)

load("@io_bazel_rules_webtesting//web:repositories.bzl", "web_test_repositories")

web_test_repositories()

load("@io_bazel_rules_webtesting//web/versioned:browsers-0.3.2.bzl", "browser_repositories")

browser_repositories(
    chromium = True,
    firefox = True,
)

# ==============================================================================
# Docker
# ==============================================================================

http_archive(
    name = "io_bazel_rules_docker",
    sha256 = "4521794f0fba2e20f3bf15846ab5e01d5332e587e9ce81629c7f96c793bb7036",
    strip_prefix = "rules_docker-0.14.4",
    urls = ["https://github.com/bazelbuild/rules_docker/releases/download/v0.14.4/rules_docker-v0.14.4.tar.gz"],
)

load("@io_bazel_rules_docker//repositories:repositories.bzl", container_repositories = "repositories")

container_repositories()

load("@io_bazel_rules_docker//repositories:deps.bzl", container_deps = "deps")

container_deps()

load("@io_bazel_rules_docker//repositories:pip_repositories.bzl", "pip_deps")

pip_deps()

load("@io_bazel_rules_docker//nodejs:image.bzl", nodejs_image_repos = "repositories")

nodejs_image_repos()

# ==============================================================================
# Kubernetes
# ==============================================================================

http_archive(
    name = "io_bazel_rules_k8s",
    sha256 = "cc75cf0d86312e1327d226e980efd3599704e01099b58b3c2fc4efe5e321fcd9",
    strip_prefix = "rules_k8s-0.3.1",
    urls = ["https://github.com/bazelbuild/rules_k8s/releases/download/v0.3.1/rules_k8s-v0.3.1.tar.gz"],
)

load("@io_bazel_rules_k8s//k8s:k8s.bzl", "k8s_defaults", "k8s_repositories")

k8s_repositories()

load("@io_bazel_rules_k8s//k8s:k8s_go_deps.bzl", k8s_go_deps = "deps")

k8s_go_deps()

k8s_defaults(
    # This creates a rule called "k8s_deploy" that we can call later
    name = "k8s_deploy",
    # This is the name of the cluster as it appears in:
    #   kubectl config view --minify -o=jsonpath='{.contexts[0].context.cluster}'
    cluster = "_".join([
        "gke",
        "internal-200822",
        "us-west1-a",
        "angular-bazel-example",
    ]),
    kind = "deployment",
)
