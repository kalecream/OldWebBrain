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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const overlays = document.querySelectorAll(".project-overlay");

    const moveCircle = (e: MouseEvent | TouchEvent) => {
      const cursor = cursorRef.current;

      if (cursor) {
        const left = e instanceof MouseEvent ? e.pageX : e.touches[0].pageX;
        const top = e instanceof MouseEvent ? e.pageY : e.touches[0].pageY;

        cursor.style.left = `${left}px`;
        cursor.style.top = `${top}px`;
      };
    }

    overlays.forEach((overlay) => {
      overlay.addEventListener("mousemove", () => {
        cursor.style.transform = "scale(1)";
      });

      overlay.addEventListener("touchmove", function () {
        cursor.style.transform = "scale(1)";
      });

      overlay.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(0.1)";
      });

      overlay.addEventListener("mouseout", function () {
        cursor.style.transform = "scale(0.1)";
      });

      overlay.addEventListener("touchend", function () {
        cursor.style.transform = "scale(0.1)";
      });

      overlay.addEventListener("mousemove", moveCircle);
      overlay.addEventListener("touchmove", moveCircle);


    });

  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = () => {
      cursor.style.left = `${cursorPosition.x}px`;
      cursor.style.top = `${cursorPosition.y}px`;
    };

    moveCursor();

    // Attach the moveCursor function to the mousemove event for the entire document.
    document.addEventListener("mousemove", moveCursor);

    // Clean up the event listener on unmount.
    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorPosition]);

  const handleHover = (image: string | null) => {
    setSelectedImage(image);
  };

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
          <div ref={cursorRef} className={styles["project-overlay"]}>
          <div
            key={project.id}
            className={styles.project + ` p-${project.id}`}
            onMouseEnter={() => handleHover(project.image || "")}
            onMouseLeave={() => handleHover("")}
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
