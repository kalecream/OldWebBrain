import { useState, useEffect, useLayoutEffect, useRef, EffectCallback } from "react";
import { Projects, ProjectStructure } from "../../data/projectsData";
import "animate.css";
import Link from "next/link";
import { gsap } from "gsap";
import styles from "../../styles/projects.module.css";

export const extractCategories = () => {
  const categoriesSet = new Set<string>();
  Projects.forEach((project) => {
    categoriesSet.add(project.category || "Others");
  });
  return Array.from(categoriesSet);
};

const ProjectList: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      const cursor = cursorRef.current;
      const overlay = document.querySelectorAll(".project-overlay");
    
      gsap.set(cursor, { scale: 0.1, autoAlpha: 0 });
  
      const moveCircle = (e: MouseEvent) => {
        gsap.to(cursor, 0.5, {
          css: {
            left: e.pageX,
            top: e.pageY,
          },
          delay: 0.03,
        });
      };
  
      overlay.forEach((el) => {
        el.addEventListener("mousemove", () => {
          gsap.to(cursor, 0.3, { scale: 1, autoAlpha: 1 });
          document.addEventListener("mousemove", moveCircle);
        });
  
        el.addEventListener("mouseout", () => {
          gsap.to(cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
          document.removeEventListener("mousemove", moveCircle);
        });
      })
      
  
    }, []);

  const handleHover = (image: string | null) => {
    setSelectedImage(image);
  };

  const handleTabChange = (category: string) => {
    setActiveCategory(category);
  };

  const filteredProjects =
    activeCategory === "All"
      ? Projects
      : Projects.filter((project) => project.category === activeCategory);

  return (
    <div className={styles["project-wrapper"]}>
      <div className={styles["project-list"]}>
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={styles.project + ` p-${project.id}`}
            onMouseEnter={() => handleHover(project.image || "")}
            onMouseLeave={() => handleHover("")}
            
          >
            <div className={styles["project-info"]}>
              <h1 className={styles["project-title"]}>{project.title}</h1>
              
              <div className={styles["project-lang"]}>
                <div className={styles["project-language"]}>{project.language.join(",  ")}</div>
                <div className="div">{project.technology}</div>
              </div>
              <div className={styles["project-description"]}>{project.description}</div>
              <div className={styles["project-lang"]}>
                {project.repoName && <Link className={styles['project-code']} href={`https://github.com/kalecream/${project.repoName}`}>Code</Link> }
                {project.link && <Link className={styles['project-code']} href={project.link}>Demo</Link>                }
              </div>
              <div className={styles['project-year']}>{project.created.split("-", 1)}</div>
            </div>
            <div className={styles['project-overlay']}></div>
          </div>
        ))}
      </div>
      <div
        ref={cursorRef}
        className="cursor"
        style={{
          backgroundImage:  selectedImage ? `url(${selectedImage})` : 'none',
        }}
      ></div>
    </div>
  );
};

export default ProjectList;
