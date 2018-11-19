RUN_COMMAND=docker run -it --rm -v /tmp/.X11-unix:/tmp/.X11-unix -v /var/run/dbus/system_bus_socket:/var/run/dbus/system_bus_socket -e DISPLAY=$(DISPLAY) --ipc=host --cap-drop=ALL --security-opt=no-new-privileges --network="host" opk
DEV_COMMAND=docker run -it --rm -v $$(pwd):/opt -v /tmp/.X11-unix:/tmp/.X11-unix -v /var/run/dbus/system_bus_socket:/var/run/dbus/system_bus_socket -e DISPLAY=$(DISPLAY) --ipc=host --cap-drop=ALL --security-opt=no-new-privileges --network="host" opk
PRELOAD=xhost +local:docker
PRINT=./print.sh

build:
	docker build -t opk .

dev:
	$(PRELOAD)
	$(DEV_COMMAND)
	$(PRINT)

run:
	$(PRELOAD)
	$(RUN_COMMAND)
	$(PRINT)

bash:
	$(DEV_COMMAND) bash

clean:
	docker rm $$(docker ps -a -q)

.DEFAULT_GOAL := run
