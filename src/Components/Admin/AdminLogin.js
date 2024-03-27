import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const AdminLogin = async (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      alert("Fill The blanks");
    } else {
      const bodyjosn = {
        username: username,
        password: password,
      };
      axios
        .post(
          //"http://localhost:5000/api/admin/adminlogin"
          "https://intern-backend-fop1.onrender.com/api/admin/adminlogin"
          , bodyjosn)
        .then((res) => {
         
          alert("Success Admin Logged In");
          navigate("/adminpanel");
           
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-medium mb-2"
          >
            username
          </label>
          <input
            type="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <button
            type="submit"
            onClick={AdminLogin}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
