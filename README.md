## Full Stack Starter Template

- React
- Django with REST
- Python
- Docker

### Start application using Docker:

#### Note: There is no compose here as it is just one container.

- docker build -t app .
- docker run -d -p 9090:9090 app:latest

#### Test only front-end?

- docker build -t frontend .
- docker run -it -p 3000:3000 frontend:latest

### Status: Incomplete
