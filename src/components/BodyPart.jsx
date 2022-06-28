import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

export function BodyPart({ item, bodyPart, setBodypart }) {
	return (
		<Stack
			onClick={() => {
				setBodypart(item);
				window.scrollTo({ top: '1800', left: '100', behavior: 'smooth' });
			}}
			type="button"
			alignItems="center"
			justifyContent="center"
			sx={{
				borderTop: bodyPart === item ? '4px solid #ff2625' : ' ',
				backgroundColor: '#fff',
				borderBottomLeftRadius: '20px',
				width: '270px',
				height: '280px',
				gap: '47px',
				cursor: 'pointer',
			}}
		>
			<img
				src={Icon}
				alt="Thumbnail"
				style={{ width: '40px', height: '40px' }}
			/>
			<Typography textTransform="capitalize" fontSize="24px" fontWeight="bold">
				{item}
			</Typography>
		</Stack>
	);
}
