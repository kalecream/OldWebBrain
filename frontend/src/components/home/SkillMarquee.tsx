export const Skills = [
	'CSS3',
	'React',
	'JavaScript',
	'TypeScript',
	'HTML5',
	'Node.js',
	'Next.js',
	'Gatsby.js',
	'Sass',
	'Styled Components',
	'Material UI',
	'Bootstrap',
	'Git',
	'GitHub',
	'Heroku',
	'Netlify',
	'Vercel',
];

export const SkillMarquee = () => {
	return (
		<div className="skill-marquee">
			<div className="skill-marquee__inner">
				{Skills.map((skill, index) => {
					return (
						<div className="skill-marquee__item" key={index}>
							{skill}
						</div>
					);
				})}
			</div>
		</div>
	);
};
