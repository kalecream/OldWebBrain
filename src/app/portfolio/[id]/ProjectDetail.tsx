'use client';
import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@components/Portfolio/PortfolioData';
import styles from './PortfolioDetailed.module.scss';

const TagList: React.FC<{ label: string; items: string[]; variant: 'tech' | 'lang' }> = ({
    label,
    items,
    variant,
}) => (
    <div className={styles.tagGroup}>
        <span className={styles.tagLabel}>{label}</span>
        <ul className={`${styles.tagList} ${styles[variant]}`} aria-label={label}>
            {items.map((item) => (
                <li key={item} className={styles.tag}>{item}</li>
            ))}
        </ul>
    </div>
);

const StarSection: React.FC<{ star: NonNullable<Project['star']> }> = ({ star }) => (
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
                    <span className={styles.starLetter}>{letter}</span>
                    <span className={styles.starTerm}>{term}</span>
                </dt>
                <dd>{detail}</dd>
            </div>
        ))}
    </dl>
);

interface LightboxProps {
    images: NonNullable<Project['galleryImages']>;
    initialIndex: number;
    onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, initialIndex, onClose }) => {
    const [index, setIndex] = useState(initialIndex);

    const prev = useCallback(
        () => setIndex((i) => (i - 1 + images.length) % images.length),
        [images.length]
    );
    const next = useCallback(
        () => setIndex((i) => (i + 1) % images.length),
        [images.length]
    );

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', handler);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handler);
            document.body.style.overflow = '';
        };
    }, [onClose, prev, next]);

    const current = images[index];

    return (
        <div
            className={styles.lightboxBackdrop}
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={`Image lightbox — ${current.alt}`}
        >
            <div
                className={styles.lightboxContent}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className={styles.lightboxClose}
                    onClick={onClose}
                    aria-label="Close lightbox"
                >
                    ✕
                </button>

                <div className={styles.lightboxImgWrap}>
                    <Image
                        src={current.src}
                        alt={current.alt}
                        fill
                        sizes="90vw"
                        className={styles.lightboxImg}
                        priority
                    />
                </div>

                {current.caption && (
                    <p className={styles.lightboxCaption}>{current.caption}</p>
                )}

                {images.length > 1 && (
                    <>
                        <button
                            className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
                            onClick={prev}
                            aria-label="Previous image"
                        >
                            ←
                        </button>
                        <button
                            className={`${styles.lightboxNav} ${styles.lightboxNext}`}
                            onClick={next}
                            aria-label="Next image"
                        >
                            →
                        </button>
                        <span className={styles.lightboxCount}>
                            {index + 1} / {images.length}
                        </span>
                    </>
                )}
            </div>
        </div>
    );
};

const Gallery: React.FC<{ images: NonNullable<Project['galleryImages']> }> = ({ images }) => {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    return (
        <>
            <section className={styles.gallery} aria-label="Project gallery">
                <h2 className={styles.sectionHeading}>
                    <span className={styles.headingRule} aria-hidden="true" />
                    Gallery
                    <span className={styles.headingRule} aria-hidden="true" />
                </h2>

                <ul className={styles.galleryGrid}>
                    {images.map((img, i) => (
                        <li
                            key={img.src}
                            className={`${styles.galleryCell} ${styles[img.orientation ?? 'landscape']}`}
                        >
                            <button
                                className={styles.galleryThumbBtn}
                                onClick={() => setLightboxIndex(i)}
                                aria-label={`Open ${img.alt} in lightbox`}
                            >
                                <div className={styles.galleryThumbWrap}>
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className={styles.galleryThumbImg}
                                    />
                                    <div className={styles.galleryThumbOverlay} aria-hidden="true" />
                                    <span className={styles.galleryZoomIcon} aria-hidden="true">⊕</span>
                                </div>
                                {img.caption && (
                                    <p className={styles.galleryCaption}>{img.caption}</p>
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            </section>

            {lightboxIndex !== null && (
                <Lightbox
                    images={images}
                    initialIndex={lightboxIndex}
                    onClose={() => setLightboxIndex(null)}
                />
            )}
        </>
    );
};


// ⚠️ These must match the category values in PortfolioData.ts exactly.
const CATEGORY_LABEL: Record<string, string> = {
    development: 'Dev',
    design: 'Illustration',
};

const ProjectDetail: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <article className={styles.detail}>
            <div className={styles.hero}>
                <div className={styles.heroImgWrap}>
                    <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="100vw"
                        className={styles.heroImg}
                        priority
                    />
                    <div className={styles.heroOverlay} aria-hidden="true" />
                    <span className={styles.heroClaw} aria-hidden="true" />
                </div>

                <div className={styles.heroContent}>
                    <span className={styles.categoryBadge}>
                        {CATEGORY_LABEL[project.category] ?? project.category}
                    </span>
                    <h1 className={styles.heroTitle}>{project.title}</h1>
                    <time className={styles.heroDate} dateTime={project.date}>
                        {project.date}
                    </time>
                    <p className={styles.heroBrief}>{project.brief}</p>

                    <div className={styles.tagRow}>
                        {project.technologies && project.technologies.length > 0 && (
                            <TagList label="Technologies" items={project.technologies} variant="tech" />
                        )}
                        {project.languages && project.languages.length > 0 && (
                            <TagList label="Languages" items={project.languages} variant="lang" />
                        )}
                    </div>

                    {(project.liveUrl || project.repoUrl) && (
                        <div className={styles.heroLinks}>
                            {project.liveUrl && (
                                <Link
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${styles.heroLink} ${styles.heroLinkLive}`}
                                >
                                    <span aria-hidden="true">↗</span> Live Site
                                </Link>
                            )}
                            {project.repoUrl && (
                                <Link
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${styles.heroLink} ${styles.heroLinkRepo}`}
                                >
                                    <span aria-hidden="true">{'</>'}</span> Source
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className={styles.body}>
                {project.star && (
                    <section className={styles.bodySection} aria-label="STAR breakdown">
                        <h2 className={styles.sectionHeading}>
                            <span className={styles.headingRule} aria-hidden="true" />
                            Breakdown
                            <span className={styles.headingRule} aria-hidden="true" />
                        </h2>
                        <StarSection star={project.star} />
                    </section>
                )}

                {project.description && (
                    <section className={styles.bodySection}>
                        <h2 className={styles.sectionHeading}>
                            <span className={styles.headingRule} aria-hidden="true" />
                            About
                            <span className={styles.headingRule} aria-hidden="true" />
                        </h2>
                        <p className={styles.bodyText}>{project.description}</p>
                    </section>
                )}

                {project.extendedDescription && (
                    <section className={styles.bodySection}>
                        <h2 className={styles.sectionHeading}>
                            <span className={styles.headingRule} aria-hidden="true" />
                            In Depth
                            <span className={styles.headingRule} aria-hidden="true" />
                        </h2>
                        <p className={styles.bodyText}>{project.extendedDescription}</p>
                    </section>
                )}

                {project.galleryImages && project.galleryImages.length > 0 && (
                    <Gallery images={project.galleryImages} />
                )}
            </div>
        </article>
    );
};

export default ProjectDetail;