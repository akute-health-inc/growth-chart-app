var connect = require("connect");
var serveStatic = require("serve-static");
var port = process.env.PORT || 8081;
connect()
  .use(serveStatic(__dirname))
  .listen(port, function() {
    console.info(`Server running on ${port}...`);
  });
