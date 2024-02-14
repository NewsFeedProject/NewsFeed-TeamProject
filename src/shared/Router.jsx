import Layout from "components/layout/Layout";
import PostForm from "components/posts/PostForm";
import Detail from "pages/Detail";
import Home from "pages/Home";
import Mypage from "pages/Mypage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "components/login/Login";
import SignUp from "components/login/SignUp";
import Interview from "rootPages/Interview";
import WorkInfo from "rootPages/WorkInfo";
import CompanyInfo from "rootPages/CompanyInfo";
import PostDetail from "../components/posts/PostDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "write", element: <PostForm /> },
      { path: "interView", element: <Interview /> },
      { path: "workInfo", element: <WorkInfo /> },
      { path: "companyInfo", element: <CompanyInfo /> },
      { path: "signup", element: <SignUp /> },
      { path: "mypage/:uid", element: <Mypage /> },
      { path: "detail", element: <Detail /> },
      { path: "postdetail/:postId", element: <PostDetail /> }
    ]
  },
  {
    path: "login",
    element: <Login />
  }
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
