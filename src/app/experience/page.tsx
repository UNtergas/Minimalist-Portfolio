
import Experience from "@/components/Experience";
import {ExperienceFrontMatter, MarkdownData} from "@/app/types";
import {getMarkdownData} from "@/app/utils/getDataFromMarkdown";

export default async function ExperiencePage() {
    const experiences: MarkdownData<ExperienceFrontMatter>[] = await getMarkdownData<ExperienceFrontMatter>("experience").catch(() => []);

    return (
        <div className={'section'}>
            <h1 id={'page__title'}>Experience</h1>
            <div className={'section__content'}>
                {experiences.map((experience,index) => (
                    <Experience key={index || experience.frontMatter.title} experience={experience} />
                ))}
            </div>
        </div>
    );
}