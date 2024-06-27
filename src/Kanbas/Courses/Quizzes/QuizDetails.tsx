import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import * as quizClient from "./client";
import { formatDate } from "../../utils/DateUtils";
import { TiPencil } from "react-icons/ti";
import { useSelector } from "react-redux";
import axios from "axios";

const QuizDetails = () => {
  const navigate = useNavigate();
  const { cid, qid } = useParams();
  const [quiz, setQuiz] = useState<any>([]);
  const [studentQuizRecord, setStudentQuizRecord] = useState<any>(null);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  useEffect(() => {
    const fetchQuizDetail = async () => {
      const response = await quizClient.findQuizzesForCourse(cid as string);
      const currentQuiz = response.find((q: any) => q._id === qid);
      setQuiz(currentQuiz);
    };

    const fetchStudentQuizRecord = async () => {
      const axiosWithCredentials = axios.create({ withCredentials: true });
      const response = await axiosWithCredentials.get(
        `${process.env.REACT_APP_REMOTE_SERVER}/api/quizzes/${qid}/studentquizrecords`
      );
      console.log(response.data);
      setStudentQuizRecord(response.data);
    };

    fetchQuizDetail();
    fetchStudentQuizRecord();
  }, [cid]);

  return (
    <>
      {currentUser.role === "FACULTY" && (
        <div>
          <button
            type="button"
            className="btn btn-light me-3"
            onClick={() =>
              navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/preview`)
            }
          >
            Preview
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() =>
              navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/edit`)
            }
          >
            <TiPencil className="mirror me-1" />
            Edit
          </button>
          <hr />
          <h2 className="text-dark fw-bold">{quiz.title}</h2>
          {/* <div className="d-flex flex-column align-items-center">
        <p>
          <span className="fw-bold">Quiz Type</span> {quiz.quizType}
        </p>
        <p>
          <span className="fw-bold">Points</span> {quiz.points}
        </p>
        <p>
          <span className="fw-bold">Assignment Group</span>{" "}
          {quiz.assignmentgroup}
        </p>
        <p>
          <span className="fw-bold">Shuffle Answers</span>{" "}
          {quiz.shuffleAnswers === true ? "Yes" : "No"}
        </p>
        <p>
          <span className="fw-bold">Multiple Attempts</span>{" "}
          {quiz.multipleAttempts === true ? "Yes" : "No"}
        </p>
        <p>
          <span className="fw-bold">Show Correct Answers</span>{" "}
          {quiz.showCorrectAnswers}
        </p>
        <p>
          <span className="fw-bold">One Question at a Time</span>{" "}
          {quiz.oneQuestionAtATime === true ? "Yes" : "No"}
        </p>
        <p>
          <span className="fw-bold">Lock Questions after Answering</span>{" "}
          {quiz.lockQuestionsAfterAnswering === true ? "Yes" : "No"}
        </p>
        <p>
          <span className="fw-bold">Webcam Required</span>{" "}
          {quiz.webcamRequired === true ? "Yes" : "No"}
        </p>
      </div> */}
          <div className="d-flex flex-fill">
            <div className="text-end">
              <span className="fw-bold d-flex flex-fill">Quiz Type</span>

              <span className="fw-bold d-flex flex-fill">Points</span>

              <span className="fw-bold d-flex flex-fill">Assignment Group</span>

              <span className="fw-bold d-flex flex-fill">Shuffle Answers</span>

              <span className="fw-bold d-flex flex-fill">
                Multiple Attempts
              </span>

              <span className="fw-bold d-flex flex-fill">
                Show Correct Answers
              </span>

              <span className="fw-bold d-flex flex-fill">
                One Question at a Time
              </span>

              <span className="fw-bold d-flex flex-fill">
                Lock Questions after Answering
              </span>

              <span className="fw-bold d-flex flex-fill">Webcam Required</span>
            </div>

            <div>
              <span className="d-flex flex-fill align-items-start">
                {quiz.quizType}
              </span>
              <span className="d-flex flex-fill align-items-start">
                {quiz.points}
              </span>
              <span className="d-flex flex-fill align-items-start">
                {quiz.assignmentgroup}
              </span>
              <span className="d-flex flex-fill align-items-start">
                {quiz.shuffleAnswers === true ? "Yes" : "No"}
              </span>
              <span className="d-flex flex-fill align-items-start">
                {quiz.multipleAttempts === true ? "Yes" : "No"}
              </span>
              <span className="d-flex flex-fill align-items-start">
                {quiz.showCorrectAnswers}
              </span>
              <span className="d-flex flex-fill align-items-start">
                {quiz.oneQuestionAtATime === true ? "Yes" : "No"}
              </span>
              <span className="d-flex flex-fill align-items-start">
                {quiz.lockQuestionsAfterAnswering === true ? "Yes" : "No"}
              </span>
              <span className="d-flex flex-fill align-items-start">
                {quiz.webcamRequired === true ? "Yes" : "No"}
              </span>
            </div>
          </div>
          <br />

          <div className="row align-items-center">
            <div className="col">Due</div>
            <div className="col">For</div>
            <div className="col">Available from</div>
            <div className="col">Until</div>
            <hr />
            <div className="col">{formatDate(quiz.dueDate)}</div>
            <div className="col">Everyone</div>
            <div className="col">{formatDate(quiz.availableDate)}</div>
            <div className="col">{formatDate(quiz.untilDate)}</div>
            <hr />
          </div>
        </div>
      )}
      {currentUser.role === "STUDENT" && studentQuizRecord === null && (
        <>
          <button
            className="btn btn-danger w-50"
            onClick={() =>
              navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/start`)
            }
          >
            start
          </button>
        </>
      )}
      {currentUser.role === "STUDENT" && studentQuizRecord !== null && (
        <>
          <p className="fw-bold fs-5">{quiz.title}</p>
          <p>{quiz.points}</p>
          <div className="mt-5 p-3 border rounded shadow-sm bg-light mb-5">
            <h2 className="mb-4">Quiz Summary</h2>
            {studentQuizRecord.answers.map((result: any, index: number) => (
              <div key={index} className="mb-2">
                <p>
                  Question {index + 1}:{" "}
                  {result.isCorrect ? "Correct" : `Incorrect`}
                  <br />
                  {`You answered: ${result.studentAnswer}`}
                </p>
              </div>
            ))}
            {/* <h3 className="mt-4">
              Total Score: {totalPoints} / {maxPoints}
            </h3> */}
          </div>
        </>
      )}
    </>
  );
};

export default QuizDetails;
