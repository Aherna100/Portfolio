import React, { useEffect, useRef, useState } from "react";
import styles from './styles/main.module.css';
import Link from "next/link";

import { RxHamburgerMenu } from "react-icons/rx";
import { ToggleSwitch } from "@/utils/ToggleSwitch";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/utils/useTheme";

export const Sidenav = () => {
    const sideNavRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { i18n } = useTranslation();
    const { onToggleTheme } = useTheme();

    const lngs = {
        en: { nativeName: 'English' },
        es: { nativeName: 'Spanish' }
    }

    const changeLanguage = (e) => {
        const lng = Object.keys(lngs);
        if (e) {
            localStorage.setItem('prefer-language', lng[1]);
            i18n.changeLanguage(lng[1])
        } else {
            localStorage.setItem('prefer-language', lng[0]);
            i18n.changeLanguage(lng[0])
        }
    }

    const handleClick = () => {
        setIsMenuOpen(true);
    }

    const handleOutside = (event) => {
        if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleOutside);
        return () => {
            document.removeEventListener('mousedown', handleOutside);
        };
    }, []);

    let options;

    if (isMenuOpen) {
        options =
            <>
                <Link href="/#about"><h1>About</h1></Link>
                <Link href="/#projects"><h1>Projects</h1></Link>
                <Link href="/#contact"><h1>Contact</h1></Link>
                <div className={styles.sidenavToggles}>
                    <div className={styles.toggleGroup}>
                        <ToggleSwitch id="sidebarToggleLang" onChange={changeLanguage} value={'EN/ES'} />
                    </div>
                    <div className={styles.toggleGroup}>
                        <ToggleSwitch id="sidebarToggleTheme" onChange={onToggleTheme} value={'Theme'} />
                    </div>
                </div>
            </>
    } else {
        options = <h1 onClick={handleClick}><RxHamburgerMenu /></h1>
    }

    return (
        <div className={styles.sidenav} ref={sideNavRef} style={{ width: isMenuOpen === true ? '12rem' : '5rem' }}>
            {options}
        </div>
    );

}