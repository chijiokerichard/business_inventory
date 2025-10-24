import { Outlet, useLocation } from "react-router-dom";
import Navbar from '../comps/Navbar'
import Sidebar from "../comps/Sidebar";
export default function Layout() {
  const pathname = useLocation();
  const hideRoute = ["/login"];
  const Hide = hideRoute.includes(pathname.pathname) 
  return (
    <div>
      {!Hide && 
      <div>
        <Navbar />
        <Sidebar />
      </div>
      }
      <Outlet />
    </div>
  );
}
