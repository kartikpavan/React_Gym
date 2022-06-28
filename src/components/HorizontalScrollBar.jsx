import { React, useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { BodyPart } from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ArrowRight from '../assets/icons/right-arrow.png';
import ArrowLeft from '../assets/icons/left-arrow.png';

//! Code Copied from the docs
function LeftArrow() {
	const { scrollPrev } = useContext(VisibilityContext);
	return (
		<Typography onClick={() => scrollPrev()}>
			<img src={ArrowLeft} alt="arrows" style={{ cursor: 'pointer' }} />
		</Typography>
	);
}

function RightArrow() {
	const { scrollNext } = useContext(VisibilityContext);
	return (
		<Typography onClick={() => scrollNext()}>
			<img src={ArrowRight} alt="arrow" style={{ cursor: 'pointer' }} />
		</Typography>
	);
}

export function HorizontalScrollBar({ data, bodyPart, setBodyPart }) {
	return (
		<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
			{data.map((item) => {
				return (
					<Box
						key={item.id || item}
						itemId={item.id || item}
						title={item.id || item}
						m="0 40px"
					>
						<BodyPart
							item={item}
							bodyPart={bodyPart}
							setBodypart={setBodyPart}
						/>
					</Box>
				);
			})}
		</ScrollMenu>
	);
}
