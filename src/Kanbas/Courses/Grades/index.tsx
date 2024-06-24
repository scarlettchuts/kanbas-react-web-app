import { LuFilter } from "react-icons/lu";
import GradesControls from "./GradesControls";
import { useParams } from "react-router";
import { assignments, enrollments, users, grades } from "../../Database";

export default function Grades() {
  const { cid } = useParams();

  const enrolledStudents = enrollments
    .filter((course) => course.course === cid)
    .map((enrolledStudent) => {
      const user = users.find(
        (userData) => userData._id === enrolledStudent.user
      );
      return {
        studentId: user?._id,
        firstName: user?.firstName,
        lastName: user?.lastName,
      };
    });

  const assignmentIds = assignments
    .filter((course) => course.course === cid)
    .map((assignmentInfo) => assignmentInfo._id);

  const eachStudentGrades = enrolledStudents.map((student) => {
    const studentAssignmentAndGradeInfo = grades
      .filter(
        (grade) =>
          grade.student === student.studentId &&
          assignmentIds.includes(grade.assignment)
      )
      .map((assignment) => ({
        assignment: assignment.assignment,
        grade: assignment.grade,
      }));

    return {
      ...student,
      assignments: studentAssignmentAndGradeInfo,
    };
  });

  return (
    <div>
      <div id="wd-Grades">
        <GradesControls />
        <br />
        <br />

        <div className="d-flex gap-5">
          <div className="flex-fill">
            <label id="wd-student-names" className="form-label mb-3">
              <b>Student Names</b>
            </label>
            <select className="form-select" aria-label="Default select example">
              {enrolledStudents.map((student) => {
                return (
                  <option value={student.studentId}>
                    {student.firstName} {student.lastName}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex-fill">
            <label id="wd-assignment-names" className="form-label mb-3">
              <b>Assignment Names</b>
            </label>
            <select className="form-select" aria-label="Default select example">
              {assignmentIds.map((assignment) => {
                return <option value={assignment}>{assignment}</option>;
              })}
            </select>
          </div>
        </div>

        <div className="mt-3 mb-3">
          <button id="wd-setting-btn" className="btn btn-lg btn-secondary me-1">
            <LuFilter
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Apply Filters
          </button>
        </div>
        <table className="table table-striped align-middle table-bordered border-gray">
          <thead>
            <tr>
              <th>Student Name</th>
              {assignments
                .filter((assignment) => assignment.course === cid)
                .map((assignment) => (
                  <th className="text-center">
                    {assignment._id} {assignment.title}
                    <h6>Out of 100</h6>
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {eachStudentGrades.map((studentInfo) => {
              return (
                <tr>
                  <td>
                    <p className="red-text">
                      {studentInfo.firstName} {studentInfo.lastName}
                    </p>
                  </td>
                  {studentInfo.assignments.map((eachAssignmentGrade) => {
                    return (
                      <td className="text-center">
                        {eachAssignmentGrade.grade}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
