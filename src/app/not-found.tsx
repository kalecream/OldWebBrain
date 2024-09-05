import HeroName from "@components/hero/heroName/heroName";

const NotFound = () => {
	return (
		<section>
			<HeroName name="404" />
			<p>This page doesn't exist.</p>
			<p className="prose text-center">If you expected to see something here,<br/> let me know at sabrinamedwinter@gmail.com.</p>
		</section>
	);
}

export default NotFound;
