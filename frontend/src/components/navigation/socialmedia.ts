import { FaCoffee } from 'react-icons/fa';
import { FaTwitter, FaGithub, FaLinkedin, FaCodepen, FaRss, FaEnvelope } from 'react-icons/fa6';

export const MediaProfiles = [
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/medwinter/',
		icon: FaLinkedin
	},
	{
		name: 'Twitter',
		url: 'https://x.com/Medwinters',
		icon: FaTwitter,
	},
	{
		name: 'BlueSky',
		url: 'https://bsky.app/profile/medwinter.bsky.social',
		icon: FaTwitter,
		// TODO: Check if Font Awesome added a bluesky icon if they haven't make an icon type hthat is either fontawesome icon or svg
	},
	{
		name: 'Gmail',
		url: 'mailto://sabrinamedwinter@gmail.com',
		icon: FaEnvelope,
		className: 'h-card u-email',
	},
	{
		name: 'Buy Me A Coffee',
		url: 'https://ko-fi.com/manage/index?method=externallogin',
		icon: FaCoffee,
	},
	{
		name: 'RSS',
		url: '/feed.xml',
		icon: FaRss,
	},
];
