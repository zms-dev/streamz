FROM debian:buster

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
  && apt-get -y install --no-install-recommends apt-utils apt-transport-https 2>&1 \
  && apt-get -y install git procps lsb-release wget curl gnupg tar unzip make \
  build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev \
  wget curl llvm libncurses5-dev libncursesw5-dev xz-utils tk-dev libffi-dev \
  liblzma-dev python-openssl

# GoLang
RUN wget -O go.tgz "https://dl.google.com/go/go1.14.4.linux-amd64.tar.gz"; \
  tar -C /usr/local -xzf go.tgz; \
  rm go.tgz;
ENV PATH=$PATH:/go/bin:/usr/local/go/bin
ENV GOPATH /go

# Google Cloud
RUN curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -
RUN echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] http://packages.cloud.google.com/apt cloud-sdk main" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list

# Kubernetes
RUN curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -
RUN echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | tee -a /etc/apt/sources.list.d/kubernetes.list

# Bazel
RUN curl https://bazel.build/bazel-release.pub.gpg | apt-key add -
RUN echo "deb [arch=amd64] https://storage.googleapis.com/bazel-apt stable jdk1.8" | tee /etc/apt/sources.list.d/bazel.list

# Yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

# NodeJS
RUN curl -sL https://deb.nodesource.com/setup_15.x | bash -

# Python
RUN curl -sL https://raw.githubusercontent.com/yyuu/pyenv-installer/master/bin/pyenv-installer | bash -
ENV PATH="/root/.pyenv/bin:$PATH"

# Utils
RUN apt-get update \
  && apt-get -y install vim zsh nodejs bazel yarn kubectl google-cloud-sdk \
  && apt-get autoremove -y \
  && apt-get clean -y \
  && rm -rf /var/lib/apt/lists/*

# Dev Packages
RUN pyenv install 3.7.8
RUN pyenv global 3.7.8
RUN /root/.pyenv/shims/pip install pylint autopep8
RUN go get github.com/bazelbuild/buildtools/buildifier
RUN go get github.com/bazelbuild/buildtools/buildozer

# Dev Env
RUN curl -L git.io/antigen > ~/antigen.zsh
ENV BAZEL_JAVAC_OPTS="-J-Xms12g -J-Xmx12g"
ENV DEBIAN_FRONTEND=dialog
COPY .zshrc /root/.zshrc

CMD /bin/zsh -l