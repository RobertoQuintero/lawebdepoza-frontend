import { types } from "../types/types";

const initialState = {
  places: [],
  total: 0,
  active: null,
};

export const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.placesLoad:
      return {
        ...state,
        places: [...action.payload],
      };
    case types.placesTotal:
      return {
        ...state,
        total: action.payload,
      };

    default:
      return state;
  }
};
