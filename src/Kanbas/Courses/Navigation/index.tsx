import { useLocation } from "react-router";

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  return (
    <div id="wd-courses-nagivation" className="list-group fs-5 rounded-0">
      <a
        id="wd-course-home-link"
        href="#/Kanbas/Courses/1234/Home"
        // className="list-group-item active border border-0"
        className={`list-group-item border-0 ${
          pathname.includes("Home") ? "text-dark" : "text-danger"
        }`}
      >
        Home
      </a>

      <a
        id="wd-course-modules-link"
        href="#/Kanbas/Courses/1234/Modules"
        className={`list-group-item border-0 ${
          pathname.includes("Modules") ? "text-dark" : "text-danger"
        }`}
      >
        Modules
      </a>

      <a
        id="wd-course-piazza-link"
        href="#/Kanbas/Courses/1234/Piazza"
        className={`list-group-item border-0 ${
          pathname.includes("Piazza") ? "text-dark" : "text-danger"
        }`}
      >
        Piazza
      </a>

      <a
        id="wd-course-zoom-link"
        href="#/Kanbas/Courses/1234/Zoom"
        className={`list-group-item border-0 ${
          pathname.includes("Zoom") ? "text-dark" : "text-danger"
        }`}
      >
        Zoom
      </a>

      <a
        id="wd-course-quizzes-link"
        href="#/Kanbas/Courses/1234/Assignments"
        className={`list-group-item border-0 ${
          pathname.includes("Assignments") ? "text-dark" : "text-danger"
        }`}
      >
        Assignments
      </a>

      <a
        id="wd-course-assignments-link"
        href="#/Kanbas/Courses/1234/Quizzes"
        className={`list-group-item border-0 ${
          pathname.includes("Quizzes") ? "text-dark" : "text-danger"
        }`}
      >
        Quizzes
      </a>

      <a
        id="wd-course-grades-link"
        href="#/Kanbas/Courses/1234/Grades"
        className={`list-group-item border-0 ${
          pathname.includes("Grades") ? "text-dark" : "text-danger"
        }`}
      >
        Grades
      </a>
    </div>
  );
}
