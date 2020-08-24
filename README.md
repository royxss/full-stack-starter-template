## Full Stack Starter Template:

1. ### The starter template has the below technical stack which is still under work.

   - React.js
   - Redux
   - Django with REST
   - Python
   - Docker
   - Docker Swarm
   - Ansible
   - GitHub

2. ### How to start the application?

   #### Use docker container to start the application from the folder where Dockerfile exists.

   - git pull
   - docker stop \$(docker ps -q --filter ancestor=starter-app-monolith) # if already running
   - docker build -t starter-app-monolith .
   - docker run --rm -d -p 9091:9091 starter-app-monolith

3. ### Status: Incomplete
