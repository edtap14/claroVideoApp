import { combineReducers } from "redux";
import { allFilms } from "./getAllFilms";

const rootReducer = combineReducers({
  films: allFilms
});

export default rootReducer;
