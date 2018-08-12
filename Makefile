RUN_COMMAND=docker run -it --rm --net=host -v /tmp/.X11-unix:/tmp/.X11-unix -v /var/run/dbus/system_bus_socket:/var/run/dbus/system_bus_socket -e DISPLAY=$(DISPLAY) opk
PRELOAD=xhost +local:docker

build:
	docker build -t opk .

run:
	$(PRELOAD)
	$(RUN_COMMAND)

bash:
	$(RUN_COMMAND) bash

.DEFAULT_GOAL := run
