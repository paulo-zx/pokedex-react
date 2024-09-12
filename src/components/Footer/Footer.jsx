import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      padding={2}
      paddingTop={4}
      position="fixed"
      bottom={0}
      bgcolor="black"
      color="yellow"
      sx={{ height: '60px' }} // Define the height of the footer
    >
      <Typography variant="body2" marginBottom={1}>
        {`Paulo Roberto Ribeiro Morais © ${currentYear}`}
      </Typography>
      <Box display="flex" justifyContent="center">
        <Box
          component="a"
          href="https://github.com/paulo-zx"
          target="_blank"
          rel="noopener noreferrer"
          marginRight={1}
        >
          <GitHubIcon style={{ color: 'yellow' }} />
        </Box>
        <Box
          component="a"
          href="https://www.linkedin.com/in/paulo-roberto-127283147/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon style={{ color: 'yellow' }} />
        </Box>
      </Box>
    </Box>
  );
}
