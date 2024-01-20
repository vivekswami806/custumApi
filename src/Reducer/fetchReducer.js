
    function reducer(state, action) {
        switch (action.type) {
          case "LOADING":
            return { ...state, loding: true };
          case "FETCHED":
            return { ...state, prod: action.payload, loding: false };
          case "ERROR":
            return { ...state, loding: false, err: action.payload };
          default:
            return state;
        }
      }
 

export default reducer