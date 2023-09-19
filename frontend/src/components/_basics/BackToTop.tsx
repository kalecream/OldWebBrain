import { FaArrowUp } from 'react-icons/fa6';
import styles from '@styles/modules/BackToTop.module.scss';
import { useEffect, useRef } from 'react';

export const isBrowser = () => typeof window !== 'undefined';

export const BackToTop = () => {
	const TopButton = useRef(null);

	const scrollDetect = () => {
		var lastScroll = 0;

		if (!isBrowser()) return;
		window.onscroll = () => {
			let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

			if (currentScroll > 0 && lastScroll <= currentScroll) {
				lastScroll = currentScroll;
				TopButton.current.style.display = 'none';
			} else {
				lastScroll = currentScroll;
				if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
					TopButton.current.style.display = 'flex';
				} else {
					TopButton.current.style.display = 'none';
				}
			}
		};
	};

	scrollDetect();

	const handleClick = () => {
		if (!isBrowser()) return;
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div ref={TopButton} className={`${styles.arrow}`} onClick={handleClick}>
			<FaArrowUp title="Back to Top!" aria-label="Jump back to the top of the page" />
		</div>
	);
};
