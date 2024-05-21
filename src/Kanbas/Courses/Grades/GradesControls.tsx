import { FaFileImport } from "react-icons/fa6";
import { CiExport } from "react-icons/ci";
import { RiSettings3Fill } from "react-icons/ri";

export default function GradesControls() {
  return (
    <div id="wd-grades-controls" className="text-nowrap">
      <button
        id="wd-setting-btn"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        <RiSettings3Fill
          className="position-relative me-auto"
          style={{ bottom: "1px" }}
        />
      </button>
      <div className="d-inline me-1 float-end">
        <button
          id="wd-export-btn"
          className="btn btn-lg btn-secondary"
          type="button"
        >
          <CiExport className="me-2" />
          Export
        </button>
      </div>
      <button
        id="wd-import-btn"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        <FaFileImport className="me-2" />
        Import
      </button>
    </div>
  );
}
