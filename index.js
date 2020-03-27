var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/room2', function (req, res) {
    res.sendFile(__dirname + '/room2.html');
});


io.on('connection', function (socket) {
    console.log('A connected');


    socket.on('chat message', function (data) {
        let { target, messages } = data;
        console.log(target, messages);
        io.emit(target, messages)
        // io.to(target).emit(messages)
    });




});






{ messages: $('#m').val(), target: "room2" }
http.listen(3000, function () {
    console.log('listening on *:3000');
});