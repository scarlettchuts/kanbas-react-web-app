import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const TakeQuiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [answers, setAnswers] = useState({});
  const { qid } = useParams();

  const handleChange = (questionId, value) => {
    setAnswers({
      ...answers,
      [questionId]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const detailedResults = quizData.map((question) => {
      const studentAnswer = answers[question._id];
      const isCorrect = studentAnswer === question.correctAnswer;
      return {
        questionId: question._id,
        studentAnswer: studentAnswer || "",
        isCorrect,
      };
    });

    const totalPoints = detailedResults.reduce((acc, result, index) => {
      if (result.isCorrect) {
        return acc + quizData[index].points;
      }
      return acc;
    }, 0);

    try {
      const url = `${process.env.REACT_APP_REMOTE_SERVER}/api/quizzes/${qid}/studentquizrecords`;
      const studentQuizRecord = {
        attemptNumnber: 1,
        dateTaken: new Date(),
        score: totalPoints,
        duration: 10,
        answers: detailedResults,
      };
      const axiosWithCredentials = axios.create({ withCredentials: true });
      const response = await axiosWithCredentials.post(url, studentQuizRecord);
      console.log(response.data);
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        {quizData.map((question, index) => (
          <div key={question._id} className="mb-5">
            <p className="fw-bold fs-5">
              {index + 1}. {question.questionType}
            </p>
            <p className="text-primary">Answer: {question.correctAnswer}</p>
            <p className="text-success">Points: {question.points}</p>
            <p>
              Question: <br />
              {question.questionText}
            </p>
            {question.choices.length > 0 ? (
              question.choices.map((choice, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={`${question._id}-${index}`}
                    name={question._id}
                    value={choice}
                    checked={answers[question._id] === choice}
                    onChange={(e) => handleChange(question._id, e.target.value)}
                  />
                  <label htmlFor={`${question._id}-${index}`}>{choice}</label>
                </div>
              ))
            ) : (
              <input
                type="text"
                value={answers[question._id] || ""}
                onChange={(e) => handleChange(question._id, e.target.value)}
              />
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>

      <br />
      <hr />
      <pre>{JSON.stringify(answers, null, 2)}</pre>
    </>
  );
};

export default TakeQuiz;
