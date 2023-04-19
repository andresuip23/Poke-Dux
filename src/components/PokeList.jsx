import PokeCard from "./PokeCard";
import '../styles/PokeList.css'


function PokeList({pokemons}) {
    return ( 
        <div className="PokeList">
            {pokemons.map((pokemon)=>(<PokeCard/>))}
        </div>
     );
}

PokeList.defaultProps={
    pokemons:Array(10).fill('Relleno')
}

export default PokeList;