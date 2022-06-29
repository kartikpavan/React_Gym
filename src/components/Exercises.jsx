import { useState, useEffect } from 'react';
import { Box, Stack, Typography, Pagination } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import { ExerciseCard } from './ExerciseCard';

export function Exercises({ setExercises, bodyPart, exercises }) {
	// Pagination Logic
	const [currentPage, setCurrentPage] = useState(1);
	const exercisesPerPage = 9;
	const indexOfLastExercise = currentPage * exercisesPerPage;
	const indexofFirstExercise = indexOfLastExercise - exercisesPerPage;
	const currentExercises = exercises.slice(
		indexofFirstExercise,
		indexOfLastExercise
	);

	const paginate = (e, value) => {
		setCurrentPage(value);
		window.scrollTo({ top: 1800, behavior: 'smooth' });
	};

	return (
		<Box id="exerises" sx={{ mt: { lg: '110px' } }} mt="50px" p="20px">
			<Typography variant="h3" mb="48px">
				Showing Results
			</Typography>
			<Stack
				direction="row"
				sx={{ gap: { lg: '110px', xs: '50px' } }}
				flexWrap="wrap"
				justifyContent="center"
			>
				{currentExercises.map((exercise, index) => {
					return <ExerciseCard key={index} exercise={exercise} />;
				})}
			</Stack>
			<Stack mt="100px" alignItems="center">
				{exercises.length > 5 && (
					<Pagination
						color="error"
						shape="rounded"
						defaultPage={1}
						count={Math.ceil(exercises.length / exercisesPerPage)}
						page={currentPage}
						onChange={paginate}
						size="large"
					/>
				)}
			</Stack>
		</Box>
	);
}
