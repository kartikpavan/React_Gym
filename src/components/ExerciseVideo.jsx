import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Loader from './Loader';

const ExerciseVideo = ({ exerciseVideos, name }) => {
	if (!exerciseVideos.length) return <Loader />;

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
							<Box>
								<Typography variant="h6" fontWeight="bold" color="#000">
									{item.video.title}
								</Typography>
								<Typography fontSize="16px" color="#3d3d3d">
									{item.video.channelName}
								</Typography>
								<Typography fontSize="12px" color="#000fff">
									{item.video.viewCountText}
								</Typography>
							</Box>
						</a>
					);
				})}
			</Stack>
		</Box>
	);
};

export default ExerciseVideo;
