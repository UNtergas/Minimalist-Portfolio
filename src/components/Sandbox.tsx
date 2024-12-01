import { MarkdownData,ProjectFrontMatter } from "../types";
import Image from "next/image";
// import Markdown from "markdown-to-jsx";

const Sandbox = ({ sandbox }: { sandbox: MarkdownData<ProjectFrontMatter> }) => {
    return (
        <div className="sandbox">
            <div className="sandbox__image" style={{backgroundImage: `url(${sandbox.frontMatter.image})`}}></div>
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
                <div className="sandbox__links">

                {sandbox.frontMatter.link !== "none" && (
                    <a
                        className="sandbox__link"
                        href={sandbox.frontMatter.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image src={"/link_12.svg"} alt={"🔗 View Project"} width={14} height={14}/>
                    </a>
                )}

                {sandbox.frontMatter.github !== "none" && (
                    <a
                        className="sandbox__link"
                        href={sandbox.frontMatter.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image src={"/git_14.svg"} alt={"🛠 View GitHub"} width={16} height={16}/>
                    </a>
                )}
                </div>
            </div>
        </div>
    );
};

export default Sandbox;


