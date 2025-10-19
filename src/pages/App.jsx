import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
import Navbar from "../component/Navbar";
import { useState} from "react";
import Login from "./accounts/Login";
import { DataWrapper } from "../../context";
import CreateAccount from "./accounts/CreateAccount";
export default function App() {
 
  // const [isLogin,setIsLogin] = useState(false)
  const [userInfo, setUserInfo] = useState();
  console.log(userInfo)
  const arr = [1,2,3]
  arr.pop()
  console.log(arr)
  return (
    <DataWrapper.Provider value={{userInfo,setUserInfo}}>
      <BrowserRouter>
      {userInfo?.user?
      <div>
    <Navbar />
      <div>
        <Routes>
          {/* <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" /> */}
          <Route element={<CreateAccount />} path="/signup" />
          
        </Routes>

      </div>
      </div>
      :<Login />
      
    }
    </BrowserRouter>
    </DataWrapper.Provider>
  );
}
