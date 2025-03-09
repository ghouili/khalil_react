/* eslint-disable react/prop-types */
import { Mail, MapPin } from "lucide-react";
import { path } from "../../utls/Variables";
import { useState } from "react";
import UseModel from "../models/UseModel";
import Swal from "sweetalert2";
import axios from "axios";

const UserCard = ({ data, GetData }) => {
  const { email, name, age, pic } = data;
  const [openModel, setOpenModel] = useState(false);

  const toggleModel = () => {
    setOpenModel(!openModel);
  };
  // console.log(data);

  const deleteData = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios
          .delete(`${path}user/${data._id}`)
          .then((res) => {
            if (res.data?.sucess) {
              Swal.fire({
                title: "Deleted!",
                text: res.data?.message,
                icon: "success",
              });
              GetData();
            } else {
              Swal.fire({
                title: "Error!",
                text: "somethins with server",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              title: "Good job!",
              text: error.message,
              icon: "error",
            });
            // console.log(error);
          });
      }
    });
  };
  return (
    <div className="rounded-md bg-white shadow px-4 py-2">
      <div className="w-full h-24 flex justify-center items-end">
        <img
          src={
            pic
              ? `${path}uploads/images/${pic}`
              : "https://i.pinimg.com/474x/0a/0f/49/0a0f49821fd27be2068bf948bf89030c.jpg"
          }
          className="rounded-full w-16 h-16 object-cover"
          alt=""
        />
      </div>
      <div className="flex flex-row gap-2 justify-center">
        <h1>{name}</h1>
        {/* <h1>Oueslati</h1> */}
      </div>
      <div className="w-full border-b border-gray-300 my-2" />
      <div className="flex flex-col gap-1">
        <div className="flex flex-row items-center gap-2">
          <Mail size={18} className="text-cyan-900" />
          <h3 className="text-gray-900 text-sm">{email}</h3>
        </div>
        <div className="flex flex-row items-center gap-2">
          <MapPin size={19} className="text-cyan-900" />
          <h3 className="text-gray-900 text-sm">{age}</h3>
        </div>
      </div>
      <div className="w-full border-b border-gray-300 my-2" />
      <div className="flex flex-row items-center justify-evenly">
        <button
          onClick={deleteData}
          className="relative inline-flex items-center justify-center bg-red-800 rounded-md p-0.5 group cursor-pointer "
        >
          <span className="bg-white text-red-800 font-medium rounded-sm px-3 py-0.5 group-hover:bg-transparent group-hover:text-white transition ease-in-out duration-300 ">
            Delete
          </span>
        </button>
        <button
          onClick={toggleModel}
          className="relative inline-flex items-center justify-center bg-cyan-900 rounded-md p-0.5 group cursor-pointer "
        >
          <span className="bg-white text-cyan-900 font-medium rounded-sm px-3 py-0.5 group-hover:bg-transparent group-hover:text-white transition ease-in-out duration-300 ">
            Update
          </span>
        </button>
      </div>
      <UseModel
        openModel={openModel}
        ToggleModel={toggleModel}
        GetData={GetData}
        data={data}
      />
    </div>
  );
};

export default UserCard;
