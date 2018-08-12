FROM node:10-stretch

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

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && \
    apt-get install -y $PKGS_TO_INSTALL && \
    apt-get autoclean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /tmp

COPY package.json /tmp/package.json
RUN npm install

RUN mkdir -p /opt && cp -a /tmp/node_modules /opt

WORKDIR /opt
COPY . /opt

CMD ["npm", "start"]
