import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import Grades from "./Grades";
import AssignmentEditor from "./Assignments/Editor";
import { GiHamburgerMenu } from "react-icons/gi";
import Quizzes from "./Quizzes";
import PeopleTable from "./People/Table";
import { useSelector } from "react-redux";
import QuizDetails from "./Quizzes/QuizDetails";
import QuizEditor from "./Quizzes/QuizEditor";
import QuizPreview from "./Quizzes/QuizPreview";
import QuestionEditor from "./Quizzes/Questions/QuestionEditor";
import QuestionChoiceForm from "./Quizzes/Questions/QuestionChoiceForm";

export default function Courses() {
  const { cid } = useParams();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const course = courses.find((course: any) => course._id === cid);
  const { pathname } = useLocation();

  return (
    <div id="wd-courses">
      <h2 className="red-c41616">
        <GiHamburgerMenu
          className="position-relative me-4"
          style={{ bottom: "1px" }}
        />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex gap-5">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Quizzes/:qid" element={<QuizDetails />} />
            <Route path="Quizzes/new" element={<QuizEditor />} />
            <Route path="Quizzes/:qid/edit" element={<QuizEditor />} />
            <Route path="Quizzes/:qid/preview" element={<QuizPreview />} />
            <Route path="Grades" element={<Grades />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="People/:uid" element={<PeopleTable />} />

            <Route path="what" element={<QuestionEditor />} />
            <Route path="why" element={<QuestionChoiceForm />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
