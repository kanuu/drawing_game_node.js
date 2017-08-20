const app  = require('express')()
const http = require('http').Server(app)
const io   = require('socket.io')(http)
const PORT = process.env.PORT || 8080


// app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/assets/css/styles.css', (req, res) => {
  res.sendFile(__dirname + '/assets/css/styles.css')
})

app.get('/assets/img/bg.png', (req, res) => {
  res.sendFile(__dirname + '/assets/img/bg.png')
})

app.get('/assets/js/script.js', (req, res) => {
  res.sendFile(__dirname + '/assets/js/script.js')
})

http.listen(PORT, () => {
  console.log(`now listening on ${PORT}`)
})

function handler (request, response) {

    request.addListener('end', function () {
        fileServer.serve(request, response); // this will return the correct file
    });
}

// Delete this row if you want to see debug messages
io.set('log level', 1);

// Listen for incoming connections from clients
io.sockets.on('connection', function (socket) {

    // Start listening for mouse move events
    socket.on('mousemove', function (data) {

        // This line sends the event (broadcasts it)
        // to everyone except the originating client.
        socket.broadcast.emit('moving', data);
    });
});
