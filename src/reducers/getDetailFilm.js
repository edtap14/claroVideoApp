const initialState = {
  detailFilms: []
};

export function getDetailFilms(state = initialState, { type, payload }) {
  switch (type) {
    case "FILM_DETAIL":
      return {
        ...state,
        detailFilm: payload
      };
    default:
      return state;
  }
}
