Docker Commands:

1. Build the Docker image:
   docker build -t bibliotecha-d1 .

2. Run the Docker container:
   docker run -p 5000:5000 bibliotecha-d1

3. Access the application:
   Open http://localhost:5000 in your browser

4. To stop the container:
   docker ps  # find container ID
   docker stop <container_id>

For Local Testing:

1. Run: npm install

2. Open a terminal and enter:
   npm run start:backend

3. Open a 2nd terminal and enter:
   npm start

4.Open http://localhost:3000 in your browser and test