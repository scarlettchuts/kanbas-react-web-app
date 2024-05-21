import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "../Modules/GreenCheckmark";
export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <span className="badge badge-pill badge-dark text-dark border-gray fs-6">
        40% of Total
      </span>
      <BsPlus className="fs-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
