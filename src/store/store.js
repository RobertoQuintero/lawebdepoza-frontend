import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { placesReducer } from "../reducers/placesReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  places: placesReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
