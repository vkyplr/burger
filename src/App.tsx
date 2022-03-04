import './App.css';
import Header from './Components/Header';
import { ThemeProvider } from '@mui/material';
import theme from './Themes/Theme';
import Content from './Components/Content';

import 'fontsource-roboto';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Content />
    </ThemeProvider>
  );
}

export default App;
