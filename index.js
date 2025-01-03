const express = require("express")
const cors = require("cors")
const http = require('http')
const { Server } = require("socket.io")

const app = express()
app.use(cors())

const server = http.createServer(app)
const io = new Server(server, {
    path: "/socket",
    cors: {
        origin: "*",
    }
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on("connection", (socket) => {
    console.log("New Client Connected with ID", socket.id)
    console.log("Socket Token", socket.handshake.auth.token)
    socket.send("Connected")
})

server.listen(80, () => {
    console.log("Server Started on port 80")
})