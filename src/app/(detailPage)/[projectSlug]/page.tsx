import {MarkdownData, ProjectFrontMatter} from "@/app/types";
import {getMarkdownData, getSingleMarkdownData} from "@/app/utils/getDataFromMarkdown";
import Markdown from "markdown-to-jsx";
import Link from "next/link";

type ProjectContent = { notFound: boolean, content: string };
export const generateStaticParams = async () => {
    const projects: MarkdownData<ProjectFrontMatter>[] = await getMarkdownData("project");
    return projects.map((project) => ({
        slug: project.frontMatter.slug,  // Assuming the front matter contains a `slug`
    }));
}

async function fetchProjectContent(slug: string): Promise<ProjectContent> {
    try{
        const project: MarkdownData<ProjectFrontMatter> = await getSingleMarkdownData("project", slug);
        return { notFound: false, content: project.content };
    }catch (error){
        return { notFound: true, content: "" };
    }

}


interface Params{
    projectSlug: string;
}


export default async function ProjectPage({params}:{params: Params}) {
    const slug = params.projectSlug
    const project:ProjectContent = await fetchProjectContent(slug);


    if (project.notFound) {
        return <div id="page__not-found">
            Project not found
            <Link href="/public"> Go back to the homepage</Link>
        </div>;
    }

    return(
        <div className="markdown-content">
            <Markdown>{project.content}</Markdown>
        </div>
    )
}