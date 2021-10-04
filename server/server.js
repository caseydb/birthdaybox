const path = require('path')
const express = require('express')
// const cors = require('cors') // <- if you use this, npm install cors

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
// server.use(cors('*'))

const recipientRoutes = require('./routes/recipient')
const giftboxRoutes = require('./routes/giftbox')
const senderRoutes = require('./routes/sender')

server.use('/api/v1/recipient', recipientRoutes)
server.use('/api/v1/giftbox', giftboxRoutes)
server.use('/api/v1/sender', senderRoutes)

module.exports = server
