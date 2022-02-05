import { SET_COMPANIES } from "../constants/actions";
export const initialState = {
  companies: [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case SET_COMPANIES: {
      return {
        ...state,
        companies: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
