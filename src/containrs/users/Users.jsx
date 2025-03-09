import { useEffect, useState } from "react";
import { SubNav, UseModel, UserCard } from "../../components";
import axios from "axios";
import { path } from "../../utls/Variables";

const Users = () => {
  const [openModel, setOpenModel] = useState(false);

  const [users, setUsers] = useState([]);

  const ToggleModel = () => {
    setOpenModel(!openModel);
  };

  const GetData = async () => {
    // try {
    //   const response = await axios.get(`${path}user`);
    //   setUsers(response.data.data);
    // } catch (error) {
    //   console.log("====================================");
    //   console.log(error);
    //   console.log("====================================");
    // }

    await axios
      .get(`${path}user`)
      .then((res) => setUsers(res.data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    // console.log("jibt data");
    GetData();
  }, []);

  return (
    <div className="">
      <SubNav path="Users" btn_text="New User" ToggleModel={ToggleModel} />
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-4">
        {users.map((items, index) => (
          <UserCard
            key={index}
            data={items}
            GetData={GetData}
          />
        ))}
      </div>

      {/* model :::: */}
      <UseModel
        openModel={openModel}
        ToggleModel={ToggleModel}
        GetData={GetData}
        data={null}
      />
    </div>
  );
};

export default Users;
