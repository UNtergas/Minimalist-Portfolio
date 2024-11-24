import { getMarkdownData } from "@/app/utils/getDataFromMarkdown";
import { MarkdownData, ProjectFrontMatter } from "@/app/types";
import ProjectSection from "@/animation/project";

export default async function ProjectPage() {
    // Fetch Markdown data for projects and sandboxes at build time
    const projects: MarkdownData<ProjectFrontMatter>[] = await getMarkdownData("project");
    const sandboxs: MarkdownData<ProjectFrontMatter>[] = await getMarkdownData("sandbox");

    // Pass the prebuilt data as props to the client component
    return <ProjectSection projects={projects} sandboxs={sandboxs} />;
}
