
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <main class="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/card" element={<Card />} />
            <Route path="/form" element={<Form />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/states" element={<States />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
