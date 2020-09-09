## Full Stack Starter Template:

1. ### The starter template uses the below technical stack.

   - React.js
   - Redux
   - Django with REST
   - Python
   - PyTest
   - Docker

2. ### How to start the application?

   #### Use docker container to start the application from the folder where Dockerfile exists.

   - git pull
   - docker stop \$(docker ps -q --filter ancestor=starter-app-monolith) # if already running
   - docker build -t starter-app-monolith .
   - docker run --rm -d -p 9091:9091 starter-app-monolith

   #### Or

   - git pull
   - docker-compose build --pull && docker-compose down && docker-compose up -d

   #### Open browser using `http://0.0.0.0:9091/dashboard/`

3. ### Status:

   Complete

## How to use it:

Use this as a data science template (or any other) for full stack development or PoC. Serves best for data scientists proficient in Python and React, requiring full framework interaction. Render analytics, statistics, recommendation, etc. in the frontend generated from machine learning workflows in the backend. Once the application is developed, deploy in any cloud environment using docker.

1.  Add UI components in frontend/src/components folder using React, JavaScript. I use coreui react template which is great. Check it out [here](https://coreui.io/react/)!
2.  Add actions such as axios requests for the backend in frontend/src/redux/actions. Test the frontend at 3000 port by running `npm install` and then `npm start`.
3.  Set up http end points in backend/api folder using Python. Design how to serve requests to the frontend.
4.  run: `npm run-script build` inside frontend folder.
5.  run: `start-server-dev.sh` inside backend folder. Check your localhost at port 9091 `http://0.0.0.0:9091/dashboard/`.

## Helpers:

1. If you wish to load some data structures when the server starts and access them globally, add them to backend/loaders.py.
2. To run unit tests when the server starts, create test cases in backend/unit-testing folder. The file name and test functions should have a prefix of test. The tests are congifured to start automatically when the server starts. If running tests manually, run `pytest -v` from backend folder.
