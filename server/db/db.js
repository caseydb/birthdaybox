const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])


const getAllRecipient = (db = connection) => {
  return db('recipient')
  .select()
}

const addRecipient = (recipientDetails, db = connection) => {
  return db('recipient')
  .insert(recipientDetails)
}

const deleteRecipient = (id, db = connection) => {
  return db('recipient')
  .where('id', id)
  .del()
}

const editRecipientDetails = (id, editdetails, db = connection) => {
  return db('recipient')
  .where('id', id)
  .update(editdetails)

}


const getAllGiftBox = (db = connection) => {
  return db('gift_box_data')
  .select()
}

const addGiftBox = (giftbox, db = connection) => {
  return db('gift_box_data')
  .insert(giftbox)

}

const deleteGiftBox = (id, db = connection) => {
  return db('gift_box_data')
  .where('id', id)
  .del()
}


const getAllSender = (db = connection) => {
  return db('sender')
  .select()
}


module.exports = {
  getAllRecipient, 
  getAllGiftBox,
  getAllSender,
  addRecipient,
  deleteRecipient,
  editRecipientDetails,
  addGiftBox,
  deleteGiftBox
}
