import { useContext } from 'react';
import { DataContext } from '../../App';
import '../../css/Card.css';

function Card({movies}) {
  const BASE_IMG = "https://image.tmdb.org/t/p/original";

  const { favorites, setFavorites, watched, setWatched } = useContext(DataContext);

  function addToFavorites(movie): void {

    setFavorites(
      prev => (
        {
          ...prev,
          [movie.id]: {
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            release_date: movie.release_date
          }
        }
      )
    );
  }

  function removeFromFavorites(id) {
  setFavorites(prev => {
    const newFavorites = { ...prev }; // másolat készítése
    delete newFavorites[id];          // kitöröljük a kulcsot
    return newFavorites;              // új objektumot adunk vissza
  });
}


  function addToWatched(movie): void {
    setWatched(prev => ({
      ...prev,
        [movie.id]: {
          "id": movie.id,
          "title": movie.title,
          "poster_path": movie.poster_path,
          "release_date": movie.release_date
        }
    }))
  }

  function removeFromWatched(id): void {
    setWatched(prev => {
      const newWatched = { ...prev }
      delete newWatched[id]
      return newWatched
    })
  }

  return (
    <div className="h-auto max-w-3xs
    relative flex flex-col justify-between flex-wrap text-wrap border-4 border-cyan-500 
    rounded-lg bg-linear-to-tr from-blue-900 to-blue-600
    shadow-black shadow-lg
    transition-opacity
    sm:hover:opacity-80 sm:cursor-pointer">
      <img
        className="aspect-2/3 max-h-96 rounded-t-sm border-b-4 border-cyan-500"
        src={movies.poster_path ? BASE_IMG + movies.poster_path : movies.backdrop_path ?  BASE_IMG+movies.backdrop_path : "https://picsum.photos/256/384"}
        alt={movies.title + "-image"}
      />
      <div id='card-info' className="flex flex-1 justify-between">
        <div className='h-full flex flex-col justify-between'>
          <h2>{movies.title}</h2>
          <h3>{movies.release_date}</h3>
        </div>

        <div id='fav-watched-container' className='flex flex-col justify-between gap-2'>
            {
             favorites[movies.id] ? (
                <button
                  id='kedvencek'
                  onClick={() => removeFromFavorites(movies.id)}
                  className="border-3 border-cyan-500 bottom-1 right-1 rounded-full w-auto h-auto transition-all hover:cursor-pointer"
                >
                  🖤
                </button>
              ) : (
                <button
                  id='kedvencek'
                  onClick={() => addToFavorites(movies)}
                  className="border-3 border-cyan-500 bottom-1 right-1 rounded-full w-auto h-auto transition-all hover:cursor-pointer"
                >
                  ❤️
                </button>
              )}

            {
              watched[movies.id] ?
                <button
                  id='lattam'
                  onClick={() => removeFromWatched(movies.id)}
                  className="border-3 border-cyan-500 top-1 right-1 rounded-full w-auto h-auto transition-all hover:cursor-pointer"
                >
                  ❌
                </button>
                :
                <button
                  id='lattam'
                  onClick={() => addToWatched(movies)}
                  className="border-3 border-cyan-500 top-1 right-1 rounded-full w-auto h-auto text-green-400 transition-all hover:cursor-pointer"
                >
                  ✔
                </button>
            }
          </div>
      </div>
    </div>
  );
}

export default Card;