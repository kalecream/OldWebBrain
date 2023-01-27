import styles from "../styles/Home.module.css";
import Page from "../containers/layout/page";
import Services from "../data/serviceData";
import styled from "@emotion/styled";
import { Colors } from "../styles/colors";
import "animate.css";
import {
	Section,
	Container,
	Button,
	PrimaryButton,
	Card,
	CardTitle,
} from "../components/global";

const Sections = [
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
	row-gap: 2rem;

	@media (max-width: 550px) {
		padding: 0 1rem;
	}
`;

// const Card = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	align-items: center;
// 	width: 24%;
// 	min-width: 300px;
// 	max-width: 500px;
// 	min-height: 500px;
// 	max-height: 800px;
// 	background-color: ${Colors.primary};
// 	border-radius: 10px;
// 	border: 8px solid ${Colors.darkShade};
// 	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// 	transition: all 0.3s ease-in-out;
// 	padding: 0 1rem;
// 	&:hover {
// 		transform: translateY(-5px);
// 		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
// 	}
// `;

const ServiceDescription = styled.p`
	font-weight: 400;
	margin-bottom: 1rem;
	padding: 0 1.5rem;
	@prefers-color-scheme: dark {
		color: ${Colors.darkShade};
	}

	@media (prefers-color-scheme: light) {
		color: ${Colors.lightShade};
	}
`;

const ServiceCost = styled.p`
	font-size: 1.2rem;
	font-weight: 400;
	margin-bottom: 1rem;
	outline: none;
	border: none;
	color: ${Colors.lightShade};
`;

const BlockContainer = styled(Container)`
	place-items: center;
	display: grid;
	height: fit-content;
`;

export default function Blog() {
	return (
		<Page title="Let's Work Together">
			<Section>
				<Container style={{ margin: 0 }}>
					<p
						className="animate__animated animate__fadeInUp"
						style={{ maxWidth: "55rem", textAlign: "justify" }}
					>
						As a freelancer, I offer a variety of services to meet the needs of
						my clients. These services include:
					</p>

					<CardContainer>
						<Card className="animate__animated animate__fadeIn animated_delay-2s">
							<CardTitle>Customer Support</CardTitle>
							<ServiceDescription>
								Provide assistance to a variety of customers and adapt to
								different communication styles.
							</ServiceDescription>
							<ServiceCost>$20/hour</ServiceCost>
							<Button href=" mailto:mail@kalecream.com?bcc=sabrinamedwinter@gmail.com&subject=Customer%20Support%20Proposal&body=Dear%20KaleCream%2C%0D%0A%0D%0ADear%20%5BFreelancer%5D%2C%0D%0A%0D%0AI%20am%20writing%20to%20inquire%20about%20the%20possibility%20of%20commissioning%20your%20customer%20support%20services%20for%20my%20business.%0D%0A%0D%0AI%20am%20seeking%20a%20reliable%20and%20efficient%20customer%20support%20freelancer%20to%20handle%20a%20variety%20of%20tasks%20such%20as%20responding%20to%20customer%20inquiries%2C%20troubleshooting%20issues%2C%20and%20providing%20general%20support.%20I%20am%20open%20to%20discussing%20specific%20details%20and%20negotiating%20a%20rate%20that%20works%20for%20both%20of%20us.%0D%0A%0D%0AI%20understand%20that%20you%20may%20be%20busy%20with%20other%20projects%2C%20so%20I%20wanted%20to%20reach%20out%20as%20soon%20as%20possible%20to%20see%20if%20you%20might%20be%20interested%20in%20working%20with%20me%20on%20a%20long-term%20basis.%20If%20you%20are%20available%20and%20interested%2C%20I%20would%20love%20to%20discuss%20the%20project%20in%20further%20detail%20and%20see%20if%20we%20might%20be%20able%20to%20collaborate.%0D%0A%0D%0AThank%20you%20for%20considering%20my%20request.%20I%20look%20forward%20to%20potentially%20working%20with%20you.%0D%0A%0D%0ASincerely%2C%0D%0A%5BYour%20Name%5D ">
								Discuss Details
							</Button>
						</Card>
						<Card className="animate__animated animate__fadeIn animated_delay-2s">
							<CardTitle>3D Modelling</CardTitle>
							<ServiceDescription>
								Accurate and visually appealing models simple 3D model for
								visualization or design purposes
							</ServiceDescription>
							<ServiceCost>$150/project</ServiceCost>
							<Button href=" mailto:mail@kalecream.com?bcc=sabrinamedwinter@gmail.com&subject=3D%20Modelling%20Proposal&body=Dear%20KaleCream%2C%0D%0A%0D%0ADear%20%5BFreelancer%5D%2C%0D%0A%0D%0AI%20am%20writing%20to%20inquire%20about%20the%20possibility%20of%20commissioning%20your%203D%20modeling%20services%20for%20a%20project%20I%20am%20working%20on.%20I%20have%20been%20a%20fan%20of%20your%20work%20for%20some%20time%20and%20believe%20that%20your%20skills%20and%20style%20would%20be%20the%20perfect%20fit%20for%20the%20project%20I%20have%20in%20mind.%0D%0A%0D%0AThe%20project%20in%20question%20would%20involve%20creating%20%5Bdescription%20of%20project%5D%20and%20I%20am%20willing%20to%20offer%20a%20custom%20budget%20to%20ensure%20that%20we%20can%20bring%20my%20vision%20to%20life.%20I%20am%20flexible%20on%20budget%20and%20would%20be%20happy%20to%20discuss%20specific%20details%20and%20negotiate%20a%20rate%20that%20works%20for%20both%20of%20us.%0D%0A%0D%0AI%20understand%20that%20you%20may%20be%20busy%20with%20other%20projects%2C%20so%20I%20wanted%20to%20reach%20out%20as%20soon%20as%20possible%20to%20see%20if%20you%20might%20be%20interested%20in%20working%20with%20me%20on%20this%20project.%20If%20you%20are%20available%20and%20interested%2C%20I%20would%20love%20to%20discuss%20the%20project%20in%20further%20detail%20and%20see%20if%20we%20might%20be%20able%20to%20collaborate.%0D%0A%0D%0AThank%20you%20for%20considering%20my%20request.%20I%20look%20forward%20to%20potentially%20working%20with%20you.%0D%0A%0D%0ASincerely%2C%0D%0A%5BYour%20Name%5D ">
								Discuss Details
							</Button>
						</Card>
						<Card className="animate__animated animate__fadeIn animated_delay-2s">
							<CardTitle>Website Design</CardTitle>
							<ServiceDescription>
								Creation of custom websites that are visually appealing,
								user-friendly, and optimized for search engines.
							</ServiceDescription>
							<ServiceCost>$300/project</ServiceCost>
							<Button href=" mailto:mail@kalecream.com?bcc=sabrinamedwinter@gmail.com&subject=Website%20Design%20Proposal&body=Dear%20KaleCream%2C%0D%0A%0D%0ADear%20%5BFreelancer%5D%2C%0D%0A%0D%0AI%20am%20writing%20to%20inquire%20about%20the%20possibility%20of%20commissioning%20your%20services%20for%20a%20project%20I%20am%20working%20on.%0D%0A%0D%0AThe%20project%20in%20question%20would%20involve%20creating%20%5Bdescription%20of%20project%5D%20and%20I%20am%20willing%20to%20offer%20a%20custom%20budget%20to%20ensure%20that%20we%20can%20bring%20my%20vision%20to%20life.%20I%20am%20flexible%20on%20budget%20and%20would%20be%20happy%20to%20discuss%20specific%20details%20and%20negotiate%20a%20rate%20that%20works%20for%20both%20of%20us.%0D%0A%0D%0AI%20understand%20that%20you%20may%20be%20busy%20with%20other%20projects%2C%20so%20I%20wanted%20to%20reach%20out%20as%20soon%20as%20possible%20to%20see%20if%20you%20might%20be%20interested%20in%20working%20with%20me%20on%20this%20project.%20If%20you%20are%20available%20and%20interested%2C%20I%20would%20love%20to%20discuss%20the%20project%20in%20further%20detail%20and%20see%20if%20we%20might%20be%20able%20to%20collaborate.%0D%0A%0D%0AThank%20you%20for%20considering%20my%20request.%20I%20look%20forward%20to%20potentially%20working%20with%20you.%0D%0A%0D%0ASincerely%2C%0D%0A%5BYour%20Name%5D ">
								Discuss Details
							</Button>
						</Card>
						<Card className="animate__animated animate__fadeIn animated_delay-2s">
							<CardTitle>Website Creation</CardTitle>
							<ServiceDescription>
								{" "}
								Creation of a custom and effective website that meets the needs
								of your business or personal project.
							</ServiceDescription>
							<ServiceCost>$1000/project</ServiceCost>
							<Button href=" mailto:mail@kalecream.com?bcc=sabrinamedwinter@gmail.com&subject=Website%20Creation%20Proposal&body=Dear%20KaleCream%2C%0D%0A%0D%0ADear%20%5BFreelancer%5D%2C%0D%0A%0D%0AI%20am%20writing%20to%20inquire%20about%20the%20possibility%20of%20commissioning%20your%20services%20for%20a%20project%20I%20am%20working%20on.%0D%0A%0D%0AThe%20project%20in%20question%20would%20involve%20creating%20%5Bdescription%20of%20project%5D%20and%20I%20am%20willing%20to%20offer%20a%20custom%20budget%20to%20ensure%20that%20we%20can%20bring%20my%20vision%20to%20life.%20I%20am%20flexible%20on%20budget%20and%20would%20be%20happy%20to%20discuss%20specific%20details%20and%20negotiate%20a%20rate%20that%20works%20for%20both%20of%20us.%0D%0A%0D%0AI%20understand%20that%20you%20may%20be%20busy%20with%20other%20projects%2C%20so%20I%20wanted%20to%20reach%20out%20as%20soon%20as%20possible%20to%20see%20if%20you%20might%20be%20interested%20in%20working%20with%20me%20on%20this%20project.%20If%20you%20are%20available%20and%20interested%2C%20I%20would%20love%20to%20discuss%20the%20project%20in%20further%20detail%20and%20see%20if%20we%20might%20be%20able%20to%20collaborate.%0D%0A%0D%0AThank%20you%20for%20considering%20my%20request.%20I%20look%20forward%20to%20potentially%20working%20with%20you.%0D%0A%0D%0ASincerely%2C%0D%0A%5BYour%20Name%5D ">
								{" "}
								Discuss Details
							</Button>
						</Card>
					</CardContainer>

					<BlockContainer>
						<p
							className="animate__animated animate__fadeInUp"
							style={{ maxWidth: "55rem", textAlign: "justify" }}
						>
							I understand that budget can be a major concern for my clients.
							That's why I offer flexible pricing options to ensure that I can
							meet the budget of every client.
						</p>
						<p
							className="animate__animated animate__fadeInUp"
							style={{ maxWidth: "55rem", textAlign: "justify" }}
						>
							I offer a range of services at various price points, so you can
							choose the level of support that fits your budget. I am also open
							to negotiating rates for larger projects or longer-term
							engagements. I believe that everyone should have access to
							high-quality services, regardless of budget. That's why I am
							committed to finding solutions that work for you and your
							financial needs.
						</p>
						<p
							className="animate__animated animate__fadeInUp"
							style={{ maxWidth: "55rem", textAlign: "justify" }}
						>
							Please don't hesitate to contact me to discuss your budget and how
							I can help you achieve your goals within your means. I look
							forward to working with you! I am always open to discussing new
							project ideas and finding ways to meet the unique needs of my
							clients. Please do not hesitate to contact me to learn more about
							how I can help you achieve your goals. I currently accept payment
							for projects through{" "}
							<a href="https://paypal.me/SabrinaMedwinter?locale.x=en_US">
								Paypal
							</a>{" "}
							or Payoneer.
						</p>
					</BlockContainer>

					<PrimaryButton
						style={{ margin: "0 auto", width: "85%", whiteSpace: "normal", lineHeight: "1.5" }}
						className="animate__animated animate__fadeInUp animated_delay-2s"
						title="This button sends me an e-mail"
						href=" mailto:mail@kalecream.com?bcc=sabrinamedwinter@gmail.com&subject=Custom%20Budget%20%7C%20Project%20Comission&body=Dear%20KaleCream%2C%0D%0A%0D%0AI%20am%20writing%20to%20inquire%20about%20the%20possibility%20of%20commissioning%20a%20%5Bproject%20type%5D%20from%20you.%0D%0A%0D%0AThe%20project%20in%20question%20would%20involve%20creating%20%5Bdescription%20of%20project%5D%20and%20I%20am%20willing%20to%20offer%20a%20custom%20budget%20to%20ensure%20that%20we%20can%20bring%20my%20vision%20to%20life.%20I%20am%20flexible%20on%20budget%20and%20would%20be%20happy%20to%20discuss%20specific%20details%20and%20negotiate%20a%20rate%20that%20works%20for%20both%20of%20us.%0D%0A%0D%0AI%20understand%20that%20you%20may%20be%20busy%20with%20other%20projects%2C%20so%20I%20wanted%20to%20reach%20out%20as%20soon%20as%20possible%20to%20see%20if%20you%20might%20be%20interested%20in%20working%20with%20me%20on%20this%20project.%20If%20you%20are%20available%20and%20interested%2C%20I%20would%20love%20to%20discuss%20the%20project%20in%20further%20detail%20and%20see%20if%20we%20might%20be%20able%20to%20collaborate.%0D%0A%0D%0AThank%20you%20for%20considering%20my%20request.%20I%20look%20forward%20to%20potentially%20working%20with%20you.%0D%0A%0D%0ASincerely%2C%0D%0A%5BYour%20Name%5D "
					>
						I would like to comission a service with a custom budget.
					</PrimaryButton>
				</Container>
			</Section>
		</Page>
	);
}
