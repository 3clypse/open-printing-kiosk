RUN_COMMAND=docker run -it --rm -v /tmp/.X11-unix:/tmp/.X11-unix -v /var/run/dbus/system_bus_socket:/var/run/dbus/system_bus_socket -e DISPLAY=$(DISPLAY) opk
DEV_COMMAND=docker run -it --rm -v $$(pwd):/opt -v /tmp/.X11-unix:/tmp/.X11-unix -v /var/run/dbus/system_bus_socket:/var/run/dbus/system_bus_socket -e DISPLAY=$(DISPLAY) opk
PRELOAD=xhost +local:docker

build:
	docker build -t opk .

dev:
	$(PRELOAD)
	$(DEV_COMMAND)

run:
	$(PRELOAD)
	$(RUN_COMMAND)

bash:
	$(DEV_COMMAND) bash

clean:
	docker rm $$(docker ps -a -q)

.DEFAULT_GOAL := run
