import React from "react";
import styles from './styles/styles.module.css';

export const ToggleSwitch = ({ checked, onChange, value }) => {
    return (
        <div className={styles.slidecontent}>
            <h3>{value}</h3>
            <label className={styles.switch}>
                <input className={styles.input} type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} />
                <span className={styles.slider}></span>
            </label>
        </div>
    );
};