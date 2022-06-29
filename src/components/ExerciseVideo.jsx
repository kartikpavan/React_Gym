import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideo = ({ exerciseVideos, name }) => {
	if (!exerciseVideos.length) return 'Loading';

	return (
		<Box sx={{ mt: { lg: '200px', xs: '20px' } }} p="20px">
			<Typography variant="h4" mb="33px">
				Watch <span style={{ color: '#ff2625' }}> {name} </span> Exercise Videos
			</Typography>
			<Stack
				justifyContent="center"
				flexWrap="wrap"
				alignItems="center"
				sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }}
			>
				{exerciseVideos?.slice(0, 3).map((item, index) => {
					return (
						<a
							key={index}
							href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
							className="exercise-video"
							target="_blank"
							rel="noreferrer"
						>
							<img src={item.video.thumbnails[0].url} alt="video" />
						</a>
					);
				})}
			</Stack>
		</Box>
	);
};

export default ExerciseVideo;
