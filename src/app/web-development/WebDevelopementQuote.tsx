'use client';
import styled from 'styled-components';

const FormSection = styled.section`
	width: 100vw;
	height: 90vh;
	display: grid;
	place-items: center;
	justify-content: center;
	padding: 1rem;
`;

const FormSectionHeader = styled.h1`
    font-size: 5vw;
    font-weight: 700;
`;

enum ProjectPurpose {
	Business = 'E-Commerce',
	Personal = 'Personal',
	Blog = 'Blog',
	Portfolio = 'Portfolio',
	Other = 'Other',
}

enum KeyFunctionalities {
	ContactForm = 'Contact Form',
	Newsletter = 'Newsletter',
	Blog = 'Blog',
	Portfolio = 'Portfolio',
	ECommerce = 'E-Commerce',
	Other = 'Other',
}

enum DomainAndHosting {
	Yes = 'Yes',
	No = 'No',
}

export const WebDevelopementQuote = () => {
	return (
		<>
			<form>
				<FormSection>
					<div>
                        <FormSectionHeader>Project Scope</FormSectionHeader>
                        <p className='paragraph'>These questions are to guage how much work will be the neccesary to create the website or application.</p>
					</div>
				</FormSection>
				<FormSection>
					<span>Project Scope</span>
					<h1>What is the primary purpose of the website?</h1>
				</FormSection>
				<FormSection>
					<span>Project Scope</span>
					<h1>What are the key features or functionalities you need?</h1>
				</FormSection>
				<FormSection>
					<span>Project Scope</span>
					<h1>How many pages will the website have?</h1>
				</FormSection>
				<FormSection>
					<span>Project Scope</span>
					<h1>Do you have a domain and hosting?</h1>
				</FormSection>
				<FormSection>
					<span>Project Scope</span>
					<h1>Do you have any specific design or branding guidelines that need to be followed?</h1>
				</FormSection>
                <FormSection>
                    <FormSectionHeader>Technical Requirements</FormSectionHeader>
                </FormSection>
                <FormSection>
                    <span>Technical Requirements</span>
                    <h1>Are there any specific technologies or platforms you want to use? (e.g., WordPress, React, Shopify, etc.)</h1>
                </FormSection>
                <FormSection>
                    <span>Technical Requirements</span>
                    <h1>Do you need a content management system (CMS) to update the website yourself?</h1>
                </FormSection>
                <FormSection>
                    <span>Technical Requirements</span>
                    <h1>Will there be any third-party integrations required? (e.g., CRM, social media, APIs)</h1>
                </FormSection>
                <FormSection>
                    <FormSectionHeader>Timeline and Budget</FormSectionHeader>
                </FormSection>
                <FormSection>
                    <span>Timeline and Budget</span>
                    <h1>What is your target deadline for launching the website?</h1>
                </FormSection>
                <FormSection>
                    <span>Timeline and Budget</span>
                    <h1>What is your estimated budget for this project?</h1>
                </FormSection>
                <FormSection>
                    <span>Timeline and Budget</span>
                    <h1>Will there be any future phases or expansions planned for the site after launch?</h1>
                </FormSection>
                <FormSection>
                    <FormSectionHeader>Contact Information</FormSectionHeader>
                </FormSection>
                <FormSection>
                    <span>Contact Information</span>
                    <h1>What is your name?</h1>
                </FormSection>
                <FormSection>
                    <span>Contact Information</span>
                    <h1>What is your email address?</h1>
                </FormSection>
                <FormSection>
                    <span>Contact Information</span>
                    <h1>What is your phone number?</h1>
                </FormSection>
                <FormSection>
                    <span>Contact Information</span>
                    <h1>Do you have any additional comments or questions?</h1>
                </FormSection>
			</form>
		</>
	);
};
