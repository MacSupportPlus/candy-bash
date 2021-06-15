const express = require('express');
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)
const { ExpressPeerServer } = require('peer')
const peerServer = ExpressPeerServer(server, {
	debug: true,
})
const { v4: uuidv4 } = require('uuid')

const helmet = require('helmet');


const passport = require('passport');
let PORT = 3000;

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/peerjs', peerServer)

app.use(require('./routes/login')) 
app.use(require('./routes/multi'))

app.use(require('./routes/registration'))








app.listen(PORT, ()=>{
    console.log(`listenng on port ${PORT}`);
})