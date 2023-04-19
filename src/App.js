import { Col } from 'antd';
import { connect } from 'react-redux';
import './App.css';
import Searcher from './components/searcher';
import PokeCard from './components/PokeCard';
import PokeList from './components/PokeList';
import { useEffect, useState } from 'react';
import  getPokemons  from './api';
import { setPokemons as setPokemonsActions } from './actions';

function App({pokemons,setPokemons}) {


  useEffect(()=>{
    const fetchPokemons = async() => {
      const result = await getPokemons();
      setPokemons(result);
    };
    fetchPokemons(); 
  },[])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src='https://raw.githubusercontent.com/musartedev/curso-redux/27298f5dd3e37caf2a90a7a82580cd2905fcab31/src/statics/logo.svg' alt='Pokedux'/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      <PokeList pokemon={pokemons}/>
    </div>
  );
}


const mapStateToProps=(state=>({
  pokemons:state.pokemons,
}));

const mapDistpatchToProps=(dispatch=>({
  setPokemons:(value)=>dispatch(setPokemonsActions(value))
}));

export default connect(mapStateToProps, mapDistpatchToProps) (App);
