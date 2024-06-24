import React, { useState } from "react";

const TrueFalseEditor = () => {
  const [question, setQuestion] = useState({
    questionType: "True/False",
    questionText: "",
    choices: ["true", "false"],
    points: 0,
    correctAnswer: "",
  });

  const handleChange = (e: any) => {
    if (e.target.type === "radio") {
      setQuestion((prev) => ({
        ...prev,
        correctAnswer: e.target.value, // Set correctAnswer to "true" or "false"
      }));
    } else {
      setQuestion((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  console.log(question);

  return (
    <div className="">
      <div className="mb-3">
        <label htmlFor="tf-question" className="form-label">
          Question:
        </label>
        <textarea
          className="form-control"
          id="tf-question"
          name="questionText"
          value={question.questionText}
          onChange={handleChange}
        />
      </div>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          id="true-option"
          name="correctAnswer"
          value="true"
          checked={question.correctAnswer === "true"}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="true-option">
          True
        </label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          id="false-option"
          name="correctAnswer"
          value="false"
          checked={question.correctAnswer === "false"}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="false-option">
          False
        </label>
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
      <div className="mb-3">
        <p>
          Correct Answer:{" "}
          {question.correctAnswer.charAt(0).toUpperCase() +
            question.correctAnswer.slice(1)}
        </p>
      </div>
      <button type="button" className="btn btn-danger mb-2">
        Delete Question
      </button>
    </div>
  );
};

export default TrueFalseEditor;
