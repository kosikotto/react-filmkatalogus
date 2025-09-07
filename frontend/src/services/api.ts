const API_BASE = "https://api.themoviedb.org/3";
const API_KEY = "99349a142897e8dad26353c48e26c17b";

export async function getPopularMovies() {
    const request = await fetch(`${API_BASE}/movie/popular?api_key=${API_KEY}`);

    const jsonData = await request.json();

    return jsonData.results;
}

export async function getSearchedMovies(input : string) {

    const queryData = await fetch(`${API_BASE}/search/movie?api_key=${API_KEY}&query=${input}`);

    const data = await queryData.json();

    return data.results;    
}