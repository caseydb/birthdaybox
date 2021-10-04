const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  return db.getAllRecipient()
    .then(recipient => {
      return res.json(recipient)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('getRoute:', err.message)
    })
})



router.post('/', (req, res) => {
  const recipientDetails = req.body
  console.log(recipientDetails)
  return db.addRecipient(recipientDetails)
  .then(recipient => {
    return res.json(recipient)
  })
  .catch(err => {console.log(err.message)})
  // .catch(err => res.status(500).send('postRoute: ', err.message))

})



router.delete('/:id', (req, res) => {
  const recipientId = req.params.id
  return db.deleteRecipient(recipientId)
  .then(recipient => {
    //console.log(recipient)
    return res.json(recipient)
  })
  .catch(err => {console.log(err.message)})
})




router.patch('/:id', (req, res) => {
  const recipientId = req.params.id
  const recipientDetails = req.body
  return db.editRecipientDetails(recipientId, recipientDetails)
  .then(recipient => {
    //console.log('recipient ', recipient)
    return res.json({hasBeenUpdated: "yes its been updated"})

  })
  .catch(err => {console.log(err.message)})
})



module.exports = router
