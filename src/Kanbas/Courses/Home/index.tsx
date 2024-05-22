import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div id="wd-home" className="d-flex gap-5">
      <div className="flex-fill">
        <Modules />
      </div>
      <div className="d-none d-xl-block">
        <CourseStatus />
      </div>
    </div>
  );
}
