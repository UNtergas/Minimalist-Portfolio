import { MarkdownData,ProjectFrontMatter} from "@/app/types";
// import Markdown from "markdown-to-jsx";

const Project = ({ project }: { project: MarkdownData<ProjectFrontMatter> }) => {
    return (
        <div className="project">
            <div className="project__image"></div>
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
                <a
                    className="project__link"
                    href={project.frontMatter.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    🔗 View Project
                </a>
            </div>
        </div>
    );
};

export default Project;


//
// < div className = "projects__content" >
//     < Markdown > {project.content} </Markdown>
// </div>