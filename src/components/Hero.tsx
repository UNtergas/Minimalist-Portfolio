'use client'

import Image from "next/image";

const Hero = () => {
    const scrollToNextSection = () => {
        const nextSection = document.querySelector('#about'); // Replace with the ID of the next section
        if (nextSection) {

            const offset = 20; // Adjust this value as needed
            const elementPosition = nextSection.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className={'hero'}>
            <h1 className={'hero__title'}>Hi, I’m a Fullstack Developer</h1>
            <p className={'hero__subtitle'}>I like to imagine and build fun things.</p>
            <div className={'hero__scroll'} onClick={scrollToNextSection} role={"button"}>
                <Image src={"/hero-arrow.svg"} alt={'scroll'} width={24} height={24}/>
            </div>
        </section>
    );
}

export default Hero;