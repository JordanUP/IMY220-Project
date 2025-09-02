FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build frontend
RUN npm run build

# Expose ports
EXPOSE 3000 5000

CMD ["npm", "run", "start:backend"]  // Run backend, serve dist for frontend