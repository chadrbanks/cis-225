const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

let callback = (req, res) => {
  let site_manager = require("./site_content");

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(site_manager.render());
  console.log("I just servered a hello world page to someone!");
};

const server = http.createServer(callback);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
