import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { HorizontalScrollBar } from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = ({ equipmentExercises, targetMuscleExercises }) => {
	return (
		<Box sx={{ mt: { lg: '100px', xs: '0' } }}>
			<Typography variant="h3">
				Exercises That target the same Muscle Group
			</Typography>
			<Stack direction="row" sx={{ p: '2', position: 'relative' }}>
				{targetMuscleExercises.length ? (
					<HorizontalScrollBar data={targetMuscleExercises} />
				) : (
					<Loader />
				)}
			</Stack>
			<Typography variant="h3">
				Exercises That reuire similar equipment
			</Typography>
			<Stack direction="row" sx={{ p: '2', position: 'relative' }}>
				{equipmentExercises.length ? (
					<HorizontalScrollBar data={equipmentExercises} />
				) : (
					<Loader />
				)}
			</Stack>
		</Box>
	);
};

export default SimilarExercises;
