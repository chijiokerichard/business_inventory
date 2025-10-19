import { Outlet, useLocation } from "react-router-dom";
import Navbar from '../comps/Navbar'
export default function Layout() {
  const pathname = useLocation();
  const hideRoute = ["/login"];
  const Hide = hideRoute.includes(pathname.pathname) 
  return (
    <div>
      {!Hide && <Navbar />}
      <Outlet />
    </div>
  );
}
