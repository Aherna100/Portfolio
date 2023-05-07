import React, { useEffect, useRef, useState } from "react";
import styles from './styles/main.module.css';
import Link from "next/link";

import { RxHamburgerMenu } from "react-icons/rx";

export const Sidenav = () => {
    const sideNavRef = useRef(null);
    const [window, setwindow] = useState(false);

    const handleClick = () => {
        setwindow(true);
    }

    const handleOutside = (event) => {
        if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
            setwindow(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleOutside);
        return () => {
            document.removeEventListener('mousedown', handleOutside);
        };
    }, []);

    let options;

    if (window) {
        options =
            <>
                <Link href="/#about"><h1>About</h1></Link>
                <Link href="/#projects"><h1>Projects</h1></Link>
                <Link href="/#contact"><h1>Contact</h1></Link>
            </>
    } else {
        options = <h1 onClick={handleClick}><RxHamburgerMenu /></h1>
    }

    return (
        <div className={styles.sidenav} ref={sideNavRef} style={{ width: window === true ? '12rem' : '5rem' }}>
            {options}
        </div>
    );

}