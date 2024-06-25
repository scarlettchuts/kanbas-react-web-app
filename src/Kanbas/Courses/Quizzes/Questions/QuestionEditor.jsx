import React, { useState, useEffect } from "react";

const QuestionEditor = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({
    questionType: "",
    questionText: "",
    points: 0,
    choices: [],
    correctAnswer: "",
  });

  // Update currentQuestion whenever currentQuestionIndex changes
  useEffect(() => {
    if (currentQuestionIndex < questions.length) {
      setCurrentQuestion(questions[currentQuestionIndex]);
    } else {
      setCurrentQuestion({
        questionType: "",
        questionText: "",
        points: 0,
        choices: [],
        correctAnswer: "",
      });
    }
  }, [currentQuestionIndex, questions]);

  const handleInputChange = (event) => {
    setCurrentQuestion({
      ...currentQuestion,
      [event.target.name]: event.target.value,
    });
  };

  const handleChoiceChange = (index, value) => {
    const newChoices = [...currentQuestion.choices];
    newChoices[index] = value;
    setCurrentQuestion({
      ...currentQuestion,
      choices: newChoices,
    });
  };

  const addChoice = () => {
    setCurrentQuestion({
      ...currentQuestion,
      choices: [...currentQuestion.choices, ""],
    });
  };

  const deleteChoice = (index) => {
    const newChoices = currentQuestion.choices.filter((_, i) => i !== index);
    setCurrentQuestion({
      ...currentQuestion,
      choices: newChoices,
    });
  };

  const handleNext = () => {
    if (!validateAllFilled(currentQuestion)) {
      alert("Please fill all fields before proceeding.");
      return;
    }

    // Update questions state correctly
    if (currentQuestionIndex < questions.length) {
      const updatedQuestions = [...questions];
      updatedQuestions[currentQuestionIndex] = currentQuestion;
      setQuestions(updatedQuestions);
    } else {
      setQuestions([...questions, currentQuestion]);
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0 && validateAtLeastOneFilled(currentQuestion)) {
      const updatedQuestions = [...questions];
      updatedQuestions[currentQuestionIndex] = currentQuestion;
      setQuestions(updatedQuestions);
    }
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const validateAllFilled = (question) => {
    return (
      question.questionType !== "" &&
      question.questionText !== "" &&
      question.points !== 0 &&
      question.correctAnswer !== ""
    );
  };

  const validateAtLeastOneFilled = (question) => {
    return (
      question.questionType !== "" ||
      question.questionText !== "" ||
      question.points !== 0 ||
      question.correctAnswer !== ""
    );
  };

  return (
    <div>
      <h2>Question {currentQuestionIndex + 1}</h2>
      <form>
        <div>
          <label>Question Type:</label>
          <input
            type="text"
            name="questionType"
            value={currentQuestion.questionType}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Question Text:</label>
          <input
            type="text"
            name="questionText"
            value={currentQuestion.questionText}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Points:</label>
          <input
            type="number"
            name="points"
            value={currentQuestion.points}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Choices:</label>
          {currentQuestion.choices.map((choice, index) => (
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
        <div>
          <label>Correct Answer:</label>
          <input
            type="text"
            name="correctAnswer"
            value={currentQuestion.correctAnswer}
            onChange={handleInputChange}
          />
        </div>
      </form>
      <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
        Previous
      </button>
      <button
        onClick={handleNext}
        disabled={!validateAllFilled(currentQuestion)}
      >
        Next
      </button>

      <div>
        <h3>Questions Summary:</h3>
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              <strong>Question {index + 1}:</strong> {question.questionText}
            </li>
          ))}
        </ul>
        <pre>{JSON.stringify(currentQuestion, null, 2)}</pre>
      </div>
    </div>
  );
};

export default QuestionEditor;
