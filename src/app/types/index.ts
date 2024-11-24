export interface BaseFrontMatter {
    title: string;
    description: string;
}
export interface ProjectFrontMatter extends BaseFrontMatter {
    date: string;
    tags: string[];
    link: string;
}

export interface ExperienceFrontMatter extends BaseFrontMatter {
    location: string;
    company: string;
    date: string;
    tags: string[];
    link: string;
    work: string[];
}

export type MarkdownFrontMatter = ProjectFrontMatter | ExperienceFrontMatter | BaseFrontMatter;
export interface MarkdownData<T = MarkdownFrontMatter> {
    frontMatter: T; // Adjust the type based on your frontMatter structure
    content: string;
}


