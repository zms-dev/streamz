# name the portage image
FROM gentoo/portage:20210226 as portage

# image is based on stage3-amd64
FROM gentoo/stage3:amd64-20210226

# copy the entire portage volume in
COPY --from=portage /var/db/repos/gentoo /var/db/repos/gentoo
COPY portage /etc/portage
COPY world /var/lib/portage/world

ENV BAZEL_JAVAC_OPTS="-J-Xms12g -J-Xmx12g"

RUN emerge -u world
RUN rm -rf /usr/portage/distfiles/*

ENV JAVA_HOME="/etc/java-config-2/current-system-vm" 
ENV PATH=$PATH:/go/bin
ENV GOPATH /go

RUN go get github.com/bazelbuild/buildtools/buildifier

RUN curl -L git.io/antigen > ~/antigen.zsh

COPY .zshrc /root/.zshrc

CMD /bin/zsh -l
