import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/UserSlice";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = useSelector(selectUser);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-4">
        <img
          className="h-18 rounded-full border-s shadow-sm shadow-black"
          src={user?.photo}
          alt=""
          srcset=""
        />
      </div>
      <div className="font-bold text-xl">{user?.name}</div>
      <div>
        <Link
          to={"/application"}
          className="font-semibold text-xl text-blue-200"
        >
          See Applications
        </Link>
      </div>
    </div>
  );
};

export default Profile;
