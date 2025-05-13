import { useState, useEffect } from 'react';
import "./App.css";

function App() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
  try {  const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/151");
    const data = await response.json();
    setPokemons(data);
    document.getElementById("loader").style.display="none";} catch (error){
      console.error(error);
    }

  }

  return (
    <div id='bg'>
    <div id="loader" class="loader">
        <div class="dot d1"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png?20161023215848" alt="pokeball" /></div>
        <div class="dot d2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png?20161023215848" alt="pokeball" /></div>
        <div class="dot d3"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png?20161023215848" alt="pokeball" /></div>
      </div>

    <div id="pokedex" class="sombre">
  
      {pokemons.map(pokemon => (
        <div key={pokemon.id}>
          <h2><span id='name'>{pokemon.name}</span> <span id='types'> <b></b>{pokemon.apiTypes.map(type => (<img key={type.name} id="imgType" src={type.image} alt={type.name} />))} </span></h2>
          <p><img kay={pokemon.name} id="imgPoke" src={pokemon.image} alt={pokemon.name} /></p>
          <h3 id="nbrPoke">N° {pokemon.pokedexId} </h3>
          <p id='stats'><span> <b>HP :</b> {pokemon.stats.HP}</span>   <span> <b>Attack :</b> {pokemon.stats.attack}</span> <span> <b>Defense :</b> {pokemon.stats.defense}</span></p>

        </div>
      )
      )}
    </div>
    </div>
  )
}

export default App