# Use official Node.js image as a base image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (to optimize cache)
COPY backend/package*.json ./

# Install backend dependencies
RUN npm install

# Copy all the backend files into the container
COPY backend/ .

# Expose the backend API port (for example, 3000)
EXPOSE 3000

# Define the command to start the backend server
CMD ["npm", "start"]
