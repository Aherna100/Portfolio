import React from "react";
import Image from 'next/image';
import styles from './test.module.css';

import { BiLinkExternal } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';

export const ContainerComponent = ({ item }) => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.maincontent}>
                    <p>{item.name}</p>
                </div>
                <div className={styles.secondcontent}>
                    <div className={styles.placeholder}>
                        <span>{item.name || 'Project'}</span>
                    </div>
                </div>
            </div>
            <div className={styles.footcontent}>
                <div className={styles.text}>
                    <p>{item.description}</p>
                </div>
                <div className={styles.icons}>
                    <h1><BiLinkExternal /></h1>
                    <h1><FaGithub onClick={() => window.open(item.url)}/></h1>
                </div>
            </div >
        </div>
    );
}