/* eslint-disable react/prop-types */
import { Mail, MapPin } from "lucide-react";

const UserCard = ({ ToggleModel }) => {
  return (
    <div className="rounded-md bg-white shadow px-4 py-2">
      <div className="w-full h-24 flex justify-center items-end">
        <img
          src="https://i.pinimg.com/474x/0a/0f/49/0a0f49821fd27be2068bf948bf89030c.jpg"
          className="rounded-full w-16 h-16 object-cover"
          alt=""
        />
      </div>
      <div className="flex flex-row gap-2 justify-center">
        <h1>Khalil</h1>
        <h1>Oueslati</h1>
      </div>
      <div className="w-full border-b border-gray-300 my-2" />
      <div className="flex flex-col gap-1">
        <div className="flex flex-row items-center gap-2">
          <Mail size={18} className="text-cyan-900" />
          <h3 className="text-gray-900 text-sm">khali@gmail.com</h3>
        </div>
        <div className="flex flex-row items-center gap-2">
          <MapPin size={19} className="text-cyan-900" />
          <h3 className="text-gray-900 text-sm">Jendouba, Tunisia</h3>
        </div>
      </div>
      <div className="w-full border-b border-gray-300 my-2" />
      <div className="flex flex-row items-center justify-evenly">
        <button className="relative inline-flex items-center justify-center bg-red-800 rounded-md p-0.5 group cursor-pointer ">
          <span className="bg-white text-red-800 font-medium rounded-sm px-3 py-0.5 group-hover:bg-transparent group-hover:text-white transition ease-in-out duration-300 ">
            Delete
          </span>
        </button>
        <button
          onClick={ToggleModel}
          className="relative inline-flex items-center justify-center bg-cyan-900 rounded-md p-0.5 group cursor-pointer "
        >
          <span className="bg-white text-cyan-900 font-medium rounded-sm px-3 py-0.5 group-hover:bg-transparent group-hover:text-white transition ease-in-out duration-300 ">
            Update
          </span>
        </button>
      </div>
    </div>
  );
};

export default UserCard;
