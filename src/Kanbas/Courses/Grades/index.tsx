import { LuFilter } from "react-icons/lu";
import { GrLogin } from "react-icons/gr";
import GradesControls from "./GradesControls";

export default function Modules() {
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
              <option selected>Search students</option>
              <option value="1">Andy</option>
              <option value="2">Bob</option>
              <option value="3">Charlie</option>
            </select>
          </div>
          <div className="flex-fill">
            <label id="wd-assignment-names" className="form-label mb-3">
              <b>Assignment Names</b>
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Search assignment</option>
              <option value="1">A1</option>
              <option value="2">A2</option>
              <option value="3">A3</option>
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
              <th style={{ textAlign: "center" }}>
                <h6>A1 SETUP</h6>
                <h6>Out of 100</h6>
              </th>
              <th style={{ textAlign: "center" }}>
                <h6>A2 HTML</h6>
                <h6>Out of 100</h6>
              </th>
              <th style={{ textAlign: "center" }}>
                <h6>A3 CSS</h6>
                <h6>Out of 100</h6>
              </th>
              <th style={{ textAlign: "center" }}>
                <h6>A4 BOOTSTRAP</h6>
                <h6>Out of 100</h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  <span className="red-text">Jane Adams</span>
                </p>
              </td>
              <td style={{ textAlign: "center" }}>
                <p>100%</p>
              </td>
              <td style={{ textAlign: "center" }}>
                <p>96.67%</p>
              </td>
              <td style={{ textAlign: "center" }}>
                <p>92.18%</p>
              </td>
              <td style={{ textAlign: "center" }}>
                <p>66.22%</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span className="red-text">Christina Allen</span>
                </p>
              </td>
              <td style={{ textAlign: "center" }}>
                <p>100%</p>
              </td>
              <td style={{ textAlign: "center" }}>
                <p>100%</p>
              </td>
              <td style={{ textAlign: "center" }}>
                <p>100%</p>
              </td>
              <td style={{ textAlign: "center" }}>
                <p>100%</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span className="red-text">Samreen Ansari</span>
                </p>
              </td>
              <td style={{ textAlign: "center" }}>
                <p>100%</p>
              </td>
              <td style={{ textAlign: "center" }}>
                <p>100%</p>
              </td>
              <td style={{ textAlign: "center" }}>
                <p>100%</p>
              </td>
              <td style={{ textAlign: "center" }}>
                <p>100%</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span className="red-text">Han Bao</span>
                </p>
              </td>
              <td style={{ textAlign: "center" }}>
                <p>100%</p>
              </td>
              <td style={{ textAlign: "center" }}>
                <p>100%</p>
              </td>
              <td
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <input
                  className="form-control w-50"
                  type="text"
                  id="table-input"
                />
                <button type="button" className="btn btn-light">
                  <GrLogin className="m-0 fs-4" />
                </button>
              </td>
              <td style={{ textAlign: "center" }}>
                <p>98.99%</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span className="red-text">Siran Cao</span>
                </p>
              </td>
              <td style={{ textAlign: "center" }}>
                <p>100%</p>
              </td>
              <td style={{ textAlign: "center" }}>
                <p>100%</p>
              </td>
              <td style={{ textAlign: "center" }}>
                <p>100%</p>
              </td>
              <td style={{ textAlign: "center" }}>
                <p>100%</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
