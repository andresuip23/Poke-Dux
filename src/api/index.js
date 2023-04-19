import axios from 'axios';

const getPokemons = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    const pokemons = response.data.results;
    return pokemons;
  } catch (error) {
    console.error(error);
  }
};

export default getPokemons;
