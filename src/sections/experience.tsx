// app/experience/page.tsx
import { getMarkdownData } from "@/app/utils/getDataFromMarkdown";
import { ExperienceFrontMatter, MarkdownData } from "@/app/types";
import ExperienceSection from "@/animation/experience";

export default async function ExperiencePage() {
    const experiences: MarkdownData<ExperienceFrontMatter>[] = await getMarkdownData("experience");

    return (
        <ExperienceSection experiences={experiences} />
    );
}
