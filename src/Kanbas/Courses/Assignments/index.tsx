import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import AssignmentControlButtons from "./AssignmentControlButtons";
import "bootstrap/dist/css/bootstrap.min.css";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentButtons from "./AssignmentButtons";
import { useParams } from "react-router";
import { assignments } from "../../Database";
import { Link } from "react-router-dom";

export default function Assignments() {
  const { cid } = useParams();

  return (
    <div id="wd-assignments">
      {/* searchbar and two buttons */}
      <div className="d-flex justify-content-between mb-5">
        <div className="input-group w-50">
          <div className="input-group-prepend d-flex">
            <span className="input-group-text no-border">
              <FaSearch />
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Seach..." />
        </div>
        <div className="d-flex gap-1">
          <button className="btn btn-lg btn-secondary">
            <FaPlus />
            Group
          </button>
          <button className="btn btn-lg btn-danger">
            <FaPlus />
            Assignment
          </button>
        </div>
      </div>

      <div
        className="wd-title p-3 ps-2 bg-secondary fs-4"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <BsGripVertical className="me-2 fs-3" />
        <b>ASSIGNMENTS</b>
        <AssignmentControlButtons />
      </div>
      <div className="collapse" id="collapseExample">
        <ul className="wd-lessons list-group rounded-0">
          {assignments
            .filter((item) => item.course === cid)
            .map((assignment) => (
              <li className="wd-lesson list-group-item d-flex align-items-center solid-green-5px">
                <BsGripVertical className="me-3 fs-3" />
                <GrNotes className="me-3 fs-4" />
                <div className="flex-fill m-2">
                  <Link
                    className="wd-assignment-link"
                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                  >
                    {assignment._id}
                  </Link>
                  <p className="m-0">
                    <span className="red-text">Multiple Modules</span> |{" "}
                    <b>Not available until</b> May 6 at 12:00am |<b> Due</b> May
                    13 at 11:59pm | 100 pts
                  </p>
                </div>
                <AssignmentButtons />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
