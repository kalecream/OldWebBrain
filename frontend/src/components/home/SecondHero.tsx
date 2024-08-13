import Image from 'next/image';
import Rolodex from '@public/img/album/rolodex.png';
import Grimorie from '@public/img/album/grimorie.png';
import { GetMonthName } from '@utils/GetMonthName';
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
		<section>
			<div className={styles.section}>
                <div className={styles["button-block"]}>
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
			</div>
		</section>
	);
};
