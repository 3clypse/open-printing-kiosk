FROM node:10

ENV	PKGS_TO_INSTALL \
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
	libgl1-mesa-glx \
	libnotify4

RUN apt-get update && apt-get install $PKGS_TO_INSTALL --no-install-recommends --yes --force-yes
RUN apt-get autoclean


RUN mkdir -p /opt
WORKDIR /opt

COPY package*.json ./

RUN npm install

#RUN ln -s /tmp/node_modules node_modules

#ENTRYPOINT cp -a /tmp/* /opt/
CMD ["npm", "start"]
