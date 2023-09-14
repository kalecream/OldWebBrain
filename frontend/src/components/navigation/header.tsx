import Directory from '@data/directory';
import ThemeSwitch from './theme-toggle';
import { useRouter } from 'next/router';import Link from 'next/link';
import style from './header.module.scss';

export const Header: React.FunctionComponent = () => {
	const router = useRouter();

	return (
		<header className='glassmorphic'>
			{router?.pathname !== '/' && (
				<>
					<Link className={style['site-name']} href="/">
						sabrina
					</Link>
					</>
				)}
			<div className={`${style['directory-list']} ${style['directory-section']}`}>
				
				{Directory.length > 0 &&
					Directory.map((directory, index) => (
						<div className={style['directory-list']} key={index}>
							<Link className={style['directory-link']} href={directory.links}>
								{directory.title}
							</Link>
						</div>
					))}
			</div>
			<div className={`${style.settings}  ${style['directory-section']}`}>
				<ThemeSwitch />
			</div>
		</header>
	);
};

export default Header;
