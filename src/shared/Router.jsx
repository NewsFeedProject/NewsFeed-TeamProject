import Layout from "components/layout/Layout";
import PostForm from "components/posts/PostForm";
import Detail from "pages/Detail";
import Home from "pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "components/layout/Login";
import SignUp from "components/layout/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail" element={<Detail />} />
          <Route path="detail/write" element={<PostForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
