"use client";
import { useState } from "react";
import { Projects, ProjectStructure } from "@components/Projects/projectsData";
import Link from "next/link";
import styles from "@styles/modules/projects.module.scss";
import Image from "next/image";
import { GetMonthName } from "@components/Projects/GetMonthName";
import { FaFileImage } from "react-icons/fa6";

export const extractCategories = () => {
  const categoriesSet = new Set<string>();
  Projects.filter((p) => p.category === "illustration").forEach((project) => {
    categoriesSet.add(project.type);
  });
  return Array.from(categoriesSet);
};

const ProjectGallery: React.FC<{ projects: ProjectStructure[] }> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeID, setActiveID] = useState<string | null>(null);
  const [imageView, setImageView] = useState<boolean>(false);

  const handleTabChange = (category: string) => setActiveCategory(category);

  const categories = extractCategories();

  const filteredProjects =
    activeCategory === "All"
      ? [...Projects]
          .filter((p) => p.category === "illustration")
          .sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime())
      : Projects.filter((p) => p.category === "illustration")
          .filter((project) => project.type === activeCategory)
          .sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());

  const openImageView = (id: string) => {
    setActiveID(id);
    setImageView(true);
  };

  const closeImageView = () => setImageView(false);

  const activeProject = activeID ? projects.find((project) => project.id === activeID) : null;

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
            {category} <span style={{ opacity: "0.5" }}>({Projects.filter((p) => p.type === category).length})</span>
          </button>
        ))}
      </div>

      {imageView && activeProject ? (
        <ImageView
          title={activeProject.title}
          id={activeProject.id}
          image={activeProject.image}
          status={activeProject.status}
          language={activeProject.language}
          description={activeProject.description}
          technology={activeProject.technology}
          onClose={closeImageView}
          created={activeProject.created}
        />
      ) : (
        <Gallery data={filteredProjects} onOpenImageView={openImageView} />
      )}
    </div>
  );
};

interface ImageViewProps {
  id: string;
  title: string;
  status: string;
  image?: string;
  description: React.ReactNode;
  language?: string[];
  link?: string;
  repoName?: string;
  created: string;
  technology: string[];
  onClose: () => void;
}

const ImageView: React.FC<ImageViewProps> = ({
  id,
  title,
  status,
  image,
  language,
  description,
  technology,
  created,
  link,
  repoName,
  onClose,
}) => (
  <div className={`desktop ${styles["imageview-wrapper"]} ${styles.fadeIn}`}>
    <div className={`${styles.imageview}`}>
      {image ? (
        <Image className={`${styles["imageview-image"]}`} src={image} alt={title} width={800} height={800} />
      ) : (
        <FaFileImage style={{ fontSize: "12rem", margin: "auto" }} />
      )}
      <div className={`${styles["imageview-info"]}`}>
        <button className={`${styles["imageview-close"]}`} onClick={onClose}>
          x
        </button>
        <h1>
          {title} <span className={`project__status ${status}`} title={status} aria-label={status}></span>
        </h1>
        <p className="prose blur">
          <b>
            {GetMonthName(created)}
            {created.split("-", 1)}.
          </b>{" "}
          {description}
        </p>
        <div className={`flex ` + styles["project-lang"]}>
          {language && language.map((l, i) => <span key={i}>{l.toLowerCase()}</span>)}
          <br />
          {technology &&
            technology.map((t, i) => (
              <span className={styles.project__tech} key={i}>
                {t.toLowerCase()}
              </span>
            ))}
        </div>
        <div className={styles["project-lang"]}>
          {repoName && (
            <Link
              title="View Code"
              className={styles.project__code}
              href={`https://github.com/kalecream/${repoName}`}
              target="_blank"
            >
              Code.
            </Link>
          )}

          {link && (
            <Link title="View Project" className={styles.project__code} href={link} target="_blank">
              Demo.
            </Link>
          )}
        </div>
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

const Tile: React.FC<TileProps> = ({ id, title, image, onClick }) => (
  <div className={`${styles["gallery-tile"]}`} onClick={onClick}>
    <div className={`${styles["picture-info"]}`}>
      <h2>{title}</h2>
    </div>
    {image && (
      <Image
        className={`${styles["tile-image"]}`}
        src={image}
        alt={title}
        height={0}
        width={0}
        sizes="100vw"
        placeholder="blur"
        blurDataURL={image}
        style={{
          width: "auto",
          height: "50vh",
          margin: "0 auto",
          display: "flex",
          borderRadius: "var(--sharpBorderRadius)",
        }}
      />
    )}
  </div>
);

const DesignProjects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const handleTabChange = (category: string) => {
    setActiveCategory(category);
  };

  const categories = extractCategories();

  const filteredProjects =
    activeCategory === "All"
      ? [...Projects]
          .filter((p) => p.category === "illustration")
          .sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime())
      : Projects.filter((p) => p.category === "illustration")
          .filter((project) => project.type === activeCategory)
          .sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());

  return (
    <section className={styles["project-wrapper"]}>
      <h1>Design</h1>
      <ProjectGallery projects={filteredProjects} />
    </section>
  );
};
export default DesignProjects;
