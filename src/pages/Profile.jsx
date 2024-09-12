import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Box, Chip, Container, Divider, Paper, Typography } from '@mui/material';
import PokemonTable from '../PokemonTable';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';

export const Profile = ({ pokemonData }) => {
  const { name, sprites, moves } = pokemonData;

  const navigate = useNavigate();

  useEffect(() => {
    if (!pokemonData) {
      navigate("/");
    }
  }, [pokemonData, navigate]);

  if (!pokemonData) {
    return null;
  }

  return (
    <>
      <Navbar hideSearch />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#ffffff' }}>
        <Box sx={{ flex: 1, paddingBottom: '60px' }}>
          <Container maxWidth="md" sx={{ padding: '16px 0' }}>
            <Paper
              elevation={3}
              sx={{
                padding: '16px',
                bgcolor: '#ffffff',
                border: '4px solid #333333', // Dark and thick border
                borderRadius: '8px', // Optional: Add border-radius if needed
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                padding={5}
              >
                <Typography variant="h4" sx={{ color: '#333333' }}>{name}</Typography>
                <Box
                  component="img"
                  src={sprites.front_default}
                  width="100%"
                  height="auto"
                  objectFit="contain"
                  sx={{ border: '2px solid #333333', borderRadius: '8px' }} // Dark border for image
                />
                <PokemonTable pokemonData={pokemonData} />
              </Box>
              <Divider sx={{ bgcolor: '#dcdcdc' }}>Variações</Divider>
              <Box
                display="flex"
                justifyContent="space-between"
                sx={{ borderRadius: '8px' }} // No border
              >
                <Box component="img" src={sprites.front_female} width="25%" height="25%" />
                <Box component="img" src={sprites.front_shiny} width="25%" height="25%" />
                <Box component="img" src={sprites.front_shiny_female} width="25%" height="25%" />
              </Box>
              <Divider sx={{ bgcolor: '#dcdcdc' }}>Ataques</Divider>
              <Box textAlign="center" marginTop="15px">
                {moves.map((moveData, key) => (
                  <Chip
                    key={key}
                    sx={{ m: '5px', border: '2px solid #333333' }} // Dark border for chips
                    label={moveData.move.name}
                  />
                ))}
              </Box>
            </Paper>
          </Container>
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default Profile;
