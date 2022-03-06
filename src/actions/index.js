import axios from "axios";
const url =
  "https://mfwkweb-api.clarovideo.net/services/content/list?quantity=50&from=0&level_id=GPS&order_way=ASC&order_id=50&filter_id=34289&region=mexico&api_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5hqq76r3g6sg4jb90l38us52";

//const urlDetail = `https://mfwkweb-api.clarovideo.net/services/content/data?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.86&region=mexico&HKS=9s5hqq76r3g6sg4jb90l38us52&user_id=22822863&group_id=${id}`;

export const getAllFilms = () => {
  return (dispatch) => {
    axios.get(url).then((response) => {
      const data = response.data;
      dispatch({
        type: "GET_ALL_FILMS",
        payload: data
      });
    });
  };
};

export const getDetailFilm = (id) => {
  return (dispatch) => {
    axios
      .get(
        `https://mfwkweb-api.clarovideo.net/services/content/data?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.86&region=mexico&HKS=9s5hqq76r3g6sg4jb90l38us52&user_id=22822863&group_id=${id}`
      )
      .then((response) => {
        const data = response.data;
        dispatch({
          type: "FILM_DETAIL",
          payload: data
        });
      });
  };
};
