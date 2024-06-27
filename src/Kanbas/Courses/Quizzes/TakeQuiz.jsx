import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const TakeQuiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [detailedResults, setDetailedResults] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const { cid, qid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const navigate = useNavigate();

  const handleChange = (questionId, value) => {
    setAnswers({
      ...answers,
      [questionId]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const results = quizData.map((question) => {
      const studentAnswer = answers[question._id];
      const isCorrect = studentAnswer === question.correctAnswer;
      return {
        questionId: question._id,
        studentAnswer: studentAnswer || "",
        correctAnswer: question.correctAnswer,
        isCorrect,
      };
    });

    const totalPoints = results.reduce((acc, result, index) => {
      if (result.isCorrect) {
        return acc + quizData[index].points;
      }
      return acc;
    }, 0);

    setTotalPoints(totalPoints);

    try {
      const url = `${process.env.REACT_APP_REMOTE_SERVER}/api/quizzes/${qid}/studentquizrecords`;
      const studentQuizRecord = {
        attemptNumber: 1,
        dateTaken: new Date(),
        score: totalPoints,
        duration: 10,
        answers: results,
      };
      const axiosWithCredentials = axios.create({ withCredentials: true });
      await axiosWithCredentials.post(url, studentQuizRecord);
      setDetailedResults(results);
      setSubmitted(true);
    } catch (error) {
      alert("failed to submit student quiz record");
    }
  };

  useEffect(() => {
    const fetchQuizQuestions = async () => {
      const axiosWithCredentials = axios.create({ withCredentials: true });
      const response = await axiosWithCredentials.get(
        `${process.env.REACT_APP_REMOTE_SERVER}/api/quizzes/${qid}/questions`
      );
      setQuizData(response.data);
    };

    fetchQuizQuestions();
  }, [qid]);

  const maxPoints = quizData.reduce(
    (acc, question) => acc + question.points,
    0
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        {currentUser.role === "FACULTY" && (
          <div className="text-white bg-danger d-flex align-items-center gap-1 justify-content-center mb-4">
            <AiOutlineExclamationCircle />
            <span>This is a preview of the published version of the quiz</span>
          </div>
        )}
        {quizData.map((question, index) => (
          <div key={question._id} className="mb-5">
            <p className="fw-bold fs-5">
              {index + 1}. {question.questionType}
            </p>
            <p
              className={
                submitted && detailedResults[index].isCorrect
                  ? "text-success"
                  : submitted && !detailedResults[index].isCorrect
                  ? "text-danger"
                  : ""
              }
            >
              Points:{" "}
              {submitted
                ? detailedResults[index].isCorrect
                  ? `${question.points}/${question.points}`
                  : `0/${question.points}`
                : question.points}
            </p>
            <p>
              Question: <br />
              {question.questionText}
            </p>
            {question.choices.length > 0 ? (
              question.choices.map((choice, index) => (
                <div key={index} className="form-check">
                  <input
                    type="radio"
                    id={`${question._id}-${index}`}
                    name={question._id}
                    value={choice}
                    checked={answers[question._id] === choice}
                    onChange={(e) => handleChange(question._id, e.target.value)}
                    disabled={submitted}
                    className="form-check-input"
                  />
                  <label
                    htmlFor={`${question._id}-${index}`}
                    className="form-check-label"
                  >
                    {choice}
                  </label>
                </div>
              ))
            ) : (
              <input
                type="text"
                className="mb-4 form-control"
                placeholder="type your answer here..."
                value={answers[question._id] || ""}
                onChange={(e) => handleChange(question._id, e.target.value)}
                disabled={submitted}
              />
            )}
            <br />
            <hr />
          </div>
        ))}
        <button type="submit" className="btn btn-primary" disabled={submitted}>
          Submit
        </button>
      </form>

      {submitted && (
        <div className="mt-5 p-3 border rounded shadow-sm bg-light mb-5">
          <h2 className="mb-4">Quiz Summary</h2>
          {detailedResults.map((result, index) => (
            <div key={index} className="mb-2">
              <p>
                Question {index + 1}:{" "}
                {result.isCorrect
                  ? "Correct"
                  : `Incorrect (Answer: ${result.correctAnswer})`}
              </p>
            </div>
          ))}
          <h3 className="mt-4">
            Total Score: {totalPoints} / {maxPoints}
          </h3>
        </div>
      )}

      {submitted && currentUser.role === "FACULTY" && (
        <button
          className="btn btn-secondary"
          onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/edit`)}
        >
          Go To Edit
        </button>
      )}
    </>
  );
};

export default TakeQuiz;
