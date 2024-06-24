import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import AssignmentControlButtons from "./AssignmentControlButtons";
import "bootstrap/dist/css/bootstrap.min.css";
import AssignmentButtons from "./AssignmentButtons";
import { useNavigate, useParams } from "react-router";
import * as client from "./client";
import { setAssignments } from "./reducer";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { formatDate } from "../../utils/DateUtils";

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const [itemToRemove, setItemToRemove] = useState("");

  useEffect(() => {
    const fetchAssignments = async () => {
      const assignments = await client.findAssignmentsForCourse(cid as string);
      dispatch(setAssignments(assignments));
    };

    fetchAssignments();
  }, [cid, dispatch]);

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
          <button
            className="btn btn-lg btn-danger"
            onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/new`)}
          >
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
            .filter((item: any) => item.course === cid)
            .map((assignment: any) => (
              <li
                className="wd-lesson list-group-item list-group-item-action d-flex align-items-center solid-green-5px"
                key={assignment._id}
                onClick={() => setItemToRemove(assignment._id)}
              >
                <BsGripVertical className="me-3 fs-3" />
                <GrNotes className="me-3 fs-4" />
                <div className="flex-fill m-2">
                  <Link
                    className="wd-assignment-link"
                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                  >
                    {assignment._id} - {assignment.title}
                  </Link>
                  <p className="m-0">
                    <span className="red-text">Description</span>:{" "}
                    {assignment.description}
                  </p>
                  <p className="m-0 grey-4c5860 font-small">
                    <span className="fw-bold">Available from</span>{" "}
                    {formatDate(assignment.fromDate)} |{" "}
                    <span className="fw-bold">Available until</span>{" "}
                    {formatDate(assignment.untilDate)} |{" "}
                    <span className="fw-bold"> Due</span>{" "}
                    {formatDate(assignment.dueDate)} | {assignment.points} pts
                  </p>
                </div>
                <AssignmentButtons />
              </li>
            ))}
        </ul>
        <ConfirmDeleteModal itemToRemove={itemToRemove} />
      </div>
    </div>
  );
}
