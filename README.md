Practical Component: Myproject Node.js API
Objective
Create a basic API using Node.js and Express that can handle multiple concurrent requests by serving random quotes. This demonstrates Node.js’s non-blocking I/O model and scalability.
Requirements

- Node.js
- Express.js
- Postman or cURL for testing
- Artillery

Folder Structure
Myproject-node-api/
├── server.js
├── package.json
└── quotes.json
Step 1: Initialize the Project
Run the following commands in your terminal:
mkdir Myproject-node-api
cd Myproject-node-api
npm init -y
npm install express
Step 2: Add Sample Data (quotes.json)
[
"Believe in yourself!",
"Success is not final; failure is not fatal.",
"Stay hungry, stay foolish.",
"Node.js is awesome!",
"Concurrency made easy."
]
Step 3: Create the Server (server.js)
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

let quotes = [];

fs.readFile('./quotes.json', 'utf8', (err, data) => {
if (err) {
console.error('Error reading quotes:', err);
return;
}
quotes = JSON.parse(data);
});

app.get('/api/quote', (req, res) => {
const randomIndex = Math.floor(Math.random() \* quotes.length);
res.json({ quote: quotes[randomIndex] });
});

app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});
Step 4: Test the API
Visit http://localhost:3000/api/quote in a browser or use Postman/cURL.
Step 5: Simulate Concurrent Requests
Install Artillery (optional):
npm install -g artillery
Create a file named load-test.yml with the following content:
config:
target: "http://localhost:3000"
phases: - duration: 30
arrivalRate: 50
scenarios:

- flow: - get:
  url: "/api/quote"
  Run the test with:
  artillery run load-test.yml
  Additional Note on Load Testing
  Artillery was successfully installed globally using npm. A load test was run with the following configuration:
  yaml
  Copy code
  config:
  target: "http://localhost:3000"
  phases: - duration: 30
  arrivalRate: 50scenarios:
- flow: - get:
  url: "/api/quote"
  This test simulated 50 users per second over 30 seconds, resulting in a high number of successful API hits. The server handled the requests smoothly, without crashing or slowing down. This confirms Node.js's ability to scale under concurrent load thanks to its non-blocking I/O model.

Conclusion
This simple web application showcases Node.js’s ability to handle asynchronous I/O and concurrent connections efficiently, making it a powerful choice for Myproject network applications.

Author : Kawthar Abolade
kawthar1512@yahoo.com
