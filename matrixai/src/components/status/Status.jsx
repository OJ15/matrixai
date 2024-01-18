import React from 'react'
import styles from './status.module.css';
import { Person } from '../../asset/svg';

const Status = () => {
    return (
        <div className={styles.container}>
            <img src={Person} alt='avatar'></img>
            <div>
                <h2 className={styles.heading}>
                    Philosophy 2nd Years
                </h2>
                <h2 className={styles.time}>
                    Last Updated: 14/ 01/ 24
                </h2>
                <h2 className={styles.description}>
                A short Description should be written here in the space allocated here    
                </h2>
            </div>
        </div>
    )
}

export default Status
