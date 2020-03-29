const http = require('http');

const server = http.createServer(function (request, response) {
    if(request.url === '/'){
        response.write("hello world");
        response.end();
    }

    if(request.url === '/api/courses'){
        response.write(JSON.stringify([1, 2, 3]));
        response.end();
    }
});

// server.on('connection', function (socket) {
//     console.log("new connection");
// });

server.listen(3000);

console.log("Listening on port 3000 ...");

