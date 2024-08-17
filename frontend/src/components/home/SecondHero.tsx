import Image from 'next/image';
import Divider from '@assets/images/vamp_divider.webp';
import Rolodex from '@public/img/album/rolodex.png';
import Grimorie from '@public/img/album/grimorie.png';
import Projects from '@data/projectsData';
// import styles from '@styles/modules/projects.module.scss';
import styles from '@styles/modules/Index.module.scss';
import Link from 'next/link';

export const SecondHero = () => {
	[...Projects]
		.filter((p) => p.image)
		.filter((c) => c.category == 'code')
		.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());

	return (
		<section style={{ backgroundColor: 'var(--backgroundColor)', borderRadius: 'var(--borderRadius)' }}>
			<Image src={Divider} alt="" width={800} height={200} style={{ opacity: '0.3' }} className="recolor" />
			<div className={styles.section}>
				<div className={styles['button-block']}>
					<Link href="/rolodex">
						<div
							className="flex column"
							style={{
								padding: 'var(--paddingContainer)',
								borderRadius: 'var(--borderRadius)',
							}}
						>
							<Image src={Rolodex} alt={''} width={200} height={200} className="faded" />
							<h1
								style={{
									color: 'var(--primary)',
								}}
							>
								Rolodex
							</h1>
							<small className="text-center" style={{ maxWidth: '10rem' }}>
								A collection of bookmarks from other websites.
							</small>
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
								padding: 'var(--paddingContainer)',
								borderRadius: 'var(--borderRadius)',
							}}
						>
							<Image src={Grimorie} alt={''} width={200} height={200} className="faded" />
							<h1
								style={{
									color: 'var(--primary)',
								}}
							>
								Changelog
							</h1>
							<small className="text-center" style={{ maxWidth: '10rem' }}>
								All website changes I make.
							</small>
						</div>
					</Link>
					<Link href="https://notes.sabrinamedwinter.com">
						<div
							className="flex column"
							style={{
								padding: 'var(--paddingContainer)',
								borderRadius: 'var(--borderRadius)',
							}}
						>
							<Image src={Grimorie} alt={''} width={200} height={200} className="faded" />
							<h1
								style={{
									color: 'var(--primary)',
								}}
							>
								Wiki
							</h1>
							<small className="text-center" style={{ maxWidth: '10rem' }}>
								A collection of notes on different subjects.
							</small>
						</div>
					</Link>
				</div>
			</div>
			<Image src={Divider} alt="" width={800} height={200} style={{ opacity: '0.3' }} className="recolor" />
		</section>
	);
};
