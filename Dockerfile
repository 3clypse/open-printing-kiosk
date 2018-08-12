FROM node:10-stretch

ENV	PKGS_TO_INSTALL \
  apt-utils \
  build-essential \
  dbus-x11 \
  libglib2.0-0 \
  libnss3 \
  libgconf-2-4 \
  libfontconfig \
  libpangocairo-1.0-0 \
  libxi6 \
  libxcursor1 \
  libxcomposite1 \
  libasound2 \
  libxdamage1 \
  libxtst6 \
  libxrandr2 \
  libgtk2.0-0 \
  libgtk-3-0 \
  mesa-utils \
  libgl1-mesa-glx \
  xserver-xorg-video-all \
  libnotify4 \
  udev \
  libxss1

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && apt-get install $PKGS_TO_INSTALL  -y --no-install-recommends --allow-downgrades --allow-remove-essential --allow-change-held-packages && \
    apt-get autoclean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /tmp

COPY package.json /tmp/package.json
RUN npm install

RUN mkdir -p /opt && cp -a /tmp/node_modules /opt

WORKDIR /opt
COPY . /opt

CMD ["npm", "start"]
