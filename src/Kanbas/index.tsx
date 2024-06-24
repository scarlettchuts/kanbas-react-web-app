import { Navigate, Route, Routes } from "react-router";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./store";
import Account from "./Account";
import ProtectedRoute from "./ProtectedRoute";
import Session from "./Account/Session";

export default function Kanbas() {
  return (
    <Provider store={store}>
      <Session>
        <div id="wd-kanbas" className="">
          <div className="">
            <div className="d-none d-md-block bg-black sticky-side-navigation">
              <KanbasNavigation />
            </div>
            <div className="custom-margins">
              <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="/Account/*" element={<Account />} />
                <Route
                  path="Dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="Courses/:cid/*"
                  element={
                    <ProtectedRoute>
                      <Courses />
                    </ProtectedRoute>
                  }
                />
                <Route path="Calendar" element={<h1>Calendar</h1>} />
                <Route path="Inbox" element={<h1>Inbox</h1>} />
              </Routes>
            </div>
          </div>
        </div>
      </Session>
    </Provider>
  );
}
