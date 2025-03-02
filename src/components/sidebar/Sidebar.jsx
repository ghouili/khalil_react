import {
  ChartPie,
  ChevronDown,
  ChevronRight,
  House,
  Users,
} from "lucide-react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { Link, useLocation } from "react-router";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="h-full relative rounded-md shadow bg-white">
      <div className="absolute rounded-full h-10 w-10 -right-5 top-3 bg-[#F0F4F7] p-1 ">
        <div className="w-full h-full rounded-full  bg-white cursor-pointer text-gray-700 flex items-center justify-center">
          <MdOutlineMenuOpen size="19" />
        </div>
      </div>
      <div className="h-20 flex justify-center items-center ">
        <span>LOGO</span>
      </div>
      <div className="pb-10 flex flex-col justify-center items-center gap-2">
        <img
          src="https://i.pinimg.com/474x/0a/0f/49/0a0f49821fd27be2068bf948bf89030c.jpg"
          className="rounded-full w-16 h-16 object-cover"
          alt=""
        />
        <div className="flex flex-row items-center gap-1 cursor-pointer ">
          <h1 className="text-base font-medium text-gray-700">
            khalil oueslati
          </h1>

          <ChevronDown size="18" />
        </div>
        <h4 className="text-sm font-medium text-gray-500 -mt-2.5">role</h4>
      </div>

      <div className="flex flex-col gap-2.5 px-5 text-sm font-medium  ">
        <Link
          to="/"
          className={` flex flex-row gap-1.5 items-center justify-between rounded-sm py-1.5 px-3 ${
            location.pathname === "/"
              ? "bg-cyan-900 text-white"
              : "border border-cyan-900 text-cyan-900"
          } transition ease-in-out duration-300  `}
        >
          <div className="flex flex-row gap-1.5 items-center">
            <House size={20} />
            <p>Home</p>
          </div>
          <ChevronRight size={17} />
        </Link>

        <Link
          to="/dash"
          className={` flex flex-row gap-1.5 items-center justify-between rounded-sm py-1.5 px-3 ${
            location.pathname === "/dash"
              ? "bg-cyan-900 text-white"
              : "border border-cyan-900 text-cyan-900"
          } transition ease-in-out duration-300  `}
        >
          <div className="flex flex-row gap-1.5 items-center">
            <ChartPie size={20} />
            <p>Dashboard</p>
          </div>

          <ChevronRight size={17} />
        </Link>

        <Link
          to="/users"
          className={` flex flex-row gap-1.5 items-center justify-between rounded-sm py-1.5 px-3 ${
            location.pathname === "/users"
              ? "bg-cyan-900 text-white"
              : "border border-cyan-900 text-cyan-900"
          } transition ease-in-out duration-300  `}
        >
          <div className="flex flex-row gap-1.5 items-center">
            <Users size={20} />
            <p>Users</p>
          </div>

          <ChevronRight size={17} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
