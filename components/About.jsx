import React from "react";
import { useTranslation } from "react-i18next";
import styles from './styles/main.module.css';

export const About = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.mainabout} id="about">
            <div className={styles.about}>
                <p>{t('about.part1')}</p>
                <p>{t('about.part2')}</p>
                <ul>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Postgresql</li>
                    <li>Swift</li>
                    <li>Express</li>
                </ul>
            </div>
            <div className={styles.about1}>
                <h1>{t('about.part3')}</h1>
            </div>
        </div>
    );
}