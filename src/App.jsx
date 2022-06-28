import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ExeriseDetail } from './pages/ExerciseDetail';
const App = () => {
	return (
		<>
			<Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/exercise/:id" element={<ExeriseDetail />} />
				</Routes>
				<Footer />
			</Box>
		</>
	);
};

export default App;
