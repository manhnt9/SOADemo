var thrift = require('thrift');
var TestService = require('./gen-nodejs/TestService');
var ttypes = require('./gen-nodejs/test_types');

var transport = thrift.TBufferedTransport;
var protocol = thrift.TBinaryProtocol;

var connection = thrift.createConnection("localhost", 9090, {
  transport : transport,
  protocol : protocol
});

connection.on('error', function(err) {
  assert(false, err);
});

var client = thrift.createClient(TestService, connection);

client.ping(function(err, response) {
  console.log('ping()');
  console.log(response);
});

