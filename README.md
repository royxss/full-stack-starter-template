## Full Stack Starter Template:

1. ### The starter template uses the below technical stack which is still under work.

   - React.js
   - Redux
   - Django with REST
   - Python
   - Docker
   - GitHub

2. ### How to start the application?

   #### Use docker container to start the application from the folder where Dockerfile exists.

   - git pull
   - docker stop \$(docker ps -q --filter ancestor=starter-app-monolith) # if already running
   - docker build -t starter-app-monolith .
   - docker run --rm -d -p 9091:9091 starter-app-monolith

   #### Or

   - git pull
   - docker-compose down && docker-compose build --pull && docker-compose up -d

3. ### Status:

   Incomplete
