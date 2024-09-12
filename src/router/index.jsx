import React, { useState } from 'react'
import { Home } from '../pages/Home';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { Profile } from '../pages/Profile';

export const Router = () => {
    const [pokemonData, setPokemonData] = useState();
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home setPokemonData={setPokemonData}/>} />
            <Route path="/profile" element={<Profile pokemonData={pokemonData}/>} />
          </Routes>
        </BrowserRouter>
      );
};
