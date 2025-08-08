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
                    <li>{t('about.skills.backend')}</li>
                    <li>{t('about.skills.frontend')}</li>
                    <li>{t('about.skills.automation')}</li>
                    <li>{t('about.skills.mobile')}</li>
                    <li>{t('about.skills.database')}</li>
                    <li>{t('about.skills.cloud')}</li>
                    <li>{t('about.skills.leadership')}</li>
                    <li>{t('about.skills.methodology')}</li>
                </ul>
            </div>
            <div className={styles.about1}>
                <h1>{t('about.part3')}</h1>
            </div>
        </div>
    );
}