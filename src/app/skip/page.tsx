import Link from 'next/link';
import Image from 'next/image';
import { Projects as ProjectsData } from '@data/projectsData';
import styles from '@styles/modules/projects.module.scss';
import { GetMonthName } from '@utils/GetMonthName';
import { FaCode, FaRegEye } from 'react-icons/fa6';

const SkipPage = () => {
	const LatestProject = ProjectsData.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime())[0];

	return (
		<>
			<section>
				<h1>Hi, Friend!</h1>
				<p className="prose">
					This is the personal side of my website. To this, I'll be showing my latest personal notes, musings and projects that are
					not polished enough to go in my portfolio. It will be like now my <Link className="internal-link" href="/now">now </Link> page but for things I've already done.
					Right now, I'm doing <Link href="practice/swordtember">Swordtember</Link> and, then{' '}
					<Link href="practice/inktober">Inktober</Link> challenges to get back into 3D practice and flesh out my
					portfolio.
				</p>
			</section>
			<section>
				<div className={styles['project-list']}>
					<div className={styles.project__card}>
						<div className={styles.project__image}>
							<Image
								height={0}
								width={0}
								sizes="100vw"
								style={{
									width: 'auto',
									height: '50vh',
									margin: '0 auto',
									display: 'flex',
									borderRadius: 'var(--sharpBorderRadius)',
								}}
								src={LatestProject.image}
								alt={LatestProject.title}
							/>
						</div>
						<div className={styles['project-info']}>
							<div className={styles.project__present}></div>
							<div className={styles.project__box}>
								<h1 className={styles.project__title}>
									{LatestProject.title}
									<span
										className={`project__status ${LatestProject.status}`}
										title={LatestProject.status}
										aria-label={LatestProject.status}
									></span>
								</h1>

								<div className={`flex ` + styles['project-lang']}>
									{LatestProject.language &&
										LatestProject.language.map((l, i) => <span key={i}>{l.toLowerCase()}</span>)}
									<br />
									{LatestProject.technology &&
										LatestProject.technology.map((t, i) => (
											<span className={styles.project__tech} key={i}>
												{t.toLowerCase()}
											</span>
										))}
								</div>

								<p className={styles.project__description}>
									<b>
										{GetMonthName(LatestProject.created)}
										{LatestProject.created.split('-', 1)}.
									</b>{' '}
									{LatestProject.description}
								</p>

								<div className={styles['project-lang']}>
									{LatestProject.repoName && (
										<Link
											title="View Code"
											className={styles.project__code}
											href={`https://github.com/kalecream/${LatestProject.repoName}`}
											target="_blank"
										>
											<FaCode />
										</Link>
									)}

									{LatestProject.link && (
										<Link
											title="View Project"
											className={styles.project__code}
											href={LatestProject.link}
											target="_blank"
										>
											<FaRegEye />
										</Link>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SkipPage;
