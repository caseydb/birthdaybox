import request from 'superagent'

export function fetchAllRecipients () {
  return request
    .get('/api/v1/recipient') // backend route
    .then(response => response.body)
}

export function addRecipient(recipient) {
  return request
    .post('/api/v1/recipient') //posting route send backend
    .send(recipient )
    .then(response => response.body)
}

export function updateRecipient ( id, updateRecipientDetails){
  console.log('api id: ', id)
  return request
  .patch(`/api/v1/recipient/${id}`) //patching route send backend
  .send(updateRecipientDetails)
  .then(response => response.body)
}

export function deleteRecipient ( id ){
  return request
  .delete('/api/v1/recipient/'+id) //deleting route match backend
  .then(response => response.body)
}

