import React from "react";
import { useNavigate, useParams } from "react-router";

const QuizDetails = () => {
  const navigate = useNavigate();
  const { cid, qid } = useParams();
  return (
    <>
      <button
        type="button"
        className="btn btn-light"
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
        Edit
      </button>
      <hr />
    </>
  );
};

export default QuizDetails;
