import Layout from "components/layout/Layout";
import PostForm from "components/posts/PostForm";
import Detail from "pages/Detail";
import Home from "pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail" element={<Detail />} />
          <Route path="detail/write" element={<PostForm />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
