import React, { useState } from "react";

const MultipleChoiceEditor = () => {
  const [question, setQuestion] = useState({
    questionType: "Multiple Choice",
    questionText: "",
    choices: [{ text: "" }],
    points: 0,
    correctAnswer: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setQuestion((prev) => ({ ...prev, [name]: value }));
  };

  const handleOptionChange = (index: any, e: any) => {
    const { value } = e.target;
    const updatedChoices = [...question.choices];
    updatedChoices[index] = { ...updatedChoices[index], text: value };
    setQuestion((prev) => ({ ...prev, choices: updatedChoices }));
  };

  const handleAddChoice = () => {
    setQuestion((prev) => ({
      ...prev,
      choices: [...prev.choices, { text: "" }],
    }));
  };

  const handleDeleteChoice = (index: any) => {
    const updatedChoices = [...question.choices];
    updatedChoices.splice(index, 1); // Remove the choice at 'index'
    setQuestion((prev) => ({ ...prev, choices: updatedChoices }));
  };

  console.log(question);

  return (
    <div className="">
      <div className="mb-3">
        <label htmlFor="mc-question" className="form-label">
          Question:
        </label>
        <textarea
          className="form-control"
          id="mc-question"
          name="questionText"
          value={question.questionText}
          onChange={handleChange}
        />
      </div>
      {question.choices.map((choice, index) => (
        <div key={index} className="mb-3 d-flex align-items-center">
          <label className="form-label">Choice {index + 1}</label>
          <input
            type="text"
            className="form-control w-50 mx-2"
            value={choice.text}
            onChange={(e) => handleOptionChange(index, e)}
          />
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => handleDeleteChoice(index)}
          >
            Delete
          </button>
        </div>
      ))}
      <button
        type="button"
        className="btn btn-outline-primary text-center mb-3"
        onClick={handleAddChoice}
      >
        Add Choice
      </button>
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
      <div>
        <label htmlFor="correctAnswer" className="form-label">
          Correct Answer:
        </label>
        <input
          type="text"
          className="form-control w-50"
          id="correctAnswer"
          name="correctAnswer"
          value={question.correctAnswer}
          onChange={handleChange}
        />
      </div>

      <br />
      <button type="button" className="btn btn-danger mb-2">
        Delete Question
      </button>
    </div>
  );
};

export default MultipleChoiceEditor;
