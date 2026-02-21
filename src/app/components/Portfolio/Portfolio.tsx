'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { PortfolioCategory, SubCategory, Project } from './PortfolioData';
import { PROJECTS, SUB_CATEGORIES } from './PortfolioData';
import { GetMonthName } from './GetMonthName';
import styles from './Portfolio.module.scss';

type ActiveCategory = PortfolioCategory | 'all';

const CATEGORY_TABS: { value: ActiveCategory; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'development', label: 'Dev' },
    { value: 'design', label: 'Design' },
];

const CATEGORY_LABEL: Record<PortfolioCategory, string> = {
    'development': 'Dev',
    design: 'Design',
};

const BloodBar: React.FC = () => (
    <div className={styles.bloodBar} aria-hidden="true">
        {Array.from({ length: 9 }).map((_, i) => (
            <span
                key={i}
                className={styles.drip}
                style={{ '--drip-i': i } as React.CSSProperties}
            />
        ))}
    </div>
);

interface TagListProps {
    label: string;
    items: string[];
    variant: 'tech' | 'lang';
}

const TagList: React.FC<TagListProps> = ({ label, items, variant }) => (
    <div className={styles.tagGroup}>
        <span className={styles.tagLabel}>{label}</span>
        <ul className={`${styles.tagList} ${styles[variant]}`} aria-label={label}>
            {items.map((item) => (
                <li key={item} className={styles.tag}>{item}</li>
            ))}
        </ul>
    </div>
);

interface StarSectionProps {
    star: NonNullable<Project['star']>;
}

const StarSection: React.FC<StarSectionProps> = ({ star }) => (
    <dl className={styles.star}>
        {(
            [
                ['S', 'Situation', star.situation],
                ['T', 'Task', star.task],
                ['A', 'Action', star.action],
                ['R', 'Result', star.result],
            ] as const
        ).map(([letter, term, detail]) => (
            <div key={term} className={styles.starRow}>
                <dt>
                    <span className={styles.starLetter} aria-hidden="true">{letter}</span>
                    <span className={styles.starTerm}>{term}</span>
                </dt>
                <dd>{detail}</dd>
            </div>
        ))}
    </dl>
);

