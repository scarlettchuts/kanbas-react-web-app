import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
  ];
  return (
    <div id="wd-courses-nagivation" className="list-group fs-5 rounded-0">
      {links.map((element) => (
        <Link
          to={`/Kanbas/Courses/${cid}/${element}`}
          key={element}
          className={`list-group-item border-0 ${
            pathname.includes(element)
              ? "text-dark border-start border-2 border-dark"
              : "text-danger"
          }`}
        >
          {element}
        </Link>
      ))}
    </div>
  );
}
