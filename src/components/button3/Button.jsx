import React from 'react'
import styles from './button.module.css';

const Button = ({text}) => {
  return (
    <div className={styles.button}>
      <h2>{text}</h2>
    </div>
  )
}

export default Button
