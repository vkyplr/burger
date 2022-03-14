import './App.css';
import { useContext } from 'react';
import Header from './Components/Header';
import { ThemeProvider, Container, CssBaseline } from '@mui/material';
import { RootStoreContext } from './RootStoreContext';
import { observer } from 'mobx-react-lite';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Customers from './Components/Customers';

const App = () => {
  
  const { theme } = useContext(RootStoreContext);

	return (
		
		<ThemeProvider theme={theme}>
			<CssBaseline />
				<Container maxWidth="xl" sx={{
					padding: '0px !important',
				}}>
					<Router>
						<Header/>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='customers' element={<Customers />} />
						</Routes>
					</Router>
				</Container>
		</ThemeProvider>
		
	);
}

export default observer(App);
