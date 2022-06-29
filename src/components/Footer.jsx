import { Box, Stack, Typography } from '@mui/material';

export function Footer() {
	return (
		<Box mt="80px" bgColor="#fff3f4">
			<Stack gap="40px" alignItems="center" px="40px" pt="24px">
				<Typography variant="h6" fontWeight="bold" pb="40px">
					Made with &#x1F9E1; by Kartik Pavan
				</Typography>
			</Stack>
		</Box>
	);
}
