const initialState = {
  counter: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "counter/increment":
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
}

export default counterReducer;
