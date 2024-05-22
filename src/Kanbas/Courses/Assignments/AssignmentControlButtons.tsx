import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <span className="badge badge-pill badge-light text-dark border-gray fs-6 me-2">
        40% of Total
      </span>
      <BsPlus className="fs-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
