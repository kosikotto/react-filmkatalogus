import { useEffect, useState } from "react";
import Card from "../components/cards/Card.tsx";
import { getPopularMovies, getSearchedMovies } from "../services/api.ts";

function Home() {
  let [popularMovies, setPopularMovies] = useState([]);
  let [searchInput, setSearchInput] = useState("");

  async function getMovies() {
    setPopularMovies(await getPopularMovies());
  }

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    async function returnSearchedMovies() {
      const searchedMovies = await getSearchedMovies(searchInput);
      if (searchedMovies.length > 0) {
        document.getElementById("search-box").value = "";
      }
      setPopularMovies(searchedMovies);
    }

    if (searchInput.trim() !== "") {
      returnSearchedMovies();
    } else {
      getMovies();
    }
  }, [searchInput]);

  function Search() {
    setSearchInput(document.getElementById("search-box").value);
  }

  function EnterPressed(event) {
    if (event.key === "Enter") {
      Search();
    }
  }

  function RenderCards() {
    return (
      <>
        <div id="search-div" className="flex flex-col w-6/12 gap-8 sm:flex-row">
          <input
            id="search-box"
            className="
                  bg-cyan-900
                  text-white
                  border-4 border-cyan-600 rounded-md
                  font-bold
                  italic
                  transition-colors
                  sm:hover:bg-cyan-950
                  focus:outline-none focus:border-cyan-800"
            type="text"
            placeholder="Terminator..."
            onKeyUp={(e) => EnterPressed(e)}
          />
          <button
            id="find-button"
            onClick={Search}
            className="bg-red-600 sm:hover:bg-red-700 active:bg-red-900"
          >
            Keresés
          </button>
          <button
            id="reset-button"
            onClick={Search}
            className="bg-cyan-600 sm:hover:bg-cyan-700 active:bg-cyan-800 flex justify-center items-center"
          >
            <svg
              width={20}
              height={20}
              fill="#00fbff"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M960 0v112.941c467.125 0 847.059 379.934 847.059 847.059 0 467.125-379.934 847.059-847.059 847.059-467.125 0-847.059-379.934-847.059-847.059 0-267.106 126.607-515.915 338.824-675.727v393.374h112.94V112.941H0v112.941h342.89C127.058 407.38 0 674.711 0 960c0 529.355 430.645 960 960 960s960-430.645 960-960S1489.355 0 960 0"
                  fillRule="evenodd"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>

        <div
          id="card-wrapper"
          className="flex flex-wrap gap-8 justify-center p-8"
        >
          {popularMovies.map((movie) => (
            <Card key={movie.id} movies={movie} />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      {popularMovies.length > 0 ? (
        RenderCards()
      ) : (
        <h1 className="text-3xl text-center text-cyan-400">
          Népszerű filmek listája betöltés alatt...
        </h1>
      )}
    </>
  );
}

export default Home;