export default function Dashboard() {
  return (
    <div>
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.webp" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home"
            >
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack Software Developer
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.webp" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home"
            >
              CS1222 Discrete Math
            </a>
            <p className="wd-dashboard-course-title">Discrete Structure</p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.webp" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home"
            >
              CS1333 Java
            </a>
            <p className="wd-dashboard-course-title">
              Oriented-objected Design
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.webp" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home"
            >
              CS1444 C program
            </a>
            <p className="wd-dashboard-course-title">
              Data Structure, Algo, Computer Systems
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.webp" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home"
            >
              CS1555 Python
            </a>
            <p className="wd-dashboard-course-title">Bridge</p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.webp" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home"
            >
              CS1666 C, C++
            </a>
            <p className="wd-dashboard-course-title">Computer Systems</p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.webp" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home"
            >
              CS1777 Data
            </a>
            <p className="wd-dashboard-course-title">Database Management</p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>
      </div>
    </div>
  );
}
