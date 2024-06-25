import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MultipleChoiceEditor from "./MultipleChoiceEditor";
import TrueFalseEditor from "./TrueFalseEditor";
import FillInBlanksEditor from "./FillInBlanksEditor";
import { RiProhibitedLine } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import * as quizClient from "./client";
import { formatDate } from "../../utils/DateUtils";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuizEditor = () => {
  const [activeTab, setActiveTab] = useState("Details");
  const { cid, qid } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    quizType: "",
    points: 0,
    assignmentGroup: "",
    shuffleAnswers: "",
    timeLimit: 0,
    multipleAttempts: "",
    showCorrectAnswers: "",
    accessCode: "",
    oneQuestionAtATime: "",
    webcamRequired: "",
    lockQuestionsAfterAnswering: "",
    dueDate: "",
    availableDate: "",
    untilDate: "",
  });

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const handleChange = (e: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDescriptionChange = (value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      description: value,
    }));
  };

  const handleSave = async () => {
    // Save logic here
    const response = await quizClient.updateQuizForCourse(
      qid as string,
      formData
    );
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`);
  };

  const handleSaveAndPublish = async () => {
    // Save and publish logic here
    const newFormData = { ...formData, isPublished: true };
    const response = await quizClient.updateQuizForCourse(
      qid as string,
      newFormData
    );
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/preview`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes`);
  };

  useEffect(() => {
    const fetchQuizDetail = async () => {
      const response = await quizClient.findQuizzesForCourse(cid as string);
      const currentQuiz = response.find((q: any) => q._id === qid);
      if (!currentQuiz) {
        console.log("no quiz found");
        return;
      }
      setFormData(currentQuiz);
    };

    fetchQuizDetail();
  }, [cid]);

  console.log(formData);

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
                  Quiz Instructions:
                </label>
                <ReactQuill
                  theme="snow"
                  value={formData.description}
                  onChange={handleDescriptionChange}
                />
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
                  value={formData.shuffleAnswers.toString()}
                  onChange={handleChange}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
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
                  value={formData.multipleAttempts.toString()}
                  onChange={handleChange}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
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
                  value={formData.oneQuestionAtATime.toString()}
                  onChange={handleChange}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
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
                  value={formData.webcamRequired.toString()}
                  onChange={handleChange}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
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
                  value={formData.lockQuestionsAfterAnswering.toString()}
                  onChange={handleChange}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
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
                  value={formatDate(formData.dueDate)}
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
                  value={formatDate(formData.availableDate)}
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
                  value={formatDate(formData.untilDate)}
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
        {activeTab === "Questions" && <div>Questions content goes here.</div>}

        {/* {activeTab === "Questions" && (
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
        )} */}
      </div>
    </>
  );
};

export default QuizEditor;
