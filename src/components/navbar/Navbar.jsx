import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="w-full flex flex-row items-center py-2 bg-white rounded-md shadow">
      <div className="w-1/5 flex items-center justify-center ">
        <span>LOGO</span>
      </div>
      <div className="w-3/5 flex flex-row items-center gap-6 font-medium ">
        <Link to="/" className="text-gray-900 hover:text-red-500 transition ease-in-out duration-500">home</Link>
        <Link to="/dash" className="text-gray-900 hover:text-red-500 transition ease-in-out duration-500">dashboard</Link>
        <Link to="/users" className="text-gray-900 hover:text-red-500 transition ease-in-out duration-500">users</Link>
      </div>
      <div className="w-1/5 flex items-center justify-center">
        <button className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer ">
          <span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-transparent ">
            Purple to blue
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
