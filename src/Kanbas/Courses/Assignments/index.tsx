import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import AssignmentControlButtons from "./AssignmentControlButtons";
import "bootstrap/dist/css/bootstrap.min.css";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
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
        ASSIGNMENTS
        <AssignmentControlButtons />
      </div>
      <div className="collapse" id="collapseExample">
        <ul className="wd-lessons list-group rounded-0">
          <li
            className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center"
            style={{ borderLeft: "5px solid green" }}
          >
            <BsGripVertical className="me-2 fs-3" />
            <GrNotes className="me-5 fs-4" />
            <div className="p-3 ps-1">
              <a
                className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123"
              >
                A1 - ENV + HTML
              </a>
              <p>
                Multiple Modules | <b>Not available until</b> May 6 at 12:00am |
                <b> Due</b> May 13 at 11:59pm | 100 pts
              </p>
            </div>
            <LessonControlButtons />
          </li>
          <li
            className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center"
            style={{ borderLeft: "5px solid green" }}
          >
            <BsGripVertical className="me-2 fs-3" />
            <GrNotes className="me-5 fs-4" />
            <div className="p-3 ps-1">
              <a
                className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123"
              >
                A2 - CSS + BOOTSTRAP
              </a>
              <p>
                Multiple Modules | <b>Not available until</b> May 13 at 12:00am
                |<b> Due</b> May 20 at 11:59pm | 100 pts
              </p>
            </div>
            <LessonControlButtons />
          </li>
          <li
            className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center"
            style={{ borderLeft: "5px solid green" }}
          >
            <BsGripVertical className="me-2 fs-3" />
            <GrNotes className="me-5 fs-4" />
            <div className="p-3 ps-1">
              <a
                className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123"
              >
                A3 - JAVASCRIPT + REACT
              </a>
              <p>
                Multiple Modules | <b>Not available until</b> May 20 at 12:00am
                |<b> Due</b> May 27 at 11:59pm | 100 pts
              </p>
            </div>
            <LessonControlButtons />
          </li>
        </ul>
      </div>
    </div>
  );
}
