'use client';

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
            <p ref={contentRef} className="section__content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum,
                dolorem earum eius et expedita, fugiat itaque libero minus nihil
                non odit possimus similique suscipit. Aliquid amet beatae ipsum
                nemo quaerat.
            </p>
        </div>
    );
}


