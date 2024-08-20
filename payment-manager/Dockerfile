# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY src/ .

# Expose port
EXPOSE 3001

# Run the application
CMD ["npm", "start"]
