export interface BaseFrontMatter {
    title: string;
    description: string;
}
export interface ProjectFrontMatter extends BaseFrontMatter {
    date: string;
    tags: string[];
    link: string;
    image: string;
    github: string;
}

export interface ExperienceFrontMatter extends BaseFrontMatter {
    location: string;
    company: string;
    date: string;
    tags: string[];
    link: string;
    work: string[];
    image: string;
}

export type MarkdownFrontMatter = ProjectFrontMatter | ExperienceFrontMatter ;
export interface MarkdownData<T = MarkdownFrontMatter> {
    frontMatter: T; // Adjust the type based on your frontMatter structure
    content: string;
}


