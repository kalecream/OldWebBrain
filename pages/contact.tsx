import { Container, Section } from "../components/global";
import { Page } from "../containers/layout";
import { MediaProfiles } from "../components/socialmedia";
import styled from "@emotion/styled";
import Image from "next/image";
import { Brands } from "../assets";
import { Colors } from "../styles/colors";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { useForm } from "./hooks/useForm";

const CustomImage = styled(Image)`
	transition: 0.5s;
	transform: rotate(25deg);

	&:hover {
		transform: rotate(0deg);
	}
`;

const ContactFormStyle = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	max-width: 700px;
	margin: 0 auto;
	padding: 2rem;
	border-radius: 10px;

	@media (max-width: 768px) {
		max-width: 100%;
	}

	@media (max-width: 450px) {
		padding: 0.5rem;
	}

	@media (max-width: 350px) {
		padding: 0.25rem;
	}

	@media (max-width: 300px) {
		padding: 0.1rem;
	}
`;

const ContactInput = styled.input`
	padding: 1rem 2rem;
	border-radius: 5px;
	border: 1px solid #ccc;
	background-color: #fff;
	transition: 0.5s;

	&:focus {
		border: 1px solid #999;
		background-color: #f5f5f5;
	}
`;

const ContactTextArea = styled.textarea`
	padding: 1rem 2rem;
	border-radius: 5px;
	border: 1px solid #ccc;
	background-color: #fff;
	transition: 0.5s;

	&:focus {
		border: 1px solid #999;
		background-color: #f5f5f5;
	}

	@media (max-width: 1000px) {
		height: 200px;
	}

	@media (max-width: 768px) {
		height: 100px;
	}

	@media (max-width: 450px) {
		height: 50px;
	}
`;

const ContactButton = styled.button`
	padding: 1rem 2rem;
	border-radius: 10px;
	border: 1px solid #ccc;
	background-color: #fff;
	transition: 0.5s;
	max-width: 200px;
	width: 100px;
	margin-left: auto;

	&:hover {
		border: 1px solid #999;
		background-color: ${Colors.primary};
		color: #fff;
	}
`;

const ContactForm = () => {
	const initialFormState = {
		name: "",
		email: "",
		subject: "",
		message: "",
	};

	const { onChange, onSubmit, values } = useForm(sendEmail, initialFormState);

	async function sendEmail() {
		console.log(values);
	}

	const formref = useRef<HTMLFormElement>(null);

	return (
		<>
			<Container>
				<ContactFormStyle onSubmit={onSubmit}>
					<ContactInput
						type="text"
						placeholder="Name (Required)"
						onChange={onChange}
						required
					/>
					<ContactInput type="email" placeholder="Email" name='email' onChange={onChange} />
					<ContactInput type="text" placeholder="Subject" name='email' onChange={onChange} />
					<ContactTextArea
						placeholder="Message (Required)"
						required
						minLength={10}
					/>
					<ContactButton type="submit">Send</ContactButton>
				</ContactFormStyle>
			</Container>
		</>
	);
};

const Contact = () => {
	return (
		<Page>
			<Section>
				<h3 style={{ textAlign: "center" }}>Contact</h3>
				<Container>
					<p style={{ maxWidth: "600px" }}>Looking to get in touch with me?</p>
					<Container>
						{MediaProfiles.map((profile) => (
							<Link rel="me" href={profile.url} key={profile.name}>
								<CustomImage
									width={48}
									alt={profile.name}
									src={Brands[profile.name]}
								/>
							</Link>
						))}
					</Container>
				</Container>
				<ContactForm />
			</Section>
		</Page>
	);
};

export default Contact;
