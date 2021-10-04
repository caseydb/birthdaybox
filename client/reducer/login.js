// import { createStore } from 'redux';

// const initialState = { isAuthenticated: false }

// const loginReducer = (state = initialState, action) => {
//     if (action.type === 'login'){
//         return {
//             isAuthenticated: state.isAuthenticated = true
//         }
//     } 
//     if (action.type === 'logout'){
//         return {
//             isAuthenticated: state.isAuthenticated = false
//         }
//     }
//     return state;
// }
// // createStore calls the redux function we imported at top. We then pass our reducer logic and then we export new var
// const store = createStore(loginReducer) 

// export default store