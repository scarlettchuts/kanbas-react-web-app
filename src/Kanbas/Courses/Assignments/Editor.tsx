export default function AssignmentEditor() {
  return (
    <div id="wd-assignment-editor">
      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input type="text" className="form-control" id="wd-name" value={"A1"} />
      </div>

      {/* Textarea */}
      <div className="mb-3">
        <textarea
          className="form-control"
          id="wd-description"
          rows={10}
          value={
            "The assignment is available online\n Submit a link to the landing page of your Web application running on Netlify\n\n The landing page should include the following:\n • Your full name and section\n • Links to each of the lab assignments\n • Link to the Kanbas application\n • Links to all relevant source code repositories\n The Kanbas application should include a link to navigate back to the landing page."
          }
        />
      </div>

      {/* Points */}
      <div className="mb-3 d-flex gap-2 align-items-center justify-content-end">
        <label htmlFor="wd-points" className="form-label">
          Points
        </label>
        <input
          type="text"
          className="form-control w-75"
          id="wd-points"
          value={100}
        />
      </div>

      {/* Assignment Group */}
      <div className="mb-3 d-flex gap-2 align-items-center justify-content-end">
        <label htmlFor="wd-group" className="form-label">
          Assignment Group
        </label>
        <select
          id="wd-group"
          className="form-select w-75"
          aria-label="Default select example 1"
        >
          <option selected>ASSIGNMENTS</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      {/* Display Grade as */}
      <div className="mb-3 d-flex gap-2 align-items-center justify-content-end">
        <label htmlFor="wd-display-grade-as" className="form-label">
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          className="form-select w-75"
          aria-label="Default select example 2"
        >
          <option selected>Percentage</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      {/* Submission Type */}
      <div className="mb-3 gap-2 d-flex justify-content-end">
        <label htmlFor="wd-submission-type" className="form-label">
          Submission Type
        </label>
        <div className="border-custom w-75 p-2">
          <select
            id="wd-submission-type"
            className="form-select mb-4"
            aria-label="Default select example 3"
          >
            <option selected>Online</option>
            <option value="1">In-Person</option>
          </select>

          <div>
            <p className="fw-bold">Online Entry Options</p>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="value1"
                id="wd-text-entry"
              />
              <label className="form-check-label" htmlFor="wd-text-entry">
                Text Entry
              </label>
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="value2"
                id="wd-website-url"
                checked
              />
              <label className="form-check-label" htmlFor="wd-website-url">
                Website URL
              </label>
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="value3"
                id="wd-media-recordings"
              />
              <label className="form-check-label" htmlFor="wd-media-recordings">
                Media Recordings
              </label>
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="value4"
                id="wd-student-annotation"
              />
              <label
                className="form-check-label"
                htmlFor="wd-student-annotation"
              >
                Student Annotation
              </label>
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="value5"
                id="wd-file-upload"
              />
              <label className="form-check-label" htmlFor="wd-file-upload">
                File Uploads
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Assign */}
      <div className="mb-3 gap-2 d-flex justify-content-end">
        <p>Assign</p>
        <div className="border-custom w-75 p-2">
          <div className="mb-3">
            <label htmlFor="wd-assign-to" className="form-label fw-bold">
              Assign to
            </label>
            <input
              type="text"
              className="form-control"
              id="wd-assign-to"
              value={"Everyone...x"}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="wd-due-date" className="form-label fw-bold">
              Due
            </label>
            <input
              type="datetime-local"
              className="form-control"
              id="wd-due-date"
              value="2018-06-12T19:30"
            />
          </div>

          <div className="mb-3 d-flex gap-3">
            <div className="flex-fill">
              <label htmlFor="wd-available-from" className="form-label fw-bold">
                Available from
              </label>
              <input
                type="datetime-local"
                className="form-control"
                id="wd-available-from"
                value="2018-07-15T06:10"
              />
            </div>

            <div className="flex-fill">
              <label
                htmlFor="wd-available-until"
                className="form-label fw-bold"
              >
                Until
              </label>
              <input
                type="datetime-local"
                className="form-control"
                id="wd-available-until"
              />
            </div>
          </div>
        </div>
      </div>

      <hr className="my-3" />

      {/* Cancel and Save button */}
      <div className="d-flex justify-content-end mb-3">
        <button type="button" className="btn btn-secondary">
          Cancel
        </button>

        <button type="button" className="btn btn-danger">
          Save
        </button>
      </div>
    </div>
  );
}

{
  /* <textarea
        className="form-control mb=3"
        id="wd-description"
        rows={5}
        // cols={45}
      >
        <div>
          <p>
            The assignment is <span className="red-text">available online</span>
          </p>

          <p>
            Submit a link to the landing page of your Web application running on
            Netlify.{" "}
          </p>
          <ul>The landing page should include the following:</ul>
          <li>Your full name and section</li>
          <li>Links to each of the lab assignments</li>
          <li>Link to the Kanbas application</li>
          <li>Links to all relevant source code repositories</li>
          <p>
            The Kanbas application should include a link to navigate back to the
            landing page.
          </p>
        </div>
      </textarea> */
}
