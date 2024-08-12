import Hero from '@components/hero/hero';
import ProjectList from '@components/projects/projectsList';
import Image from 'next/image';
import Rolodex from '@public/img/album/rolodex.png';
import Grimorie from '@public/img/album/grimorie.png';
import Projects from '@data/projectsData';
import { GetMonthName } from '@utils/GetMonthName';
import styles from '@styles/modules/projects.module.scss';
import Link from 'next/link';
import { BlogPosts } from './components/blogroll';
// import { PreloadResources } from './preload';
// import { HomePosts } from './components/blogroll';

export default function Page() {
	[...Projects]
		.filter((p) => p.image)
		.filter((c) => c.category == 'code')
		.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());

	return (
		<section>
			{/* <PreloadResources /> */}
			<Hero />
			{/* <HomePosts /> */}
			{/* TODO: This as a component and add css */}
			<section className="flex center">
				<div
					style={{ border: 'var(--border)', borderRadius: 'var(--borderRadius)', padding: 'var(--paddingContainer)' }}
				>
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
					<Link href="/rolodex">
						<div
							className="flex column"
							style={{
								border: 'var(--border)',
								padding: 'var(--paddingContainer)',
								borderRadius: 'var(--borderRadius)',
							}}
						>
							<Image src={Rolodex} alt={''} width={200} height={200} />
							<caption
								style={{
									color: 'var(--primary)',
								}}
							>
								Rolodex
							</caption>
						</div>
					</Link>
					{/* <div className="flex column">
						<Image src={Grimorie} alt={''} width={200} height={200} />
						<caption>Week Logs</caption>
					</div> */}
					<Link href="/changelog">
						<div
							className="flex column"
							style={{
								border: 'var(--border)',
								padding: 'var(--paddingContainer)',
								borderRadius: 'var(--borderRadius)',
							}}
						>
							<Image src={Grimorie} alt={''} width={200} height={200} />
							<caption
								style={{
									color: 'var(--primary)',
								}}
							>
								Changelog
							</caption>
						</div>
					</Link>
					<Link href="https://notes.sabrinamedwinter.com">
						<div
							className="flex column"
							style={{
								border: 'var(--border)',
								padding: 'var(--paddingContainer)',
								borderRadius: 'var(--borderRadius)',
							}}
						>
							<Image src={Grimorie} alt={''} width={200} height={200} />
							<caption
								style={{
									color: 'var(--primary)',
								}}
							>
								Wiki
							</caption>
						</div>
					</Link>
				</div>
			</section>
			<ProjectList />
		</section>
	);
}
