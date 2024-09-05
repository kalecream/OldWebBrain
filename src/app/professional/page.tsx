import Link from 'next/link';
import { ServiceCard } from './ServiceCard';

const ProfessionalPage = () => {
	return (
		<>
			<section>
				<h1>Services</h1>
				<p className="prose center">
					If you're interested in any service offered on this page, please look at the portfolio for each below and{' '}
					<Link href="mailto:sabrinamedwinter.com">reach out to me via email</Link>.
				</p>
				<ServiceCard />
			</section>
			<section>
				The process for any of these services take similar steps:
				<div>
					<h2>Initial Consult</h2>
					<p>Where we identify your desired outcome from the service, discuss strategy, frequency of updates, etc</p>
				</div>
				<div>
					<h2>Design</h2>
					<p>Either you show me a design you would like, I create a design for you or hire a web designer before I begin building your product.</p>
				</div>
				<div>
					<h2>Build</h2>
					<p>This is where I create your product! And once you give the sign-off, it's time to...</p>
				</div>
				<div>
					<h2>Launch</h2>
					<p>You are entitled to post-launch maintence for 6 months, support and training to tackle small problems that may come up.</p>
				</div>
			</section>
		</>
	);
};

export default ProfessionalPage;
