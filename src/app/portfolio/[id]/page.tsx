import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PROJECTS } from '@components/Portfolio/PortfolioData';
import ProjectDetail from './ProjectDetail';

export function generateStaticParams() {
    return PROJECTS
        .filter((p) => p.hasDetailPage)
        .map((p) => ({ id: p.id }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const project = PROJECTS.find((p) => p.id === id);
    if (!project) return { title: 'Not Found' };

    return {
        title: `${project.title} — Yung Higue`,
        description: project.brief,
        openGraph: {
            title: project.title,
            description: project.brief,
            images: [{ url: project.image }],
        },
    };
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project = PROJECTS.find(
        (p) => p.id === id && p.hasDetailPage
    );

    if (!project) notFound();

    return <ProjectDetail project={project} />;
}