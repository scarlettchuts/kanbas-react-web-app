import React, { useState } from "react";

const QuestionChoiceForm = () => {
  const [questionData, setQuestionData] = useState({
    questionText: "",
    points: 0,
    choices: [],
    correctAnswer: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuestionData({
      ...questionData,
      [name]: value,
    });
  };

  const handleChoiceChange = (index, value) => {
    const newChoices = [...questionData.choices];
    newChoices[index] = value;
    setQuestionData({
      ...questionData,
      choices: newChoices,
    });
  };

  const addChoice = () => {
    setQuestionData({
      ...questionData,
      choices: [...questionData.choices, ""],
    });
  };

  const deleteChoice = (index) => {
    const newChoices = questionData.choices.filter((_, i) => i !== index);
    setQuestionData({
      ...questionData,
      choices: newChoices,
    });
  };

  return (
    <div>
      <form>
        <div>
          <label>Question Text:</label>
          <input
            type="text"
            name="questionText"
            value={questionData.questionText}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Points:</label>
          <input
            type="number"
            name="points"
            value={questionData.points}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Correct Answer:</label>
          <input
            type="text"
            name="correctAnswer"
            value={questionData.correctAnswer}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Choices:</label>
          {questionData.choices.map((choice, index) => (
            <div key={index}>
              <input
                type="text"
                value={choice}
                onChange={(e) => handleChoiceChange(index, e.target.value)}
              />
              <button type="button" onClick={() => deleteChoice(index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
        <button type="button" onClick={addChoice}>
          Add Choice
        </button>
      </form>
      <pre>{JSON.stringify(questionData, null, 2)}</pre>
    </div>
  );
};

export default QuestionChoiceForm;
