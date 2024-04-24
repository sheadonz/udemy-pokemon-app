import { useEffect, useState } from 'react';
import './App.css';
import { getALLPokemon } from './utils/pokemon.js';

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getALLPokemon(initialURL);
      console.log(res);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);
  return (
    <div className="App">
      {loading ? <h1>Loading...</h1> : <h1>Data loaded</h1>}
    </div>
  );
}

export default App;
