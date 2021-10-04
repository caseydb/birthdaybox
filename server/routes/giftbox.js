const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  return db.getAllGiftBox()
    .then(giftbox => {
      return res.json(giftbox)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})


router.post('/', (req, res) => { 
  const giftbox = req.body
  return db.addGiftBox(giftbox)
  .then(giftboxes => {
    return res.json(giftboxes)
  })
  .catch(err => {
    console.log(err.message)
  })

})

router.delete('/:id', (req, res) => {
  const giftId = req.params.id
  console.log(giftId)
  return db.deleteGiftBox(giftId)
  .then(giftbox => {
    return res.json(giftbox)
  })
  .catch(err => {console.log(err.message)})
})



module.exports = router