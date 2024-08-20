const { MongoClient } = require('mongodb')

const mongoUri = 'mongodb+srv://qax:qax@mark85.si7fr.mongodb.net/markdb?retryWrites=true&w=majority&appName=mark85'

const client = new MongoClient(mongoUri)

async function connect(){
  await client.connect()
    return client.db('markdb')
}
async function disconnect() {
    await client.disconnect()
}

module.exports = {connect, disconnect}