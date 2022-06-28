import { useState, useEffect } from 'react';
import { Box, Stack, Typography, Pagination } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import { ExerciseCard } from './ExerciseCard';

export function Exercises({ setExercises, bodyPart, exercises }) {
	console.log(exercises);
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
				{exercises.map((exercise, index) => {
					return <ExerciseCard key={index} exercise={exercise} />;
				})}
			</Stack>
		</Box>
	);
}
