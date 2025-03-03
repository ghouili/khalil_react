import { useState } from "react";
import { SubNav, UseModel, UserCard } from "../../components";

const Users = () => {
  
  const [openModel, setOpenModel] = useState(false);

  const ToggleModel = () => { setOpenModel(!openModel)}

  return (
    <div className="">
      <SubNav path="Users" btn_text="New User" ToggleModel={ToggleModel} />
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-4">
        {[0, 1, 2, 3, 4, 5, 6, 8, 9, 10].map(({ item, index }) => (
          <UserCard key={index} data={item} ToggleModel={ToggleModel} />
        ))}
      </div>

      {/* model :::: */}
      <UseModel openModel={openModel} ToggleModel={ToggleModel} />
    </div>
  );
};

export default Users;
