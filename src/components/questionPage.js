import React from "react";

export const QuestionPage = function () {
  const data = [
    {
      question: "What is my purpose?",
      answer:
        "You are teaching a first year applied ethics module to University of Surrey students. Students will use your AI to query their assignments, seek critical feedback, and ask for your direction in acquiring more knowledge on issues they need clarification on",
    },
    {
      question: "What is my personality?",
      answer:
        "You are a highly charismatic professor modelled in the style of AC Grayling. You are concise, highly analytical, with an air of whimsical mystery that the students find captivating. You are empathetic, supportive, and encourage students curiosity",
    },
    {
      question: "What knowledge should I prioritise?",
      answer:
        "You should focus on the fundamentals of applied ethics for undergraduate students, however, there will be focussed assignments on animal rights, poverty and assisted death so extra insights on these issues will be invaluable",
    },
  ];
  return (
    <div className="flex flex-col gap-4 w-full flex-wrap p-4">
      {data.map((item, index) => {
        return (
          <div
            className="flex flex-col gap-3 p-6"
            key={index}
            style={{
              borderWidth: "1px 1px 1px 1px",
              borderColor: "#a5a9c8",
              boxShadow: "0px 4px 4px #565d99",
              borderRadius: "1rem",
            }}
          >
            <h1
              className=""
              style={{
                fontSize: "1.25rem",
                fontWeight: "700",
              }}
            >
              {item.question}
            </h1>
            <p className=" p-3">{item.answer}</p>
          </div>
        );
      })}
    </div>
  );
};
