'use client';
import { useRef, useEffect } from 'react';
import style from './ServiceCard.module.scss';
import Link from 'next/link';

const Card = ({ id, href, heading }) => {
	const cardRef = useRef(null);
	const glowRef = useRef(null);
	let bounds;

	const rotateToMouse = (e) => {
		const mouseX = e.clientX;
		const mouseY = e.clientY;
		const leftX = mouseX - bounds.x;
		const topY = mouseY - bounds.y;
		const center = {
			x: leftX - bounds.width / 2,
			y: topY - bounds.height / 2,
		};
		const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

		if (cardRef.current) {
			cardRef.current.style.transform = `
		  scale3d(1.07, 1.07, 1.07)
		  rotate3d(
			${center.y / 100},
			${-center.x / 100},
			0,
			${Math.log(distance) * 2}deg
		  )
		`;
		}

		if (glowRef.current) {
			glowRef.current.style.backgroundImage = `
		  radial-gradient(
			circle at
			${center.x * 2 + bounds.width / 2}px
			${center.y * 2 + bounds.height / 2}px,
			#ffffff55,
			#0000000f
		  )
		`;
		}
	};

	const handleMouseEnter = () => {
		if (cardRef.current) {
			bounds = cardRef.current.getBoundingClientRect();
			document.addEventListener('mousemove', rotateToMouse);
		}
	};

	const handleMouseLeave = () => {
		document.removeEventListener('mousemove', rotateToMouse);
		if (cardRef.current) {
			cardRef.current.style.transform = '';
		}
		if (glowRef.current) {
			glowRef.current.style.backgroundImage = '';
		}
	};

	useEffect(() => {
		const cardElement = cardRef.current;
		if (cardElement) {
			cardElement.addEventListener('mouseenter', handleMouseEnter);
			cardElement.addEventListener('mouseleave', handleMouseLeave);
		}

		return () => {
			if (cardElement) {
				cardElement.removeEventListener('mouseenter', handleMouseEnter);
				cardElement.removeEventListener('mouseleave', handleMouseLeave);
			}
		};
	}, []);

	return (
		<Link href={href} ref={cardRef} className={style.card}>
			<div ref={glowRef} className={style.glow}>
				<div className={style['card-content']}>
					<h1>{heading}</h1>
				</div>
			</div>
		</Link>
	);
};

export const ServiceCard = () => {
	return (
		<div className={style['card-container']}>
			<Card id={1} href="professional/web-development" heading={`Develop`} />
			<Card id={2} href="professional/graphic-design" heading={`Design`} />
		</div>
	);
};
