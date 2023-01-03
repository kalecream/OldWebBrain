import styles from "../styles/Home.module.css";
import Page from "../containers/layout/page";
import Services from "../data/serviceData";
import styled from "@emotion/styled";
import { Colors } from "../styles/colors";

const Section = [
	"Illustration",
	"Websites",
	"Automation",
	"Consulting",
	"Administration",
	"Content Creation",
];

const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 2rem 0;
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 25%;
	min-width: 350px;
	max-width: 500px;
	min-height: 300px;
	max-height: 500px;
	background-color: ${Colors.primary};
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease-in-out;
	padding: 0 1rem;
	margin: 1rem;
	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	}
`;

const ServiceTitle = styled.h2`
	letter-spacing: 1px;
	font-size: 2rem;
	font-weight: 600;
	margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
	font-weight: 400;
	margin-bottom: 1rem;
	padding: 0 1.5rem;
`;

const ServiceCost = styled.button`
	font-size: 1.5rem;
	font-weight: 400;
	margin-bottom: 1rem;
	outline: none;
	border: none;
	background-color: ${Colors.lightShade};
	color: ${Colors.primary};
`;

const ServiceCard = ({ service }) => {
	return (
		<Card className={styles.service}>
			<ServiceTitle>{service.title}</ServiceTitle>
			<ServiceDescription>{service.description}</ServiceDescription>
			<ServiceCost>${service.cost}</ServiceCost>
		</Card>
	);
};

export default function Blog() {
	return (
		<Page title="Services">
			<section>
				<CardContainer>
					{Services.map((service, index) => {
						return <ServiceCard service={service} key={index} />;
					})}
				</CardContainer>
			</section>
			<section>
				<p>
					As a freelancer, I offer a variety of services to meet the needs of my
					clients. These services include:
				</p>
				<CardContainer>
					<Card className={styles.service}>
						<ServiceTitle>Customer Support</ServiceTitle>
						<ServiceDescription>
							I am comfortable working with a variety of customers and am able
							to adapt to different communication styles.
						</ServiceDescription>
						<ServiceCost>$15/hour</ServiceCost>
						{/*  */}
					</Card>
				</CardContainer>
				<p>I am always open to discussing new project ideas and finding ways to meet the unique needs of my clients. Please do not hesitate to contact me to learn more about how I can help you achieve your goals.</p>
				<p>
				As a freelancer, I understand that budget can be a major concern for my clients. That's why I offer flexible pricing options to ensure that I can meet the budget of every client.<br/><br/>

I offer a range of services at various price points, so you can choose the level of support that fits your budget. I am also open to negotiating rates for larger projects or longer-term engagements.<br/><br/>

I believe that everyone should have access to high-quality services, regardless of budget. That's why I am committed to finding solutions that work for you and your financial needs.<br/>

Please don't hesitate to contact me to discuss your budget and how I can help you achieve your goals within your means. I look forward to working with you!<br/>
				</p>
			</section>
		</Page>
	);
}
