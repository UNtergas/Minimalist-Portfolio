import { MarkdownData,ExperienceFrontMatter } from "@/app/types";
import Image from "next/image";
// import Markdown from "markdown-to-jsx";

const Experience = ({
                        experience,
                        refs,
}: {
    experience: MarkdownData<ExperienceFrontMatter>;
    refs: {
        leftRef: (el: HTMLDivElement) => void;
        rightRef: (el: HTMLDivElement) => void;
    };
}) => {
    return (
        <div className="experiences">

            <div className="experience">
                <div className={'experience__left'} ref={refs.leftRef}>
                    <h2 className="experience__left__title">{experience.frontMatter.title}</h2>
                    <p className={"experience__left__company"}> {experience.frontMatter.company} </p>
                    <p className={"experience__left__location"}> {experience.frontMatter.location} </p>
                    <hr className={"experience__separator"}/>
                    <p className={"experience__left__date"}>{experience.frontMatter.date}</p>
                </div>
                <div className={'experience__right'} ref={refs.rightRef}>
                    <ul className={'experience__right__list'}>
                        {experience.frontMatter.work.map((work, index) => (
                            <li key={index} className="experience__right__work">{work}</li>
                        ))}
                    </ul>
                    <hr className={"experience__separator"}/>
                    <div className={"experience__right__image"} style={{backgroundImage: `url(${experience.frontMatter.image})`}}></div>
                    <div className={"experience__right__description"}>{experience.frontMatter.description}</div>
                    <div className="experience__tags">
                        {experience.frontMatter.tags.map((tag, index) => (
                            <span key={index} className="experience__tag">{tag}</span>
                        ))}
                    </div>
                    <div>
                        <a
                            className="experience__link"
                            href={experience.frontMatter.link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image src={"/link_14.svg"} alt={"🔗 View Project"} width={14} height={14}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;


//
// < div className = "projects__content" >
//     < Markdown > {project.content} </Markdown>
// </div>