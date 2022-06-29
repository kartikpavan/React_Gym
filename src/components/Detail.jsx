import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import equipmentImage from '../assets/icons/equipment.png';
import targetImage from '../assets/icons/target.png';

const Detail = ({ exerciseDetail }) => {
	const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

	const extraDetails = [
		{ icon: BodyPartImage, name: bodyPart },
		{ icon: equipmentImage, name: equipment },
		{ icon: targetImage, name: target },
	];

	return (
		<Stack
			gap="60px"
			sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}
		>
			<img
				src={gifUrl}
				alt={name}
				loading="lazy"
				style={{ width: '729px', height: '742px' }}
			/>
			<Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
				<Typography variant="h3" fontWeight="bold">
					{typeof name === 'string'
						? name.charAt(0).toUpperCase() + name.slice(1)
						: name}
				</Typography>
				<Typography>
					Exercises keep you strong. {name} is one of the best exercises to
					target your {target} . It will help you improve your {bodyPart}
				</Typography>
				{extraDetails.map((item) => {
					return (
						<Stack
							key={item.name}
							direction="row"
							gap="24px"
							alignItems="center"
						>
							<Button
								sx={{
									background: '#fff2db',
									borderRadius: '50%',
									width: '100px',
									height: '100px',
								}}
							>
								<img
									src={item.icon}
									alt={item.name}
									style={{ width: '50px', height: '50px' }}
								/>
							</Button>
							<Typography variant="h5" textTransform="capitalize">
								{item.name}
							</Typography>
						</Stack>
					);
				})}
			</Stack>
		</Stack>
	);
};

export default Detail;
