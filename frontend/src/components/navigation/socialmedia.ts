import { FaTwitter, FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa6';

export const MediaProfiles = [
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/medwinter/',
		icon: FaLinkedin
	},
	{
		name: 'Github',
		url: 'https://github.com/kalecream',
		icon: FaGithub
	},
	{
		name: 'Twitter',
		url: 'https://twitter.com/SabMedwinter',
		icon: FaTwitter
	},
	{
		name: 'Codepen',
		url: 'https://codepen.io/medwinter',
		icon: FaCodepen
	},
	{
		name: 'BlueSky',
		url: 'https://bsky.app/profile/medwinter.bsky.social',
		icon: FaTwitter
		// TODO: Check if Font Awesome added a bluesky icon if they haven't make an icon type hthat is either fontawesome icon or svg
	}
];
