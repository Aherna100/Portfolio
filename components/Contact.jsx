import React from "react";
import styles from './styles/main.module.css';
import { useTranslation } from "react-i18next";

import { FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

export const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.maincontact} id="contact">
            <div className={styles.contact}>
                <ul>
                    <li><h1><FaGithub onClick={() => window.open('https://github.com/Aherna100/')} /></h1></li>
                    <li><h1><BsLinkedin onClick={() => window.open('https://www.linkedin.com/in/andres-hernandez-martinez-9ab153226/')} /></h1></li>
                    <li><h1><MdEmail onClick={() => window.open("mailto:aherna100@icloud.com")} /></h1></li>
                </ul>
                <div>
                    <p>
                        {t('contact.part2')}
                    </p>
                </div>
            </div>
            <div className={styles.contact1}>
                <h1>{t('contact.part1')}</h1>
            </div>
        </div>
    );
}