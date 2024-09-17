"use client";
import { useState } from "react";
import { Projects } from "@data/projectsData";
import Link from "next/link";
import styles from "@styles/modules/projects.module.scss";
import Image from "next/image";
import { GetMonthName } from "@utils/GetMonthName";
import { FaCode, FaFileImage, FaRegEye } from "react-icons/fa6";

export const extractCategories = () => {
	const categoriesSet = new Set<string>();
	Projects.filter((p) => p.category === 'code').forEach((project) => {
		categoriesSet.add(project.type);
	});
	return Array.from(categoriesSet);
};

const WebProjects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const handleTabChange = (category: string) => {
    setActiveCategory(category);
  };

  const categories = extractCategories();

	const filteredProjects =
		activeCategory === 'All'
			? [...Projects]
					.filter((p) => p.category === 'code')
					.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime())
			: Projects.filter((p) => p.category === 'code')
					.filter((project) => project.type === activeCategory)
					.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());

	return (
		<section className={styles['project-wrapper']}>
			<div className={styles['project-tabs']}>
				<button
					className={`${styles['project-tab'] + ` `} ${activeCategory === 'All' ? styles['active'] : ''}`}
					onClick={() => handleTabChange('All')}
				>
					All ({Projects.filter((p) => p.category === 'code').length})
				</button>
				{categories.map((category) => (
					<button
						key={category}
						className={`${styles['project-tab'] + ` `} ${activeCategory === category ? styles['active'] : ''}`}
						onClick={() => handleTabChange(category)}
					>
						{category} ({Projects.filter((p) => p.type === category).length})
					</button>
				))}
			</div>
			<div className={styles['project-list']}>
				{filteredProjects.map((project) => (
					<div key={project.id} className={styles.project__card}>
						{project.image ? (
							<div className={styles.project__image}>
								<Image
									height={0}
									width={0}
									sizes="100vw"
									style={{
										width: 'auto',
										height: '50vh',
										margin: '0 auto',
										display: 'flex',
										borderRadius: 'var(--sharpBorderRadius)',
									}}
									placeholder="blur"
									blurDataURL={project.image}
									src={project.image}
									alt={project.title}
								/>
							</div>
						) : (
							<div className={styles.project__image}>
								<FaFileImage style={{ fontSize: '12rem', margin: 'auto' }} />
							</div>
						)}

            <div className={styles["project-info"]}>
              <div className={styles.project__present}></div>
              <div className={styles.project__box}>
                <h1 className={styles.project__title}>
                  {project.title}
                  <span
                    className={`project__status ${project.status}`}
                    title={project.status}
                    aria-label={project.status}
                  ></span>
                </h1>

                <div className={`flex ` + styles["project-lang"]}>
                  {project.language && project.language.map((l, i) => <span key={i}>{l.toLowerCase()}</span>)}
                  <br />
                  {project.technology &&
                    project.technology.map((t, i) => (
                      <span className={styles.project__tech} key={i}>
                        {t.toLowerCase()}
                      </span>
                    ))}
                </div>

                <p className={styles.project__description}>
                  <b>
                    {GetMonthName(project.created)}
                    {project.created.split("-", 1)}.
                  </b>{" "}
                  {project.description}
                </p>

                <div className={styles["project-lang"]}>
                  {project.repoName && (
                    <Link
                      title="View Code"
                      className={styles.project__code}
                      href={`https://github.com/kalecream/${project.repoName}`}
                      target="_blank"
                    >
                      <FaCode />
                    </Link>
                  )}

                  {project.link && (
                    <Link title="View Project" className={styles.project__code} href={project.link} target="_blank">
                      <FaRegEye />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default WebProjects;
