export default function AssignmentEditor() {
  return (
    <div className="mb-3">
      <div id="wd-assignments-editor" className="mb-3">
        <label form="wd-name" className="form-label mb-3">
          <b>Assignment Name</b>
        </label>
        <br />
        <input
          className="form-control "
          id="wd-name"
          placeholder="A1 - ENV + HTML"
        />
      </div>
      <textarea
        className="form-control mb=3"
        id="wd-description"
        rows={5}
        cols={45}
      >
        The assignment is available online. Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Link to the Kanbas application Links to all relevant source
        code repositories The Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <table className="mt-3 mb-3">
        <tr>
          <td>
            <div className="col-auto">
              <label form="input-point" className="col-form-label">
                Points
              </label>
            </div>
          </td>
          <td>
            <div className="col-auto">
              <input id="input-point" className="form-control" />
            </div>
            <div className="col-auto"></div>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select className="form-select" aria-label="Default select example">
              <option selected>ASSIGNMENTS</option>
              <option value="1">A1</option>
              <option value="2">A2</option>
              <option value="3">A3</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select className="form-select" aria-label="Default select example">
              <option selected>Percentage</option>
              <option value="1">Percentage</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select className="form-select" aria-label="Default select example">
              <option selected>Online</option>
              <option value="1">Online</option>
            </select>
            <br />
            <br />
            <label>
              <b>Online Entry Options</b>
            </label>
            <br />
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" form="flexCheckDefault">
                Text Entry
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                checked
              />
              <label className="form-check-label" form="flexCheckDefault">
                Website URL
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" form="flexCheckDefault">
                Media Recordings
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                checked
              />
              <label className="form-check-label" form="flexCheckDefault">
                Student Annotation
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" form="flexCheckDefault">
                File Uploads
              </label>
            </div>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label>
            <br />
            <input id="wd-assign-to" value={"everyone"} />
            <br />
            <br />
            <label htmlFor="wd-due-date">Due</label>
            <br />
            <input type="date" id="wd-due-date" value="2024-05-13" />
            <br />
            <br />
            <tr>
              <td>
                <label htmlFor="wd-available-from">Available from</label>
              </td>
              <td>
                <label htmlFor="wd-until">Until</label>
              </td>
            </tr>
            <tr>
              <td>
                <input type="date" id="wd-available-from" value="2024-05-06" />
              </td>
              <td>
                <input type="date" id="wd-until" value="2024-05-20" />
              </td>
            </tr>
          </td>
        </tr>
        <td colSpan={2}>
          <hr />
        </td>
        <tr>
          <td></td>
          <td align="right" valign="top">
            <div className="float-end">
              <button className="btn btn-lg btn-secondary border-gray">
                Cancel
              </button>
              <button className="btn btn-lg btn-danger border-red">Save</button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}
