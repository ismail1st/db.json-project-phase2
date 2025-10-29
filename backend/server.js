// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Render provides a PORT environment variable
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`✅ JSON Server is running on port ${PORT}`);
});
