import { FaCheckCircle, FaPlus, FaSearch } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { RxTriangleDown } from "react-icons/rx";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { IoRocketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { findQuizzesForCourse } from "./client";
import { formatDate } from "../../utils/DateUtils";

export default function Quizzes() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizList = async () => {
      const response = await findQuizzesForCourse(cid as string);
      setQuizzes(response);
    };

    fetchQuizList();
  }, [cid]);

  return (
    <div id="wd-quizzes">
      {/* searchbar and two buttons */}
      <div className="d-flex justify-content-between mb-5">
        <div className="input-group w-50">
          <div className="input-group-prepend d-flex">
            <span className="input-group-text no-border">
              <FaSearch />
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Seach for Quiz"
          />
        </div>
        <div className="d-flex gap-1">
          <button
            className="btn btn-lg btn-danger"
            onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/new`)}
          >
            <FaPlus className="me-1" />
            Quiz
          </button>
          <button className="btn btn-lg btn-secondary">
            <IoEllipsisVertical className="me-0 fs-3" />
          </button>
        </div>
      </div>

      <div className="wd-title p-3 ps-2 bg-secondary fs-4">
        <RxTriangleDown className="me-2 fs-3" />
        <b>Assignment Quizzes</b>
      </div>

      {/* Quiz List */}
      <ul className="wd-lessons list-group rounded-0">
        {quizzes.map((quiz: any) => (
          <li
            className="wd-lesson list-group-item list-group-item-action d-flex align-items-center gap-3 solid-green-5px"
            key={quiz._id}
          >
            <IoRocketOutline className="text-success fs-4" />
            <div className="flex-fill m-2">
              <Link
                className="wd-assignment-link text-decoration-none text-dark fw-bold"
                to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}
              >
                {quiz.title}
              </Link>
              <p className="m-0">
                <span className="red-text">Description:</span>{" "}
                {quiz.description}
              </p>
              <p className="m-0 grey-4c5860 font-small">
                <span className="fw-bold">
                  Available {formatDate(quiz.availableDate)} |{" "}
                </span>
                <span className="fw-bold">
                  Due {formatDate(quiz.dueDate)} |{" "}
                </span>
                <span className="fw-bold"> {quiz.points} pts | </span>
                <span className="fw-bold">
                  {quiz.questionIds.length} Questions
                </span>
              </p>
            </div>
            {/* three dot menu */}
            <div className="btn-group dropend d-flex align-items-center">
              <FaCheckCircle className="text-success" />
              <IoEllipsisVertical
                type="button"
                className="fs-4 dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />

              <ul className="dropdown-menu">
                <li
                  className="dropdown-item"
                  onClick={() =>
                    navigate(`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}/edit`)
                  }
                >
                  Edit
                </li>
                <li
                  className="dropdown-item"
                  onClick={() => alert("clicked delete")}
                >
                  Delete
                </li>
                <li
                  className="dropdown-item"
                  onClick={() => alert("clicked publish")}
                >
                  Publish
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
