import { useState } from 'react';
import { Projects } from '../../data/projectsData';
import 'animate.css';
import Link from 'next/link';
import styles from './projects.module.css';
import Image from 'next/image';

export const extractCategories = () => {
	const categoriesSet = new Set<string>();
	Projects.forEach((project) => {
		categoriesSet.add(project.category);
	});
	return Array.from(categoriesSet);
};

export const getMonthName = (dateString) => {
	const months = [
		'January ',
		'February ',
		'March ',
		'April ',
		'May ',
		'June ',
		'July ',
		'August ',
		'September ',
		'October ',
		'November ',
		'December '
	];

	const dateParts = dateString.split('-');
	const monthIndex = parseInt(dateParts[1], 10) - 1; // Months are zero-indexed

	if (monthIndex >= 0 && monthIndex < months.length) {
		return months[monthIndex];
	} else {
		return null;
	}
};

const ProjectList: React.FC = () => {
	const [activeCategory, setActiveCategory] = useState<string>('All');

	const handleTabChange = (category: string) => {
		setActiveCategory(category);
	};

	const categories = extractCategories();

	const filteredProjects =
		activeCategory === 'All'
			? [...Projects].sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime())
			: Projects.filter((project) => project.category === activeCategory).sort(
					(a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
			  );

	return (
		<div className={styles['project-wrapper']}>
			<div className={styles['project-tabs']}>
				<button
					className={`${styles['project-tab']} ${activeCategory === 'All' ? styles['active'] : ''}`}
					onClick={() => handleTabChange('All')}
				>
					All
				</button>
				{categories.map((category) => (
					<button
						key={category}
						className={`${styles['project-tab']} ${activeCategory === category ? styles['active'] : ''}`}
						onClick={() => handleTabChange(category)}
					>
						{category}
					</button>
				))}
			</div>
			<div className={styles['project-list']}>
				{filteredProjects.map((project) => (
					<div key={project.id} className={styles['project-overlay']}>
						<div key={project.id} className={styles.project + ` p-${project.id}`}>
							<div className={styles['project-info']}>
								<h1 className={styles['project-title']}>
									<div className={styles['project-year']}>
										{getMonthName(project.created)}
										{project.created.split('-', 1)}
									</div>
									{project.title}
								</h1>
								{/* // TODO: Add badges for project status */}
								{/* {project.status &&
                  <div className="project-status" data-status={project.status}  >
                    {project.status}
                  </div>
                }

                // TODO: Change all images to 1/1 aspect ratio
                 */}
								{project.image && (
									<div className={styles['project-image']}>
										<Image
											height={0}
											width={0}
											loader={({ src, width }) => `${src}?w=${width}`}
											sizes="100vw"
											style={{ width: '100%', height: 'auto' }}
											placeholder="blur"
											blurDataURL={project.image}
											src={project.image}
											alt={project.title}
										/>
									</div>
								)}
								{project.category == 'code' && (
									<>
										<div className={styles['project-lang']}>
											<div className={styles['project-language']}>{project.language.join(',  ')}</div>
											<div className="div">{project.technology}</div>
										</div>
									</>
								)}

								<div className={styles['project-description']}>{project.description}</div>

								<div className={styles['project-lang']}>
									{project.repoName && (
										<Link className={styles['project-code']} href={`https://github.com/kalecream/${project.repoName}`}>
											Code
										</Link>
									)}
									{project.link && (
										<Link className={styles['project-code']} href={project.link}>
											Demo
										</Link>
									)}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProjectList;
