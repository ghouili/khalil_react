import { Route, Routes } from "react-router";
import { Navbar, Sidebar } from "../components";
import { Dashboard, Home, Users } from "../containrs";

const MainRoute = () => {
  return (
    <div className="w-full h-screen flex flex-row p-4">
      <div className="w-1/5 h-full pl-8 pr-6">
        <Sidebar />
      </div>
      <div className="w-4/5 flex flex-col gap-2">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="dash" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainRoute;
