import Login from "components/layout/Login";
import SignUp from "components/layout/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RouterTest = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterTest;