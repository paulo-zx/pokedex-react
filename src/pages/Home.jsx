import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import PokemonCard from '../components/PokemonCard';
import { Box, Container, Grid } from '@mui/material';
import { Skeletons } from '../components/Skeletons';
import { Footer } from '../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

export const Home = ({ setPokemonData }) => {
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    const endpoints = [];
    for (let i = 1; i <= 200; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res))
      .catch((err) => console.error(err));
  };

  const pokemonFilter = (name) => {
    if (name === "") {
      getPokemons();
    } else {
      const filteredPokemons = pokemons.filter(pokemon =>
        pokemon.data.name.includes(name)
      );
      setPokemons(filteredPokemons);
    }
  };

  const pokemonPickHandler = (pokemonData) => {
    setPokemonData(pokemonData);
    navigate("/profile");
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh',  bgcolor: '#003366',}}>
      <Navbar pokemonFilter={pokemonFilter} />
      <Container maxWidth="false" sx={{ flex: 1, paddingBottom: '80px' }}> {/* Adjust paddingBottom based on Footer height */}
        <Grid container spacing={2}>
          {pokemons.length === 0 ? <Skeletons /> :
            pokemons.map((pokemon, key) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                <Box onClick={() => pokemonPickHandler(pokemon.data)} sx={{ cursor: "pointer" }}>
                  <PokemonCard
                    name={pokemon.data.name}
                    image={pokemon.data.sprites.front_default}
                    types={pokemon.data.types}
                  />
                </Box>
              </Grid>
            ))
          }
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Home;
