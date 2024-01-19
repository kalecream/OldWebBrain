import { useEffect, useState } from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';
import styles from '@styles/modules/Books.module.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// interface CoderLanguage {
// 	score: number;
// 	world_wide_rank: number;
// 	world_wide_all: number;
// 	country_rank: number;
// 	country_all: number;
// 	is_hidden: boolean;
// 	self_url: string;
// }

export const CodersrankSummary = () => {
	const [CodersRankData, setCodersRankData] = useState([]);
	const IgnoreList = ['Batchfile', 'C#', 'C++', 'CoffeeScript', 'EJS', 'Nix', 'PHP', 'Ruby', 'Svelte','TSQL', 'JSON', 'HTML']

	useEffect(() => {
		const getCodersRankAPI = async () => {

			const response = await fetch('https://api.codersrank.io/v2/users/kalecream/languages');
			const CodersRankData = await response.json();
			setCodersRankData(CodersRankData);
		};
		getCodersRankAPI();
	}, []);

	

	
	return (
		<div className={styles.coding__container}>
			{CodersRankData &&
				Object.keys(CodersRankData).map(
					(language) =>
						!IgnoreList.includes(language) && (
							<div className={styles.coding} key={language}>
								<p className={styles.code__language}>
									{/* TODO: Fix language image */}
									{/* <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${language}/${language}-original.svg`} />{' '} */}
									{language}
									{/* TODO: Add technologies */}
								</p>
								<div className={styles.code__rank}>
									<FaGlobeAmericas />
									<span className={styles.code__placement}>
										{' '}
										Top{' '}
										{(
											(CodersRankData[language].world_wide_rank / CodersRankData[language].world_wide_all) *
											100
										).toFixed(1)}
										%
									</span>
									<p>
										<span>{CodersRankData[language].world_wide_rank}</span> of{' '}
										<span>{CodersRankData[language].world_wide_all}</span>
									</p>
								</div>
								<div className={styles.code__rank}>
									🇯🇲
									<span className={styles.code__placement}>
										{' '}
										Top{' '}
										{((CodersRankData[language].country_rank / CodersRankData[language].country_all) * 100).toFixed(1)}%
									</span>
									<p>
										<span>{CodersRankData[language].country_rank}</span> of{' '}
										<span>{CodersRankData[language].country_all}</span>
									</p>
								</div>
							</div>
						),
				)}
			{!CodersRankData && (
				<div className={styles.coding}>
					<Skeleton height={50} width={50} />
					<Skeleton height={50} width={50} />
					<Skeleton height={50} width={50} />
					<Skeleton height={50} width={50} />
				</div>
			)}
		</div>
	);
};
