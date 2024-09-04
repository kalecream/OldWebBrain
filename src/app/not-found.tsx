import HeroName from "@components/hero/heroName/heroName";

const NotFound = () => {
	return (
		<section>
			<HeroName name="Oh no!" />
			<p>This page doesn't exist.</p>
			<p className="prose">If you expected to see something here,<br/> let me know at sabrinamedwinter@gmail.com.</p>
		</section>
	);
}

export default NotFound;
