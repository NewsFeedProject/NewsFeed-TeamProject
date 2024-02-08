import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import PostForm from "../components/posts/PostForm";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
        <Route path="detail/write" element={<PostForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
