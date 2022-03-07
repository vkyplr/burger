import './App.css';
import Header from './Components/Header';
import { ThemeProvider, Container, CssBaseline } from '@mui/material';
import Content from './Components/Content';
import BurgerStore from './BurgerStore';
import { observer } from 'mobx-react-lite';


const App = () => {
  
  const { theme } = BurgerStore;

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
