import { MarkdownData, ProjectFrontMatter } from "../../../types";
import { getMarkdownData, getSingleMarkdownData } from "@/utils/getDataFromMarkdown";
import Markdown from "markdown-to-jsx";
import Link from "next/link";


type ProjectContent = { notFound: boolean, content: string };

export const generateStaticParams = async () => {
    const projects: MarkdownData<ProjectFrontMatter>[] = await getMarkdownData("project");
    return projects.map((project) => ({
        projectSlug: project.frontMatter.slug,  // Assuming the front matter contains a `slug`
    }));
}

async function fetchProjectContent(slug: string): Promise<ProjectContent> {
    try {
        const project: MarkdownData<ProjectFrontMatter> = await getSingleMarkdownData("project", slug);
        return { notFound: false, content: project.content };
    } catch {
        return { notFound: true, content: "" };
    }
}

interface Params {
    projectSlug: string;
}
// Next15 Dynamic Apis are async, including dynamic routes and slugs
export default async function ProjectPage({params}: { params: Promise<Params> }) {
    const slug = (await params).projectSlug;
    const project: ProjectContent = await fetchProjectContent(slug);

    if (project.notFound) {
        return <div id="page__not-found">
            Project not found
            <Link href="/public"> Go back to the homepage</Link>
        </div>;
    }

    return (
        <div className="markdown-content">
            <Markdown>{project.content}</Markdown>
        </div>
    );
}