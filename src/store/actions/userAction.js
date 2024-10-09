import { SET_USER, SET_USERS } from "../actionTypes/userActionTypes";

export function setIsLoading(payload) {
  return {
    type: "user/setIsLoading",
    payload,
  };
}

export function fetchUsers() {
  return (dispatch, getState) => {
    dispatch(setIsLoading(true));
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
        dispatch({
          type: SET_USERS,
          payload: data,
        });
      })
      .catch(console.log)
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };
}

export function fetchUser(id, id2, id3) {
  return (dispatch, getState) => {
    // bikin logic apapun
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((data) => data.json())
      .then((data) => {
        dispatch({
          type: SET_USER,
          payload: data,
        });
      })
      .catch(console.log);
  };
}
