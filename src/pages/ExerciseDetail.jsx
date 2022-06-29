import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import {
	fetchData,
	exerciseOptions,
	youtubeVideoOptions,
} from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideo from '../components/ExerciseVideo';
import SimilarExercises from '../components/SimilarExercises';

export function ExeriseDetail() {
	const [exerciseDetail, setExerciseDetail] = useState({});
	const [exerciseVideos, setExerciseVideos] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		const fetchExercisesData = async () => {
			//! fetching data about the exercise using the id
			const exerciseDetailData = await fetchData(
				`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
				exerciseOptions
			);
			setExerciseDetail(exerciseDetailData);
			//! fetching youtube video related to the exercise
			const exericiseVideosData = await fetchData(
				`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name}`,
				youtubeVideoOptions
			);
			setExerciseVideos(exericiseVideosData.contents);
		};
		fetchExercisesData();
	}, [id]);

	return (
		<Box>
			<Detail exerciseDetail={exerciseDetail} />
			<ExerciseVideo
				exerciseVideos={exerciseVideos}
				name={exerciseDetail.name}
			/>
			<SimilarExercises />
		</Box>
	);
}
