//setup api requests

const API_KEY="8d54a9d0434001cd94e29ffbb691f091";

const requests = {
    fetchtrending:"/trending/all/day?api_key="+API_KEY,
    fetchoriginals:"/discover/tv?api_key="+API_KEY+"&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false",
    fetchtoprated:"/movie/top_rated?api_key="+API_KEY+"&language=en-US&page=1",
    fetchAction:"/discover/movie?api_key="+API_KEY+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=Action",
    fetchcomedy:"",
    fetchhorror:"",
    fetchromance:"",
}

export default requests;