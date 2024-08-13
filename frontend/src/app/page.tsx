import Hero from '@components/hero/hero';
import ProjectList from '@components/projects/projectsList';
import { SecondHero } from '@components/home/SecondHero';
// import { PreloadResources } from './preload';
// import { HomePosts } from './components/blogroll';

export default function Page() {
	

	return (
		<section>
			{/* <PreloadResources /> */}
			<Hero />
			{/* <HomePosts /> */}
			{/* TODO: This as a component and add css */}
			<SecondHero />
			<ProjectList />
		</section>
	);
}
