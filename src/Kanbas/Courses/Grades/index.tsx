import { BsGripVertical } from "react-icons/bs";
import { LuFilter } from "react-icons/lu";
import GradesControls from "./GradesControls";

export default function Modules() {
  return (
    <div>
      <div id="wd-Grades">
        <GradesControls />
        <br />
        <br />
        <table>
          <tr>
            <td>
              <label id="wd-student-names" className="form-label mb-3">
                <b>Student Names</b>
              </label>
            </td>
            <td>
              <label id="wd-assignment-names" className="form-label mb-3">
                <b>Assignment Names</b>
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Search students</option>
                <option value="1">Andy</option>
                <option value="2">Bob</option>
                <option value="3">Charlie</option>
              </select>
            </td>
            <td>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Search assignment</option>
                <option value="1">A1</option>
                <option value="2">A2</option>
                <option value="3">A3</option>
              </select>
            </td>
          </tr>
        </table>
        <div className="mt-3 mb-3">
          <button id="wd-setting-btn" className="btn btn-lg btn-secondary me-1">
            <LuFilter
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Apply Filters
          </button>
        </div>
        <table className="table table-striped border-gray">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>
                <p>A1 SETUP Out of 100</p>
              </th>
              <th>
                <p>A2 HTML Out of 100</p>
              </th>
              <th>
                <p>A3 CSS Out of 100</p>
              </th>
              <th>
                <p>A4 BOOTSTRAP Out of 100</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>Jane Adams</p>
              </td>
              <td>
                <p>100%</p>
              </td>
              <td>
                <p>96.67%</p>
              </td>
              <td>
                <p>92.18%</p>
              </td>
              <td>
                <p>66.22%</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Christina Allen</p>
              </td>
              <td>
                <p>100%</p>
              </td>
              <td>
                <p>100%</p>
              </td>
              <td>
                <p>100%</p>
              </td>
              <td>
                <p>100%</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Samreen Ansari</p>
              </td>
              <td>
                <p>100%</p>
              </td>
              <td>
                <p>100%</p>
              </td>
              <td>
                <p>100%</p>
              </td>
              <td>
                <p>100%</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Han Bao</p>
              </td>
              <td>
                <p>100%</p>
              </td>
              <td>
                <p>100%</p>
              </td>
              <td>
                <textarea className="form-control" id="table-input"></textarea>
              </td>
              <td>
                <p>98.99%</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Siran Cao</p>
              </td>
              <td>
                <p>100%</p>
              </td>
              <td>
                <p>100%</p>
              </td>
              <td>
                <p>100%</p>
              </td>
              <td>
                <p>100%</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
