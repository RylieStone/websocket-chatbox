const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 4000 })

wss.on("connection", ws => {
    console.log("new client has connected to the server")

    ws.on('close', () => {
        console.log("client has disconnected from the server")
    })
})