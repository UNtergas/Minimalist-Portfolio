import { getMarkdownData } from "@/app/utils/getDataFromMarkdown";
import Project from "@/components/Project";
import Sandbox from "@/components/Sandbox";
import {ProjectFrontMatter,MarkdownData} from "@/app/types";

export default async function ProjectPage() {
    const projects: MarkdownData<ProjectFrontMatter>[] = await getMarkdownData<ProjectFrontMatter>("project").catch(() => []);
    const sandboxs: MarkdownData<ProjectFrontMatter>[] = await getMarkdownData<ProjectFrontMatter>("sandbox").catch(() => []);

    return (
        <div className={'section'}>
            <h1 id={'page__title'}>Projects</h1>
            <div className={'section__content'}>
                {projects.map((project,index) => (
                    <Project key={index || project.frontMatter.title } project={project} />
                ))}
            </div>
            <h2 id={'page__title--small'}>Some small things i do</h2>
            <div className={'sandbox-grid'}>
                {sandboxs.map((sandbox,index) => (
                    <Sandbox key={index || sandbox.frontMatter.title} sandbox={sandbox} />
                ))}
            </div>

        </div>
    );
}
