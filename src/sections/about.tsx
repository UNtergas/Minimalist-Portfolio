'use client';

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

export default function AboutPage() {
    const aboutRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: "top 80%",
                    end: "bottom 60%",
                    scrub: true,
                },
            });

            // Title animation
            tl.fromTo(
                titleRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1 }
            );

            // Content animation
            tl.fromTo(
                contentRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1 },
                "-=0.5"
            );
        }, aboutRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={aboutRef} className="section">
            <h1 ref={titleRef} id="page__title">
                About
            </h1>
            <div ref={contentRef} className={"section__content"}>

                <p>
                    After spending three years in a
                    <span className="highlight vietnam"> Vietnamese </span>
                    high school specializing in Physics, I initially
                    envisioned a future in mechanical engineering. However, after moving to
                    <span className="highlight france"> France</span>,
                    for university, my
                    interests took an unexpected yet exciting turn
                    toward computer science.
                </p>
                <p>
                    Through a curriculum that includes both cybersecurity and software development,
                    my interest for development has increased day by day. Thus motivating me to work toward being a full
                    stack developer.
                </p>
                <p>
                    Along both university and personal projects, I’ve picked up a range of skills—using
                    <span className="highlight django"> Django</span>,
                    <span className="highlight nodejs"> Node.js</span>,
                    <span className="highlight java"> Java</span>,
                    <span className="highlight react"> React</span>, and
                    <span className="highlight nextjs"> Next.js</span> for development,
                    <span className="highlight docker"> Docker </span> for deployment, and even getting a taste of cybersecurity.
                </p>
                <p>
                    After all, since the very beginning, I have always been curious about where my journey will take me
                    next.
                </p>
                <p>
                    If you would like a more detailed presentation, feel free to check out

                    <a href="/cv/CV_english.pdf" target="_blank" className="cv-link">
                        <Image src={"/link_12.svg"} alt={"link"} width={12} height={12}/> my CV here
                    </a>
                    (and le
                    <a href="/cv/CV_francais.pdf" target="_blank" className="cv-link">
                        <Image src={"/link_12.svg"} alt={"link"} width={12} height={12}/>version française ici
                    </a>).
                </p>


            </div>
        </div>
    );
}


