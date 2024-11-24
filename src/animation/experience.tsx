"use client";

import { useEffect, useRef } from "react";
import Experience from "@/components/Experience";
import { ExperienceFrontMatter, MarkdownData } from "@/app/types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



interface ExperienceSectionProps {
    experiences: MarkdownData<ExperienceFrontMatter>[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const leftRefs = useRef<HTMLDivElement[]>([]);
    const rightRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 30%",
                    end: "bottom 100%",
                    scrub: true,
                },
            });

            tl.fromTo(
                titleRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1 }
            );

            leftRefs.current.forEach((el, index) => {
                tl.fromTo(
                    el,
                    { opacity: 0, x: -100 },
                    { opacity: 1, x: 0, duration: 1.2 },
                    index * 0.1
                );
            });

            rightRefs.current.forEach((el, index) => {
                tl.fromTo(
                    el,
                    { opacity: 0, x: 100 },
                    { opacity: 1, x: 0, duration: 1.2 },
                    index * 0.1
                );
            });
        });

        return () => ctx.revert();
    }, [experiences]);

    return (
        <div className="section" ref={sectionRef}>
            <h1 id="page__title" ref={titleRef}>Experience</h1>
            <div className="section__content">
                {experiences.map((experience, index) => (
                    <Experience
                        key={index || experience.frontMatter.title}
                        experience={experience}
                        refs={{
                            leftRef: (el: HTMLDivElement) => (leftRefs.current[index] = el),
                            rightRef: (el: HTMLDivElement) => (rightRefs.current[index] = el),
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
