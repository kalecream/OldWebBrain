import Hero from '@components/hero/hero';
import ProjectList from '@components/projects/projectsList';
import Image from 'next/image';
import Rolodex from '../../public/img/album/rolodex.png';
import Grimorie from '../../public/img/album/grimorie.png';
import Projects from '@data/projectsData';
import { GetMonthName } from '@utils/GetMonthName';
import styles from '@styles/modules/projects.module.scss';
// import { PreloadResources } from './preload';
// import { HomePosts } from './components/blogroll';

export default function Page() {
	[...Projects].sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());

	return (
		<section>
			{/* <PreloadResources /> */}
			<Hero />
			{/* <HomePosts /> */}
			<section className="flex center">
				<div>
					<h2 className={styles.project__title}>
						<div className={styles['project-year']}>
							{GetMonthName(Projects[0].created) || 'NULL'}
							{Projects[0].created?.split('-', 1)}
						</div>

						{Projects[0].title}
						<span
							className={`project__status ${Projects[0].status}`}
							title={Projects[0].status}
							aria-label={Projects[0].status}
						></span>
					</h2>
					<Image
						height={0}
						width={0}
						sizes="100vw"
						style={{
							width: 'auto',
							height: '500px',
							margin: '0 auto',
							display: 'flex',
							borderRadius: 'var(--sharpBorderRadius)',
						}}
						placeholder="blur"
						blurDataURL={Projects[0].image}
						src={Projects[0].image}
						alt={Projects[0].title}
					/>
				</div>
				<div className="flex row" style={{ filter: 'saturate(10%);' }}>
					<div className="flex column">
						<Image src={Rolodex} alt={''} width={200} height={200} />
						<caption>Rolodex</caption>
					</div>
					<div className="flex column">
						<Image src={Grimorie} alt={''} width={200} height={200} />
						<caption>Week Logs</caption>
					</div>
					<div className="flex column">
						<Image src={Rolodex} alt={''} width={200} height={200} />
						<caption>Site ChangeLogs</caption>
					</div>
				</div>
			</section>
			<ProjectList />
		</section>
	);
}
