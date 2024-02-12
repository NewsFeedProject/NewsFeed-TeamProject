import Layout from "components/layout/Layout";
import PostDetail from "components/posts/PostDetail";
import PostForm from "components/posts/PostForm";
import Detail from "pages/Detail";
import Home from "pages/Home";
import SearchResult from "../pages/SearchResult";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category/:postCategory" element={<Detail />} />
          <Route path="search/:searchKeyword" element={<SearchResult />} />
          <Route path="detail/write" element={<PostForm />} />
          <Route path="category/:postCategory/:postId" element={<PostDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
