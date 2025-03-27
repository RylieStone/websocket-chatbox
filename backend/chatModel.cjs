const db = require("../data/dbconfig.cjs")

async function message(obj) {
    const data =  await db('chat').insert(obj)
    return data
}
async function history() {
    const data = await db('chat')
    return data
}

module.exports = {
    message,
    history
}