
export default function ContactPage() {
    return (

        <div className="section">
            <h1 id={"page__title"}>Contact</h1>
            <p className="contact-section__text">
                I am currently seeking employment, and I would appreciate it if you could contact me with any available job opportunities.
            </p>
            <button className="contact-section__button">Write Message</button>
            <div className="contact-section__icons">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="contact-section__icon github-icon"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="contact-section__icon linkedin-icon"></i>
                </a>
            </div>
        </div>

    );
}
