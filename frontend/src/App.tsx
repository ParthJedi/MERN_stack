import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import './App.css';

const App = () => {
	return (
		<Fragment>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Landing />} />
				</Routes>
			</Router>
		</Fragment>
	);
};

export default App;
