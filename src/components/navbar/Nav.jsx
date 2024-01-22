import { NavLink } from 'react-router-dom'
import styles from './nav.module.css';
import { Logo } from '../../asset/svg';

const Nav = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logodiv}>
                <img src={Logo}></img>
                <p>Matrix AI Dashboard</p>
            </div>
            <div className={styles.linkdiv}>
                <NavLink to="#">Settings</NavLink>
                <NavLink to="#">Help</NavLink>
                <NavLink to="#" style={{ display: 'flex', gap: '8px' }}>
                    <p className={styles.dp}>JL</p>
                    Profile
                </NavLink>
            </div>
        </div>
    )
}

export default Nav
