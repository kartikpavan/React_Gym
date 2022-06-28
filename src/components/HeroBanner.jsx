import { Box, Stack, Typography, Button } from '@mui/material';
import Banner from '../assets/images/banner.png';

export function HeroBanner() {
	return (
		<Box
			sx={{
				mt: { lg: '212px', xs: '70px' },
				ml: { sm: '50px' },
			}}
			position="relative"
			p="20px"
		>
			<Typography color="#ff2725" fontWeight="600" fontSize="26px">
				Fitness Club
			</Typography>
			<Typography
				fontWeight="700"
				sx={{ fontSize: { lg: '44px', xs: '40px' } }}
				mb="23px"
				mt="30px"
			>
				Push harder. <br /> Go longer. ...
			</Typography>
			<Typography fontSize="22px" lineHeight="35px" mb={4}>
				Check out More
			</Typography>
			<Button variant="contained" color="error" href="#exercises" p="10px">
				View More Exercises
			</Button>
			<Typography
				sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }}
				fontSize="200px"
				fontWeight={700}
				color="#ff2625"
			>
				Exercises
			</Typography>
			<img src={Banner} alt="bannerImage" className="hero-banner-img" />
		</Box>
	);
}
