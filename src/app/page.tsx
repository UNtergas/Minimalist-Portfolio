import Hero from "@/components/Hero";
import AboutPage from "@/sections/about";
import ExperiencePage from "@/sections/experience";
import ProjectPage from "@/sections/project";
import ContactPage from "@/sections/contact";

export default function Home() {
    return (
        <main>
            <section id={"hero"}>
                <Hero />
            </section>
            <section id={"about"}>
                <AboutPage/>
            </section>
            <section id={"experience"}>
                <ExperiencePage/>
            </section>
            <section id={"project"}>
                <ProjectPage/>
            </section>
            <section id={"contact"}>
                <ContactPage/>
            </section>
        </main>
    );
}