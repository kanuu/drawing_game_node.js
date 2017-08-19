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
