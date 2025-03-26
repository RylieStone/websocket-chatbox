const db = require("../data/dbconfig.cjs")
const Websocket = require('ws')

const wss = new Websocket.Server({ port: 4000 })

wss.on("connection", ws => {
    console.log("client has connected")
})
