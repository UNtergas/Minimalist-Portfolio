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

        const mm = gsap.matchMedia();
        const breakPoint = 800;

        mm.add(
            {
                // Define conditions
                isDesktop: `(min-width: ${breakPoint}px)`,
                isMobile: `(max-width: ${breakPoint - 1}px)`,
            },
            (context) => {
                const isDesktop = context.conditions?.isDesktop;
                const isMobile = context.conditions?.isMobile;

                // Common timeline setup
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: aboutRef.current,
                        start:"top 80%",
                        end: isDesktop ? "bottom 70%" : "bottom 100%",
                        scrub: true,
                    },
                });

                // Title animation
                tl.fromTo(
                    titleRef.current,
                    { opacity: 0, y: isDesktop ? 50 : 20 },
                    { opacity: 1, y: 0, duration: isMobile ? 0.8 : 1 }
                );

                // Content animation
                tl.fromTo(
                    contentRef.current,
                    { opacity: 0, y: isDesktop ? 30 : 15 },
                    { opacity: 1, y: 0, duration: isMobile ? 0.3 : 1 },
                    "-=0.5"
                );

                return () => {
                    // Custom cleanup code (if needed) for the media query
                };
            }
        );
        // Cleanup on unmount
        return () => mm.revert();
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
                    <Image src={'/about/pho.png'} alt={'left-image'} width={200} height={200} className="about-image left-image vietnam"/>
                    <Image src={'/about/vehicles.png'} alt={'right-image'} width={200} height={200} className="about-image right-image vietnam"/>
                    high school specializing in Physics, I initially
                    envisioned a future in mechanical engineering. However, after moving to
                    <span className="highlight france"> France</span>,  for university, my
                    interests took an unexpected yet exciting turn
                    toward computer science.
                    <Image src={'/about/bread.png'} alt={'left-image'} width={200} height={200} className="about-image left-image france"/>
                    <Image src={'/about/building.png'} alt={'right-image'} width={200} height={200} className="about-image right-image france"/>
                </p>
                <p>
                    Through a curriculum that includes both cybersecurity and software development,
                    my interest for development has increased day by day. Thus motivating me to work toward being a full
                    stack developer.
                </p>
                <p>
                    Along both university and personal projects, I’ve picked up a range of skills—using
                    <span className="highlight django"> Django</span>,
                    <Image src={'/about/python.png'} alt={'left-image'} width={200} height={200} className="about-image left-image django"/>
                    <span className="highlight nodejs"> Node.js</span>,
                    <Image src={'/about/node.png'} alt={'right-image'} width={200} height={200} className="about-image right-image nodejs"/>
                    <span className="highlight java"> Java</span>,
                    <Image src={'/about/java.png'} alt={'left-image'} width={200} height={200} className="about-image left-image java"/>
                    <span className="highlight react"> React</span>, and
                    <Image src={'/about/react.png'} alt={'right-image'} width={200} height={200} className="about-image right-image react"/>
                    <span className="highlight nextjs"> Next.js</span> for development,
                    <Image src={'/about/next.png'} alt={'left-image'} width={200} height={200} className="about-image left-image nextjs"/>
                    <span className="highlight docker"> Docker </span> for deployment, and even getting a taste of cybersecurity.
                    <Image src={'/about/docker.png'} alt={'right-image'} width={200} height={200} className="about-image right-image docker"/>
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


