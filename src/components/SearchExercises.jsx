import { useState, useEffect } from 'react';
import { Box, Button, TextField, Stack, Typography } from '@mui/material';
import { HorizontalScrollBar } from './HorizontalScrollBar';
import { exerciseOptions, fetchData } from '../utils/fetchData';

export function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
	const [search, setSearch] = useState('');
	const [bodyParts, setBodyParts] = useState([]);

	//! fetching body part data to display in the category component
	useEffect(() => {
		async function exeriseCategory() {
			const bodyPartsData = await fetchData(
				'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
				exerciseOptions
			);
			setBodyParts(['all', ...bodyPartsData]);
		}
		exeriseCategory();
	}, []);

	//! Search Handling function
	async function handleSearch() {
		if (search) {
			const exercisesData = await fetchData(
				'https://exercisedb.p.rapidapi.com/exercises',
				exerciseOptions
			);

			const searchedExercises = exercisesData.filter(
				(item) =>
					item.bodyPart.toLowerCase().includes(search) ||
					item.name.toLowerCase().includes(search) ||
					item.target.toLowerCase().includes(search) ||
					item.equipment.toLowerCase().includes(search)
			);

			window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
			setSearch('');
			setExercises(searchedExercises);
		}
	}

	return (
		<Stack mt="37px" p="20px" alignItems="center" justifyContent="center">
			<Typography
				fontWeight={700}
				sx={{ fontSize: { lg: '44px', xs: '30px' } }}
				mb="50px"
				textAlign="center"
			>
				Awesome Exercises you <br /> Should know
			</Typography>
			<Box position="relative" mb="72px">
				<TextField
					sx={{
						input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
						width: { lg: '800px', xs: '350px' },
						backgroundColor: '#fff',
						borderRadius: '40px',
					}}
					height="76px"
					value={search}
					onChange={(e) => {
						setSearch(e.target.value.toLowerCase());
					}}
					placeholder="Search Exercises"
					type="text"
				/>
				<Button
					onClick={handleSearch}
					variant="outlined"
					color="error"
					sx={{
						bgcolor: '#ff2625',
						color: '#fff',
						border: 'none',
						textTransform: 'none',
						width: { lg: '175px', xs: '80px' },
						fontSize: { lg: '20px', xs: '14px' },
						height: '56px',
						position: 'absolute',
						right: '0',
						'&:hover': {
							color: '#ff2625',
						},
					}}
				>
					Search
				</Button>
			</Box>
			<Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
				<HorizontalScrollBar
					data={bodyParts}
					bodyPart={bodyPart}
					setBodyPart={setBodyPart}
					isBodyPart
				/>
			</Box>
		</Stack>
	);
}
