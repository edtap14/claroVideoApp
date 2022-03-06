import { combineReducers } from "redux";
import { allFilms } from "./getAllFilms";
import { getDetailFilms } from "./getDetailFilm";

const rootReducer = combineReducers({
  films: allFilms,
  detail: getDetailFilms
});

export default rootReducer;
