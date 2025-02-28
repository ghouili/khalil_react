import { ChevronDown } from "lucide-react";
import { MdOutlineMenuOpen } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="h-full relative rounded-md shadow bg-white">
        <div className="absolute rounded-full h-10 w-10 -right-5 top-3 bg-[#F0F4F7] p-1 ">
            <div className="w-full h-full rounded-full  bg-white cursor-pointer text-gray-700 flex items-center justify-center">
                <MdOutlineMenuOpen size="19"  />
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
        <div className="flex flex-row items-center gap-1  ">
          <h1 className="text-base font-medium text-gray-700">
            khalil oueslati
          </h1>
          
          <ChevronDown size="18" />
        </div>
        <h4 className="text-sm font-medium text-gray-500">role</h4>
      </div>
    </div>
  );
};

export default Sidebar;
