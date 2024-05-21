export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {/* Course 1*/}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.webp" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS1234 React JS
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack Software Developer
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary">
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
          </div>
          {/* Course 2*/}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.webp" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS1222 Discrete Math
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Discrete Structure
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary">
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
          </div>
          {/* Course 3*/}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.webp" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS1333 Java
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Oriented-objected Design
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary">
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
          </div>
          {/* Course 4*/}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.webp" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS1444 C program
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Data Structure, Algo, Computer Systems
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary">
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
          </div>
          {/* Course 5*/}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.webp" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS1555 Python
                </a>
                <p className="wd-dashboard-course-title card-text">Bridge</p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary">
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
          </div>
          {/* Course 6*/}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.webp" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS1666 C, C++
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Computer Systems
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary">
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
          </div>
          {/* Course 7*/}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.webp" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS1777 Data
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Database Management
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary">
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
