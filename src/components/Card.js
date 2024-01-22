import React from "react";
import styles from '../components/status/status.module.css';

export const CardC = ({ icon, title, onClick }) => {
  console.log(title);
  return (
    <div
      onClick={onClick}
      className={styles.cardContainer}
    >
      <p
        style={{
          color: "#07137F",
          fontSize: "1rem",
          fontWeight: "500",
          width:"50%"
        }}
      >
        {title}
      </p>
      <img src={icon} height={40} width={80}></img>
    </div>
  );
};
