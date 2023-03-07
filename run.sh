#!/bin/bash
gnome-terminal -x npm run start-backend &
sleep 2
npm run build
gnome-terminal -x serve -s build