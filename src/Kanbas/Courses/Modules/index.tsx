import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
  return (
    <div>
      <div id="wd-modules">
        <ModulesControls />
        <br />
        <br />
        <br />
        <br />
        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              Week 1<ModuleControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
              <li
                className="wd-lesson list-group-item p-3 ps-1"
                style={{ borderLeft: "5px solid green" }}
              >
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
                <LessonControlButtons />
              </li>
              <li
                className="wd-lesson list-group-item p-3 ps-1"
                style={{ borderLeft: "5px solid green" }}
              >
                <BsGripVertical className="me-2 fs-3" />
                Introduction to the course
                <LessonControlButtons />
              </li>
              <li
                className="wd-lesson list-group-item p-3 ps-1"
                style={{ borderLeft: "5px solid green" }}
              >
                <BsGripVertical className="me-2 fs-3" />
                Learn what is Web Development
                <LessonControlButtons />
              </li>
              <li
                className="wd-lesson list-group-item p-3 ps-1"
                style={{ borderLeft: "5px solid green" }}
              >
                <BsGripVertical className="me-2 fs-3" />
                LESSON 1<LessonControlButtons />
              </li>
              <li
                className="wd-lesson list-group-item p-3 ps-1"
                style={{ borderLeft: "5px solid green" }}
              >
                <BsGripVertical className="me-2 fs-3" />
                LESSON 2<LessonControlButtons />
              </li>
              <li
                className="wd-lesson list-group-item p-3 ps-1"
                style={{ borderLeft: "5px solid green" }}
              >
                <BsGripVertical className="me-2 fs-3" />
                READING
                <LessonControlButtons />
              </li>
              <li
                className="wd-lesson list-group-item p-3 ps-1"
                style={{ borderLeft: "5px solid green" }}
              >
                <BsGripVertical className="me-2 fs-3" />
                Full Stack Developer - Chapter 1 - Introduction
                <LessonControlButtons />
              </li>
              <li
                className="wd-lesson list-group-item p-3 ps-1"
                style={{ borderLeft: "5px solid green" }}
              >
                <BsGripVertical className="me-2 fs-3" />
                Full Stack Developer - Chapter 2 - Creating User
                <LessonControlButtons />
              </li>
              <li
                className="wd-lesson list-group-item p-3 ps-1"
                style={{ borderLeft: "5px solid green" }}
              >
                <BsGripVertical className="me-2 fs-3" />
                SLIDES
                <LessonControlButtons />
              </li>
              <li
                className="wd-lesson list-group-item p-3 ps-1"
                style={{ borderLeft: "5px solid green" }}
              >
                <BsGripVertical className="me-2 fs-3" />
                Introduction to Web Development
                <LessonControlButtons />
              </li>
              <li
                className="wd-lesson list-group-item p-3 ps-1"
                style={{ borderLeft: "5px solid green" }}
              >
                <BsGripVertical className="me-2 fs-3" />
                Creating an HTTP server with Node.js
                <LessonControlButtons />
              </li>
              <li
                className="wd-lesson list-group-item p-3 ps-1"
                style={{ borderLeft: "5px solid green" }}
              >
                <BsGripVertical className="me-2 fs-3" />
                Creating a React Application
                <LessonControlButtons />
              </li>
            </ul>
          </li>
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              Week 2<ModuleControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
              <li
                className="wd-lesson list-group-item p-3 ps-1"
                style={{ borderLeft: "5px solid green" }}
              >
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
                <LessonControlButtons />
              </li>
              <li
                className="wd-lesson list-group-item p-3 ps-1"
                style={{ borderLeft: "5px solid green" }}
              >
                <BsGripVertical className="me-2 fs-3" />
                Learn how to create user interfaces with HTML
                <LessonControlButtons />
              </li>
              <li
                className="wd-lesson list-group-item p-3 ps-1"
                style={{ borderLeft: "5px solid green" }}
              >
                <BsGripVertical className="me-2 fs-3" />
                Deploy the assignment to Netlify
                <LessonControlButtons />
              </li>
              <li
                className="wd-lesson list-group-item p-3 ps-1"
                style={{ borderLeft: "5px solid green" }}
              >
                <BsGripVertical className="me-2 fs-3" />
                LESSON 1<LessonControlButtons />
              </li>
              <li
                className="wd-lesson list-group-item p-3 ps-1"
                style={{ borderLeft: "5px solid green" }}
              >
                <BsGripVertical className="me-2 fs-3" />
                LESSON 2<LessonControlButtons />
              </li>
              <li
                className="wd-lesson list-group-item p-3 ps-1"
                style={{ borderLeft: "5px solid green" }}
              >
                <BsGripVertical className="me-2 fs-3" />
                SLIDES
                <LessonControlButtons />
              </li>
              <li
                className="wd-lesson list-group-item p-3 ps-1"
                style={{ borderLeft: "5px solid green" }}
              >
                <BsGripVertical className="me-2 fs-3" />
                Introduction to HTML and the DOM
                <LessonControlButtons />
              </li>
              <li
                className="wd-lesson list-group-item p-3 ps-1"
                style={{ borderLeft: "5px solid green" }}
              >
                <BsGripVertical className="me-2 fs-3" />
                Formatting Web content with Headings and
                <LessonControlButtons />
              </li>
              <li
                className="wd-lesson list-group-item p-3 ps-1"
                style={{ borderLeft: "5px solid green" }}
              >
                <BsGripVertical className="me-2 fs-3" />
                Formatting content with Lists and Tables
                <LessonControlButtons />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
