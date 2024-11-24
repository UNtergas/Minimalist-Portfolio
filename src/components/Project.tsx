import { MarkdownData,ProjectFrontMatter} from "@/app/types";
import Image from "next/image";



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
                {project.frontMatter.link !== "none" && (
                    <a
                        className="project__link"
                        href={project.frontMatter.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image src={"/link_14.svg"} alt={"🔗 View Project"} width={14} height={14}/>
                    </a>
                )}

                {project.frontMatter.github !== "none" && (
                    <a
                        className="project__link"
                        href={project.frontMatter.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image src={"/git_16.svg"} alt={"🛠 View GitHub"} width={16} height={16}/>
                    </a>
                )}

            </div>
        </div>
    );
};

export default Project;


//
// < div className = "projects__content" >
//     < Markdown > {project.content} </Markdown>
// </div>