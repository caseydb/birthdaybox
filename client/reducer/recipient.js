import { SET_ALL_RECIPIENT, ADD_RECIPIENT, UPDATE_RECIPIENT, DELETE_RECIPIENT} from '../actions/recipient' 



function recipientReducer (state = [], action) {
  switch (action.type) {
    case SET_ALL_RECIPIENT:
        return action.recipients
    case ADD_RECIPIENT:
        return [...state, {name:action.name, birthdate:action.birthdate, address:action.address}]
    case UPDATE_RECIPIENT:
        return state.map(eachRecipient =>{
          if(eachRecipient.id === action.id)
          {
            return action.recipient
          }
          return eachRecipient
          })
      case DELETE_RECIPIENT:
      return state.filter(eachRecipient => eachRecipient.id  !== action.id) //return everything that doesn't match id
      default:
        return state
  }
}

export default recipientReducer