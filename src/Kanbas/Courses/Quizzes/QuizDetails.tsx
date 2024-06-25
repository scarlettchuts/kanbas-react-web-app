import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import * as quizClient from "./client";
import { formatDate } from "../../utils/DateUtils";
import { TiPencil } from "react-icons/ti";

const QuizDetails = () => {
  const navigate = useNavigate();
  const { cid, qid } = useParams();
  const [quiz, setQuiz] = useState<any>([]);

  useEffect(() => {
    const fetchQuizDetail = async () => {
      const response = await quizClient.findQuizzesForCourse(cid as string);
      const currentQuiz = response.find((q: any) => q._id === qid);
      setQuiz(currentQuiz);
    };

    fetchQuizDetail();
  }, [cid]);

  return (
    <>
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
        onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/edit`)}
      >
        <TiPencil className="mirror me-1" />
        Edit
      </button>
      <hr />
      <h2 className="text-dark fw-bold">{quiz.title}</h2>
      <div className="d-flex flex-column align-items-center">
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
    </>
  );
};

export default QuizDetails;
