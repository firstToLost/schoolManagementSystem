import { useState } from "react";

export default function ViewAssessment() {
  const [questions] = useState([
    {
      id: 1,
      question: "What is the speed of the light",
      diagram: "",
      preview: null,
      options: {
        optionA: "300,000m/s",
        optionB: "233,233m/s",
        optionC: "898,989m/s",
        optionD: "none of the above",
      },
      answer: "a",
    },
  ]);

  return (
    <div className="h-main overflow-y-scroll p-3 scrollbar-hidden">
      {questions.map((el, i) => (
        <div
          key={el.id}
          className="w-full rounded-md border border-[#e4e4e7] shadow  p-4 my-3"
        >
          <p className="input">
            <span>{i + 1}. </span>
            {el.question}
          </p>

          {el.preview && (
            <img
              src={el.preview}
              accept="image/*"
              className="object-cover w-1/4 aspect-square"
            />
          )}

          <div className="my-4 grid-2-max grid grid-cols-2 grid-row gap-3 text-black">
            <div className="input">
              <label htmlFor="optionA">A.</label>
              <span>{el.options.optionA}</span>
            </div>
            <div className="input">
              <label htmlFor="optionB">C.</label>
              <span>{el.options.optionB}</span>
            </div>
            <div className="input">
              <label htmlFor="optionC">C.</label>
              <span>{el.options.optionC}</span>
            </div>
            <div className="input">
              <label htmlFor="optionD">D.</label>
              <span>{el.options.optionD}</span>
            </div>
          </div>
          <div className="">
            <label htmlFor="answer">Answer: </label>
            <span>{el.answer}</span>
          </div>
          <div className="">
            <label htmlFor="explanation">Explanation: </label>
            <p>{el.explanation}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
