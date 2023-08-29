import styled from '@emotion/styled';
import { Button } from './_basics/Basics';
import { useState } from 'react';

const CustomForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	max-width: 500px;
	margin: 0 auto;
	padding: 1rem;
`;

const CustomInput = styled.input`
	padding: var(--padding);
	border: var(--border);
	border-radius: 0.5rem;
	background-color: var(--background);
	color: var(--text);
	font-size: 1rem;
	font-weight: 400;
	text-transform: capitalize;
	outline: none;
	transition: all 0.3s ease-in-out;

	&:focus {
		border: 2px solid var(--primary);
		color: var(--background);
	}
`;

const CustomTextArea = styled.textarea`
	padding: var(--padding);
	border: 1px solid var(--faint);
	border-radius: var(--border-radius-small);
	background-color: var(--background);
	color: var(--text);
	font-size: 1rem;
	font-weight: 400;
	text-transform: capitalize;
	outline: none;
	transition: all 0.3s ease-in-out;

	&:focus {
		border: 2px solid var(--primary);
		color: var(--background);
	}
`;

const CustomButton = styled(Button)`
	padding: 0.5rem;
	min-width: 100px;
	min-height: 50px;
	border-radius: var(--border-radius);
	background-color: var(--background);
	color: var(--background);
	font-size: 1rem;
	font-weight: 700;
	text-transform: capitalize;
	outline: none;
	transition: all 0.3s ease-in-out;

	&:hover {
		background-color: var(--primary);
		color: var(--background);
		transform: scale(1.1);
	}
`;

export const ContactForm = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: ''
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<CustomForm action="/api/form" name="contact" method="POST">
			<h1>Contact</h1>
			<CustomInput type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
			<CustomInput type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
			<CustomTextArea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
			<CustomButton onSubmit={onSubmit} href={''} type="submit">
				Send Message
			</CustomButton>
		</CustomForm>
	);
};
