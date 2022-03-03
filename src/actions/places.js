import { types } from "../types/types";

export const getPlaces = () => {
  return async (dispatch) => {
    const url = "https://lawebdepoza.herokuapp.com/api/places";

    const response = await fetch(url);
    const { places, total } = await response.json();
    dispatch(loadPlaces(places));
    dispatch(loadTotal(total));
  };
};

export const loadPlaces = (places) => ({
  type: types.placesLoad,
  payload: places,
});

export const loadTotal = (total) => ({
  type: types.placesTotal,
  payload: total,
});
