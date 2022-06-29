import React from 'react';
import { Stack } from '@mui/material';
import { Grid } from 'react-loader-spinner';

const Loader = () => {
	return (
		<Stack
			direction="row"
			justifyContent="center"
			alignItems="center"
			width="100%"
		>
			<Grid height="100" width="100" color="grey" />
		</Stack>
	);
};

export default Loader;
