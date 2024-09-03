const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// In-memory database
const db = { posts: [], users: [], quizzes: [] }; // Define your initial structure here
const router = jsonServer.router(db);

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running with in-memory database");
});

module.exports = server;
