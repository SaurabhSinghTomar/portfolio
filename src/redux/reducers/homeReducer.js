import { HOME_TYPE } from "../types/homeTypes";
const homeReducer = (state = 0, action) => {
  switch (action.type) {
    case HOME_TYPE.INCREMENT:
      return state + 1;

    case HOME_TYPE.DECREMENT:
      return state - 1;

    default:
      return state;
  }
};

export default homeReducer;
