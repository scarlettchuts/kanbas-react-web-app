import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setCourses,
  addCourse,
  deleteCourse,
  updateCourse,
  setPublishedCourses,
  addPublishedCourse,
  deletePublishedCourse,
  updatePublishedCourse,
  setEnrolledCourses,
  addEnrolledCourse,
  deleteEnrolledCourse,
} from "./reducer";
import * as client from "../Courses/client";
import * as enrollmentClient from "../Courses/Enrollments/client";

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses, publishedCourses, enrolledCourses } = useSelector(
    (state: any) => state.coursesReducer
  );
  const dispatch = useDispatch();

  const [course, setCourse] = useState({
    name: "",
    description: "",
  });

  const handleAddCourse = async () => {
    if (course.name === "" && course.description === "") {
      alert("input field cannot be empty");
      return;
    }

    if (course.hasOwnProperty("_id")) {
      alert(
        "cannot add course if you populated input fields by clicking edit on a course"
      );
      setCourse({ name: "", description: "" });
      return;
    }

    const newCourse = await client.createCourse(course);
    dispatch(addPublishedCourse(newCourse));
    dispatch(addCourse(newCourse));
    setCourse({ name: "", description: "" });
  };

  const handleDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(deletePublishedCourse(courseId));
    dispatch(deleteCourse(courseId));
  };

  const handleUpdateCourse = async () => {
    if (course.name === "" && course.description === "") {
      alert("input field cannot be empty");
      return;
    }

    await client.updateCourse(course);
    dispatch(updatePublishedCourse(course));
    dispatch(updateCourse(course));
    setCourse({ name: "", description: "" });
  };

  const handleEnrollInCourse = async (courseId: string) => {
    const enrolled = enrolledCourses.find((c: any) => c._id === courseId);
    if (enrolled) {
      alert("already enrolled");
      return;
    }
    await enrollmentClient.createEnrollment(courseId);
    dispatch(addEnrolledCourse(courseId));
  };

  const handleUnenrollFromCourse = async (courseId: string) => {
    await enrollmentClient.deleteEnrollment(courseId);
    dispatch(deleteEnrolledCourse(courseId));
  };

  useEffect(() => {
    const fetchCourses = async () => {
      const courses = await client.fetchAllCourses();
      dispatch(setCourses(courses));
    };

    const fetchPublishedCourses = async () => {
      const courses = await client.fetchPublishedCourses();
      dispatch(setPublishedCourses(courses));
    };

    const fetchEnrolledCourses = async () => {
      const courses = await enrollmentClient.findMyEnrollments();
      dispatch(setEnrolledCourses(courses));
    };

    fetchCourses();
    fetchPublishedCourses();
    fetchEnrolledCourses();
  }, [dispatch]);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {/* Add new course */}
      {currentUser.role === "FACULTY" && (
        <section className="mb-5">
          <div className="d-flex mb-2">
            <h2>New Course</h2>
            <button
              className="btn btn-warning ms-auto"
              onClick={handleUpdateCourse}
              id="wd-update-course-click"
              disabled={publishedCourses.length <= 0}
            >
              Update
            </button>
            <button
              className="btn btn-primary"
              id="wd-add-new-course-click"
              onClick={handleAddCourse}
            >
              Add
            </button>
          </div>
          <input
            placeholder="course name..."
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            placeholder="course description..."
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </section>
      )}
      {/* My Courses */}
      {currentUser.role === "FACULTY" && (
        <section className="mb-5">
          <h2 id="wd-dashboard-published">
            My Courses ({publishedCourses.length})
          </h2>
          <hr />
          <div
            id="wd-dashboard-courses"
            className="row row-cols-1 row-cols-md-5 g-4"
          >
            {publishedCourses.map((course: any) => (
              <div
                className="wd-dashboard-course col"
                style={{ width: "300px" }}
                key={course._id}
              >
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="text-decoration-none"
                >
                  <div className="card rounded-3 overflow-hidden">
                    <img
                      src="/images/reactjs.webp"
                      height="{160}"
                      alt="course pic"
                    />
                    <div className="card-body">
                      <span
                        className="wd-dashboard-course-link"
                        style={{
                          textDecoration: "none",
                          color: "navy",
                          fontWeight: "bold",
                        }}
                      >
                        {course.name}
                      </span>
                      <p
                        className="wd-dashboard-course-title card-text"
                        style={{ maxHeight: 53, overflow: "hidden" }}
                      >
                        {course.description}
                      </p>
                      <button className="btn btn-primary">Go</button>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          handleDeleteCourse(course._id);
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
      {/* Courses I'm enrolled in */}
      {currentUser.role === "STUDENT" && (
        <section className="mb-5">
          <h2 id="wd-dashboard-published">
            Courses I'm enrolled in ({enrolledCourses.length})
          </h2>
          <hr />
          <div
            id="wd-dashboard-courses"
            className="row row-cols-1 row-cols-md-5 g-4"
          >
            {enrolledCourses.map((course: any) => (
              <div
                className="wd-dashboard-course col"
                style={{ width: "300px" }}
                key={course._id}
              >
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="text-decoration-none"
                >
                  <div className="card rounded-3 overflow-hidden">
                    <img
                      src="/images/reactjs.webp"
                      height="{160}"
                      alt="course pic"
                    />
                    <div className="card-body">
                      <span
                        className="wd-dashboard-course-link"
                        style={{
                          textDecoration: "none",
                          color: "navy",
                          fontWeight: "bold",
                        }}
                      >
                        {course.name}
                      </span>

                      <p
                        className="wd-dashboard-course-title card-text"
                        style={{ maxHeight: 53, overflow: "hidden" }}
                      >
                        {course.description}
                      </p>
                      <button className="btn btn-primary">Go</button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleUnenrollFromCourse(course._id);
                        }}
                        className="btn btn-danger float-end"
                      >
                        Unenroll
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
      {/* All Courses */}
      <section className="mb-5">
        <h2 id="wd-dashboard-published">All Courses ({courses.length})</h2>
        <hr />
        <div
          id="wd-dashboard-courses"
          className="row row-cols-1 row-cols-md-5 g-4"
        >
          {courses.map((course: any) => (
            <div
              className="wd-dashboard-course col"
              style={{ width: "300px" }}
              key={course._id}
            >
              {/* <Link
                to={`/Kanbas/Courses/${course._id}/Home`}
                className="text-decoration-none"
              > */}
              <div className="card rounded-3 overflow-hidden">
                <img
                  src="/images/reactjs.webp"
                  height="{160}"
                  alt="course pic"
                />
                <div className="card-body">
                  <span
                    className="wd-dashboard-course-link"
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course.name}
                  </span>
                  <p
                    className="wd-dashboard-course-title card-text"
                    style={{ maxHeight: 53, overflow: "hidden" }}
                  >
                    {course.description}
                  </p>
                  {currentUser.role === "STUDENT" && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleEnrollInCourse(course._id);
                      }}
                      className="btn btn-success float-end"
                    >
                      Enroll
                    </button>
                  )}
                </div>
              </div>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
