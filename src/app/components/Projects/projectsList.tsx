"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaX } from "react-icons/fa6";
import { Projects, ProjectStructure } from "@components/Projects/projectsData";
import styles from "./projects.module.scss";

export const extractCategories = () => {
  const categoriesSet = new Set<string>();
  Projects.forEach((project) => {
    categoriesSet.add(project.category);
  });
  return Array.from(categoriesSet);
};

const ProjectGallery: React.FC<{ Projects: ProjectStructure[] }> = ({ Projects }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeID, setActiveID] = useState<string | null>(null);
  const [imageView, setImageView] = useState<boolean>(false);

  const handleTabChange = (category: string) => setActiveCategory(category);

  const categories = extractCategories();

  const filteredProjects =
    activeCategory === "All"
      ? [...Projects].sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime())
      : Projects
        .filter((project) => project.category === activeCategory)
        .sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());

  const openImageView = (id: string) => {
    setActiveID(id);
    setImageView(true);
  };

  const closeImageView = () => setImageView(false);

  const activeProject = activeID ? Projects.find((project) => project.id === activeID) : null;

  return (
    <div className="wrapper">
      <div className={styles["project-tabs"]}>
        <button
          className={`${styles["project-tab"]} ${activeCategory === "All" ? styles["active"] : ""}`}
          onClick={() => handleTabChange("All")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles["project-tab"]} ${activeCategory === category ? styles["active"] : ""}`}
            onClick={() => handleTabChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {imageView && activeProject ? (
        <ImageView
          title={activeProject.title}
          image={activeProject.image}
          description={activeProject.description}
          technology={activeProject.technology}
          onClose={closeImageView}
        />
      ) : (
        <Gallery data={filteredProjects} onOpenImageView={openImageView} />
      )}
    </div>
  );
};

interface ImageViewProps {
  title: string;
  image?: string;
  description: React.ReactNode;
  technology: string[];
  onClose: () => void;
}

const ImageView: React.FC<ImageViewProps> = ({ title, image, description, technology, onClose }) => (
  <div className={`desktop ${styles["imageview-wrapper"]} ${styles.fadeIn}`}>
    <div className={`${styles.imageview}`}>
      {image && <Image className={`${styles["imageview-image"]}`} src={image} alt={title} width={800} height={800} />}
      <div className={`${styles["imageview-info"]}`}>
        <button className={`${styles["imageview-close"]}`} onClick={onClose}>
          <FaX />
        </button>
        <h2>{title}</h2>
        <ul>
          {technology.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <div>{description}</div>
      </div>
    </div>
  </div>
);

interface GalleryProps {
  data: ProjectStructure[];
  onOpenImageView: (id: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ data, onOpenImageView }) => (
  <div className={`${styles.gallery} ${styles.fadeIn}`}>
    {data
      .filter((project) => project.display)
      .map((project) => (
        <Tile
          key={project.id}
          id={project.id}
          title={project.title}
          image={project.image}
          onClick={() => onOpenImageView(project.id)}
        />
      ))}
  </div>
);

interface TileProps {
  id: string;
  title: string;
  image?: string;
  onClick: () => void;
}

const Tile: React.FC<TileProps> = ({ title, image, onClick }) => (
  <div className={`${styles["gallery-tile"]}`} onClick={onClick}>
    {image &&
      <Image className={`${styles["tile-image"]}`} src={image} alt={title} width={200} height={200} />
    }
    <div className={`${styles["picture-info"]}`}>
      <p>{title}</p>
    </div>
  </div>
);

const ProjectList: React.FC = () => {
  return (
    <section className={styles["project-wrapper"]}>
      <ProjectGallery Projects={Projects} />
    </section>
  );
};

export const LatestProject = () => {
  const filteredProjects = Projects.filter((project) => project.image).sort(
    (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime(),
  );
  const project = filteredProjects[0];

  return (
    <div className={styles.wrapper}>
      <Image
        height={0}
        width={0}
        loader={({ src, width }) => `${src}?w=${width}`}
        sizes="100vw"
        style={{
          width: "clamp(250px, 100%, 480px)",
          height: "clamp(200px, 100%, 500px)",
          margin: "0 auto",
          display: "flex",
        }}
        className={styles.latest__container}
        src={project.image}
        alt={project.title}
      />
      <div className={styles.latest__container}>
        <div className={styles.project__description}>
          <h2>
            <b>{project.title}</b>
          </h2>
          <p>
            Made {project.language && "with " + project.language.join(",  ")} using{" "}
            {project.technology && (project.technology.length == 1 ? project.technology : project.technology)}
          </p>

          <div className={styles["project-description"]}>
            {project.repoName && (
              <Link
                title="View Code"
                className={styles.project__code}
                href={`https://github.com/kalecream/${project.repoName}`}
              >
                Code.
              </Link>
            )}{" "}
            {project.link && (
              <Link title="View Project" className={styles.project__code} href={project.link}>
                Demo.
              </Link>
            )}
          </div>
        </div>

        <div className={styles.latest__description}>
          <p> {project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
