import Cards from "../components/cards/Card";
import { useContext } from "react";
import { DataContext } from "../App";

function Watched() {

  const { watched } = useContext(DataContext);

  return (
    <div id='card-wrapper' className="flex flex-wrap gap-8 justify-center p-8">
      {Object.entries(watched).length > 0 ? 
        Object.entries(watched).map(([key, value]) => (
          <Cards key={key} movies={value} />
        )) 
        : 
        <h1 className="text-3xl text-center text-cyan-400">
          Még nem adtál hozzá egy filmet sem a megnézett filmek listádhoz.
        </h1>}
    </div>
  );
}

export default Watched;