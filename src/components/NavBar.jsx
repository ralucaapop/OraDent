import React, { useState } from "react";
import styles from "../css/navbar.module.css";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        console.log(element)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false); // închide burger-ul
        }
    };

    return (
        <nav className={styles.navbar}>
            <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
                <li>
                    <button className={styles.nav_button} onClick={() => scrollToSection("home")}>Home</button>
                </li>
                <li>
                    <button className={styles.nav_button} onClick={() => scrollToSection("current_event")}>Ediția curentă</button>
                </li>
                <li>
                    <button className={styles.nav_button} onClick={() => scrollToSection("program")}>Program</button>
                </li>
                <li>
                    <button  className={styles.nav_button} onClick={() => scrollToSection("past_editions")}>Ediții anterioare</button>
                </li>
                <li>
                    <button className={styles.nav_button} onClick={() => scrollToSection("contact")}>Contact</button>
                </li>
            </ul>
            <div className={styles.burger} onClick={toggleMenu}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
        </nav>
    );
};

export default NavBar;
