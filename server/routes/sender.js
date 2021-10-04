const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  return db.getAllSender()
    .then(sender => {
      return res.json(sender)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

module.exports = router