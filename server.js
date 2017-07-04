var thrift = require("thrift");
var TestService = require("./gen-nodejs/TestService");
var ttypes = require("./gen-nodejs/test_types");

var server = thrift.createServer(TestService, {
  ping: function(result) {
    console.log("ping()");
    result(null, "pong");
  }
});

server.listen(9090);

