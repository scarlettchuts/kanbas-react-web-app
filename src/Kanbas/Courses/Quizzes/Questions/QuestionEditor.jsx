import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as quizClient from "../client";

const QuestionEditor = () => {
  const { cid, qid } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({
    questionType: "multiple choice",
    questionText: "",
    points: 0,
    choices: [],
    correctAnswer: "",
  });

  const fetchQuestions = async () => {
    try {
      const axiosWithCredentials = axios.create({ withCredentials: true });
      const response = await axiosWithCredentials.get(
        `${process.env.REACT_APP_REMOTE_SERVER}/api/quizzes/${qid}/questions`
      );
      setQuestions(response.data);
    } catch (error) {
      alert("Error fetching questions:", error);
    }
  };

  // Fetch questions from API
  useEffect(() => {
    fetchQuestions();
  }, [cid, qid]);

  // Update currentQuestion whenever currentQuestionIndex changes
  useEffect(() => {
    if (currentQuestionIndex < questions.length) {
      setCurrentQuestion(questions[currentQuestionIndex]);
    } else {
      setCurrentQuestion({
        questionType: "multiple choice",
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
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentQuestionIndex === questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentQuestion({
        questionType: "multiple choice",
        questionText: "",
        points: 0,
        choices: [],
        correctAnswer: "",
      });
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSave = () => {
    const updatedQuestions = [...questions];
    if (currentQuestionIndex < questions.length) {
      updatedQuestions[currentQuestionIndex] = currentQuestion;
    } else {
      updatedQuestions.push(currentQuestion);
    }
    setQuestions(updatedQuestions);
  };

  const handleDelete = async () => {
    // if currentQuestion have _id, it means it is in db, then call api to delete from db
    if (currentQuestion.hasOwnProperty("_id")) {
      try {
        const axiosWithCredentials = axios.create({ withCredentials: true });
        await axiosWithCredentials.delete(
          `${process.env.REACT_APP_REMOTE_SERVER}/api/quizzes/${qid}/questions/${currentQuestion._id}`
        );
      } catch (error) {
        alert("failed to delete question from quiz");
      }
    }

    const updatedQuestions = questions.filter(
      (_, index) => index !== currentQuestionIndex
    );
    setQuestions(updatedQuestions);

    if (updatedQuestions.length === 0) {
      setCurrentQuestion({
        questionType: "multiple choice",
        questionText: "",
        points: 0,
        choices: [],
        correctAnswer: "",
      });
      setCurrentQuestionIndex(0);
    } else {
      // } else if (currentQuestionIndex >= updatedQuestions.length) {

      setCurrentQuestionIndex(updatedQuestions.length - 1);
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

  const handleQuestionTypeChange = (event) => {
    const newQuestionType = event.target.value;
    let newChoices = [];

    if (newQuestionType === "true/false") {
      newChoices = ["true", "false"];
    }

    setCurrentQuestion({
      ...currentQuestion,
      questionType: newQuestionType,
      choices: newChoices,
    });
  };

  const handleSubmit = async () => {
    try {
      const maxPoints = questions.reduce(
        (acc, question) => acc + question.points,
        0
      );
      // update quiz points in db
      const axiosWithCredentials = axios.create({ withCredentials: true });
      await axiosWithCredentials.put(
        `${process.env.REACT_APP_REMOTE_SERVER}/api/quizzes/${qid}`,
        { points: maxPoints }
      );
    } catch (error) {
      alert("failed to update quiz max points");
    }

    try {
      // update the questionIds in the quiz document. Bad design: workaround for now
      const quizzesForCourse = await quizClient.findQuizzesForCourse(cid);
      const currentQuiz = quizzesForCourse.find((q) => q.courseId === cid);

      const axiosWithCredentials = axios.create({ withCredentials: true });
      const response = await axiosWithCredentials.get(
        `${process.env.REACT_APP_REMOTE_SERVER}/api/quizzes/${qid}/questions`
      );
      const questionIdsForQuiz = response.data.map((item) => item._id);

      await axiosWithCredentials.put(
        `${process.env.REACT_APP_REMOTE_SERVER}/api/quizzes/${qid}`,
        { questionIds: questionIdsForQuiz }
      );
    } catch (error) {
      alert("failed to update the questionIds in the quiz document");
    }

    const apiCalls = questions.map((question) => {
      let url = "";
      let methodType = "";
      if (question.hasOwnProperty("_id")) {
        url = `${process.env.REACT_APP_REMOTE_SERVER}/api/quizzes/${qid}/questions/${question._id}`;
        methodType = "PUT";
      } else {
        url = `${process.env.REACT_APP_REMOTE_SERVER}/api/courses/${cid}/quizzes/${qid}/questions`;
        methodType = "POST";
      }
      const requestOptions = {
        method: methodType,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          ...question,
        }),
      };

      return fetch(url, requestOptions).then((response) => response.json());
    });

    try {
      // post/put questions to db
      await Promise.all(apiCalls);
      await fetchQuestions();
      alert("All questions submitted successfully!");
    } catch (error) {
      await fetchQuestions();
      // alert("Error occurred while submitting questions.");
    }
  };

  return (
    <div>
      <h2>Question {currentQuestionIndex + 1}</h2>
      <form>
        <div>
          <label>Question Type:</label>
          <select
            name="questionType"
            value={currentQuestion.questionType}
            onChange={handleQuestionTypeChange}
          >
            <option value="multiple choice">Multiple Choice</option>
            <option value="true/false">True/False</option>
            <option value="fill in the blank">Fill in the Blank</option>
          </select>
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
        {currentQuestion.questionType === "multiple choice" && (
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
            <button type="button" onClick={addChoice}>
              Add Choice
            </button>
          </div>
        )}
        {currentQuestion.questionType === "true/false" && (
          <div>
            <label>Choices:</label>
            <div>
              <input type="text" value="true" disabled />
              <br />
              <input type="text" value="false" disabled />
            </div>
          </div>
        )}
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
      <button onClick={handleNext}>Next</button>
      <button
        onClick={handleSave}
        disabled={!validateAllFilled(currentQuestion)}
      >
        Save
      </button>
      <button onClick={handleDelete} disabled={questions.length === 0}>
        Delete
      </button>
      <button onClick={handleSubmit}>Submit</button>

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
        <hr />
        <pre>{JSON.stringify(questions, null, 2)}</pre>
      </div>
    </div>
  );
};

export default QuestionEditor;
