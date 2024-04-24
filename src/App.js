import { useEffect, useState } from 'react';
import './App.css';
import { getALLPokemon, getPokemon } from './utils/pokemon.js';

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      // すべてのポケモンのデータを取得
      let res = await getALLPokemon(initialURL);
      // 各ポケモンの詳細なデータを取得
      loadPokemon(res.results);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);
  const loadPokemon = (data) => {
    let _pokemonData = Promise.all(
      data.map( (pokemon) => {
        // console.log(pokemon);
        let pokemonRecord = getALLPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
  }

  return (
    <div className="App">
      {loading ? <h1>Loading...</h1> : <h1>Data loaded</h1>}
    </div>
  );
}

export default App;
