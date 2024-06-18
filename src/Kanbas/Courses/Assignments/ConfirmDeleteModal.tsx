import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import * as client from "./client";

const ConfirmDeleteModal = ({ itemToRemove }: { itemToRemove: string }) => {
  const dispatch = useDispatch();

  const removeAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  const handleClick = () => {
    removeAssignment(itemToRemove);
  };

  return (
    <div
      id="wd-delete-assignment-dialog"
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Confirm
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            Are you sure you want to remove assignment
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              onClick={handleClick}
              type="button"
              data-bs-dismiss="modal"
              className="btn btn-danger"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
