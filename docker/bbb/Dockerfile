FROM ubuntu:14.04

MAINTAINER bo liu <liubo404@gmail.com>

#LABEL "rating"="Five Stars" "class"="First Class"

USER root

#1.setup locale
RUN    apt-get install -y language-pack-en emacs wget
RUN    update-locale LANG=en_US.UTF-8
#RUN    dpkg-reconfigure locales





#1.1 update your server
RUN     echo "deb http://us.archive.ubuntu.com/ubuntu/ trusty multiverse" | sudo tee -a /etc/apt/sources.list
RUN    apt-get -y update
RUN    apt-get dist-upgrade


#2. Install PPA for LibreOffice 4.4
RUN    apt-get -y  install software-properties-common
RUN    add-apt-repository -y  ppa:libreoffice/libreoffice-4-4

#3. Install key for BigBlueButton
RUN    wget http://ubuntu.bigbluebutton.org/bigbluebutton.asc -O- | sudo apt-key add -
# add the BigBlueButton repository URL
RUN    echo "deb http://ubuntu.bigbluebutton.org/trusty-090/ bigbluebutton-trusty main" | sudo tee /etc/apt/sources.list.d/bigbluebutton.list

RUN apt-get update

#4. Install ffmpeg
COPY install-ffmpeg.sh /tmp/
RUN chmod +x /tmp/install-ffmpeg.sh
RUN  /tmp/install-ffmpeg.sh








