'use client';
import Image from "next/image";

export default function ContactPage() {
    return (

        <div className="section">
            <h1 id="page__title">Contact</h1>
            <div className='section__content'>
                <p style={{marginTop:'5rem'}}>
                    I am always seeking new things, and I would appreciate any feedback or new connections.
                    If would like to get in touch, please feel free to reach out to me
                </p>
                <div className='contact'>
                    <button className="contact__button"
                            onClick={() =>
                                window.location.href =
                                    "mailto:nguyenanhtuan200241@gmail.com?subject=Know more about me&body=Hi, I found your portfolio and would like to connect!"
                            }
                        >Write Message
                    </button>
                    <div className="contact__icons">
                        <a href="https://www.linkedin.com/in/tubanguyen" target="_blank" className="icon">
                            <Image src={'/linkedin_24.svg'} alt={'linked'} width={24} height={24}/>
                        </a>
                        <a href="https://github.com/UNtergas" target="_blank" className="icon">
                            <Image src={'/git_24.svg'} alt={'git'} width={24} height={24}/>
                        </a>
                    </div>
                    <div className='contact__footer'>
                        Anh Tuan - 2024
                    </div>
                </div>
            </div>

        </div>

    );
}
