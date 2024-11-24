'use client';

import Link from "next/link";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    callback?: () => void;
}

export default function NavLink({ href, children, callback }: NavLinkProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = 20; // Adjust this value as needed
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }

        if (callback) {
            callback();
        }
    };

    return (
        <Link onClick={handleClick} href={href}>{children}</Link>
    );
}
