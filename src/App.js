import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/UserLoginAndSignup/Login";
import Signup from "./Components/UserLoginAndSignup/Signup";
import Form from "./Components/Form/Form";
import ShowInternships from "./Components/ShowInternships/ShowInternships";
import ShowJobs from "./Components/ShowJobs/ShowJobs";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/UserSlice";
import { auth } from "./Firebase/Firebase";
import { AuthCredential } from "firebase/auth";
import Profile from "./Components/Profile/Profile";
import UserApplications from "./Components/UserApplications/UserApplications";
import UserApplicationDetails from "./Components/UserApplications/UserApplicationDetails";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminPanel from "./Components/Admin/AdminPanel";
import AllApplications from "./Components/Admin/AllApplications";
import AdminApplicationDetails from "./Components/Admin/AdminApplicationDetail";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (AuthCredential) {
        dispatch(
          login({
            uid: authuser.uid,
            photo: authuser.photoURL,
            email: authuser.email,
            name: authuser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div>
      <>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route
            path="/signup"
            element={<Signup setLoggedIn={setLoggedIn} />}
          />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/allapplications" element={<AllApplications />} />
          <Route path="/adminapplicationdetails" element={<AdminApplicationDetails />} />
          <Route path="/form" element={<Form />} />
          <Route path="/internships" element={<ShowInternships />} />
          <Route path="/jobs" element={<ShowJobs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/application" element={<UserApplications />} />
          <Route
            path="/applicationdetails"
            element={<UserApplicationDetails />}
          />
        </Routes>
      </>
    </div>
  );
};

export default App;
