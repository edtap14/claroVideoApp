const initialState = {
  films: []
};

export function allFilms(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_ALL_FILMS":
      return {
        ...state,
        films: payload
      };
    default:
      return state;
  }
}
