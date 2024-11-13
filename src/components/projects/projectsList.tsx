"use client";
import { useState } from "react";
import { Projects, ProjectStructure } from "@data/projectsData";
import Link from "next/link";
import styles from "@styles/modules/projects.module.scss";
import Image from "next/image";
import { GetMonthName } from "@utils/GetMonthName";

export const extractCategories = () => {
  const categoriesSet = new Set<string>();
  Projects.forEach((project) => {
    categoriesSet.add(project.category);
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
      ? [...projects].sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime())
      : projects
          .filter((project) => project.category === activeCategory)
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
          x
        </button>
        <h2>{title}</h2>
        <div>{description}</div>
        <h3>Technologies</h3>
        <ul>
          {technology.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
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
    {image && <Image className={`${styles["tile-image"]}`} src={image} alt={title} width={400} height={400} />}
    <div className={`${styles["picture-info"]}`}>
      <h2>{title}</h2>
    </div>
  </div>
);

const ProjectList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const handleTabChange = (category: string) => {
    setActiveCategory(category);
  };

  const categories = extractCategories();

  const filteredProjects =
    activeCategory === "All"
      ? [...Projects].sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime())
      : Projects.filter((project) => project.category === activeCategory).sort(
          (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime(),
        );

  return (
    <section className={styles["project-wrapper"]}>
      <h1>Things I've Made</h1>
      <ProjectGallery projects={Projects} />
      {/* <div className={styles["project-tabs"]}>
        <button
          className={`${styles["project-tab"] + ` `} ${activeCategory === "All" ? styles["active"] : ""}`}
          onClick={() => handleTabChange("All")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles["project-tab"] + ` `} ${activeCategory === category ? styles["active"] : ""}`}
            onClick={() => handleTabChange(category)}
          >
            {category}
          </button>
        ))}
      </div> */}
      {/* <div className={styles["project-list"]}>
        {filteredProjects.map((project) => (
          <div key={project.id} className={styles["project-overlay"] + ` `}>
            <div key={project.id} className={styles.project + ` p-${project.id}` + ` `}>
              <div className={styles["project-info"]}>
                <div className={styles.project__present}>
                  <h1 className={styles.project__title}>
                    <div className={styles["project-year"]}>
                      {GetMonthName(project.created)}
                      {project.created.split("-", 1)}
                    </div>

                    {project.title}
                    <span
                      className={`project__status ${project.status}`}
                      title={project.status}
                      aria-label={project.status}
                    ></span>
                  </h1>
                  {project.image && (
                    <div className={styles.project__image}>
                      <Image
                        height={0}
                        width={0}
                        loader={({ src, width }) => `${src}?w=${width}`}
                        sizes="100vw"
                        style={{
                          width: "auto",
                          height: "120px",
                          margin: "0 auto",
                          display: "flex",
                          borderRadius: "var(--sharpBorderRadius)",
                        }}
                        placeholder="blur"
                        blurDataURL={project.image}
                        src={project.image}
                        alt={project.title}
                      />
                    </div>
                  )}

                  {/* {!project.image && (
										<div className={styles.project__image}>
											<FaFileImage style={{ fontSize: '1rem', margin: 'auto' }} />
										</div>
									)} 
                </div>
                <div className={styles.project__box}>
                  <div className={styles["project-lang"]}>
                    {project.repoName && (
                      <Link
                        title="View Code"
                        className={styles.project__code}
                        href={`https://github.com/kalecream/${project.repoName}`}
                      >
                        Code.
                      </Link>
                    )}

                    {project.link && (
                      <Link title="View Project" className={styles.project__code} href={project.link}>
                        Demo.
                      </Link>
                    )}
                  </div>

                  <div className={`flex ` + styles["project-lang"]}>
                    {project.language && project.language.map((l, i) => <span key={i}>{l.toLowerCase()}</span>)}

                    {project.technology &&
                      project.technology.map((t, i) => (
                        <span className={styles.project__tech} key={i}>
                          {t.toLowerCase()}
                        </span>
                      ))}
                  </div>

                  <small className={styles.project__description}>{project.description}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}
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
        <div className={styles.latest__description}>
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

export const OtherProjects = () => {
  return (
    <section className={styles.others__container}>
      <div className={`${styles.others} pancake`}>
        <div>
          <Link href={"https://open.spotify.com/show/3TEYSulKavQrhebkPLHkth"}>
            <h1>Bite-Sized Binge</h1>
          </Link>
          <p className={styles["description"]}>
            An audiojournal to log audiodramas, movies, manga, podcasts, books, short stories, music and other forms of
            media to help explore my own tastes.
          </p>
        </div>
        <div>
          <iframe
            src="https://open.spotify.com/embed/show/3TEYSulKavQrhebkPLHkth?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className={`${styles.others} pancake`}>
        <div>
          <Link href={"https://www.youtube.com/channel/UCOwvKgIjl13Z30wA_mfxYfw"}>
            <h1>KaleCream </h1>
          </Link>

          <p className={styles["description"]}>
            A YouTube channel where I vlog my pomodoro work/crafting sessions for the sake of accountability.
          </p>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/acjjsQwXvbM?si=CAyeIgOXvwQtZnuC"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default ProjectList;
