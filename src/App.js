import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import SideBar from "./components/Sidebar/SideBar";
import Chart from "./components/Charts/Chart";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import Setting from "./components/Setting/Setting";
import Tables from "./components/Tables/Tables";
import States from "./components/States/States";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Products from "./components/Products/Products";
import { useSelector } from "react-redux";

function App() {

  const mobileScreen = useSelector((state) => state.dashboard.mobileView);
  // console.log("🚀 ~ file: App.js:23 ~ App ~ mobileScreen:", mobileScreen)
  
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, [token]);

  
  return (
    <div className="App">
    
      
      <BrowserRouter>
          <SideBar />
          <main class={mobileScreen? "content": "mobile-screen-version"}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/product" element={<Products />} />
              <Route path="/chart" element={<Chart />} />
              <Route path="/card" element={<Card />} />
              <Route path="/form" element={<Form />} />
              <Route path="/settings" element={<Setting />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/states" element={<States />} />
              <Route path="/sign in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/resetpassword" element={<ResetPassword />} />
            </Routes>
          </main>
        </BrowserRouter> :   
  
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
