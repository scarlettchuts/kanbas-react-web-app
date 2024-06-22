import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as client from "../Courses/client";
import * as enrollmentClient from "../Courses/Enrollments/client";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const [publishedCourses, setPublishedCourses] = useState<any>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<any>([]);
  const [dataChanged, setDataChanged] = useState(false);

  const fetchPublishedCourses = async () => {
    const courses = await client.fetchPublishedCourses();
    setPublishedCourses(courses);
  };

  const fetchEnrolledCourses = async () => {
    const courses = await enrollmentClient.findMyEnrollments();
    setEnrolledCourses(courses);
  };

  const enrollInCourse = async (courseId: string) => {
    await enrollmentClient.createEnrollment(courseId);
  };

  const unenrollFromCourse = async (courseId: string) => {
    await enrollmentClient.deleteEnrollment(courseId);
  };

  useEffect(() => {
    fetchPublishedCourses();
    fetchEnrolledCourses();
  }, [courses, dataChanged]);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse}
        >
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={updateCourse}
          id="wd-update-course-click"
        >
          Update
        </button>
      </h5>
      <br />
      <input
        value={course.name}
        className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <textarea
        value={course.description}
        className="form-control"
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <br />
      <br />
      <h2 id="wd-dashboard-published">
        My Courses ({publishedCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
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
                  <img src="/images/reactjs.webp" height="{160}" />
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
                        deleteCourse(course._id);
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
      </div>
      <br />
      <br />
      <h2 id="wd-dashboard-published">
        Courses I'm enrolled in ({enrolledCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
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
                  <img src="/images/reactjs.webp" height="{160}" />
                  <div className="card-body">
                    <span
                      className="wd-dashboard-course-link"
                      style={{
                        textDecoration: "none",
                        color: "navy",
                        fontWeight: "bold",
                      }}
                    >
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          unenrollFromCourse(course._id);
                          setDataChanged((prev) => !prev);
                        }}
                        className="btn btn-danger float-end"
                      >
                        Unenroll
                      </button>
                      {course.name}
                    </span>
                    <p
                      className="wd-dashboard-course-title card-text"
                      style={{ maxHeight: 53, overflow: "hidden" }}
                    >
                      {course.description}
                    </p>
                    <button className="btn btn-primary">Go</button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <h2 id="wd-dashboard-published">All Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div
              className="wd-dashboard-course col"
              style={{ width: "300px" }}
              key={course._id}
            >
              <div className="card rounded-3 overflow-hidden">
                <img src="/images/reactjs.webp" height="{160}" />
                <div className="card-body">
                  <span
                    className="wd-dashboard-course-link"
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    <button
                      className="btn btn-success float-end"
                      onClick={() => {
                        enrollInCourse(course._id);
                        setDataChanged((prev) => !prev);
                      }}
                    >
                      Enroll
                    </button>
                    {course.name}
                  </span>
                  <p
                    className="wd-dashboard-course-title card-text"
                    style={{ maxHeight: 53, overflow: "hidden" }}
                  >
                    {course.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
