import './App.css';
import { useContext } from 'react';
import Header from './Components/Header';
import { ThemeProvider, Container, CssBaseline } from '@mui/material';
import Content from './Components/Content';
import { RootStoreContext } from './RootStoreContext';
import { observer } from 'mobx-react-lite';


const App = () => {
  
  const { theme } = useContext(RootStoreContext);

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

export default observer(App);
