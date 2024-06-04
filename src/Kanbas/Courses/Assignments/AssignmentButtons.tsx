import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";

export default function AssignmentButtons() {
  return (
    <div className="flex-shrink-0">
      <FaTrash
        className="text-danger me-2"
        data-bs-toggle="modal"
        data-bs-target="#wd-delete-assignment-dialog"
      />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
