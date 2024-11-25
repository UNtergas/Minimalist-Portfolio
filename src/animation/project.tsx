"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Project from "@/components/Project";
import Sandbox from "@/components/Sandbox";
import { ProjectFrontMatter, MarkdownData } from "@/app/types";

interface ProjectSectionProps {
    projects: MarkdownData<ProjectFrontMatter>[];
    sandboxs: MarkdownData<ProjectFrontMatter>[];
}

export default function ProjectSection({ projects, sandboxs }: ProjectSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const smallTitleRef = useRef<HTMLHeadingElement>(null);
    const projectRefs = useRef<HTMLDivElement[]>([]);
    const sandboxRef = useRef<HTMLDivElement>(null);

    // GSAP animations with timeline
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "bottom 100%",
                    scrub: true,
                },
            });

            tl.fromTo(
                titleRef.current,
                { opacity: 0, y: 60 },
                { opacity: 1, y: 0, duration: 1 }
            );
            tl.fromTo(
                smallTitleRef.current,
                { opacity: 0, x: 100 },
                { opacity: 1, x: 0, duration: 1 }
            );
            tl.fromTo(
                sandboxRef.current,
                { opacity: 0.8, x: -50 },
                { opacity: 1, x: 0, duration: 1 }
            );

            // Animate projects
            projectRefs.current.forEach((el, index) => {
                const animationProps =
                    index % 2 === 0
                        ? { x: -100, opacity: 0.5 } // Even-indexed projects (left)
                        : { x: 100, opacity: 0.5 }; // Odd-indexed projects (right)

                tl.fromTo(
                    el,
                    animationProps,
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                    },
                    index,

                );
            });
        });

        return () => ctx.revert();
    }, [projects]);

    return (
        <div className="section" ref={sectionRef}>
            <h1 id="page__title" ref={titleRef}>Projects</h1>
            <div className="section__content">
                {projects.map((project, index) => (
                    <Project
                        key={index || project.frontMatter.title}
                        project={project}
                        refs={{
                            projectRef: (el: HTMLDivElement) => (projectRefs.current[index] = el),
                        }}
                    />
                ))}
            </div>
            <h2 id="page__title--small" ref={smallTitleRef}>Some small things I do</h2>
            <div className="sandbox-grid" ref={sandboxRef}>
                {sandboxs.map((sandbox, index) => (
                    <Sandbox
                        key={index || sandbox.frontMatter.title}
                        sandbox={sandbox}
                    />
                ))}
            </div>
        </div>
    );
}
