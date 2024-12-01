import { MarkdownData,ProjectFrontMatter} from "@/app/types";
import Image from "next/image";
import Link from "next/link";



const Project = ({
                     project,
                     refs,
}: {
    project: MarkdownData<ProjectFrontMatter>;
    refs: {
        projectRef: (el: HTMLDivElement) => void;
    }
}) => {
    return (
        <div className="project" ref={refs.projectRef }>
            <div className="project__image" style={{backgroundImage: `url(${project.frontMatter.image})`}}></div>
            <div className="project__details">
                <h2 className="project__title">{project.frontMatter.title}</h2>
                <p className={"project__day"}>{project.frontMatter.date}</p>
                <p className="project__description">{project.frontMatter.description}</p>

                <hr className={"project__separator"}/>
                <div className="project__tags">
                    {project.frontMatter.tags.map((tag, index) => (
                        <span key={index} className="project__tag">{tag}</span>
                    ))}
                </div>
                <div className="project__links">
                    {project.frontMatter.link !== "none" && (
                        <a
                            className="project__link"
                            href={project.frontMatter.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image src={"/link_14.svg"} alt={"🔗 View Project"} width={20} height={20}/>
                        </a>
                    )}

                    {project.frontMatter.github !== "none" && (
                        <a
                            className="project__link"
                            href={project.frontMatter.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image src={"/git_16.svg"} alt={"🛠 View GitHub"} width={20} height={20}/>
                        </a>
                    )}

                    {/*  Link to the markdown content page */}
                    <Link
                        href={`/${project.frontMatter.slug}`}  // Assuming `slug` is part of the front matter
                        className="project__link"
                    >
                        &#128173; Thoughts
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Project;


