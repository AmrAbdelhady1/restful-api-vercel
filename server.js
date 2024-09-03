// JSON Server module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db/db.json");
const middlewares = jsonServer.defaults();

// Custom middleware to log requests or handle custom logic
server.use(middlewares);

server.use((req, res, next) => {
  if (req.method === "POST" || req.method === "PUT") {
    // Custom logic before handling POST/PUT requests
    console.log(`${req.method} request at ${req.url}`);
  }
  // Continue to JSON Server router
  next();
});

// Add custom route here if needed
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.use(router);

// Start the server
server.listen(3000, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
