import { FaArrowUp } from 'react-icons/fa6';
import styles from '@styles/modules/BackToTop.module.scss';
import { useEffect, useRef } from 'react';

export const BackToTop = () => {
	const TopButton = useRef(null);

	const scrollDetect = () => {
		var lastScroll = 0;

		window.onscroll = () => {
			let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

			if (currentScroll > 0 && lastScroll <= currentScroll) {
				lastScroll = currentScroll;
				// console.log("bottom");
				TopButton.current.style.display = 'none';
			} else {
				lastScroll = currentScroll;
				// console.log("top");
				if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
					TopButton.current.style.display = 'flex';
				} else {
					TopButton.current.style.display = 'none';
				}
			}
		};
	};

	scrollDetect();

	const topFunction = () => {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	};

	const handleClick = () => {
		useEffect(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}, []);
	};

	return (
		<div ref={TopButton} className={`${styles.arrow}`} onClick={handleClick}>
			<FaArrowUp title="Back to Top!" aria-label="Jump back to the top of the page" />
		</div>
	);
};
