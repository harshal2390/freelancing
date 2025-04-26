# Use the official Node.js image for React frontend
FROM node:16 as build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json first
COPY frontend/package*.json ./

# Install the frontend dependencies
RUN npm install

# Copy all the frontend files into the container
COPY frontend/ .

# Build the React app
RUN npm run build

# Install a lightweight HTTP server to serve the built frontend
RUN npm install -g serve

# Expose the frontend port (for example, 5000)
EXPOSE 5000

# Command to run the frontend server (serve the build folder)
CMD ["serve", "-s", "build", "-l", "5000"]
