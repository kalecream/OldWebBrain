// 'use client';
// import { useEffect } from 'react';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {

	// useEffect(() => {
	// 	console.error(error);
	// }, [error]);

	return (
		<section>
			<p>Oh no, something went wrong... maybe refresh?</p>
		</section>
	);
}

export default Error;
