//const logger = (store) => (next) => (action) => {
//  console.log("dispatching", action);
//  let result = next(action);
//  console.log("next state", store.getState());
//  return result;
//};

function logger(store) {
  return function (next) {
    return function (action) {
      // kita bisa taro logic middleware kita disini
      console.log("prev state", store.getState());
      console.log("action", action);
      const result = next(action);
      console.log("next state", store.getState());
      return result;
    };
  };
}

export default logger;
