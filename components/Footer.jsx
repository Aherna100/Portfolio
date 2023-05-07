import React, { useEffect, useState } from "react";

import styles from './styles/main.module.css';
import { ToggleSwitch } from "@/utils/ToggleSwitch";
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const { i18n } = useTranslation();

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

    const changeTheme = () => {
        const root = document.querySelector(':root');
        if (typeof root != undefined) {
            root.classList.toggle('dark');
        }
    }


    return (
        <div className={styles.mainfooter}>
            <div className={styles.footer}>
                <ToggleSwitch id="toggleSwitchEs" onChange={changeLanguage} value={'Change Language'} />
            </div>
            <div className={styles.footer1}>
                <ToggleSwitch id="toggleSwitchTheme" onChange={changeTheme} value={'Change Theme'} />
            </div>
        </div>
    );
}