// import Projects from '@data/projectsData';
// import Image from 'next/image';
// import Link from 'next/link';
// import { extractCategories } from '@components/projects';

const ProjectsPage = () => {
  // const categories = extractCategories();

  return (
    <>
      <section>
        <h1>Projects</h1>
        <h2>Sundrunk Creature of the dark.</h2>
        <p>
          This is the directory page to find information on the projects I have done. I have many virtual and physical
          projects across different discipline. There will be portfolio pages for the different categories and also
          individual project pages.
        </p>
      </section>
      <section>
        <div id="dev"></div>
        <div id="design"></div>
        <div id="other"></div>
      </section>
    </>
  );
};

export default ProjectsPage;
