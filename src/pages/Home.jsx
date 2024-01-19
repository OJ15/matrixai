import React, { useState } from "react";
import Card from "../components/card1/Card";
import Button from "../components/button1/Button";
import Button2 from "../components/button2/Button";
import Status from "../components/status/Status";
import Forum from "../components/forum/Forum";
import MainComponent from "../components/mainComponent";
import { Companies } from "../components/Companies";
import { QuestionPage } from "../components/questionPage";
const Home = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div style={{ padding: "50px", width: "100%" }}>
      <div style={{ display: "flex", marginBottom: "40px", gap: "20px" }}>
        <Button />
        <Button2 />
      </div>
      
      {selected===0?
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "40px",
          gap: "20px",
        }}
      >
        <Forum />
      </div>
      :
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "40px",
          gap: "20px",
          width:'37vw',
        }}
      >
        <Status />
      </div>
      }


      <div
        style={{
          display: "flex",
          gap: "40px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {cardData.map((item, index) => (
            <Card
              key={index}
              data={item}
              index={index}
              select={selected === index}
              setSelected={setSelected}
            />
          ))}
        </div>

        {selected == 0 ? (
          <MainComponent />
        ) : selected == 1 ? (
          <QuestionPage />
        ) : (
          <Companies />
        )}
      </div>
    </div>
  );
};

export default Home;

const cardData = [
  {
    heading: "Select Forum Members",
    text: "Select the members of your AI Forum",
  },
  {
    heading: "Condition AI",
    text: "Select the parameters of your AI",
  },
  {
    heading: "Enrich AI",
    text: "Enrich your AI with data from your organisation and members",
  },
];
