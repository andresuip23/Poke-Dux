import PokeCard from "./PokeCard";
import '../styles/PokeList.css'


function PokeList({pokemon}) {
    console.log(pokemon);
    return ( 
        <div className="PokeList">
            {pokemon.map((pokemon)=>(<PokeCard name={pokemon.name}/>))}
        </div>
     );
}

PokeList.defaultProps={
    pokemons:Array(10).fill('Relleno')
}

export default PokeList;