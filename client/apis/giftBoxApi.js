import request from 'superagent'

export function fetchAllGiftBoxes () {
  return request
    .get('/api/v1/giftbox') // backend route
    .then(response => response.body)
}

export function addGiftBoxToCart(giftBox) {
  return request
    .post('/api/v1/giftbox') //backend route
    .send(giftBox )
    .then(response => response.body)
}

export function deleteGiftBoxFromCart (id){
  return request
  .delete('/api/v1/giftbox/'+id) //deleting route match backend
  .then(response => response.body)
}

