# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose ports
EXPOSE 80
EXPOSE 443
EXPOSE 5001

# Command to run your application
CMD ["node", "app.js"]
