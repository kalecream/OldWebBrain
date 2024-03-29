import Projects from '@data/projectsData';
import styled from '@emotion/styled';
import { FaToolbox, FaLanguage, FaGithub } from 'react-icons/fa6';
import Link from 'next/link';
import button from '@styles/modules/Button.module.scss';

// TODO convert to scss modules
const ProjectCard = styled.div`
  min-width: 400px;
  width: 310px;
  margin: 20px 0;

  // border: 1px solid var(--faint);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  background-color: var(--body);
  box-shadow: var(--box-shadow);
  transition: all 0.3s ease-in-out;
  // background-image: url(${(props: { image: string }) => props.image});
  // background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),
  //   url(${(props: { image: string }) => props.image});

  &:hover {
    animation: hover 0.3s ease-in-out forwards;
    transform: rotate(1.02deg) scale(0.95);
  }

  @keyframes hover {
    0% {
      transform: rotate(0deg) scale(1);
    }
    100% {
      transform: rotate(1.02deg) scale(0.95);
    }

  @media (max-width: 425px) {
    width: 275px;
  }

  @media (min-width: 768px) {
  
  }

  @media (min-width: 1024px) {
  }
`;

const Overlay = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 0.5rem;
	// background: linear-gradient(140deg, var(--primary), var(--secondary));
	display: grid;
	place-items: center;
	top: 0;
	left: 0;
	z-index: 1;
	padding: 0.5rem;
	color: var(--text);

	@media (max-width: 768px) {
		width: 100%;
		padding: 0;
	}
`;
const ProjectTitle = styled.h5`
	color: var(--primary);
	align-content: flex-start;
	margin: 0.5rem 0;
	margin-top: 2rem;
`;

const ProjectDate = styled.small`
	opacity: 0.8;
`;

const ProjectDescription = styled.p`
	height: 150px;
	width: 80%;
	line-height: 1.4;
	opacity: 0.8;
	margin: 1rem 0;

	@media (max-width: 768px) {
		padding: 0;
		margin: 0.25rem 0;
	}
`;

const ProjectTechnologies = styled.div`
	width: 80%;
	padding: 0.5rem 0;
`;

const ProjectLanguages = styled.div`
	width: 80%;
	padding: 0.5rem 0;
`;

const ProjectDataPoint = styled.ul`
	color: var(--text);
	font-size: 0.7rem;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	list-style: none;
	gap: 0.2rem;

	& li a:hover {
		color: var(--background);
	}

	& li a {
		padding: var(--padding-xtra-small);
		border: 1px solid var(--faint);
		border-radius: var(--border-radius);
		color: var(--text);
		transition: all 0.3s ease-in-out;
	}

	& li {
		margin: 0.1rem;
		padding: 0;
	}
`;

const Emoji = styled.span`
	margin-right: 0.5rem;
	margin-top: 0.5rem;

	@media (max-width: 768px) {
		margin: 0.15rem;
	}
`;

const LatestProjects = () => {
	return (
		<section>
			<div className='thirds'>
					<h2 className="section-title">Projects !</h2>
				<div style={{ overflow: 'hidden' }}>
					{Projects.slice(0, 2).map(
						(project) =>
							project.display && (
								<ProjectCard image={project.image ? project.image.trim() : ''} key={project.id}>
									{/* <ProjectImage src={project.image} alt="" /> */}
									<Overlay>
										<ProjectTitle>{project.title}</ProjectTitle>
										<ProjectDate>{project.created}</ProjectDate>
										<ProjectDescription>{project.description}</ProjectDescription>
										<ProjectTechnologies>
											{project.technology ? (
												<ProjectDataPoint title="Technologies">
													<Emoji>
														<FaToolbox />
													</Emoji>
													{project.technology?.map((tech, index) => <li key={index}>{tech}</li>)}
												</ProjectDataPoint>
											) : null}
										</ProjectTechnologies>
										<ProjectLanguages>
											{project.language ? (
												<ProjectDataPoint>
													<Emoji>
														<FaLanguage />
													</Emoji>
													{project.language?.map((lang, index) => (
														<li key={index}>
															<a title="Clicking this does nothing right now. Sorry.">{lang}</a>
														</li>
													))}
												</ProjectDataPoint>
											) : null}
										</ProjectLanguages>
										<div
											className="btn-group"
											style={{
												margin: '1rem 0',
												display: 'flex',
												justifyContent: 'space-between',
												alignItems: 'center'
											}}
										>
											{project.link ? (
												<Link className={button.secondary}  href={project.link} target={'_blank'}>
													<FaGithub />
												</Link>
											) : null}
										</div>
									</Overlay>
								</ProjectCard>
							)
					)}
					<div className="more">
						<Link href="/projects">More Projects ⟶</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LatestProjects;
