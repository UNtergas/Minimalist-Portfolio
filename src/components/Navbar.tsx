'use client'
import {useState} from "react";
import NavLink from "@/components/NavLink";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <>
            <div className={'header__logo'} onClick={closeMenu}>
                <NavLink href={'#hero'} callback={closeMenu}> Logo</NavLink>
            </div>
            {/* Hamburger Menu Button (Visible on Mobile) */}
            <button
                className={'header__toggle'}
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                {menuOpen ? <span>&#x2715;</span> : <span>&#9776;</span>} {/* X and Hamburger Icons */}
            </button>

            {/* Navigation Menu */}
            <nav
                className={`header__nav ${menuOpen ? 'header__nav_open' : ''}`}
            >

                <ul>
                    <li>
                        <NavLink href={'#about'} callback={closeMenu}>about</NavLink>
                    </li>
                    <li>
                        <NavLink href={'#experience'} callback={closeMenu}>experience</NavLink>
                    </li>
                    <li>
                        <NavLink href={'#project'} callback={closeMenu}>projects</NavLink>
                    </li>
                    <li>
                        <NavLink href={'#contact'} callback={closeMenu}>contact</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;