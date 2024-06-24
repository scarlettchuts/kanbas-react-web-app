import React, { useState } from "react";

const FillInBlanksEditor = () => {
  const [question, setQuestion] = useState({
    questionType: "Fill in the Blanks",
    questionText: "",
    choices: [],
    points: 0,
    correctAnswer: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setQuestion((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(question);

  return (
    <div className="">
      <div className="mb-3">
        <label htmlFor="fib-question" className="form-label">
          Question:
        </label>
        <textarea
          className="form-control"
          id="fib-question"
          name="questionText"
          value={question.questionText}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="points" className="form-label">
          Points:
        </label>
        <input
          type="number"
          className="form-control w-25"
          id="points"
          name="points"
          value={question.points}
          onChange={handleChange}
        />
      </div>
      <label className="form-label">Correct Answer</label>
      <input
        type="text"
        className="form-control"
        name="correctAnswer"
        value={question.correctAnswer}
        onChange={handleChange}
      />
      <br />
      <button type="button" className="btn btn-danger mb-2">
        Delete Question
      </button>
    </div>
  );
};

export default FillInBlanksEditor;
