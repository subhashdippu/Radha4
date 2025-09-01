import Sliders from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Sliders />
      <Outlet />
    </div>
  );
}

export default Home;
