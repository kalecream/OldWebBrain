import Page from '@containers/layout/page';
// import Services from "../data/serviceData";
import 'animate.css';
import Link from 'next/link';
// import {WorkExperience} from '@components/work/WorkExperience';
// import prisma from '@utils/prisma'; 
import styles from '@components/services/Services.module.scss';

// const services = await prisma.user.create({
//     data: {
//         username,
//         emailEncrypted: encrypted,
//         emailIv: iv,
//         password: hashedPassword,
//         profile: {
//             create: {}, // create a UserProfile that assumes the created user's UUID as a relation
//         },
//     },
//     select: {
//         id: true,
//     },
// });

const Sections = [
	{
		name: 'Illustration',
		description: 'Accurate and visually appealing models simple 3D model for visualization or design purposes',
		cost: '$20/hour',
		link: '/services/illustration'
	},
	{
		name: 'Website Development',
		description:
			'Creation of custom websites that are visually appealing, user-friendly, and optimized for search engines to meet your business needs or for personal use.',
		cost: '$20/hour',
		link: '/services/website-development'
	},
	{
		name: 'Automation',
		description: 'Create custom automation for your business or personal use.',
		cost: '$20/hour',
		link: '/services/automation'
	},
	{
		name: 'Administration',
		description: 'Create custom administration for your business or personal use.',
		cost: '$20/hour',
		link: '/services/administration'
	}
];

export const Services = () => {
	return (
		<Page>
			<h1>Services</h1>
			<section>
				<div className='pancake-container'>
					{Sections.map((section) => (
						<Link className='pancake-child' href={section.link}>
							<img width={100} height={100} alt={''} src={`/img/Services/${section.name}.svg`} />
							<h2>{section.name}</h2>
							{/* <p>{section.description}</p> */}
						</Link>
					))}
				</div>

				<div className={styles.terms}>
					<p className="animate__animated animate__fadeInUp">
						I understand that budget can be a major concern for my clients. That's why I offer flexible pricing options
						to ensure that I can meet the budget of every client.
					</p>
					<p className="animate__animated animate__fadeInUp">
						I offer a range of services at various price points, so you can choose the level of support that fits your
						budget. I am also open to negotiating rates for larger projects or longer-term engagements. I believe that
						everyone should have access to high-quality services, regardless of budget. That's why I am committed to
						finding solutions that work for you and your financial needs.
					</p>
					<p className="animate__animated animate__fadeInUp">
						Please don't hesitate to contact me to discuss your budget and how I can help you achieve your goals within
						your means. I look forward to working with you! I am always open to discussing new project ideas and finding
						ways to meet the unique needs of my clients. Please do not hesitate to contact me to learn more about how I
						can help you achieve your goals. I currently accept payment for projects through{' '}
						<a href="https://paypal.me/SabrinaMedwinter?locale.x=en_US">Paypal</a> or Payoneer.
					</p>
				</div>

				{/* <WorkExperience /> */}
			</section>
		</Page>
	);
}

export default Services;
