import {
    GET_PROJECTS
} from "../actions/actionTypes";
 export default function manageMeetups(state = {
     projects: {
         title: '',
         images: [],
         desc: '',
         details: [],
         githubRepoUrl: '',
         demoVideoUrl: ''
     }
 },action) {
     switch (action.type) {
         // these are the default coordinates
         case GET_PROJECTS:
             return {...state, projects: action.projects}
         default:
             return state

     }
 }





// return array.map((item, index) => {
//     if (index !== action.index) {
//
//         return item
//     }
//
//     return {
//         ...item,
//         ...action.item
//     }
// })
// }
// #Immutable Update Utility Libraries
// Because writing immutable update code can become tedious, there are a number of utility libraries that try to abstract out the process. These libraries vary in APIs and usage, but all try to provide a shorter and more succinct way of writing these updates. For example, Immer makes immutable updates a simple function and plain JavaScript objects:
//
//     var usersState = [{ name: 'John Doe', address: { city: 'London' } }]
// var newState = immer.produce(usersState, draftState => {
//     draftState[0].name = 'Jon Doe'
//     draftState[0].address.city = 'Paris'
//
// })
// //
// }, action){
//     switch (action.type) {
//         case GET_USERS:
//             return {...state, users: action.users}
//         case ADD_USER:
//             return {...state, users: [...state.users,action.newUser]}
//         case LOGIN:
//             return {
//                 ...state, currentUser: action.currentUser
//             }
//         case 'GET_USERS_REQUEST':
//             console.log('getting users')
//         case 'GET_USERS_SUCCESS':
//             return  {...state , users: action.users}
//         default:
//             return state;
//     }
// };
