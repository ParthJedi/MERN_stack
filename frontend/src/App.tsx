import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Dashboard from './components/dashboard/Dashboard';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import './App.css';
// redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	return (
		<Provider store={store}>
			<Fragment>
				<Router>
					<Navbar />
					<Routes>
						<Route path='/' element={<Landing />} />
					</Routes>
					<section className='container'>
						<Alert />
						<Routes>
							<Route path='/register' element={<Register />} />
							<Route path='/login' element={<Login />} />
							<Route path='/dashboard' element={<Dashboard />} />
						</Routes>
					</section>
				</Router>
			</Fragment>
		</Provider>
	);
};

export default App;
