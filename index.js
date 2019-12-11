const server = require("./api/server.js");

const port = server.listen(4000, () => {
  console.log("Server is running on Port: 4000");
});
