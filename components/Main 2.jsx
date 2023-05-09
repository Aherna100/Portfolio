import React from "react";
import styles from './styles/main.module.css';
import { useTranslation } from "react-i18next";

export const Main = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.containermain}>
                <p>{t('main.part1')}</p>
                <h1>Andres</h1>
                <h3>{t('main.part2')}</h3>
                <p>{t('main.part3')}</p>
            </div>

        </div>
    );
}