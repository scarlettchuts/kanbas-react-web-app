import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const [profile, setProfile] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    role: "", // default to USER or any role
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const account = await client.profile();
        setProfile(account);
      } catch (err: any) {
        navigate("/Kanbas/Account/Signin");
      }
    };

    fetchProfile();
  }, [navigate]);

  return (
    <div>
      <h1>Profile</h1>
      {profile && (
        <div>
          <h5 className="mt-3">username</h5>
          <input
            value={profile.username}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />
          <h5 className="mt-3">password</h5>
          <input
            value={profile.password}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />
          <h5 className="mt-3">first name</h5>
          <input
            value={profile.firstName ? profile.firstName : ""}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <h5 className="mt-3">last name</h5>
          <input
            value={profile.lastName ? profile.lastName : ""}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <h5 className="mt-3">date of birth</h5>
          <input
            value={profile.dob ? profile.dob : ""}
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
            type="date"
          />
          <h5 className="mt-3">email</h5>
          <input
            value={profile.email ? profile.email : ""}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <h5 className="mt-3">role</h5>
          <select
            value={profile.role ? profile.role : ""}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            {/* <option value="USER">User</option> */}
            {/* <option value="ADMIN">Admin</option> */}
            <option value="STUDENT">Student</option>
            <option value="FACULTY">Faculty</option>
          </select>
          <button onClick={signout} className="btn btn-danger w-100 mt-3">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
