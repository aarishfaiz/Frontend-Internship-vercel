import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
const AdminPanel = () => {
  return (
    <div>
      <Link to={"/allapplications"}>
        <div className="flex justify-center mt-12 items-center gap-4  hover:cursor-pointer">
          <FaLocationArrow />
          <p className="text-xl text-blue-500 hover:underline">
            See All Applications
          </p>
        </div>
      </Link>
    </div>
  );
};

export default AdminPanel;
