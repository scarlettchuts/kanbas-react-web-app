import { Navigate, Route, Routes } from "react-router";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";

export default function Kanbas() {
  return (
    <div id="wd-kanbas" className="h-100">
      <div className="d-flex h-100 gap-5">
        <div className="d-none d-md-block bg-black">
          <KanbasNavigation />
        </div>
        <div className="flex-fill me-3">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/:id/*" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
