export function increment(payload) {
  return {
    type: "counter/increment",
    payload,
  };
}

export function incrementWithThunk(payload) {
  return (dispatch, getState) => {
    // kodisi, fetch api
    const { counter } = getState().counterReducer;

    if (counter >= 100) return;

    dispatch({
      type: "counter/increment",
      payload,
    });
  };
}
