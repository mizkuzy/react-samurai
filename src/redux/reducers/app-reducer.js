import {DESTROY, INITIALIZE} from "../actionTypes";

const init = {
  isInitialized: false,
};

const appReducer = (state = init, action) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        isInitialized: true,
      };
    case DESTROY:
      return {
        ...state,
        isInitialized: false,
      };
    default:
      return state;
  }
};

export default appReducer;
