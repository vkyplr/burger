import './App.css';
import Header from './Components/Header';
import { ThemeProvider, Container, CssBaseline } from '@mui/material';
import Content from './Components/Content';
import { useContext } from 'react';
import { State } from './Context';

function App() {

  const { theme } = useContext(State);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl" sx={{
        padding: '0px !important',
      }}>
        <Header/>
        <Content />
      </Container>
    </ThemeProvider>
  );
}

export default App;
