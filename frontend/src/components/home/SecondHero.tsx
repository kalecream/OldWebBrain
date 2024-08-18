"use server"
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
			<Image
				src={Divider}
				className="recolor"
				width={0}
				height={0}
				sizes="100vw"
				style={{ width: 'auto', height: 'clamp(200px, 10vw,800px)', opacity: '0.3' }}
				alt=""
			/>
			<div className={styles.section}>
				<div className={styles['button-block']} style={{	lineHeight: '1.1',}}>
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
							<p className="text-center" style={{ maxWidth: '10rem' }}>
								A collection of bookmarks from other websites.
							</p>
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
							<p className="text-center" style={{ maxWidth: '10rem' }}>
								All website changes I make.
							</p>
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
							<p className="text-center" style={{ maxWidth: '10rem' }}>
								A collection of notes on different subjects.
							</p>
						</div>
					</Link>
				</div>
			</div>
			<Image
				src={Divider}
				className="recolor"
				width={0}
				height={0}
				sizes="100vw"
				style={{ width: 'auto', height: 'clamp(200px, 10vw,800px)', opacity: '0.3' }}
				alt=""
			/>
		</section>
	);
};
