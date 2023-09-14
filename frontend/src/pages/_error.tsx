import Page from '@containers/layout/page';
import styles from '@styles/modules/Errors.module.scss';
import Link from 'next/link';

export const Error = ({ statusCode }) => {
	return (
		<Page>
			<section className={styles.container}>
				<div className={styles.error__container}>
					<h1 className={styles.error__code}>{statusCode}</h1>
					<div className={styles.error__description__container}>
						<h2 className={styles.error_description}>
							{statusCode ? (
								
							statusCode === 404 ? (
								`This page could not be found`
								) : `An error occurred on server`
							)
							 :
							'An error occurred on client'
						}
						</h2 >
							<Link href="/">Back to Home</Link>
					</div>
				</div>
			</section>
		</Page>
	);
};

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
