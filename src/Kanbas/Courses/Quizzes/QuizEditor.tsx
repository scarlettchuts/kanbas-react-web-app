import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MultipleChoiceEditor from "./MultipleChoiceEditor";
import TrueFalseEditor from "./TrueFalseEditor";
import FillInBlanksEditor from "./FillInBlanksEditor";

const QuizEditor = () => {
  const [activeTab, setActiveTab] = useState("Details");
  const { cid } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    quizType: "Graded Quiz",
    points: 0,
    assignmentGroup: "Quizzes",
    shuffleAnswers: "Yes",
    timeLimit: 20,
    multipleAttempts: "No",
    showCorrectAnswers: "",
    accessCode: "",
    oneQuestionAtATime: "Yes",
    webcamRequired: "No",
    lockQuestionsAfterAnswering: "No",
    dueDate: "",
    availableDate: "",
    untilDate: "",
  });

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "points" || name === "timeLimit" ? Number(value) : value,
    }));
  };

  const handleSave = () => {
    // Save logic here
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${123}`);
  };

  const handleSaveAndPublish = () => {
    // Save and publish logic here
    navigate(`/Kanbas/Courses/${cid}/Quizzes`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes`);
  };

  const [questions, setQuestions] = useState<any>([]);

  const addNewQuestion = (type: string) => {
    const newQuestion = {
      questionType: type,
      questionText: "",
      points: 0,
      correctAnswer: "",
      choices: [],
    };
    setQuestions([...questions, newQuestion]);
  };

  console.log(questions);

  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            className={`nav-link ${
              activeTab === "Details" ? "active text-black" : "text-danger"
            }`}
            to="#"
            onClick={() => handleTabClick("Details")}
          >
            Details
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${
              activeTab === "Questions" ? "active text-black" : "text-danger"
            }`}
            to="#"
            onClick={() => handleTabClick("Questions")}
          >
            Questions
          </Link>
        </li>
      </ul>
      <div className="tab-content my-3">
        {activeTab === "Details" && (
          <div>
            <form>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="quizType" className="form-label">
                  Quiz Type
                </label>
                <select
                  className="form-select"
                  id="quizType"
                  name="quizType"
                  value={formData.quizType}
                  onChange={handleChange}
                >
                  <option value="Graded Quiz">Graded Quiz</option>
                  <option value="Practice Quiz">Practice Quiz</option>
                  <option value="Graded Survey">Graded Survey</option>
                  <option value="Ungraded Survey">Ungraded Survey</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="points" className="form-label">
                  Points
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="points"
                  name="points"
                  value={formData.points}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="assignmentGroup" className="form-label">
                  Assignment Group
                </label>
                <select
                  className="form-select"
                  id="assignmentGroup"
                  name="assignmentGroup"
                  value={formData.assignmentGroup}
                  onChange={handleChange}
                >
                  <option value="Quizzes">Quizzes</option>
                  <option value="Exams">Exams</option>
                  <option value="Assignments">Assignments</option>
                  <option value="Project">Project</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="shuffleAnswers" className="form-label">
                  Shuffle Answers
                </label>
                <select
                  className="form-select"
                  id="shuffleAnswers"
                  name="shuffleAnswers"
                  value={formData.shuffleAnswers}
                  onChange={handleChange}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="timeLimit" className="form-label">
                  Time Limit
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="timeLimit"
                  name="timeLimit"
                  value={formData.timeLimit}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="multipleAttempts" className="form-label">
                  Multiple Attempts
                </label>
                <select
                  className="form-select"
                  id="multipleAttempts"
                  name="multipleAttempts"
                  value={formData.multipleAttempts}
                  onChange={handleChange}
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="showCorrectAnswers" className="form-label">
                  Show Correct Answers
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="showCorrectAnswers"
                  name="showCorrectAnswers"
                  value={formData.showCorrectAnswers}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="accessCode" className="form-label">
                  Access Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="accessCode"
                  name="accessCode"
                  value={formData.accessCode}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="oneQuestionAtATime" className="form-label">
                  One Question at a Time
                </label>
                <select
                  className="form-select"
                  id="oneQuestionAtATime"
                  name="oneQuestionAtATime"
                  value={formData.oneQuestionAtATime}
                  onChange={handleChange}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="webcamRequired" className="form-label">
                  Webcam Required
                </label>
                <select
                  className="form-select"
                  id="webcamRequired"
                  name="webcamRequired"
                  value={formData.webcamRequired}
                  onChange={handleChange}
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="lockQuestionsAfterAnswering"
                  className="form-label"
                >
                  Lock Questions After Answering
                </label>
                <select
                  className="form-select"
                  id="lockQuestionsAfterAnswering"
                  name="lockQuestionsAfterAnswering"
                  value={formData.lockQuestionsAfterAnswering}
                  onChange={handleChange}
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="dueDate" className="form-label">
                  Due Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dueDate"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="availableDate" className="form-label">
                  Available Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="availableDate"
                  name="availableDate"
                  value={formData.availableDate}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="untilDate" className="form-label">
                  Until Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="untilDate"
                  name="untilDate"
                  value={formData.untilDate}
                  onChange={handleChange}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary me-2"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-success me-2"
                onClick={handleSaveAndPublish}
              >
                Save and Publish
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </form>
          </div>
        )}
        {/* {activeTab === "Questions" && <div>Questions content goes here.</div>} */}

        {activeTab === "Questions" && (
          <div>
            {questions.map((question: any) => (
              <div key={question.id} className="mb-3">
                {question.questionType === "multiple-choice" && (
                  <div className="question-container">
                    <h5>Multiple Choice</h5>
                    <MultipleChoiceEditor />
                  </div>
                )}
                {question.questionType === "true-false" && (
                  <div className="question-container">
                    <h5>True/False</h5>
                    <TrueFalseEditor />
                  </div>
                )}
                {question.questionType === "fill-in-blanks" && (
                  <div className="question-container">
                    <h5>Fill in the Blanks</h5>
                    <FillInBlanksEditor />
                  </div>
                )}
              </div>
            ))}
            <button
              type="button"
              className="btn btn-primary me-2"
              onClick={() => addNewQuestion("multiple-choice")}
            >
              Add Multiple Choice
            </button>
            <button
              type="button"
              className="btn btn-primary me-2"
              onClick={() => addNewQuestion("true-false")}
            >
              Add True/False
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => addNewQuestion("fill-in-blanks")}
            >
              Add Fill in the Blanks
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default QuizEditor;