interface ProjectCardProps {
    project: Project;
    isActive: boolean;
    onSelect: (id: string | null) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isActive, onSelect }) => {
    const cardRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        if (isActive && cardRef.current) {
            setTimeout(() => {
                cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 80);
        }
    }, [isActive]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect(isActive ? null : project.id);
        }
        if (e.key === 'Escape' && isActive) onSelect(null);
    };

    return (
        <li
            ref={cardRef}
            className={`${styles.card} ${isActive ? styles.cardActive : ''} ${!project.image ? styles.cardNoImage : ''}`}
            role="article"
            aria-expanded={isActive}
        >

            <button
                className={styles.cardThumb}
                onClick={() => onSelect(isActive ? null : project.id)}
                onKeyDown={handleKeyDown}
                aria-label={isActive ? `Collapse ${project.title}` : `Expand ${project.title} details`}
            >

                <span className={styles.categoryBadge} aria-hidden="true">
                    {CATEGORY_LABEL[project.category]}
                </span>

                {project.image &&
                    <div className={styles.thumbImgWrapper}>
                        <Image
                            src={project.image}
                            alt=''
                            width={0}
                            height={0}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className={styles.thumbImg}
                            priority={false}
                        />
                    </div>
                }

                <div className={styles.thumbCaption}>
                    <span className={styles.thumbTitle}>{project.title}</span>
                    <span className={styles.thumbDate}>{GetMonthName(project.created)} {project.created.split("-", 1)}</span>
                </div>
                <span className={styles.thumbIndicator} aria-hidden="true">
                    {isActive ? '✕' : '+'}
                </span>
            </button>

            <div
                className={styles.cardDetail}
                id={`detail-${project.id}`}
                hidden={!isActive}
                aria-live="polite"
            >
                {isActive && (
                    <div className={styles.detailInner}>

                        <p className={styles.detailBrief}>{project.brief}</p>

                        <div className={styles.tagRow}>
                            {project.technologies && project.technologies.length > 0 && (
                                <TagList label="Technologies" items={project.technologies} variant="tech" />
                            )}
                            {project.languages && project.languages.length > 0 && (
                                <TagList label="Languages" items={project.languages} variant="lang" />
                            )}
                        </div>

                        {project.star && <StarSection star={project.star} />}

                        {project.description && (
                            <p className={styles.detailDescription}>{project.description}</p>
                        )}

                        {(project.liveUrl || project.repoUrl || project.hasDetailPage) && (
                            <div className={styles.detailFooter}>
                                {project.hasDetailPage && (
                                    <Link
                                        href={`/portfolio/${project.id}`}
                                        className={`${styles.detailLink} ${styles.detailLinkPage}`}
                                    >
                                        Details
                                    </Link>
                                )}
                                {project.liveUrl && (
                                    <Link
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${styles.detailLink} ${styles.detailLinkLive}`}
                                    >
                                        <span aria-hidden="true">↗</span> Live Site
                                    </Link>
                                )}
                                {project.repoUrl && (
                                    <Link
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${styles.detailLink} ${styles.detailLinkRepo}`}
                                    >
                                        <span aria-hidden="true">{'</>'}</span> Source
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </li>
    );
};

const Portfolio: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<ActiveCategory>('all');
    const [activeSubCategory, setActiveSubCategory] = useState<SubCategory>('all');
    const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
    const listRef = useRef<HTMLUListElement>(null);

    const handleCategoryChange = useCallback((cat: ActiveCategory) => {
        setActiveCategory(cat);
        setActiveSubCategory('all');
        setActiveProjectId(null);
    }, []);

    const handleSubCategoryChange = useCallback((sub: SubCategory) => {
        setActiveSubCategory(sub);
        setActiveProjectId(null);
    }, []);

    const handleProjectSelect = useCallback((id: string | null) => {
        setActiveProjectId((prev) => (prev === id ? null : id));
    }, []);

    const subCatOptions =
        activeCategory !== 'all' ? (SUB_CATEGORIES[activeCategory] ?? []) : [];

    const filteredProjects =
        PROJECTS
            .filter((p) => {
                if (activeCategory !== 'all' && p.category !== activeCategory) return false;
                if (activeCategory !== 'all' && activeSubCategory !== 'all') {
                    return p.subCategory.includes(activeSubCategory);
                }
                return true;
            })
            .sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());

    return (
        <section className={styles.portfolio} aria-label="Portfolio">
            <div className={styles.primaryTabs} aria-label="Portfolio categories">
                <ul role="tablist" className={styles.primaryTabList}>
                    {CATEGORY_TABS.map((tab) => (
                        <li key={tab.value} role="presentation">
                            <button
                                role="tab"
                                aria-selected={activeCategory === tab.value}
                                className={`${styles.primaryTab} ${activeCategory === tab.value ? styles.primaryTabActive : ''
                                    }`}
                                onClick={() => handleCategoryChange(tab.value)}
                                tabIndex={activeCategory === tab.value ? 0 : -1}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {subCatOptions.length > 0 && (
                <div className={styles.subTabs} aria-label="Sub-category filter">
                    <ul className={styles.subTabList}>
                        {subCatOptions.map((sub) => (
                            <li key={sub.value}>
                                <button
                                    className={`${styles.subTab} ${activeSubCategory === sub.value ? styles.subTabActive : ''
                                        }`}
                                    onClick={() => handleSubCategoryChange(sub.value as SubCategory)}
                                    aria-pressed={activeSubCategory === sub.value}
                                >
                                    {sub.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {filteredProjects.length === 0 ? (
                <p className={styles.emptyState}>Nothing here yet.</p>
            ) : (
                <ul
                    ref={listRef}
                    className={styles.grid}
                    aria-label={`${activeCategory} projects`}
                >
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            isActive={activeProjectId === project.id}
                            onSelect={handleProjectSelect}
                        />
                    ))}
                </ul>
            )}
        </section>
    );
};

export default Portfolio;