import { FaPlus, FaSearch } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { RxTriangleDown } from "react-icons/rx";
import { RxRocket } from "react-icons/rx";
import { Navigate, useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";

export default function Quizzes() {
  const { cid } = useParams();
  const nevigate = useNavigate();

  return (
    <div id="wd-quizzes">
      {/* searchbar and two buttons */}
      <div className="d-flex justify-content-between mb-5">
        <div className="input-group w-50">
          <div className="input-group-prepend d-flex">
            <span className="input-group-text no-border">
              <FaSearch />
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Seach for Quiz"
          />
        </div>
        <div className="d-flex gap-1">
          <button
            className="btn btn-lg btn-danger"
            onClick={() => nevigate(`/Kanbas/Courses/${cid}/Quizzes/new`)}
          >
            <FaPlus className="me-1" />
            Quiz
          </button>
          <button className="btn btn-lg btn-secondary">
            <IoEllipsisVertical className="me-0 fs-3" />
          </button>
        </div>
      </div>

      <div className="wd-title p-3 ps-2 bg-secondary fs-4">
        <RxTriangleDown className="me-2 fs-3" />
        <b>Assignment Quizzes</b>
      </div>
      <div className="collapse" id="collapseExample">
        <ul className="wd-quiz list-group rounded-0">
          {/* {assignments
            .filter((item: any) => item.course === cid)
            .map((assignment: any) => ( */}
          {/* <li
                className="wd-quiz list-group-item list-group-item-action d-flex align-items-center solid-green-5px"
                // key={assignment._id}
                // onClick={() => setItemToRemove(assignment._id)}
              >
                <RxRocket className="me-3 fs-3" />
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
                    {assignment.fromDate} |{" "}
                    <span className="fw-bold">Available until</span>{" "}
                    {assignment.untilDate} |{" "}
                    <span className="fw-bold"> Due</span> {assignment.dueDate} |{" "}
                    {assignment.points} pts
                  </p>
                </div>
              </li>
            ))} */}
        </ul>
        {/* <ConfirmDeleteModal itemToRemove={itemToRemove} /> */}
      </div>
    </div>
  );
}
