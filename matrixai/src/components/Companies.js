import React from "react";
import {
  imag1,
  imag2,
  imag3,
  imag4,
  imag5,
  imag6,
  imag7,
  imag8,
  imag9,
  imag10,
  imag11,
  imag12,
} from "../asset/svg/index.js";
import { CardC } from "./Card";
export const Companies = () => {
  const data1 = [
    {
      icon: imag1,
      title: "Sync with Moodle",
    },
    {
      icon: imag2,
      title: "Upload File",
    },
    {
      icon: imag3,
      title: "Share Folder",
    },
    {
      icon: imag4,
      title: "Sync with turnitin",
    },
    {
      icon: imag5,
      title: "Sync with intranet",
    },
  ];
  const data2 = [
    {
      icon: imag6,
      title: "Sync with intranet",
    },
    {
      icon: imag7,
      title: "Read.ai Summaries",
    },
    {
      icon: imag8,
      title: "Generate my AI Twin",
    },
  ];
  const data3 = [];
  return (
    <div className="flex flex-col gap-4 w-full flex-wrap p-4">
      <div
        className="flex flex-col gap-3 p-6"
        style={{
          borderWidth: "0px 1px 1px 1px",
          borderColor: "#07137F",
          boxShadow: "0px 4px 4px",
          borderBottomRightRadius: "1rem",
          borderBottomLeftRadius: "1rem",
        }}
      >
        <h1
          className=""
          style={{
            color: "#07137F",
            fontSize: "1.5rem",
            fontWeight: "700",
          }}
        >
          Import Assignment and Feedback Data
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            rowGap: "1rem",
            columnGap: "1rem",
          }}
        >
          {data1.map((item, index) => {
            return <CardC title={item.title} icon={item.icon}></CardC>;
          })}
        </div>
      </div>
      <div
        className="flex flex-col gap-3 p-6"
        style={{
          borderWidth: "0px 1px 1px 1px",
          borderColor: "#07137F",
          boxShadow: "0px 4px 4px",
          borderBottomRightRadius: "1rem",
          borderBottomLeftRadius: "1rem",
        }}
      >
        <h1
          className=""
          style={{
            color: "#07137F",
            fontSize: "1.5rem",
            fontWeight: "700",
          }}
        >
          Import Lecture Data
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            rowGap: "1rem",
            columnGap: "1rem",
          }}
        >
          {data2.map((item, index) => {
            return <CardC title={item.title} icon={item.icon}></CardC>;
          })}
        </div>
      </div>
      <div
        className="flex flex-col gap-3 p-6"
        style={{
          borderWidth: "0px 1px 1px 1px",
          borderColor: "#07137F",
          boxShadow: "0px 4px 4px",
          borderBottomRightRadius: "1rem",
          borderBottomLeftRadius: "1rem",
        }}
      >
        <h1
          className="flex gap-1"
          style={{
            color: "#07137F",
            fontSize: "1.5rem",
            fontWeight: "700",
          }}
        >
          Import Social Feed Data
        </h1>
        <div className="flex gap-2">
          <img src={imag9}></img>
          <img src={imag10}></img>
          <img src={imag11}></img>
          <img src={imag12}></img>
        </div>
      </div>
    </div>
  );
};
