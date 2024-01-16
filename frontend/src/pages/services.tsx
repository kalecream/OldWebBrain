import { Page } from '@containers/layout';
import Image from 'next/image';
import serviceStyles from '@styles/modules/services.module.scss';
import Link from 'next/link';

export const Service = () => {
	return (
		<Page>
			<section className={serviceStyles['card-section']}>
				<Link className={serviceStyles.card} href={'/dev'}>
                <svg viewBox="0 0 500 500">
						<path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
						<text width="500">
							<textPath xlinkHref="#curve">Develop</textPath>
						</text>
					</svg>
					<img
						src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWljYmNycWtzMGt0NGJod3V3bTNkYW9sZTI1NzB1MTZpcTdnbHdldCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.gif"
						width={300}
						height={300}
					/>
				</Link>
				<Link className={serviceStyles.card} href={'/graphic'}>
                <svg viewBox="0 0 500 500">
						<path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
						<text width="500">
							<textPath xlinkHref="#curve">Design</textPath>
						</text>
					</svg>
					<img
						src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWljYmNycWtzMGt0NGJod3V3bTNkYW9sZTI1NzB1MTZpcTdnbHdldCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.gif"
						width={300}
						height={300}
					/>
				</Link>
				<Link className={serviceStyles.card} href={'/support'}>
					<svg viewBox="0 0 500 500">
						<path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
						<text width="500">
							<textPath xlinkHref="#curve">Admin</textPath>
						</text>
					</svg>
					<img
						src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWljYmNycWtzMGt0NGJod3V3bTNkYW9sZTI1NzB1MTZpcTdnbHdldCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.gif"
						width={300}
						height={300}
					/>
				</Link>
			</section>
		</Page>
	);
};

export default Service;
