import { initialState } from './initialState';
import * as t from './actionTypes';

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SET_ROLE_STATE:
      return {
        ...state,
        role: action.payload,
      };
    case t.SET_LOGIN_STATE:
      return {
        ...state,
        ...action.payload, // this is what we expect to get back from API call and login page input
        isLoggedIn: true, // we set this as true on login
      };
    default:
      return state;
  } 
};

export const storyReducer = (state = [], action) => {
  switch (action.type) {
    case t.CREATE_STORY:
      return {
        ...state,
        story: action.payload,
      };
    default:
      return state;
  } 
}

// export const roleReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case t.SET_ROLE_STATE:
//       return {
//         ...state,
//         role: action.payload,
//       };
//     default:
//       return state;
//   } 
// }