import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
export default function AssignmentButtons() {
  return (
    <div className="flex-shrink-0">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
