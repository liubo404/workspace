FROM ubuntu:14.04

MAINTAINER bo liu <liubo404@gmail.com>

LABEL "rating"="Five Stars" "class"="First Class"

USER root

#setup locale
RUN    apt-get -y update
RUN    apt-get install -y language-pack-en emacs wget
RUN    update-locale LANG=en_US.UTF-8
RUN    dpkg-reconfigure locales
