import { MarkdownData,ProjectFrontMatter } from "@/app/types";
// import Markdown from "markdown-to-jsx";

const Sandbox = ({ sandbox }: { sandbox: MarkdownData<ProjectFrontMatter> }) => {
    return (
        <div className="sandbox">
            <div className="sandbox__image"></div>
            <div className="sandbox__details">
                <h2 className="sandbox__title">{sandbox.frontMatter.title}</h2>
                <p className={'sandbox__day'}>{sandbox.frontMatter.date}</p>
                <p className="sandbox__description">{sandbox.frontMatter.description}</p>

                <hr className={"sandbox__separator"}/>
                <div className="sandbox__tags">
                    {sandbox.frontMatter.tags.map((tag, index) => (
                        <span key={index} className="sandbox__tag">{tag}</span>
                    ))}
                </div>
                <a
                    className="sandbox__link"
                    href={sandbox.frontMatter.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    🔗 View Project
                </a>
            </div>
        </div>
    );
};

export default Sandbox;


//
// < div className = "sandbox__content" >
//     < Markdown > {project.content} </Markdown>
// </div>