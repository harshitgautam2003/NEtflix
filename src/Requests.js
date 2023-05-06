const key='6380057e5c259a44cf5c8c46eab093ef'

const requests={
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestAnime:`https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&page=1&with_genres=16&with_keywords=210024|287501&with_text_query=death`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
};
export default requests