import React from "react";
import { useTranslation } from "react-i18next";
import { generateCustomPlaceholderURL } from "react-placeholder-image";
import styles from './test.module.css';

import { BiLinkExternal } from 'react-icons/bi';
import { GoMarkGithub } from 'react-icons/go';

export const ContainerComponent = ({ item }) => {
    const placeHolderUrl = generateCustomPlaceholderURL(600, 350, {
        grayscale: true
    });

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.maincontent}>
                    <p>{item.name}</p>
                </div>
                <div className={styles.secondcontent}>
                    <img src={placeHolderUrl} alt="Test" />
                </div>
            </div>
            <div className={styles.footcontent}>
                <div className={styles.text}>
                    <p>{item.description}</p>
                </div>
                <div className={styles.icons}>
                    <h1><BiLinkExternal /></h1>
                    <h1><GoMarkGithub onClick={() => window.open(item.url)}/></h1>
                </div>
            </div >
        </div>
    );
}