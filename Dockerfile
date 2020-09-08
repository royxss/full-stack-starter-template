###########################################
#           Install Backend 
###########################################
# Using official python runtime base image
FROM nikolaik/python-nodejs:python3.7-nodejs10-stretch

# Label
LABEL maintainer="Roy S"

# Upgrade pip
RUN pip install --upgrade pip

# Set the application directory
WORKDIR /app

# Install our requirements.txt
ADD requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -U pip
RUN pip install -r requirements.txt

# Copy our code from the current folder to /app inside the container
COPY . ./

###########################################
#           Install Frontend 
###########################################

# set working directory
WORKDIR /app/frontend

# install app dependencies
RUN npm install

#CMD ["npm", "start"]
RUN npm run build

###########################################
#           Finally 
###########################################

# Entry point
WORKDIR /app
EXPOSE 9091
RUN chmod 775 ./start-server-dev.sh
CMD ["./start-server-dev.sh"]

###########################################
#           try if frontend is working. Comment lines 43-46 
###########################################
#WORKDIR /app/react-apps
#EXPOSE 3000
#CMD ["npm", "start"]