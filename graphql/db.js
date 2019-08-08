import fetch from "node-fetch";
const movieApi = `https://yts.lt/api/v2/list_movies.json?`;

export const getMovies = (limit, rating) => {
    let responseApi = movieApi
    if (limit>0) {
        responseApi += `limit=${limit}` ;
    }
    if (rating>0) {
        responseApi += `&minimum_rating=${rating}`;
    }
    return fetch(responseApi)
        .then(res => res.json())
        .then(json => json.data);
};
