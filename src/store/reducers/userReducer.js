import { SET_USER, SET_USERS } from "../actionTypes/userActionTypes";

const initialState = {
  users: [],
  user: null,
  isLoading: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case "user/setIsLoading":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

export default userReducer;
