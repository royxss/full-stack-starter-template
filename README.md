## Full Stack Starter Template

- React.js
- Django with REST
- Python
- Docker
- Docker Swarm
- Ansible

### Start application using Docker:

#### Note: There is no compose here as it is just one container.

- docker build -t app .
- docker run -d -p 9091:9091 app:latest

#### Test only front-end and not the full app?

- docker build -t frontend .
- docker run -it -p 3000:3000 frontend:latest

### Status: Incomplete
