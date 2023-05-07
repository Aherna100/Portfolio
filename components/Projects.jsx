import React from "react";
import styles from './styles/main.module.css';
import { useTranslation } from "react-i18next";
import { DemoCarousel } from "./test/DemoCarousel";

export const Projects = ({ data }) => {
    const { t } = useTranslation();
    return (
        <div className={styles.mainproject} id="projects">
            <div className={styles.project}>
                <h1>{t('projects.part1')}</h1>
            </div>
            <div className={styles.project1}>
                <div>
                    <DemoCarousel data={data} />
                </div>
            </div>
        </div>
    );
}