import axios from "axios";

const api = "https://www.omdbapi.com/?apikey=961ecfbe";
const listMovies = `${api}&s=batman&page=2`;
const MoviesDetail = (id) => `${api}&i=${id}&plot=short&r=json`;

const apiCall = async (apis, params) => {
  const option = {
    method: "GET",
    url: apis,
    params: params ? params : {},
  };
  try {
    const response = await axios.request(option);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
    return {};
  }
};

export const fetchListMovies = () => {
  return apiCall(listMovies);
};

export const fetchMovieDetail = (id) => {
  return apiCall(MoviesDetail(id));
};
