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
          : question,
      ),
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
          : q,
      ),
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
          : q,
      ),
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
          : q,
      ),
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
            : q,
        ),
      );
    };

    if (diagram) {
      reader.readAsDataURL(diagram);
    }
  };

  const deleteQuestion = (id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== id),
    );
  };

  return (
    <div className="h-main overflow-y-scroll p-3 scrollbar-hidden">
      {questions.map((el) => (
        <div
          key={el.id}
          className="w-full rounded-md border border-[#e4e4e7] shadow  p-4 my-3"
        >
          <textarea
            value={el.question}
            onChange={(e) => handleQuestionChange(e, el.id)}
            className="input w-full outline-none p-1"
          ></textarea>

          {el.preview && (
            <img
              src={el.preview}
              accept="image/*"
              className="object-cover w-1/4 aspect-square"
            />
          )}
          <div className="my-2 flex justify-between items-center">
            <label
              htmlFor="file"
              className="btn-primary"
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
              className="btn-primary flex items-center justify-center"
            >
              <AiOutlineDelete className="text-lg" />
              <span className="">Delete</span>
            </button>
          </div>
          <div className="my-4 grid-2-max grid grid-cols-2 grid-row gap-3 text-black">
            <div className="bg-white px-1 flex gap-1 items-center input">
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
            <div className="bg-white px-1 flex gap-1 items-center input">
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
            <div className="bg-white px-1 flex gap-1 items-center input">
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
            <div className="bg-white px-1 flex gap-1 items-center input">
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
          <div className="flex gap-2">
            <label htmlFor="answer">Answer: </label>
            <select
              className="input w-fit"
              type="text"
              value={el.answer}
              onChange={(e) => handleAnswerChange(e, el.id)}
            >
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
              <option value="d">D</option>
            </select>
          </div>
          <div>
            <label htmlFor="explanation">Explanation(optional but recommended): </label>
            <textarea
              value={el.question}
              onChange={(e) => handleQuestionChange(e, el.id)}
              className="w-full outline-none p-1 text-black input"
            ></textarea>
          </div>
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
        className="btn-primary block mx-auto text-lg"
      >
        <AiOutlinePlus />
      </button>
      <button className="btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
