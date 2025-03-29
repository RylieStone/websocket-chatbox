const WebSocket = require('ws')
const {message, history} = require('./chatModel.cjs')
const wss = new WebSocket.Server({ port: 4000 })

let arr = [
    {id: 1, username: 'bro', message: "yo this is so cool"},
    {id: 2, username: 'firewall', message: "IKR"},
    {id: 3, username: 'chatbot', message: "haha"},
    {id: 4, username: 'typer', message: "man i love this"},
]

wss.on("connection", async ws => {
    console.log('client has connected')
    const data = await history()
    ws.send(JSON.stringify(data))
    ws.on('message', async data => {
        const str = data.toString('utf-8')
        const obj = JSON.parse(str)
        await message(obj)

        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(obj))
            }
        })
    })
    ws.on('close', () => {
        console.log("client has disconnected from the server")
    })
})