var restify = require('restify');
var server = restify.createServer({ name: 'Trouper RESTful API' });

 server.get('/test', function (req, res, next) {
    res.send({ name: 'test' });
})

server.listen(5000, function () {
  console.log('%s listening at %s', server.name, server.url)
})

