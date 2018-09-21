# start from base image
FROM node:10-stretch

# environment variable (system requirements)
ENV	PKGS_TO_INSTALL \
  apt-utils \
  build-essential \
  dbus-x11 \
  libasound2 \
  libfontconfig \
  libgconf-2-4 \
  libgl1-mesa-glx \
  libglib2.0-0 \
  libgtk-3-0 \
  libgtk2.0-0 \
  libnotify4 \
  libnss3 \
  libpangocairo-1.0-0 \
  libxcomposite1 \
  libxcursor1 \
  libxdamage1 \
  libxi6 \
  libxrandr2 \
  libxss1 \
  libxtst6 \
  mesa-utils \
  ttf-freefont \
  udev \
  x11-apps \
  xserver-xorg-video-all

# environment variable
ENV DEBIAN_FRONTEND noninteractive

# install system requirements
RUN apt-get update && \
    apt-get install -y $PKGS_TO_INSTALL && \
    apt-get autoclean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# working directory
WORKDIR /tmp

# copy our application config file
COPY package.json /tmp/package.json

# install all requirements
RUN npm install
RUN npm install -g file-browser

# create workdir
RUN mkdir -p /opt && cp -a /tmp/node_modules /opt

# Fix 'badshmseg' X Server & QT errors
RUN echo "export QT_X11_NO_MITSHM=1" >> $HOME/.bashrc

# working directory
WORKDIR /opt
# copy our application code
# COPY vs ADD -> https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#add-or-copy
COPY . /opt

# start app
CMD ./boot.sh
