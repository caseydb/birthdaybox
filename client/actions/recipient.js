import { fetchAllRecipients, addRecipient, updateRecipient, deleteRecipient } from '../apis/recipientApi'

export const SET_ALL_RECIPIENT = 'SET_ALL_RECIPIENT'
export const ADD_RECIPIENT = 'ADD_RECIPIENT'
export const UPDATE_RECIPIENT = 'UPDATE_RECIPIENT'
export const DELETE_RECIPIENT = 'DELETE_RECIPIENT'


// ACTION CREATORS

function saveAllRecipientsAction(recipients) {
  return {
    type: SET_ALL_RECIPIENT,
    recipients
  }
}


function addRecipientAction(recipient) {
  return {
    type: ADD_RECIPIENT,
    name: recipient.name,
    birthdate: recipient.birthdate,
    address: recipient.address
  }
}


function updateRecipientAction(id, updateRecipient){
  return {
    type: UPDATE_RECIPIENT,
    id:id, 
    recipient: updateRecipient
  }
}


function deleteRecipientAction(id){
  return {
    type: DELETE_RECIPIENT,
    id
  }
}


// THUNKS


export function getAllRecipientsThunk () {
  return (dispatch) => {
    fetchAllRecipients() // API call
      .then(recipients => {
        dispatch(saveAllRecipientsAction(recipients)) // ACTION call
      })
      .catch(err => {console.log(err.message)})
  }
}


export function addRecipientThunk (recipient) {
  return (dispatch) => {
    addRecipient(recipient) // API call
      .then((everythingIsFine) => {
        if (!everythingIsFine) {
          throw new Error('oops')
        }
        dispatch(addRecipientAction(recipient)) // ACTION call
      })
      .catch(err => {console.log(err.message)})
  }
}



export function updateRecipientThunk (id, updateRecipientDetails) {
  return(dispatch) => {
  //console.log('thunk id ', id)
    updateRecipient(id, updateRecipientDetails) // API call
    .then(result => {
      if(!result.hasBeenUpdated) {
        throw new Error("Has Not Been Updated")
      }
      dispatch(updateRecipientAction(id, updateRecipientDetails)) // ACTION call
    })
    .catch(err => {console.log(err.message)})

  }
}


export function deleteRecipientThunk (id ) {
  return(dispatch) => {
    deleteRecipient(id) //API call
    .then(() => {
      dispatch(deleteRecipientAction(id)) //ACTION call
      })
    .catch(err => {console.log(err.message)})

  }
}
