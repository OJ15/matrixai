import React from 'react';
import styles from './card.module.css';
import { GrpAvatar, GreenCheck, Unchecked } from '../../asset/svg';
import { check } from '../../asset/svg';

const Card = ({ select, data, setSelected, index }) => {
    const { heading, text } = data;

    return (
        <div className={select?
            styles.containerchecked:
            styles.containerunchecked
        }
        onClick={()=>setSelected(index)}
        >
            <div style={{ display: 'flex', gap: '20px' }}>
                <div className={styles.avatar}>
                    <img src={GrpAvatar}></img>
                </div>
                <div className={styles.text}>
                    <h2 className={styles.textheading}>{heading}</h2>
                    <h2 className={styles.textnormal}>{text}</h2>
                </div>
            </div>
            <img src={select ? GreenCheck : Unchecked}></img>
        </div>
    )
}

export default Card
