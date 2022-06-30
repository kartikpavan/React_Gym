import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { HorizontalScrollBar } from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = ({ equipmentExercises, targetMuscleExercises }) => {
	return (
		<Box sx={{ mt: { lg: '100px', xs: '0' } }}>
			<Typography variant="h4" sx={{ m: '20px' }}>
				Exercises That target the same Muscle Group
			</Typography>
			<Box sx={{ p: '2', position: 'relative' }}>
				{targetMuscleExercises.length ? (
					<HorizontalScrollBar data={targetMuscleExercises} />
				) : (
					<Loader />
				)}
			</Box>
			<Typography variant="h4" sx={{ m: '20px' }}>
				Exercises That require similar equipment
			</Typography>
			<Box sx={{ p: '2', position: 'relative' }}>
				{equipmentExercises.length ? (
					<HorizontalScrollBar data={equipmentExercises} />
				) : (
					<Loader />
				)}
			</Box>
		</Box>
	);
};

export default SimilarExercises;
