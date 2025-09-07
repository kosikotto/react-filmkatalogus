import { useContext } from "react";
import { DataContext } from '../App.jsx';
import Cards from "../components/cards/Card";

function Favorites() {
  const { favorites } = useContext(DataContext);

  return (
    <div id='card-wrapper' className="flex flex-wrap gap-8 justify-center p-8">
      {Object.entries(favorites).length > 0 ? 
        Object.entries(favorites).map(([id, movie]) => (
          <Cards key={id} movies={movie} />
        )) 
        : 
        <h1 className="text-3xl text-center text-cyan-400">
          Még nem adtál hozzá egy filmet sem a kedvenc filmek listádhoz.
        </h1>}
    </div>
  );
}

export default Favorites;