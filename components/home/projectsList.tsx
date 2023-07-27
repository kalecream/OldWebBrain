import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  EffectCallback,
} from "react";
import { Projects } from "../../data/projectsData";
import "animate.css";
import Link from "next/link";
import styles from "../../styles/projects.module.css";

export const extractCategories = () => {
  const categoriesSet = new Set<string>();
  Projects.forEach((project) => {
    categoriesSet.add(project.category);
  });
  return Array.from(categoriesSet);
};

const ProjectList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const handleTabChange = (category: string) => {
    setActiveCategory(category);
  };

  const categories = extractCategories();

  const filteredProjects =
    activeCategory === "All"
      ? Projects
      : Projects.filter((project) => project.category === activeCategory);

  return (
    <div className={styles["project-wrapper"]}>
      <div className={styles["project-tabs"]}>
        <button
          className={`${styles["project-tab"]} ${
            activeCategory === "All" ? styles["active"] : ""
          }`}
          onClick={() => handleTabChange("All")}
        >All</button>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles["project-tab"]} ${
              activeCategory === category ? styles["active"] : ""
            }`}
            onClick={() => handleTabChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={styles["project-list"]}>
        {filteredProjects.map((project) => (
          <div className={styles["project-overlay"]}>
          <div
            key={project.id}
            className={styles.project + ` p-${project.id}`}
          >
            {" "}
            
              <div className={styles["project-info"]}>
                <h1 className={styles["project-title"]}>{project.title}</h1>

                <div className={styles["project-lang"]}>
                  <div className={styles["project-language"]}>
                    {project.language.join(",  ")}
                  </div>
                  <div className="div">{project.technology}</div>
                </div>
                <div className={styles["project-description"]}>
                  {project.description}
                </div>
                <div className={styles["project-lang"]}>
                  {project.repoName && (
                    <Link
                      className={styles["project-code"]}
                      href={`https://github.com/kalecream/${project.repoName}`}
                    >
                      Code
                    </Link>
                  )}
                  {project.link && (
                    <Link
                      className={styles["project-code"]}
                      href={project.link}
                    >
                      Demo
                    </Link>
                  )}
                </div>
                <div className={styles["project-year"]}>
                  {project.created.split("-", 1)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
