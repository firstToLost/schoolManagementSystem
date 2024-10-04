import { useState } from "react";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import "../../../styles/Assessment.css";
import { useLocation } from "react-router-dom";
const newQuestion = {
  question: "",
  diagram: "",
  preview: null,
  options: {
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
  },
  answer: "",
};

export default function Assessment() {
  const config = useLocation().state.values;

  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "",
      diagram: "",
      preview: null,
      options: {
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
      },
      answer: "a",
    },
  ]);
  const handleSubmit = async () => {
    const data = {
      ...config,
      questions,
    };
    console.log(data);
  };

  const handleChange = (e, id) => {
    const answer = e.target.value;
    const option = e.target.name;

    setQuestions(
      questions.map((question) =>
        question.id === id
          ? {
              ...question,
              options: {
                ...question.options,
                [option]: answer,
              },
            }
          : question
      )
    );
  };
  const handleQuestionChange = (e, id) => {
    const question = e.target.value;

    setQuestions(
      questions.map((q) =>
        q.id === id
          ? {
              ...q,
              question,
            }
          : q
      )
    );
  };
  const handleAnswerChange = (e, id) => {
    const answer = e.target.value;

    setQuestions(
      questions.map((q) =>
        q.id === id
          ? {
              ...q,
              answer,
            }
          : q
      )
    );
  };
  const handleFileChange = (e, id) => {
    const diagram = e.target.files[0];

    setQuestions(
      questions.map((q) =>
        q.id === id
          ? {
              ...q,
              diagram,
            }
          : q
      )
    );

    const reader = new FileReader();

    reader.onload = () => {
      setQuestions(
        questions.map((q) =>
          q.id === id
            ? {
                ...q,
                preview: reader.result,
              }
            : q
        )
      );
    };

    if (diagram) {
      reader.readAsDataURL(diagram);
    }
  };

  const deleteQuestion = (id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== id)
    );
  };

  return (
    <div className="h-main overflow-y-scroll p-3 scrollbar-hidden">
      {questions.map((el) => (
        <div key={el.id} className="w-full glass p-4 my-3">
          <textarea
            value={el.question}
            onChange={(e) => handleQuestionChange(e, el.id)}
            className="w-full outline-none p-1 text-black"
          ></textarea>

          {el.preview && (
            <img
              src={el.preview}
              accept="image/*"
              className="object-cover w-1/4 aspect-square"
            />
          )}
          <div className="flex justify-between items-center">
            <label
              htmlFor="file"
              className="bg-white text-black cursor-pointer px-3 py-2"
            >
              {el.preview ? "Change" : "Add"} Diagram
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => handleFileChange(e, el.id)}
              className="hidden"
            />
            <button
              onClick={() => deleteQuestion(el.id)}
              className="text-black cursor-pointer w-12 aspect-square inline-flex items-center justify-center text-4xl rounded-full bg-white"
            >
              <AiOutlineDelete />
            </button>
          </div>
          <div className="my-4 grid-2-max grid grid-cols-2 grid-row gap-3 text-black">
            <div className="bg-white px-1 flex gap-1 items-center">
              <label htmlFor="optionA">A.</label>
              <input
                type="text"
                name="optionA"
                id="optionA"
                value={el.options.optionA}
                onChange={(e) => handleChange(e, el.id)}
                className="w-[95%] h-12 bg-transparent outline-none"
              />
            </div>
            <div className="bg-white px-1 flex gap-1 items-center">
              <label htmlFor="optionB">B.</label>
              <input
                type="text"
                name="optionB"
                id="optionB"
                value={el.options.optionB}
                onChange={(e) => handleChange(e, el.id)}
                className="w-[95%] h-12 bg-transparent outline-none"
              />
            </div>
            <div className="bg-white px-1 flex gap-1 items-center">
              <label htmlFor="optionC">C.</label>
              <input
                type="text"
                name="optionC"
                id="optionC"
                value={el.options.optionC}
                onChange={(e) => handleChange(e, el.id)}
                className="w-[95%] h-12 bg-transparent outline-none"
              />
            </div>
            <div className="bg-white px-1 flex gap-1 items-center">
              <label htmlFor="optionD">D.</label>
              <input
                type="text"
                name="optionD"
                id="optionD"
                value={el.options.optionD}
                onChange={(e) => handleChange(e, el.id)}
                className="w-[95%] h-12 bg-transparent outline-none"
              />
            </div>
          </div>

          <input
            type="text"
            value={el.answer}
            onChange={(e) => handleAnswerChange(e, el.id)}
          />
        </div>
      ))}

      <button
        onClick={() =>
          setQuestions((prev) => [
            ...prev,
            {
              id: prev.length + 1,
              ...newQuestion,
            },
          ])
        }
        className="text-black cursor-pointer w-12 mx-auto my-2 aspect-square flex items-center justify-center text-4xl rounded-full bg-white"
      >
        <AiOutlinePlus />
      </button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
