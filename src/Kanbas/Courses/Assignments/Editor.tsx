import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addAssignment, updateAssignment, deleteAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";
import { formatDate } from "../../utils/DateUtils";

export default function AssignmentEditor() {
  const { cid } = useParams();
  const { aid } = useParams();
  const location = useLocation();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const assignment = assignments.find(
    (assignment: any) => assignment._id === aid
  );
  const dispatch = useDispatch();

  const [title, setTitle] = useState(assignment?.title);
  const [description, setDescription] = useState(assignment?.description);
  const [points, setPoints] = useState(assignment?.points);
  const [dueDate, setDueDate] = useState(formatDate(assignment?.dueDate));
  const [fromDate, setFromDate] = useState(formatDate(assignment?.fromDate));
  const [untilDate, setUntilDate] = useState(formatDate(assignment?.untilDate));

  const createAssignment = async (assignment: any) => {
    const newAssignment = await client.createAssignment(
      cid as string,
      assignment
    );
    dispatch(addAssignment(newAssignment));
  };

  const saveAssignment = async (assignment: any) => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname.includes("new")) {
      createAssignment({
        title,
        description,
        points,
        dueDate,
        fromDate,
        untilDate,
      });
    } else {
      saveAssignment({
        ...assignment,
        title,
        description,
        points,
        dueDate,
        fromDate,
        untilDate,
      });
    }
  };

  return (
    <div id="wd-assignment-editor">
      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input
          type="text"
          className="form-control"
          id="wd-name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Textarea */}
      <div className="mb-3">
        <textarea
          className="form-control"
          id="wd-description"
          rows={10}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Points */}
      <div className="mb-3 d-flex gap-2 align-items-center justify-content-end">
        <label htmlFor="wd-points" className="form-label">
          Points
        </label>
        <input
          type="text"
          className="form-control w-75"
          id="wd-points"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
        />
      </div>

      {/* Assign */}
      <div className="mb-3 gap-2 d-flex justify-content-end">
        <p>Assign</p>
        <div className="border w-75 p-3">
          <div className="mb-3">
            <label htmlFor="wd-due-date" className="form-label fw-bold">
              Due
            </label>
            <input
              type="date"
              className="form-control"
              id="wd-due-date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          <div className="mb-3 d-flex gap-3">
            <div className="flex-fill">
              <label htmlFor="wd-available-from" className="form-label fw-bold">
                Available from
              </label>
              <input
                type="date"
                className="form-control"
                id="wd-available-from"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>

            <div className="flex-fill">
              <label
                htmlFor="wd-available-until"
                className="form-label fw-bold"
              >
                Until
              </label>
              <input
                type="date"
                className="form-control"
                id="wd-available-until"
                value={untilDate}
                onChange={(e) => setUntilDate(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <hr className="my-3" />

      {/* Cancel and Save button */}
      <div className="d-flex justify-content-end mb-3">
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className="btn btn-secondary"
        >
          Cancel
        </Link>
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className="btn btn-danger"
          onClick={handleClick}
        >
          Save
        </Link>
      </div>
    </div>
  );
}
