/* eslint-disable react/prop-types */
import { Link } from "react-router";

const SubNav = ({ path, btn_text }) => {
  return (
    <div className="w-full shadow rounded-md bg-white flex flex-row items-center justify-between py-2 px-6">
      <div className="flex flex-row items-center gap-1.5">
        <Link to="/" className="font-medium text-cyan-900">
          Home
        </Link>
        <span>/</span>
        <span className="text-sm text-gray-800">{path}</span>
      </div>

      <button className="relative inline-flex items-center justify-center bg-cyan-900 rounded-md p-0.5 group cursor-pointer ">
        <span className="bg-white text-cyan-900 font-medium rounded-sm px-3 py-0.5 group-hover:bg-transparent group-hover:text-white transition ease-in-out duration-300 ">
          {btn_text}
        </span>
      </button>
    </div>
  );
};

export default SubNav;
