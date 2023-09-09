import { useState } from 'react';
import styles from './AvailableForWork.module.css';

export const AvailableForWork = () => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const handleMouseClick = () => {
		window.location.href = '/services';
	};

	return (
		<button
			className={styles['work-button'] + `animated-button  ${isHovered ? 'hovered' : ''}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleMouseClick}
		>
			{!isHovered && <span>Available For Work</span>}
			{isHovered && <span className={`animated-button-text in`}>Commission Me!</span>}
		</button>
	);
};

export default AvailableForWork;
