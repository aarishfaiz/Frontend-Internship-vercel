import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectUser } from "../../features/UserSlice";

const Navbar = ({ loggedIn, setLoggedIn }) => {
  const navigate = useNavigate();

  const loggedOutHandle = () => {
    setLoggedIn(false);
    navigate("/");
  };
  const user = useSelector(selectUser);
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center text-white gap-3">
        <span className="text-lg font-semibold">
          <Link to={"/"}>Aarish</Link>
        </span>
        <Link to="/form">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2">
            Form
          </button>
        </Link>
        <Link to="/internships">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2">
            Show InternShip
          </button>
        </Link>
        <Link to="/jobs">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2">
            Show Jobs
          </button>
        </Link>
      </div>
      <div>
        {loggedIn ? (
          <>
            <div className="flex gap-2 ">
              <Link to={"/profile"}>
                <div className="">
                  <img src={user?.photo} className="h-12 rounded-full" alt="" />
                </div>
              </Link>
              <button
                onClick={() => loggedOutHandle()}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2"
              >
                Log out
              </button>
            </div>
          </>
        ) : (
          <>
           <Link to="/adminlogin">
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mr-2">
                Admin Login
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
