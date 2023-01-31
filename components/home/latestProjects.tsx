import * as React from "react";
import { Button, Container, Section } from "../global";
import Projects from "../../data/projectsData";
import styled from "@emotion/styled";

interface Project {
	id: number;
	title: string;
	description: string;
	image: string;
	created_at: string;
}

const Thirds = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 1rem;
	margin: 1rem 0;
	width: 100%;

	@media (max-width: 480px) {
		flex-direction: column;
		width: 100%;
	}

	@media (max-width: 1100px) {
		flex-direction: row;

		& nth-child(1) {
			width: 33%;
		}

		& nth-child(2) {
			width: 66%;
		}
	}
`;

const ProjectCard = styled.div`
	position: relative;
	width: 350px;
	height: 500px;

    border-radius: 0.5rem;
	background-color: #fff;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease-in-out;
	object-fit: cover;
    // background-image: url(${(props: { image: string }) => props.image});
    background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9) ), url(${(props: { image: string }) => props.image});

    &:hover {
        transform: scale(1.05);
    }
`;

//TODO: Move to Basics.tsx
const Overlay = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 0.5rem;
	background-color: rgba(0, 0, 0, 0.5);
	position: absolute;
	display: grid;
	place-items: center;
	top: 0;
	left: 0;
	z-index: 1;
	gap: 1rem;
	padding: 2rem;
    color: #fff;
`;

const LatestProjects = () => {
	return (
		<Section>
			<Thirds>
				<Container style={{ textAlign: "center", margin: "1em 0" }}>
					<h2>My Latest Projects !</h2>
				</Container>
				<Container style={{ overflow: "hidden" }}>
					{Projects.map((project) => (
                        project.display && (
						<ProjectCard
							image={project.image ? project.image : "#G5G5G5"}
							key={project.id}
							className="col-md-4"
						>
							<Overlay>
								<div className="card-body">
									<h5 className="card-title">{project.title}</h5>
									<small className="text-muted">{project.created}</small>
									<p style={{ textAlign: "start"}}>{project.description}</p>
									<div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
										<div className="btn-group">
											<Button
												href={`/projects/${project.id}`}
												style={{ width: "100%"}}
											>
												View
											</Button>
										</div>
									</div>
								</div>
							</Overlay>
						</ProjectCard>)
					))}
				</Container>
			</Thirds>
		</Section>
	);
};

export default LatestProjects;
