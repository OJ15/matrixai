import React from 'react'
import styles from './forum.module.css';
import { InfoIcon, Person } from '../../asset/svg';
import Button from '../button3/Button';


const Forum = () => {
    return (
        <div className={styles.container}>
            <div style={{ width: '30%' }}>
                <div className={styles.heading}>
                    <img src={Person} alt='avatar'></img>
                    <h2>New AI Forum #1325</h2>
                </div>
                <div>
                    <div className={styles.input} style={{ alignItems: 'center' }}>
                        <h2>Forum Name</h2>
                        <input type="text" placeholder='e.g. Philosophy 2nd Year' style={{ height: '30px', width: "100%", marginTop: "5px" }} />
                    </div>
                </div>

                <div>
                    <div className={styles.input}>
                        <h2>Description</h2>
                        <textarea type="text" placeholder='e.g. ' style={{ height: '57px', width: "100%", marginTop: "5px" }} />
                    </div>
                </div>
                <div>
                    <Button text={'Save'} className="save-button" />
                </div>
            </div>

            <div style={{ width: '60%' }} className={styles.info}>
                <img src={InfoIcon} alt="icon"></img>
                <p style={{ width: '100%', fontSize: '16px' }}>
                    Here you can import students’ assignments so that they can use AI to intelligently query their work in the 1UP mobile app. Students can provide access to their AI interactivity history allowing you to understand the issues they are trying to understand more deeply. Interactive participation with your students and their AI forums can be enabled in this tab. You should encourage your students to use AI to query their work, and support them in developing the complexity of their questioning, all of which you can do from here.
                </p>
            </div>
        </div>
    )
}

export default Forum
