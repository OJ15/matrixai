import React from "react";

export const CardC = ({ icon, title }) => {
  console.log(title);
  return (
    <div
      className="flex align-center justify-center items-center"
      style={{
        borderWidth: "0px 1px 1px 1px",
        borderColor: "#07137F",
        boxShadow: "0px 3px 3px",
        borderBottomRightRadius: "1rem",
        borderBottomLeftRadius: "1rem",
      }}
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
