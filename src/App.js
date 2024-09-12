import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { Footer } from './components/Footer/Footer';
import Box from '@mui/material/Box';
import { Router } from './router';


function App() {
  return (
    <Box>
      <Router />
    </Box>
  );
}

export default App;
