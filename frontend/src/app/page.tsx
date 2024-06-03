import Hero from '@components/hero/hero';
import ProjectList from '@components/projects/projectsList';
import { PreloadResources } from './preload';
// import { HomePosts } from './components/blogroll';

export default function Page() {
  return (
    <section>
      <PreloadResources />
      <Hero />
      {/* <HomePosts /> */}
      <ProjectList />
    </section>
  );
}
