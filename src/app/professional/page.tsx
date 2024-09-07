import Link from 'next/link';
import { ServiceCard } from './ServiceCard';

const ProfessionalPage = () => {
	return (
		<>
			<section>
				<h1>Services</h1>
				<p className="prose center" style={{margin: '-1rem auto'}}>
					If you're interested in any service offered on this page, please look at the portfolio for each below and{' '}
					<Link href="mailto:sabrinamedwinter.com">reach out to me via email</Link>.
				</p>
				<ServiceCard />
			</section>
		</>
	);
};

export default ProfessionalPage;
