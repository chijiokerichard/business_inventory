import { Outlet, useLocation } from "react-router-dom";
import TopNav from "./components/TopNav";
import LeftNav from "./components/LeftNav";
import Wrapper from "../../component/atom/Wrapper";
export default function AdminLayout() {
  const pathname = useLocation();
  const hideRoute = ["/login"];
  const Hide = hideRoute.includes(pathname.pathname) 
  return (
    <div>
      {!Hide && 
      <div>
        <TopNav />
        <LeftNav />
      </div>
      }
      <Outlet />
    </div>
  );
}
